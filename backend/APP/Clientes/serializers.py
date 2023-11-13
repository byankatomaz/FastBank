from rest_framework import serializers
from django.db.models import Avg

from .models import Cliente

class ClienteSerializer(serializers.ModelSerializer):
    
    class Meta:
        extra_kwargs = {
            'email': {'write_only': True},
            'senha': {'write_only': True}
        }
        model = Cliente
        fields = (
            'id',
            'nome',
            'email',
            'senha',
            'tipo',
            'rua',
            'bairro',
            'estado',
            'num',
            'cep',
            'criacao',
            'ativo'
        )
    
    
