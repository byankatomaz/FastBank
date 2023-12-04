import { Button, Header, Footer, CarouselSlider } from "components"

import card2 from '../images/card2.jpg';
import ampulheta2 from '../images/ampulheta2.jpg';
import ampulhetaEscritorio from '../images/ampulhetaEscritorio.jpg';
import { Link } from "react-router-dom";


export function Home() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div>
            <div className="container flex flex-col">
                <div>
                    <div className="fontDiv text-5xl font-extralight m-5 flex-col sm:flex-row">
                        <div>
                            <span className="textGradiente w-full">&lt;Não perca mais tempo/&gt;</span>
                        </div>
                        <div className="sm:p-8 mt-8 md:ml-10 sm:mt-0">
                            <span>ByteKoin: Transformando Seu Futuro Financeiro com Inovação e Confiabilidade</span>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row md:gap-8 justify-start mt-8 m-5">
                        <div className="w-full md:w-80 mb-4 md:mb-0">
                            <Link to={'/signUp'}>
                                <Button variant="primary" className="rounded-lg w-full">
                                    Abrir conta
                                </Button>
                            </Link>
                        </div>
                        <div className="w-full md:w-80">
                            <Button variant="grayPri" className="rounded-lg w-full">Saiba mais</Button>
                        </div>
                    </div>
                    <div className="flex m-5 justify-center items-center p-2 mt-12">
                        <img src={ampulhetaEscritorio} alt="" className="rounded-md" />
                    </div>

                    <div className="m-5 p-3 bg-zinc-800 rounded-lg py-8 flex flex-col gap-10 items-center justify-center mt-16">
                        <h1 className="text-3xl font-semibold">Novidades de Cartão</h1>
                        <div className="containerCartao">

                            <div>
                                <img src={card2} alt="" className="rounded-md md:mb-0" />
                            </div>
                            <div className="p-8 md:pl-0 flex flex-col self-center">
                                <p className="font-medium mb-5 text-3xl">O cartão de crédito ideal para você, sem anuidade</p>
                                <p className="font-extralight text-xl">Só aqui você encontra todas as vantagens de ter um cartão de crédito internacional.</p>
                            </div>
                        </div>
                    </div>

                    <div className="m-5 bg-primaryDark rounded-lg flex flex-col mt-16 p-8 items-center gap-8">
                        <p className="font-bold text-2xl">
                            Seu dinheiro, suas melhores escolhas.
                        </p>
                        <p>
                            ByteKoin irá te ajudar a manter tudo muito bem organizado
                        </p>
                    </div>


                </div>

            
                <CarouselSlider />
                

                <div className="mt-10">
                    <section id="about-us" className="py-10 bg-gray-100 rounded-md">
                        <div className="p-16 flex flex-col">
                            <h2 className="text-3xl font-bold mb-6 text-center text-black">Sobre Nós</h2>
                            <p className="text-gray-700 text-center mb-8">
                                Bem-vindo ao ByteKoin Bank, onde buscamos proporcionar a melhor experiência bancária para nossos clientes.
                            </p>
                            <div className="flex justify-center">
                                <div className="max-w-2xl">
                                    <p className="text-gray-700 mb-4">
                                        No ByteKoin Bank, estamos comprometidos em oferecer serviços financeiros inovadores e seguros.
                                        Nossa equipe dedicada trabalha incansavelmente para atender às necessidades de nossos clientes e fornecer soluções bancárias de alta qualidade.
                                    </p>
                                    <p className="text-gray-700">
                                        Seja você um cliente individual ou uma empresa, estamos aqui para ajudar a construir um futuro financeiro sólido.
                                        Explore nossos produtos e serviços e descubra como o ByteKoin Bank pode fazer a diferença em sua vida financeira.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>


            </div>

            <Header login={true} signUp={true} />
            <hr />
            <Footer />
        </div>
    )
}