from rest_framework.routers import SimpleRouter

from .views import (
        ContaViewSet,
        CartaoViewSet,
        MovimentacaoViewSet,
        ExtratoViewSet,
        AvaliacaoCreditoViewSet
    )

routerCont = SimpleRouter()
routerCont.register('conta', ContaViewSet)
routerCont.register('cartao', CartaoViewSet)
routerCont.register('movimentacao', MovimentacaoViewSet)
routerCont.register('extrato', ExtratoViewSet)
routerCont.register('avaliacaoCred', AvaliacaoCreditoViewSet)