from rest_framework.routers import SimpleRouter

from .views import (
        ClienteViewSet,
    )

routerCli = SimpleRouter()
routerCli.register('cliente', ClienteViewSet)