from django.contrib import admin
from .models import Cliente, Contato
from django.contrib.auth.admin import UserAdmin

# @admin.register(Cliente)
# class ClienteAdmin(admin.ModelAdmin):
#     list_display = ('nome', 'email', 'rua', 'tipo', 'criacao', 'ativo')

@admin.register(Cliente)
class ClienteAdmin(UserAdmin):
    list_display = ('username', 'email', 'rua', 'tipo', 'criacao', 'ativo')
    search_fields = ('username', 'email', 'rua', 'cpf')
    readonly_fields = ('criacao', 'modificacao')

    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        ('Informações Pessoais', {'fields': ('username', 'cpf', 'tipo')}),
        ('Endereço', {'fields': ('rua', 'bairro', 'cidade', 'estado', 'num', 'cep')}),
        ('Permissões', {'fields': ('ativo',)}),
        ('Datas Importantes', {'fields': ('criacao', 'modificacao')}),
    )

    filter_horizontal = ()
    list_filter = ()

    ordering = ('username',)

    def get_inline_instances(self, request, obj=None):
        """Remove as inlines padrão (Grupos e Permissões) que já estão presentes em UserAdmin."""
        return []
    

@admin.register(Contato)
class ContatoAdmin(admin.ModelAdmin):
    list_display = ('cliente', 'numero', 'criacao', 'ativo')
   

