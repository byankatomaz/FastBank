import { Button, Header } from "components"
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import ampulheta2 from '../images/ampulheta2.jpg';
import ampulhetaEscritorio from '../images/ampulhetaEscritorio.jpg';


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
                    <div className="fontDiv text-5xl font-extralight m-6">
                        <div>
                            <span className="textGradiente w-full">&lt;Não perca mais tempo/&gt;</span>
                        </div>
                        <div className="p-8 md:pl-0 ">
                            <span>No Bytecoin você terá as maiores facilidades para o dia a dia!</span>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row md:gap-8 justify-start mt-8 m-5">
                        <div className="w-full md:w-80 mb-4 md:mb-0">
                            <Button variant="primary" className="rounded-lg w-full">Abrir conta</Button>
                        </div>
                        <div className="w-full md:w-80">
                            <Button variant="grayPri" className="rounded-lg w-full">Saiba mais</Button>
                        </div>
                    </div>
                    <div className="flex justify-center items-center p-2 mt-12">
                        <img src={ampulhetaEscritorio} alt="" className="rounded-md" />
                    </div>

                    <div className="mt-12 ml-5">
                        <h1 className="text-3xl font-semibold">Novidades de Cartão</h1>



                        <div id="animation-carousel" className="relative w-full" data-carousel="static">
                            <Slider {...settings}>
                                <div>
                                    <img src={ampulheta2} alt="Slide 1" />
                                </div>
                                <div>
                                    <img src={ampulhetaEscritorio} alt="Slide 2" />
                                </div>
                            </Slider>
                        </div>



                    </div>
                </div>
            </div>

            <Header enable={true} />
        </div>
    )
}