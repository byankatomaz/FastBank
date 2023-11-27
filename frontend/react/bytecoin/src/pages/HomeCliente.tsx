import { Header } from "components";
import { ClienteService } from "services";
import { useEffect, useState } from 'react';
import { useAuth } from "context";

export function HomeCliente() {
    const [userInfo, setUserInfo] = useState(null);
    const [loading, setLoading] = useState(true);
    const { accessToken, setAccessToken } = useAuth();

    useEffect(() => {
        const storedToken = localStorage.getItem('accessToken');
        if (storedToken) {
            setAccessToken(storedToken);
        }
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { status, data } = await ClienteService.infoClient(accessToken);
                if (status === 200) {
                    setUserInfo(data);
                }
            } catch (error) {
                console.error('Erro ao obter informações do cliente:', error);
            } finally {
                setLoading(false);
            }
        };

        if (accessToken) {
            fetchData();
        }
    }, [accessToken]);

    return (
        <div>
            <Header children={userInfo?.nome} />
            <h1>HomeCliente</h1>
        </div>
    );
}
