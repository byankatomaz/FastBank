from rest_framework import serializers

from .models import Conta, Cartao, Movimentacao, Extrato, AvaliacaoCredito, Emprestimo, ExtratoCartao


class MovimentacaoSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Movimentacao
        fields = ('__all__')
        
        
class ExtratoCartaoSerializer(serializers.ModelSerializer):
    
    movimentacaoCartao = MovimentacaoSerializer(many=True, read_only=True)

    class Meta:
        model = ExtratoCartao
        fields = (
            'id', 
            'cartao', 
            'movimentacaoCartao'
        )
        
class CartaoSerializer(serializers.ModelSerializer):
    
    extratoCartao = ExtratoCartaoSerializer(many=True, read_only=True)
    
    class Meta:
        model = Cartao
        fields = (
            'id',
            'conta',
            'numero',
            'tipo',
            'cvv',
            'limite',
            'vencimento',
            'criacao',
            'ativo',
            'extratoCartao'
        )


class ExtratoSerializer(serializers.ModelSerializer):
    
    movimentacoes = MovimentacaoSerializer(many=True, read_only=True)

    class Meta:
        model = Extrato
        fields = (
            'id', 
            'conta', 
            'movimentacoes'
        )
        

class AvaliacaoCreditoSerializer(serializers.ModelSerializer):

    class Meta:
        model = AvaliacaoCredito
        fields = (
            'id', 
            'conta',
            'limite',
            'permissao',
            'criacao'
        )

class EmprestimoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Emprestimo
        fields = ('__all__')

class ContaSerializer(serializers.ModelSerializer):
    
    cartao = CartaoSerializer(read_only=True)
    extrato = ExtratoSerializer(many=True, read_only=True)
    
    class Meta:
        model = Conta
        fields = (
            'id',
            'cliente',
            'saldo',
            'agencia',
            'numero',
            'criacao',
            'ativo',
            'cartao',
            'extrato'
        )