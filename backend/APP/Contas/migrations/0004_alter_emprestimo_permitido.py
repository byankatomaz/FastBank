# Generated by Django 4.2.7 on 2023-11-22 12:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Contas', '0003_emprestimo_permitido'),
    ]

    operations = [
        migrations.AlterField(
            model_name='emprestimo',
            name='permitido',
            field=models.BooleanField(blank=True, null=True),
        ),
    ]
