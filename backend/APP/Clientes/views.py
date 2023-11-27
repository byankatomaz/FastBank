
from rest_framework import viewsets, status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response


from django.contrib.auth.hashers import check_password
from rest_framework.response import Response
from rest_framework import status

from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import Cliente
from .serializers import ClienteSerializer, ClienteLoginSerializer


class ClienteViewSet(viewsets.ModelViewSet):
    queryset = Cliente.objects.all()
    serializer_class = ClienteSerializer
    permission_classes = (IsAuthenticated, )
    
    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)

        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

    def perform_create(self, serializer):
        serializer.save(username=serializer.validated_data['email'])
        

class ClienteLoginViewSet(TokenObtainPairView):
    
    serializer_class = ClienteLoginSerializer

    @classmethod
    def get_extra_actions(cls):
        return []
    
    def post(self, request, *args, **kwargs):
        # Implement your logic here
        email = request.data.get('email')
        password = request.data.get('password')

        # Check the number of incorrect attempts
        cliente = Cliente.objects.filter(username=email).first()

        if cliente and cliente.tentativas_login_incorretas >= 3:
            return Response({"error": "Account blocked due to too many incorrect attempts."}, status=status.HTTP_403_FORBIDDEN)

        # Call the default logic of TokenObtainPairView
        response = super().post(request, *args, **kwargs)

        if response.status_code == status.HTTP_200_OK:
            # Successful login, reset the incorrect attempts
            if cliente:
                cliente.tentativas_login_incorretas = 0
                cliente.save()

        elif response.status_code == status.HTTP_401_UNAUTHORIZED:
            # Incorrect password, update the number of incorrect attempts
            if cliente:
                cliente.tentativas_login_incorretas += 1
                cliente.save()

        return response
