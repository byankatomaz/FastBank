from django.contrib import admin
from .models import Cliente, Contato
from django.contrib.auth.admin import UserAdmin

from .forms import ClienteCreateForm, ClienteChangeForm

@admin.register(Cliente)
class ClienteAdmin(UserAdmin):
    add_form = ClienteCreateForm
    form = ClienteChangeForm
    model = Cliente
    
    list_display = ('imagem', 'nome', 'email', 'cpf', 'tipo', 'salario', 'rua', 'bairro', 'cidade', 'estado', 'num', 'cep', 'date_joined', 'ativo')
    readonly_fields = ('modificacao',)

    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        ('Informações Pessoais', {'fields': ('nome', 'cpf', 'tipo', 'salario')}),
        ('Endereço', {'fields': ('rua', 'bairro', 'cidade', 'estado', 'num', 'cep')}),
        ('Permissões', {'fields': ('ativo', 'is_staff', 'is_superuser', 'groups', 'user_permissions')}),
        ('Datas Importantes', {'fields': ('date_joined', 'modificacao')}),
    )

    list_filter = ('is_staff', 'is_superuser', 'ativo')


  
    

@admin.register(Contato)
class ContatoAdmin(admin.ModelAdmin):
    list_display = ('cliente', 'numero', 'criacao', 'ativo')
   

