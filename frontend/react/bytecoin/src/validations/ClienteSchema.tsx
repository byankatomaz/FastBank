import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

// Esquema de validação para dados do cliente
const ClienteValidationSchema = yup.object({
  imagem: yup
    .mixed<FileList>()  // Tipo misto que pode ser um FileList
    .transform((value, originalValue) => {
      if (originalValue instanceof FileList) {
        return originalValue[0];
      }
      return originalValue;
    }),
  nome: yup.string().required(),    // Nome é uma string obrigatória
  cpf: yup.string().required(),     // CPF é uma string obrigatória
  tipo: yup.string().required(),    // Tipo é uma string obrigatória
  salario: yup.string().required(), // Salário é uma string obrigatória
  rua: yup.string().required(),     // Rua é uma string obrigatória
  bairro: yup.string().required(),  // Bairro é uma string obrigatória
  cidade: yup.string().required(),  // Cidade é uma string obrigatória
  estado: yup.string().required(),  // Estado é uma string obrigatória
  num: yup.number().required(),     // Número é um número obrigatório
  cep: yup.number().required(),     // CEP é um número obrigatório
  email: yup.string().email().required(), // Email é uma string de email obrigatória
  password: yup.string().required(),      // Senha é uma string obrigatória
});

// Esquema de validação para dados de login do cliente
const ClienteLoginSchema = yup.object({
  email: yup.string().email().required(), // Email para login é uma string de email obrigatória
  password: yup.string().required(),      // Senha para login é uma string obrigatória
});

// Criando um resolvedor de yup para utilizar com o hookform
export const ClienteResolver = yupResolver(ClienteValidationSchema);

// Criando um resolvedor de yup para dados de login
export const ClienteLoginResolver = yupResolver(ClienteLoginSchema);
