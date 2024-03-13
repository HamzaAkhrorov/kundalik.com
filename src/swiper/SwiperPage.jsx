import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useTranslation } from "react-i18next";


import './SwiperPage.css';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

export default function App() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const{t, i18n} =useTranslation();


  return (
    <div className='banner'>
      <Header/>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '-swiper-pagination-color': '#fff',
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
          <SwiperSlide className='SwaperSlide1'>
            <div className='shadow'></div>
          <div class="item">
          <p className='p'>{t("Slider.n139")}</p>
          <p>
          {t("Slider.n140")}
            </p>
            <button>
            {t("Slider.n147")}
            </button>
            
          </div>
            
            <img src="https://static.emaktab.uz/img/slider/uz/teachers.png" alt="" />
          </SwiperSlide>
          <SwiperSlide className='SwaperSlide2'>
          <div className='shadow'></div>
          <div class="item">
       <p className='p'>{t("Slider.n141")}</p>
          <p>
          {t("Slider.n142")}
            </p>
            <button>
            {t("Slider.n147")}
            </button>
          </div>
            
            <img src="https://static.emaktab.uz/img/slider/uz/parents.png" alt="" />
          </SwiperSlide>
          <SwiperSlide className='SwaperSlide3'>
          <div className='shadow'></div>
          <div class="item">
        <p className='p'>{t("Slider.n143")}</p>
          <p>
          {t("Slider.n144")}
            </p>
            <button>
            {t("Slider.n147")}
            </button>
          </div>
            <img src="https://static.emaktab.uz/img/slider/uz/students.png" alt="" />
          </SwiperSlide>
          <SwiperSlide className='SwaperSlide4'>
          <div className='shadow'></div>
          <div class="item">
          <p className='p'>{t("Slider.n145")}</p>
          <p>
          {t("Slider.n146")}
            </p>
            <button>
            {t("Slider.n147")}
            </button>
          </div>
            <img src="https://static.emaktab.uz/img/slider/uz/officials.png" alt="" />
          </SwiperSlide>
        
      </Swiper>
      <SwiperSlide>
      <div className='swipper-footer'></div>

      </SwiperSlide>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={50}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        
        <SwiperSlide className='SwiperSlide1'>

        </SwiperSlide>
        <SwiperSlide className='SwiperSlide2'>
          
        </SwiperSlide>
        <SwiperSlide className='SwiperSlide3'>
          
        </SwiperSlide>
        <SwiperSlide className='SwiperSlide4'>

        </SwiperSlide>
        
      </Swiper>
      <Footer/>
    </div>
  );
}
