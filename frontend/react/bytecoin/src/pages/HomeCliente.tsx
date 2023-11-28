import { Header } from "components";
import { ClienteService } from "services";
import { useEffect, useState } from 'react';
import { useAuth, useUser } from "context";

export function HomeCliente() {
    const { dataUser, setDataUser } = useUser();
    const [ dataCliente, setDataCliente ] = useState([])
    const { accessToken, setAccessToken } = useAuth();

    useEffect(() => {
        console.log("uma vez")
        const storedToken = localStorage.getItem('accessToken');

                if (storedToken) {
                    setAccessToken(storedToken);
                } 
    }, [])

    useEffect(() => {

        async function fetchData() {
            try {
                console.log(dataUser)
                
                if (accessToken && !dataUser) {
                    const { status, data } = await ClienteService.infoClient(accessToken);
                    console.log(data)
                    setDataCliente(data)
                    if (status === 200) {
                        const response = await ClienteService.ContaClient(accessToken, data.id);
                        setDataUser(response.data)
                    }
                }

            } catch (error) {
                console.error('Erro ao obter informações do cliente:', error);
            }
        };
        
        if (shouldFetchData()) {
            fetchData()
        }
        
       
    }, [accessToken, dataUser]);


    const shouldFetchData = () => accessToken && !dataUser;


    return (
        <div>
            <Header enable={false} children={dataCliente?.nome} />
            
            <div className="container card flex flex-row items-center justify-between gap-8">
                <img src={dataCliente?.imagem} className="h-24 w-24 rounded-full"></img>
                <div>
                    <h1>Saldo bancario</h1>
                    <p className='text-sm font-bold'>{dataUser?.saldo}</p>
                </div>
                <div>
                    <h1>Agência</h1>
                    <p className='text-sm font-bold'>{dataUser?.agencia}</p>
                </div>
                <div>
                    <h1>Número da conta</h1>
                    <h1 className='text-sm font-bold'>{dataUser?.numero}</h1>
                </div>
            </div>
        
        </div>
    );
}
