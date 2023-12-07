# Generated by Django 4.2.7 on 2023-12-07 02:45

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('Contas', '0002_alter_movimentacao_conta_destino'),
    ]

    operations = [
        migrations.AlterField(
            model_name='movimentacao',
            name='conta_destino',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='movimentacoes_destino', to='Contas.conta'),
        ),
    ]
