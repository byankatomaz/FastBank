import requests, os, subprocess, multiprocessing, dotenv, base64
from time import sleep

import os
from django import setup



os.environ.setdefault("DJANGO_SETTINGS_MODULE", "ByteCoin.settings")
setup()

from APP.Contas.models import Conta, Cliente


dotenv.load_dotenv()

PORT = os.getenv('PORT')
IP = os.getenv('IP')
VERSION1 = 'v1'
VERSION2 = 'v2'
BASE_URL = f'http://{IP}:{PORT}/api/{VERSION1}/'
BASE_URL_AUTH = f'http://{IP}:{PORT}/api/{VERSION2}/'

# def compact(url, uri):
#     os.path.join(url, uri)

jwt_create_url =  os.path.join(BASE_URL_AUTH, 'auth/jwt/create/')
cliente_create =  os.path.join(BASE_URL_AUTH, 'users/')
avaliacao_credito_create =  os.path.join(BASE_URL, 'avaliacaoCred/')
emprestimo_create =  os.path.join(BASE_URL, 'emprestimo/')
movimentacao_create =  os.path.join(BASE_URL, 'movimentacao/')


def data_base_creation():
	try: 
		subprocess.run(['py', 'manage.py', 'makemigrations'], check=True)
		subprocess.run(['py', 'manage.py', 'migrate'], check=True)
		print('Success')
	except subprocess.CalledProcessError as e:
		print(e)
	except Exception as e:
		print(e)	
  

def run_server():
	try:
		subprocess.run(['py', 'manage.py', 'runserver', f'{IP}:{PORT}'], check=True)
	except subprocess.CalledProcessError as e:
		print(e)
	except Exception as e:
		print(e)


def superuser_creation():
	try:
		subprocess.run(['py', 'manage.py', 'createsuperuser'], check=True)
	except subprocess.CalledProcessError as e:
		print(e)
	except Exception as e:
		print(e)
  

def cliente_creation(nome, email, password, cpf, tipo, salario, rua, bairro, cidade, estado, num, cep):
    response = requests.post(
        cliente_create,
        data={
            "nome": nome,
            "email": email,
            "password": password,
            "tipo": tipo,
            "cpf": cpf,
            "salario": salario,
            "rua": rua,
            "bairro": bairro,
            "cidade": cidade,
            "estado": estado,
            "num": num,
            "cep": cep,
        }
    )
    
    print(response.json())
    return response.json()


def create_auth_JWT(email, password):
	response = requests.post(jwt_create_url, 
		json={
			'email': email, 
			'password': password
		})
	access_token = response.json()['access']
	headers = {'Authorization': f'Bearer {access_token}'}
 
	return headers


def movimentacao_creation(headers, conta_origem, valor, tipo_movimentacao, conta_destino=None):
    response = requests.post(
        movimentacao_create, headers=headers,
        json={
            "conta_origem": conta_origem,
            "conta_destino": conta_destino,
            "valor": valor,
            "tipo_movimentacao": tipo_movimentacao,
        }
    )
    
    print(response.json())
    return response.json


def emprestimo_creation(headers, conta, valor, parcelas):
    response = requests.post(
        emprestimo_create, headers=headers,
        json={
            "valor_solicitado": valor,
            "parcelas": parcelas,
            "conta": conta,
        }
    )
    
    print(response.json())
    return response.json


def avalicred_creation(headers, conta):
    response = requests.post(
        avaliacao_credito_create, headers=headers,
        json={
            "conta": conta,
        }
    )
    
    print(response.json())
    return response.json



def main():
    
        # data_base_creation()
        # server_process = multiprocessing.Process(target=run_server)
        # server_process.start()
    
        # sleep(1)
        
        superuser_creation()
        
        super_user_header = create_auth_JWT('byankatomaz@gmail.com','241204Bm#')

        user1 = cliente_creation('Keven', 'dahora@gmail.com', 'kev123#1', '50362773855', 'PF', '1500', 'Rua Jacarezinho', 'Colina das nascentes', 'Campinas', 'São Paulo', 526, 13025625)
        headers_1 = create_auth_JWT('dahora@gmail.com', 'kev123#1')
    
        user2 = cliente_creation('Julia', 'silvaJulia@gmail.com', '02JU2904', '58263259845', 'PF', '1300', 'Rua Jose Afonso', 'Bairro das nascentes', 'Sumaré', 'São Paulo', 155, 13125642)
        headers_2 = create_auth_JWT('silvaJulia@gmail.com', '02JU2904')

        user3 = cliente_creation('Beck', 'beckLuis@gmail.com', 'lUis123#$', '25632145685', 'PF', '1500', 'Rua Dos Papagaios', 'Arara Azul', 'Campinas', 'São Paulo', 132, 13625495)
        headers_3 = create_auth_JWT('beckLuis@gmail.com', 'lUis123#$')
    
        user4 = cliente_creation('Maciel', 'macielJulia@gmail.com', 'macaios23#', '12546253126', 'PF', '2500', 'Rua dos Coqueiros', 'Parque das Aguas', 'Hortolandia', 'São Paulo', 665, 13256245)
        headers_4 = create_auth_JWT('macielJulia@gmail.com', 'macaios23#')
        

        conta1 = Conta.objects.filter(cliente=user1['id']).first()
        conta2 = Conta.objects.filter(cliente=user2['id']).first()
        conta3 = Conta.objects.filter(cliente=user3['id']).first()
        conta4 = Conta.objects.filter(cliente=user4['id']).first()
        
        moviment1 = movimentacao_creation(headers_1, conta1.id, 10000, 'DEP')
        avaliacred1 = avalicred_creation(headers_1, conta1.id)
        emprestimo1 = emprestimo_creation(headers_1, conta1.id, 750, 12)
        moviment12 = movimentacao_creation(headers_1, conta4.id, 100, 'TED')
        
        moviment2 = movimentacao_creation(headers_2, conta2.id, 4500, 'DEP')
        avaliacred2 = avalicred_creation(headers_2, conta2.id)
        emprestimo2 = emprestimo_creation(headers_2, conta2.id, 500, 12)
        moviment14 = movimentacao_creation(headers_1, conta3.id, 75, 'TED')
                  
        moviment3 = movimentacao_creation(headers_3, conta3.id, 2500, 'DEP')
        avaliacred3 = avalicred_creation(headers_3, conta3.id)
        emprestimo3 = emprestimo_creation(headers_3, conta3.id, 700, 12)
        moviment13 = movimentacao_creation(headers_1, conta2.id, 50, 'TED')

        
        moviment4 = movimentacao_creation(headers_4, conta4.id, 1250, 'DEP')
        avaliacred4 = avalicred_creation(headers_4, conta4.id)
        emprestimo4 = emprestimo_creation(headers_4, conta1.id, 250, 12)
        moviment14 = movimentacao_creation(headers_1, conta2.id, 25, 'TED')
        
        
        
        


if __name__ == '__main__':
	main()