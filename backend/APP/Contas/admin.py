from django.contrib import admin
from .models import Conta, Cartao, Movimentacao, Emprestimo, AvaliacaoCredito


@admin.register(Conta)
class ContaAdmin(admin.ModelAdmin):
    list_display = ('cliente', 'saldo', 'agencia', 'numero', 'criacao', 'ativo')
    

@admin.register(Cartao)
class CartaoAdmin(admin.ModelAdmin):
    list_display = ('conta', 'numero', 'tipo', 'vencimento', 'criacao', 'ativo')


@admin.register(Movimentacao)
class MovimentacaoAdmin(admin.ModelAdmin):
    list_display = ('conta_origem', 'conta_destino', 'valor', 'tipo_movimentacao', 'criacao', 'ativo')


@admin.register(Emprestimo)
class EmprestimoAdmin(admin.ModelAdmin):
    list_display = ('conta', 'valor_solicitado', 'criacao', 'ativo')


@admin.register(AvaliacaoCredito)
class AvaliacaoCreditoAdmin(admin.ModelAdmin):
    list_display = ('conta', 'permissao', 'criacao', 'ativo')