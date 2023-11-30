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

                            <Button className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                    <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                                    </svg>
                                    <span className="sr-only">Previous</span>
                                </span>
                            </Button>
                            <Button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                    <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                                    </svg>
                                    <span className="sr-only">Next</span>
                                </span>
                            </Button>
                        </div>



                    </div>
                </div>
            </div>

            <Header enable={true} />
        </div>
    )
}