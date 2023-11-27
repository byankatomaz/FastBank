from rest_framework.routers import SimpleRouter

from .views import (
        ClienteViewSet,
        ClienteLoginViewSet,
    )

routerCli = SimpleRouter()
routerCli.register('clientes', ClienteViewSet)
routerCli.register('login', ClienteLoginViewSet, basename='login')