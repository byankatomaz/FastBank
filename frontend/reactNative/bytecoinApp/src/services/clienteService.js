import { Api } from "../providers/Api";


const createClient = (data) => Api.post('api/v2/users/', data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

const loginClient = (data) => Api.post('api/v2/auth/jwt/create/', data);

const infoClient = async (token) => {  
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

const ContaClient = async (token, id) => {  
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