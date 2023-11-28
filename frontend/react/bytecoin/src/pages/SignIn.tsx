import { Header, Button } from "components";
import { LoginCliente } from "interfaces";
import { useForm, SubmitHandler } from "react-hook-form";
import { ClienteService } from "services";
import { ClienteLoginResolver } from "validations";
import { useAuth } from "context";
import { useNavigate } from "react-router-dom";
import ampulheta from "../images/ampulheta.jpg"

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

            <div className="w-full lg:w-12/12 bg-black lg:flex flex items-center justify-center">
                <div className="min-h-screen flex items-stretch text-white">
                    <div className="lg:flex hidden bg-gray-500 bg-no-repeat relative bg-cover  items-center" style={{ backgroundImage: `url(${ampulheta})` }}>
                        <div className="absolute bg-black opacity-60 h-full inset-0 z-0"></div>
                        <div className="w-full px-24 z-10">
                            <h1 className="text-5xl font-bold text-left tracking-wide">Estamos felizes de te ver novamente</h1>
                        </div>
                    </div>
                    <div className="max-w-md w-full p-16 flex flex-col items-center justify-center">
                        <h2 className="text-2xl font-semibold text-white text-center">Login</h2>
                        <form onSubmit={handleSubmit(onSubmit)} className="form">
                            <div className="mb-4">
                                <label htmlFor="email" className="text-white">Email</label>
                                <input {...register("email")} type="email" id="email" placeholder="Endereço de Email" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="password" className="text-white">Password</label>
                                <input {...register("password")} type="password" id="password" placeholder="Senha" />
                            </div>
                            <div className="flex justify-center">
                                <Button type="submit" variant="dark" className="w-20 h-12 rounded">Logar</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Header enable={false} />
        </>
    );
}
