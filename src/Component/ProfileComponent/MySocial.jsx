import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef } from 'react';

const MySocial = () => {

    const swiperRef = useRef(null); // ذخیره مرجع Swiper
  
    const handleSlideClick = (index) => {
      if (swiperRef.current) {
        const targetIndex = index - 2; // دو اسلاید قبل از اسلاید کلیک‌شده
        swiperRef.current.slideTo(targetIndex); // پرش به اسلاید هدف
      }
    };

  return (

        
    <div id="footer" className="lg:w-10/12 md:w-10/12 w-full m-auto lg:mt-48 mt-24">
        
    <div class="text-center text-4xl">Contact <span class="tracking-wider bg-gradient-to-br from-blue-700 from-10% to-purple-700 to-100%0% w-56 text-transparent bg-clip-text">Us</span></div>

    <div className="w-10/12 flex justify-between mt-24 m-auto">
      <Swiper
        effect="coverflow"
        coverflowEffect= {{
          rotate: 160,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        grabCursor={true}
        centeredSlides={false}
        slidesPerView={'5'}
        spaceBetween={'110'}
        loop={true} // Enable infinite loop
        className="w-full max-w-7xl"
      >
        <SwiperSlide className="swiper-slid cursor-pointer transition-opacity duration-500 text-center">
          <img src="./src/assets/Landing/images/example1.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide cursor-pointer transition-opacity duration-500">
          <img src="./src/assets/Landing/images/example2.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide cursor-pointer transition-opacity duration-500">
          <img src="./src/assets/Landing/images/example.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide cursor-pointer transition-opacity duration-500">
          <img src="./src/assets/Landing/images/example1.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide cursor-pointer transition-opacity duration-500">
          <img src="./src/assets/Landing/images/example2.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide cursor-pointer transition-opacity duration-500">
          <img src="./src/assets/Landing/images/example.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide cursor-pointer transition-opacity duration-500">
          <img src="./src/assets/Landing/images/example1.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide cursor-pointer transition-opacity duration-500">
          <img src="./src/assets/Landing/images/example2.png" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>

  </div>
    
  );
};

export default MySocial;
