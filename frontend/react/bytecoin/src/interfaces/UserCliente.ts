// Interface para utilizar como tipo para armazenar as informações de cliente e manda-lo para API

export interface UserCliente {
    imagem: string;
    nome: string;
    cpf: string;
    tipo: string;
    salario: string;
    rua: string;
    bairro: string;
    cidade: string;
    estado: string;
    num: number;
    cep: number;
    ativo: boolean;
    email: string;
    password: string;
  }