import * as yup from 'yup';
import { yupResolver} from '@hookform/resolvers/yup';

const ClienteLoginSchema = yup.object({

    email: yup.string().email().required(),
    password: yup.string().required(),
  
})

export const ClienteLoginResolver = yupResolver(ClienteLoginSchema)