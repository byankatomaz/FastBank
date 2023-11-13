from django.db import models
from stdimage.models import StdImageField
import uuid

def get_file_path(_instace, filename):
    ext = filename.split('.', -1)
    filename = f'{uuid.uuid4()}.{ext}'
    return filename

class Base(models.Model):
    criacao = models.DateTimeField(auto_now_add=True)
    modificacao = models.DateField(auto_now=True)
    ativo = models.BooleanField(default=True)
    
    class Meta:
        abstract = True

class Contato(Base):
    numero = models.CharField(max_length=11, null=False)
    cliente = models.ForeignKey('Cliente', on_delete=models.CASCADE)

    class Meta:
        verbose_name = 'Contato'
        verbose_name_plural = 'Contatos'
    
    def __str__(self):
        return self.numero

class Cliente(Base):
    
    TIPO_CHOICES = [
        ('PF', 'Pessoa Física'),
        ('PJ', 'Pessoa Jurídica')
    ]
    
    imagem = StdImageField('Imagem', upload_to='perfis', variations={'thumb': {'width': 480, 'height': 480, 'crop': True}})
    nome = models.CharField('Nome', max_length=100, null=False)
    email = models.EmailField('Email', null=False)
    senha = models.CharField('Senha', max_length=12)
    tipo = models.CharField('Tipo', max_length=2, choices=TIPO_CHOICES)
    
    rua = models.CharField(max_length=250, null=False)
    bairro = models.CharField(max_length=100, null=False)
    cidade = models.CharField(max_length=100, null=False)
    estado = models.CharField(max_length=30, null=False)
    num = models.IntegerField()
    cep = models.IntegerField()
    
    class Meta:
        verbose_name = 'Cliente'
        verbose_name_plural = 'Clientes'
        unique_together = ['email']
        
    def __str__(self):
        return self.nome