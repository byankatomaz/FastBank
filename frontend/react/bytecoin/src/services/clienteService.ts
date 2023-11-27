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
  return Api.get('api/v2/users/me/', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}


export const ClienteService = {
    createClient, loginClient, infoClient
};