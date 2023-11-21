from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response

from datetime import datetime, timedelta, timezone
import pytz

from rest_framework import status

from .models import (
    Conta, 
    Cartao, 
    Movimentacao, 
    Extrato, 
    AvaliacaoCredito,
    Emprestimo
                     )
from .serializers import (
    ContaSerializer, 
    CartaoSerializer, 
    MovimentacaoSerializer, 
    ExtratoSerializer, 
    AvaliacaoCreditoSerializer,
    EmprestimoSerializer
                          )

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
    

class AvaliacaoCreditoViewSet(viewsets.ModelViewSet):
    queryset = AvaliacaoCredito.objects.all()
    serializer_class = AvaliacaoCreditoSerializer
    
    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        try:
            avaliacao = serializer.validated_data
            conta = avaliacao['conta']
            cartao = conta.cartao
            salario = conta.cliente.salario
            
            ultima_avaliacao = AvaliacaoCredito.objects.filter(conta=conta).order_by('data_solicitacao').first()

            if not ultima_avaliacao or self.pode_realizar_avaliacao(ultima_avaliacao.data_solicitacao):
                self.avaliando_credito(salario, conta, cartao)
            else:
                raise Exception("Avaliação de crédito permitida apenas a cada 30 minutos.")
            
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)
    
    def avaliando_credito(self, salario, conta, cartao):
        if salario >= 1000.00:
            
            limite = 0.5 * float(salario)
            cartao.limite = limite
            cartao.save()
            
            AvaliacaoCredito.objects.create(conta=conta, limite=limite, permissao=True)

        else:
            cartao.limite = 0.00
            cartao.save()
            AvaliacaoCredito.objects.create(conta=conta, limite=0.00, permissao=False)
    
    def pode_realizar_avaliacao(self, ultima_avaliacao):

        if ultima_avaliacao:
        
            avaliacao_datetime = ultima_avaliacao.replace(tzinfo=pytz.timezone("America/Sao_Paulo"))

            tempo_passado = datetime.now(pytz.timezone("America/Sao_Paulo")) - avaliacao_datetime
            return tempo_passado >= timedelta(minutes=0)


class EmprestimoViewSet(viewsets.ModelViewSet):
    queryset = Emprestimo.objects.all()
    serializer_class = EmprestimoSerializer
    
    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        try:
            emprestimo = serializer.validated_data
            
            conta = emprestimo['conta']
            valor_solicitado = emprestimo['valor_solicitado']
            parcelas = emprestimo['parcelas']
            
            ultimo_emprestimo = AvaliacaoCredito.objects.filter(conta=conta).order_by('criacao').first()
            
            self.emprestimo_calculando(valor_solicitado, conta, parcelas)

            # if not ultima_avaliacao or self.pode_realizar_avaliacao(ultima_avaliacao.data_solicitacao):
            #     
            # else:
            #     raise Exception("Avaliação de crédito permitida apenas a cada 30 minutos.")
            
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)
    
    def emprestimo_calculando(self, valor_solicitado, conta, parcelas):
        
        taxa_juros = 0.075
        
        for i in range(1, parcelas+1):
            
            juros = float(valor_solicitado) * taxa_juros * i
            
            total_pagar = float(valor_solicitado) + juros
            
        
        pag_mensal = total_pagar / parcelas
        
        conta.saldo += valor_solicitado
        
        conta.save()
        
        Emprestimo.objects.create(conta=conta, valor_solicitado=valor_solicitado, taxa_juros=taxa_juros, pag_mensal=pag_mensal, total_pagar=total_pagar, parcelas=parcelas)
        

        # else:
        #     cartao.limite = 0.00
        #     cartao.save()
        #     AvaliacaoCredito.objects.create(conta=conta, limite=0.00, permissao=False)
    
    def pode_realizar_avaliacao(self, ultima_avaliacao):

        if ultima_avaliacao:
        
            avaliacao_datetime = ultima_avaliacao.replace(tzinfo=pytz.timezone("America/Sao_Paulo"))

            tempo_passado = datetime.now(pytz.timezone("America/Sao_Paulo")) - avaliacao_datetime
            return tempo_passado >= timedelta(minutes=0)