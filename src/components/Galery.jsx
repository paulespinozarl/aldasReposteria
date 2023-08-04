// import Swiper core and required modules
import { Navigation, Scrollbar, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { galleta_1, torta_6 } from '../../public'
import { SwapComp } from './SwapComp';


export const Galery = () => {
  return (
    <div className='mx-auto mt-28 lg:mt-36 z-10'>
      <Swiper
          // install Swiper modules
          modules={[Navigation, Scrollbar, Autoplay]}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          spaceBetween={50}
          // autoplay={false}
          autoplay={{ delay: 3000 }}
          slidesPerView={1}
          scrollbar={{ draggable: true }}
          className='h-64 lg:h-128'
        >
        <SwiperSlide className='flex justify-center'> <SwapComp image={ galleta_1 } texto="Agregar descripción"/> </SwiperSlide>
        <SwiperSlide className='flex justify-center'> <SwapComp image={ torta_6 } texto="Agregar descripción"/> </SwiperSlide>
        <SwiperSlide className='flex justify-center'> <SwapComp image={ galleta_1 } texto="Agregar descripción"/> </SwiperSlide>
        <SwiperSlide className='flex justify-center'> <SwapComp image={ torta_6 } texto="Agregar descripción"/> </SwiperSlide>
        <SwiperSlide className='flex justify-center'> <SwapComp image={ galleta_1 } texto="Agregar descripción"/> </SwiperSlide>
        <SwiperSlide className='flex justify-center'> <SwapComp image={ torta_6 } texto="Agregar descripción"/> </SwiperSlide>
        <SwiperSlide className='flex justify-center'> <SwapComp image={ galleta_1 } texto="Agregar descripción"/> </SwiperSlide>
        <SwiperSlide className='flex justify-center'> <SwapComp image={ torta_6 } texto="Agregar descripción"/> </SwiperSlide>
        <div className='swiper-button-next text-pink-300'></div>
        <div className='swiper-button-prev text-pink-300'></div>
      </Swiper>
    </div>
  );
};

