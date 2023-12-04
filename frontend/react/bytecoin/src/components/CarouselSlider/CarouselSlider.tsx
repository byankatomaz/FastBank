import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';

import image1 from '../../images/3D_Animation_Style_hourglass_with_red_sand_3.jpg';

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
      className='bg-white w-8/12'
    >
      <SwiperSlide className='flex items-center justify-center h-full'>
        <img src={image1} alt="" className='w-full h-full object-cover' />
      </SwiperSlide>
    </Swiper>
  );
}
