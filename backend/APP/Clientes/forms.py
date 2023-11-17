from django.contrib.auth.forms import UserCreationForm, UserChangeForm

from .models import Cliente

class ClienteCreateForm(UserCreationForm):
    
    class Meta:
        model = Cliente
        fields = ['nome', 'email', 'cpf', 'tipo', 'rua', 'bairro', 'cidade', 'estado', 'num', 'cep', 'ativo']

    def save(self, commit=True):
        user = super().save(commit=False)
        user.set_password(self.cleaned_data['password1'])
        user.email = self.cleaned_data['username']
        
        if commit:
            user.save()
        
        return user
    

class ClienteChangeForm(UserChangeForm):
    
    class Meta:
        model = Cliente
        fields = ['nome', 'email', 'cpf', 'tipo', 'rua', 'bairro', 'cidade', 'estado', 'num', 'cep', 'ativo']