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
    

# class ClienteLoginSerializer(TokenObtainPairView):
#     def post(self, request, *args, **kwargs):
#         # Implemente sua lógica de verificação aqui
#         email = request.data.get('email')
#         password = request.data.get('password')

#         # Verifique o número de tentativas incorretas
#         cliente = Cliente.objects.filter(username=email).first()

#         if cliente and cliente.tentativas_login_incorretas >= 3:
#             return Response({"error": "Conta bloqueada devido a muitas tentativas incorretas."}, status=status.HTTP_403_FORBIDDEN)

#         # Chame a lógica padrão do TokenObtainPairView
#         response = super().post(request, *args, **kwargs)

#         if response.status_code == status.HTTP_200_OK:
#             # Login bem-sucedido, redefina as tentativas incorretas
#             if cliente:
#                 cliente.tentativas_login_incorretas = 0
#                 cliente.save()

#         elif response.status_code == status.HTTP_401_UNAUTHORIZED:
#             # Senha incorreta, atualize o número de tentativas incorretas
#             if cliente:
#                 cliente.tentativas_login_incorretas += 1
#                 cliente.save()

#         return response
    
