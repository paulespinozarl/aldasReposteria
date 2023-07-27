// import Swiper core and required modules
import { Navigation, Scrollbar } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { bb_1, bb_2, bb_3, cup_1, cup_2, cup_3, cup_4, cup_5 } from '../../public'
import { SwapComp } from './SwapComp';


export const Galery = () => {
  return (
    <div className='max-w-4xl mx-auto'>
      <Swiper
          // install Swiper modules
          modules={[Navigation, Scrollbar]}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          spaceBetween={50}
          autoplay={true}
          slidesPerView={1}
          scrollbar={{ draggable: true }}
          className='h-64 lg:h-96'
        >
        <SwiperSlide> <SwapComp image={ bb_1 } texto="Agregar descripción"/> </SwiperSlide>
        <SwiperSlide> <SwapComp image={ bb_2 } texto="Agregar descripción"/> </SwiperSlide>
        <SwiperSlide> <SwapComp image={ bb_3 } texto="Agregar descripción"/> </SwiperSlide>
        <SwiperSlide> <SwapComp image={ cup_1 } texto="Agregar descripción"/> </SwiperSlide>
        <SwiperSlide> <SwapComp image={ cup_2 } texto="Agregar descripción"/> </SwiperSlide>
        <SwiperSlide> <SwapComp image={ cup_3 } texto="Agregar descripción"/> </SwiperSlide>
        <SwiperSlide> <SwapComp image={ cup_4 } texto="Agregar descripción"/> </SwiperSlide>
        <SwiperSlide> <SwapComp image={ cup_5 } texto="Agregar descripción"/> </SwiperSlide>
        <div className='swiper-button-next text-pink-300'></div>
        <div className='swiper-button-prev text-pink-300'></div>
      </Swiper>
    </div>
  );
};

