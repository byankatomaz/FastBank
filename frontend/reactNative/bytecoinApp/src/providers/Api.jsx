import axios from "axios";

const baseURL = 'http://192.168.1.230:8000/'

export const Api = axios.create({ baseURL })