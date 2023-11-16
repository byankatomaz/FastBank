from django.contrib.auth.forms import UserCreationForm, UserChangeForm

from .models import Cliente

class ClienteCreateForm(UserCreationForm):
    
    class Meta:
        model = Cliente
        fields = '__all__'
    
    def save(self, commit=True):
        return 