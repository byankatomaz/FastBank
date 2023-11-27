import { Header, Button } from "components";
import { LoginCliente } from "interfaces";
import { useForm, SubmitHandler } from "react-hook-form";
import { ClienteService } from "services";
import { ClienteLoginResolver } from "validations";
import { useAuth } from "context";
import { useNavigate } from "react-router-dom";

export function SignIn() {
    const { register, handleSubmit } = useForm({
        resolver: ClienteLoginResolver,
    });

    const navigate = useNavigate();
    const { setAccessToken } = useAuth();

    const onSubmit: SubmitHandler<LoginCliente> = async (values) => {
        try {
            const { status, data } = await ClienteService.loginClient(values);
            if (status === 200 && data['access']) {
                setAccessToken(data['access']);
                localStorage.setItem('accessToken', data['access']);
                navigate('/homecliente');
            } else if (status === 401) {
                alert('ERRO NO LOGIN');
            }
        } catch (error) {
            console.error('Erro ao logar o cliente:', error);
        }
    };

    return (
        <>
            <Header />
            <div className="container" onSubmit={handleSubmit(onSubmit)}>
                <form className="form">
                    <h1>Login</h1>
                    <label htmlFor="email">E-mail:</label>
                    <input {...register('email')} type="email" placeholder="Endereço de Email"></input>
                    <label htmlFor="password">Senha:</label>
                    <input {...register('password')} type="password" placeholder="Senha"></input>
                    <Button type='submit' variant='dark'>Logar</Button>
                </form>
            </div>
        </>
    );
}
