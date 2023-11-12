from django.contrib import admin
from .models import Cliente, Contato

@admin.register(Cliente)
class ClienteAdmin(admin.ModelAdmin):
    list_display = ('nome', 'email', 'senha', 'rua', 'tipo', 'criacao', 'ativo')

@admin.register(Contato)
class ContatoAdmin(admin.ModelAdmin):
    list_display = ('cliente', 'numero', 'criacao', 'ativo')
   

