import { CreateCliente, LoginCliente } from "interfaces";
import { Api } from "providers";

// Função para criar um novo cliente na API
const createClient = (data: CreateCliente) => Api.post('api/v2/users/', data, {
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

// Função para realizar o login do cliente na API
const loginClient = (data: LoginCliente) => Api.post('api/v2/auth/jwt/create/', data);

// Função para obter informações do cliente com base no token de acesso
const infoClient = async (token: string | null) => {  
  try {
    const response = await Api.get('api/v2/users/me/', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    return response;
  } catch (error) {
    throw error;
  }
}

// Função para obter informações da conta do cliente com base no token de acesso e ID do cliente
const ContaClient = async (token: string | null, id: number) => {  
  try {
    const response = await Api.get(`api/v1/conta/${id}/`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    return response;
  } catch (error) {
    throw error;
  }
}

// Exportando um objeto que contém todas as funções do serviço de cliente
export const ClienteService = {
  createClient,
  loginClient,
  infoClient,
  ContaClient
};
