from rest_framework.routers import SimpleRouter

from .views import (
        ClienteViewSet,
        ClienteLoginViewSet,
    )

routerCli = SimpleRouter()
routerCli.register(r'clientes', ClienteViewSet, basename='cliente')
routerCli.register(r'login', ClienteLoginViewSet, basename='login')