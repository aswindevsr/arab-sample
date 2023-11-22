import React from 'react'
import "./imageslider.css"
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';

import afc_1 from "../../assets/images/img_1.jpg";
import afc_2 from '../../assets/images/img_2.jpg';
import afc_3 from '../../assets/images/img_3.jpg';
import afc_4 from '../../assets/images/img_4.jpg';
import afc_5 from '../../assets/images/img_5.jpg';
import afc_6 from '../../assets/images/img_6.jpg';
import afc_7 from '../../assets/images/img_7.jpg';
import afc_8 from '../../assets/images/img_8.jpg';

function ImageSlider() {
  return (
    <div className="container">
      <h2 className="heading">IMAGE SLIDER</h2>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src={afc_1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={afc_2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={afc_3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={afc_4} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={afc_5} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={afc_6} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={afc_7} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={afc_8} alt="slide_image" />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default ImageSlider;