# Generated by Django 4.2.7 on 2023-11-26 06:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Clientes', '0002_alter_cliente_ativo'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cliente',
            name='imagem',
            field=models.ImageField(blank=True, null=True, upload_to='perfis', verbose_name='Imagem'),
        ),
    ]
