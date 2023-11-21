from rest_framework.routers import SimpleRouter

from .views import (
        ContaViewSet,
        CartaoViewSet,
        MovimentacaoViewSet,
        ExtratoViewSet,
        AvaliacaoCreditoViewSet,
        EmprestimoViewSet
    )

routerCont = SimpleRouter()
routerCont.register('conta', ContaViewSet)
routerCont.register('cartao', CartaoViewSet)
routerCont.register('movimentacao', MovimentacaoViewSet)
routerCont.register('extrato', ExtratoViewSet)
routerCont.register('avaliacaoCred', AvaliacaoCreditoViewSet)
routerCont.register('emprestimo', EmprestimoViewSet)