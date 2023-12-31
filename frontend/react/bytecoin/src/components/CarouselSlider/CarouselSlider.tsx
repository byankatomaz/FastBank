import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';

import image1 from '../../images/3D_Animation_Style_hourglass_with_red_sand_3.jpg';
import image2 from '../../images/cardCarta.jpg';
import image3 from '../../images/Absolute_Reality_v16_woman_holding_an_hourglass_with_red_sand_0.jpg';

// Função que faz aparecer o carousel
export function CarouselSlider() {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className=' w-11/12 my-14'
    >
      <SwiperSlide className='flex items-center justify-center h-full'>
        <img src={image1} alt="" className='w-full h-full object-cover' />
      </SwiperSlide>
      <SwiperSlide className='flex items-center justify-center h-full'>
        <img src={image2} alt="" className='w-full h-full object-cover' />
      </SwiperSlide>
      <SwiperSlide className='flex items-center justify-center h-full'>
        <img src={image3} alt="" className='w-full h-80 object-cover' />
      </SwiperSlide>
    </Swiper>
  );
}
