# Generated by Django 4.2.7 on 2023-11-24 13:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Contas', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='avaliacaocredito',
            name='criacao',
            field=models.DateTimeField(auto_now_add=True),
        ),
        migrations.AlterField(
            model_name='cartao',
            name='criacao',
            field=models.DateTimeField(auto_now_add=True),
        ),
        migrations.AlterField(
            model_name='conta',
            name='criacao',
            field=models.DateTimeField(auto_now_add=True),
        ),
        migrations.AlterField(
            model_name='emprestimo',
            name='criacao',
            field=models.DateTimeField(auto_now_add=True),
        ),
        migrations.AlterField(
            model_name='extrato',
            name='criacao',
            field=models.DateTimeField(auto_now_add=True),
        ),
        migrations.AlterField(
            model_name='movimentacao',
            name='criacao',
            field=models.DateTimeField(auto_now_add=True),
        ),
    ]