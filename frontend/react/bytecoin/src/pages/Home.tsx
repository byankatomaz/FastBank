import { Button, Header } from "components"

export function Home() {
    return (
        <div>
           
            <div className="container flex flex-col">
                <div>
                    <h1 className="fontDiv text-5xl font-extralight">
                        <span className="textGradiente">&lt;Não perca mais tempo/&gt;</span> No Bytecoin você terá as maiores facilidades para o dia a dia!
                    </h1>
                    <div className="flex gap-8 justify-start">
                        <Button variant="primary" className="rounded-lg w-80">Abrir conta</Button>
                        <Button variant="grayPri" className="rounded-lg w-80">Saiba mais</Button>
                    </div>
                    <section className="container bg-no-repeat custom-image "/>
                </div>


                


            </div>
            <Header enable={true} />
        </div>
    )
}