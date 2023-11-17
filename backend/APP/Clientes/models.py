from typing import Any
from django.db import models
from stdimage.models import StdImageField

from django.contrib.auth.models import AbstractUser, BaseUserManager
import uuid

class ClienteManager(BaseUserManager):
    use_in_migrations = True
    
    def _create_user(self, email, password, **extra_fields):
        if not email:
            raise ValueError('O e-mail é obrigatório')

        email = self.normalize_email(email)
        user = self.model(email=email, username=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_user(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_superuser', False)
        
        return self._create_user(email, password, **extra_fields)
    
    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_staff', True)
        
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Super precisa ter is_superuser=True')
        if extra_fields.get('is_staff') is not True:
            raise ValueError('Super precisa ter is_staff=True')
        
        return self._create_user(email, password, **extra_fields)

def get_file_path(_instance, filename):
    ext = filename.split('.', 1)[-1]
    filename = f'{uuid.uuid4()}.{ext}'
    return filename


class Base(AbstractUser):
    modificacao = models.DateField(auto_now=True)
    ativo = models.BooleanField(default=True)
    
    class Meta:
        abstract = True
        

class Cliente(Base):
    
    TIPO_CHOICES = [
        ('PF', 'Pessoa Física'),
        ('PJ', 'Pessoa Jurídica')
    ]
    
    imagem = StdImageField('Imagem', upload_to='perfis', variations={'thumb': {'width': 480, 'height': 480, 'crop': True}})
    nome = models.CharField('Nome', max_length=100)
    email = models.EmailField('E-mail', unique=True)
    cpf = models.CharField('CPF', max_length=11)
    tipo = models.CharField('Tipo', max_length=2, choices=TIPO_CHOICES)
    
    rua = models.CharField(max_length=250, blank=False, null=False)
    bairro = models.CharField(max_length=100, null=False)
    cidade = models.CharField(max_length=100, null=False)
    estado = models.CharField(max_length=30, null=False)
    num = models.IntegerField(null=True)
    cep = models.IntegerField(null=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['nome', 'cpf', 'tipo', 'rua', 'bairro', 'cidade', 'estado', 'num', 'cep', 'ativo']
    
    class Meta:
        verbose_name = 'Cliente'
        verbose_name_plural = 'Clientes'
        unique_together = ['email']
    
        
    def __str__(self):
        return self.username
    
    objects = ClienteManager()


class Contato(models.Model):
    numero = models.CharField(max_length=11, null=False)
    cliente = models.ForeignKey('Cliente', on_delete=models.CASCADE, related_name='contatos')
    criacao = models.DateTimeField(auto_now_add=True)
    modificacao = models.DateField(auto_now=True)
    ativo = models.BooleanField(default=True)
    
    class Meta:
        verbose_name = 'Contato'
        verbose_name_plural = 'Contatos'
    
    def __str__(self):
        return self.numero
