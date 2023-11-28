import { Button, Header } from "components"
import ampulhetaEscritorio from "../images/ampulhetaEscritorio.jpg"

export function Home() {
    return (
        <div>

            <div className="container flex flex-col">
                <div>
                    <div className="fontDiv text-5xl font-extralight">
                        <div>
                            <span className="textGradiente w-full">&lt;Não perca mais tempo/&gt;</span>
                        </div>
                        <div style={{ paddingLeft: "8vh" }}>
                            <span>
                                No Bytecoin você terá as maiores facilidades para o dia a dia!
                            </span>
                        </div>

                    </div>
                    <div className="flex gap-8 justify-start ">
                        <div className="w-80">
                            <Button variant="primary" className="rounded-lg w-full">Abrir conta</Button>
                        </div>
                        <div className="w-80">
                            <Button variant="grayPri" className="rounded-lg w-full">Saiba mais</Button>
                        </div>

                    </div>
                    <div className="flex justify-center mt-28">
                        <img src={ampulhetaEscritorio} alt="" className="rounded-md"/>
                    </div>

                    <div>
                        <h1>
                            Novidades de Cartão
                        </h1>
                        <div>
                            
                        </div>
                    </div>

                </div>





            </div>
            <Header enable={true} />
        </div>
    )
}