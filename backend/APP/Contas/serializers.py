from rest_framework import serializers

from .models import Conta, Cartao, Movimentacao, Extrato, AvaliacaoCredito

class CartaoSerializer(serializers.ModelSerializer):
    
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
            'ativo'
        )


class MovimentacaoSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Movimentacao
        fields = (
            'id',
            'conta_origem',
            'conta_destino',
            'valor',
            'tipo_movimentacao',
            'criacao',
            'ativo',
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
            'permissao'
        )

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