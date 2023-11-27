from rest_framework import serializers
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.response import Response
from rest_framework import status

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
    

class ClienteLoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)
    
