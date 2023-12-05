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

const AvaliacaoCred = async (token, data) => {
  try {
    const response = await Api.post(`api/v1/avaliacaoCred/`, data, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    return response;
  } catch (error) {
    throw error;
  }
}

const AvaliacaoCredGet = async (token, id) => {
  try {
    const response = await Api.get(`api/v1/avaliacaoCred/${id}/`, {
      headers: {
        Authorization: `Bearer ${token}`
      },
    });

    return response;
  } catch (error) {
    throw error;
  }
}

const Emprestimo = async (token, data) => {
  try {
    const response = await Api.post(`api/v1/emprestimo/`, data, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    return response;
  } catch (error) {
    throw error;
  }
}

const EmprestimoGet = async (token, id) => {
  try {
    const response = await Api.get(`api/v1/emprestimo/${id}/`, {
      headers: {
        Authorization: `Bearer ${token}`
      },
    });

    return response;
  } catch (error) {
    throw error;
  }
}

const Movimentacao = async (token, data) => {
  try {
    const response = await Api.post(`api/v1/movimentacao/`, data, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    return response;
  } catch (error) {
    throw error;
  }
}

const Extrato = async (token, id) => {
  try {
    const response = await Api.get(`api/v1/extrato/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      },
    });

    return response;
  } catch (error) {
    throw error;
  }
}



export const ClienteService = {
  createClient, loginClient, infoClient, ContaClient, AvaliacaoCred, AvaliacaoCredGet, Emprestimo, EmprestimoGet, Movimentacao, Extrato
};