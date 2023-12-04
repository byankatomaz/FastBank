import axios from "axios";

const baseURL = 'http://10.109.71.13:8000/'

export const Api = axios.create({ baseURL })