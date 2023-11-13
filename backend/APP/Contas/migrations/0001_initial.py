# Generated by Django 4.2.7 on 2023-11-12 19:28

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('Clientes', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Conta',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('criacao', models.DateField(auto_now_add=True)),
                ('modificacao', models.DateField(auto_now=True)),
                ('ativo', models.BooleanField(default=True)),
                ('saldo', models.DecimalField(decimal_places=2, max_digits=10, verbose_name='Saldo')),
                ('agencia', models.CharField(max_length=4, verbose_name='Agência')),
                ('numero', models.CharField(max_length=8, unique=True, verbose_name='Numero')),
                ('cliente', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='Clientes.cliente')),
            ],
            options={
                'verbose_name': 'Conta',
                'verbose_name_plural': 'Contas',
            },
        ),
        migrations.CreateModel(
            name='Movimentacao',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('criacao', models.DateField(auto_now_add=True)),
                ('modificacao', models.DateField(auto_now=True)),
                ('ativo', models.BooleanField(default=True)),
                ('valor', models.DecimalField(decimal_places=2, max_digits=10, verbose_name='valor')),
                ('tipo_movimentacao', models.CharField(choices=[('TED', 'Tranferência Bancária'), ('DEP', 'Depósito'), ('PIX', 'Pix'), ('PAG', 'Pagamento')], max_length=20, verbose_name='Tipo')),
                ('conta_destino', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='movimentacoes_destino', to='Contas.conta')),
                ('conta_origem', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='movimentacoes_origem', to='Contas.conta')),
            ],
            options={
                'verbose_name': 'Movimentação',
                'verbose_name_plural': 'Movimentações',
            },
        ),
        migrations.CreateModel(
            name='Extrato',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('criacao', models.DateField(auto_now_add=True)),
                ('modificacao', models.DateField(auto_now=True)),
                ('ativo', models.BooleanField(default=True)),
                ('conta', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='extrato', to='Contas.conta')),
                ('movimentacoes', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='movimentacoes', to='Contas.movimentacao')),
            ],
            options={
                'verbose_name': 'Extrato',
                'verbose_name_plural': 'Extratos',
            },
        ),
        migrations.CreateModel(
            name='Emprestimo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('criacao', models.DateField(auto_now_add=True)),
                ('modificacao', models.DateField(auto_now=True)),
                ('ativo', models.BooleanField(default=True)),
                ('valor_solicitado', models.DecimalField(decimal_places=2, max_digits=10, verbose_name='Valor')),
                ('taxa_juros', models.DecimalField(decimal_places=2, max_digits=10, verbose_name='Taxa')),
                ('conta', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Contas.conta')),
            ],
            options={
                'verbose_name': 'Empréstimo',
                'verbose_name_plural': 'Empréstimos',
            },
        ),
        migrations.CreateModel(
            name='Cartao',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('criacao', models.DateField(auto_now_add=True)),
                ('modificacao', models.DateField(auto_now=True)),
                ('ativo', models.BooleanField(default=True)),
                ('numero', models.CharField(max_length=16, unique=True, verbose_name='Numero')),
                ('cvv', models.CharField(max_length=3, unique=True, verbose_name='CVV')),
                ('tipo', models.CharField(choices=[('CC', 'Cartão de Crédito'), ('CD', 'Cartão de Débito')], max_length=10, verbose_name='Tipo')),
                ('vencimento', models.DateField()),
                ('conta', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='cartao', to='Contas.conta')),
            ],
            options={
                'verbose_name': 'Cartão',
                'verbose_name_plural': 'Cartões',
            },
        ),
        migrations.CreateModel(
            name='AvaliacaoCredito',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('criacao', models.DateField(auto_now_add=True)),
                ('modificacao', models.DateField(auto_now=True)),
                ('ativo', models.BooleanField(default=True)),
                ('pontuacao', models.IntegerField(verbose_name='Pontuação')),
                ('permissao', models.BooleanField(verbose_name='Permissão')),
                ('conta', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Contas.conta')),
            ],
            options={
                'verbose_name': 'Avaliação de Crédito',
                'verbose_name_plural': 'Avaliações de Crédito',
            },
        ),
    ]
