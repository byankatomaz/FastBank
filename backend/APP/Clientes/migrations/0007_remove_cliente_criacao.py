# Generated by Django 4.2.7 on 2023-11-17 12:11

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Clientes', '0006_cliente_date_joined_cliente_first_name_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='cliente',
            name='criacao',
        ),
    ]