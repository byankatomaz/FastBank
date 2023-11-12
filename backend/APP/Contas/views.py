from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response

from rest_framework import status

from .models import Conta, Cartao, Movimentacao, Extrato
from .serializers import ContaSerializer, CartaoSerializer, MovimentacaoSerializer, ExtratoSerializer

class ContaViewSet(viewsets.ModelViewSet):
    queryset = Conta.objects.all()
    serializer_class = ContaSerializer
    
    @action(detail=True, methods=['get'])
    def cartao(self, request, pk=None):
        conta = self.get_object()
        serializer = CartaoSerializer(conta.cartao.all(), many=True)
        return Response(serializer.data)
    

class CartaoViewSet(viewsets.ModelViewSet):
    queryset = Cartao.objects.all()
    serializer_class = CartaoSerializer
    

class MovimentacaoViewSet(viewsets.ModelViewSet):
    queryset = Movimentacao.objects.all()
    serializer_class = MovimentacaoSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        try:
            movimentacao = serializer.save()
            conta_origem = movimentacao.conta_origem
            conta_destino = movimentacao.conta_destino
            saldo_conta = conta_origem.saldo

            self.realizar_movimentacao(conta_origem, conta_destino, saldo_conta, movimentacao.tipo_movimentacao, movimentacao.valor)

            return Response(serializer.data, status=status.HTTP_201_CREATED)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)


    def realizar_movimentacao(self, conta_origem, conta_destino, saldo_conta, tipo_movimentacao, valor):
        match tipo_movimentacao:
            case "DEP":
                self.realizar_deposito(conta_origem, valor)
            case "TED":
                self.realizar_transferencia(conta_origem, conta_destino, valor, saldo_conta)

    def realizar_deposito(self, conta_origem, valor):
        conta_origem.saldo += valor
        conta_origem.save()
        
    def realizar_transferencia(self, conta_origem, conta_destino, valor, saldo_conta):
        
        if saldo_conta >= valor:
        
            conta_origem.saldo -= valor
            conta_destino.saldo += valor
            
            conta_origem.save()
            conta_destino.save()
        
        else:
            raise Exception("Saldo insuficiente")        
        

class ExtratoViewSet(viewsets.ModelViewSet):
    queryset = Extrato.objects.all()
    serializer_class = ExtratoSerializer