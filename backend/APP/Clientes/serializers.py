from rest_framework import serializers
from django.db.models import Avg

from .models import Cliente

class ClienteSerializer(serializers.ModelSerializer):
    
    class Meta:
        extra_kwargs = {
            'email': {'write_only': True},
            'password': {'write_only': True}
        }
        model = Cliente
        fields = (
            'id',
            'imagem',
            'nome',
            'email',
            'password',
            'tipo',
            'cpf',
            'salario',
            'rua',
            'bairro',
            'cidade',
            'estado',
            'num',
            'cep',
            'date_joined',
            'ativo'
        )
    
    
