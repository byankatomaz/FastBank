import axios from "axios";

// Fazendo  o URL base da API
const baseURL = 'http://10.109.71.13:8000/'

export const Api = axios.create({ baseURL })