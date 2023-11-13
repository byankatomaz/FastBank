from django.db import models
from APP.Clientes.models import Cliente

from django.dispatch import receiver
from django.db.models.signals import post_save
import random
from datetime import timedelta


class Base(models.Model):
    criacao = models.DateField(auto_now_add=True)
    modificacao = models.DateField(auto_now=True)
    ativo = models.BooleanField(default=True)
    
    class Meta:
        abstract = True
        
        
class Conta(Base):
    cliente = models.OneToOneField(Cliente, on_delete=models.CASCADE)
    saldo = models.DecimalField('Saldo', max_digits=10, decimal_places=2)
    agencia = models.CharField('Agência', max_length=4)
    numero = models.CharField('Numero', max_length=8, unique=True)
    
    class Meta:
        verbose_name = 'Conta'
        verbose_name_plural = 'Contas'
        
    def __str__(self):
        return self.numero    


class Cartao(Base):
    
    TIPO_CHOICES = [
        ('CC', 'Cartão de Crédito'),
        ('CD', 'Cartão de Débito')
    ]
    
    numero = models.CharField('Numero', max_length=16, unique=True)
    cvv = models.CharField('CVV', max_length=3, unique=True)
    tipo = models.CharField('Tipo', max_length=10, choices=TIPO_CHOICES, null=False)
    conta = models.OneToOneField('Conta', on_delete=models.CASCADE, related_name='cartao')
    vencimento = models.DateField()
    
    class Meta:
        verbose_name = 'Cartão'
        verbose_name_plural = 'Cartões'

    def __str__(self):
        return self.numero


class Movimentacao(Base):
    
    MOV_TIPO_CHOICES = [
        ('TED', 'Tranferência Bancária'),
        ('DEP', 'Depósito'),
        ('PIX', 'Pix'),
        ('PAG', 'Pagamento')
    ]
    
    conta_origem = models.ForeignKey('Conta', on_delete=models.CASCADE, related_name='movimentacoes_origem')
    conta_destino = models.ForeignKey('Conta', on_delete=models.CASCADE, related_name='movimentacoes_destino', blank=True, null=True)
    valor = models.DecimalField('valor', max_digits=10, decimal_places=2)
    tipo_movimentacao = models.CharField('Tipo', max_length=20, choices=MOV_TIPO_CHOICES)
    
    class Meta:
        verbose_name = 'Movimentação'
        verbose_name_plural = 'Movimentações'

    def __str__(self):
        return f"{self.tipo_movimentacao} - {self.valor} em {self.criacao}"
    
    
class Extrato(Base):
    conta = models.ForeignKey('Conta', related_name='extrato', on_delete=models.CASCADE)
    movimentacoes = models.ManyToManyField(Movimentacao, related_name='movimentacoes')

    class Meta:
        verbose_name = 'Extrato'
        verbose_name_plural = 'Extratos'
        
    def __str__(self):
        return f"Extrato {self.id} da Conta {self.conta.numero}"
    
    
class Emprestimo(Base):
    conta = models.ForeignKey('Conta', on_delete=models.CASCADE)
    valor_solicitado = models.DecimalField('Valor', max_digits=10, decimal_places=2)
    taxa_juros = models.DecimalField('Taxa', max_digits=10, decimal_places=2)
    
    class Meta:
        verbose_name = 'Empréstimo'
        verbose_name_plural = 'Empréstimos'

    def __str__(self):
        return f"{self.conta} - {self.valor_solicitado}"


class AvaliacaoCredito(Base):
    conta = models.ForeignKey('Conta', on_delete=models.CASCADE)
    pontuacao = models.IntegerField('Pontuação')
    permissao = models.BooleanField('Permissão')
    
    class Meta:
        verbose_name = 'Avaliação de Crédito'
        verbose_name_plural = 'Avaliações de Crédito'

    def __str__(self):
        return self.permissao


@receiver(post_save, sender=Cliente)
def criar_conta_para_cliente(sender, instance, created, **kwargs):
    
    if created:
    
        numeroConta = str(random.randint(10000000, 99999999))
        
        conta = Conta.objects.create(cliente=instance, saldo=0.0, agencia='2412', numero=numeroConta)
        
        numeroCartao = str(random.randint(1000000000000000, 9999999999999999))
        cvv = random.randint(100, 999)
        vencimento = conta.criacao + timedelta(days=(3 * 365))
        
        Cartao.objects.create(conta=conta, cvv=cvv, numero=numeroCartao, vencimento=vencimento, tipo='CD')


@receiver(post_save, sender=Movimentacao)
def criar_extrato(sender, instance, created, **kwargs):
    
    if created:
        conta = instance.conta_origem
        extrato_existente = Extrato.objects.filter(conta=conta).first()

        if extrato_existente:
            extrato_existente.movimentacoes.add(instance)
        else:
            extrato = Extrato.objects.create(conta=conta)
            extrato.movimentacoes.add(instance)
