import * as yup from 'yup';
import { yupResolver} from '@hookform/resolvers/yup';

const ClienteValidationSchema = yup.object({

        imagem: yup.mixed<FileList>().transform((value, originalValue) => {
                if (originalValue instanceof FileList) {
                return originalValue[0];
                }
                return originalValue;
        }),
        nome: yup.string().required(),
        cpf: yup.string().required(),
        tipo: yup.string().required(),
        salario: yup.string().required(),
        rua: yup.string().required(),
        bairro: yup.string().required(),
        cidade: yup.string().required(),
        estado: yup.string().required(),
        num: yup.number().required(),
        cep: yup.number().required(),
        email: yup.string().email().required(),
        password: yup.string().required(),
      
})

const ClienteLoginSchema = yup.object({

        email: yup.string().email().required(),
        password: yup.string().required(),
      
})

export const ClienteResolver = yupResolver(ClienteValidationSchema)

export const ClienteLoginResolver = yupResolver(ClienteLoginSchema)