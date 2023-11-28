import { useAuth } from "context";
import { CreateCliente, LoginCliente } from "interfaces";
import { Api } from "providers"


const createClient = (data: CreateCliente) => Api.post('api/v2/users/', data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

const loginClient = (data: LoginCliente) => Api.post('api/v2/auth/jwt/create/', data);

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


export const ClienteService = {
    createClient, loginClient, infoClient, ContaClient
};