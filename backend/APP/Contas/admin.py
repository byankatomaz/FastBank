from django.contrib import admin
from .models import Conta, Cartao, Movimentacao, Emprestimo, AvaliacaoCredito, Extrato


@admin.register(Conta)
class ContaAdmin(admin.ModelAdmin):
    list_display = ('cliente', 'saldo', 'agencia', 'numero', 'criacao', 'ativo')
    

@admin.register(Cartao)
class CartaoAdmin(admin.ModelAdmin):
    list_display = ('conta', 'numero', 'tipo', 'vencimento', 'criacao', 'ativo')


@admin.register(Movimentacao)
class MovimentacaoAdmin(admin.ModelAdmin):
    list_display = ('conta_origem', 'conta_destino', 'valor', 'tipo_movimentacao', 'criacao', 'ativo')

@admin.register(Extrato)
class ExtratoCreditoAdmin(admin.ModelAdmin):
    list_display = ('conta', 'exibir_movimentacoes', 'criacao')

    def exibir_movimentacoes(self, obj):
        movimentacoes_da_conta = obj.movimentacoes.filter(conta_origem=obj.conta)
        return ", ".join([str(movimentacao) for movimentacao in movimentacoes_da_conta])

    exibir_movimentacoes.short_description = 'Movimentacoes'


@admin.register(Emprestimo)
class EmprestimoAdmin(admin.ModelAdmin):
    list_display = ('conta', 'valor_solicitado', 'criacao', 'ativo')


@admin.register(AvaliacaoCredito)
class AvaliacaoCreditoAdmin(admin.ModelAdmin):
    list_display = ('conta', 'permissao', 'criacao', 'ativo')