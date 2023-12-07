// Interface para utilizar como tipo na criação de cliente e manda-lo para API

export interface CreateCliente {
    imagem?: FileList;
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
    email: string;
    password: string;
}