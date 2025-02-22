import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import '@splidejs/splide/dist/css/splide.min.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import AOS from "aos";

// Import Swiper styles
import "swiper/css";
const Footer = () => {
  
  const splideRef = useRef(null);

  // تابع برای انتقال به اسلاید مشخص با کلیک
  const handleSlideClick = (index) => {
    if (splideRef.current) {
      splideRef.current.go(index);
    }
  };

  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-duration="900"
        id="footer"
        className="lg:w-10/12 md:w-10/12 w-full m-auto lg:mt-48 mt-24"
      >
        <div class="text-center text-4xl">
          Contact{" "}
          <span class="tracking-wider bg-gradient-to-br from-blue-700 from-10% to-purple-700 to-100%0% w-56 text-transparent bg-clip-text">
            Us
          </span>
        </div>

        <div className="w-10/12 flex justify-between mt-24 m-auto">
        <div className="container mx-auto mt-10">
        <Splide
            ref={splideRef}
            options={{
              type: 'loop',           // اسلاید بی‌نهایت
              perPage: 5,             // نمایش ۵ اسلاید در هر صفحه
              focus: 'center',        // اسلاید وسط به عنوان اولین اسلاید
              gap: '1rem',            // فاصله بین اسلایدها
              arrows: false,           // نمایش فلش‌های پیمایش
              pagination: false,      // غیرفعال کردن صفحه‌بندی
              drag: 'free',           // فعال‌سازی قابلیت درگ (کشیدن اسلایدها)
              snap: true,             // اسنپ به نزدیک‌ترین اسلاید
              autoplay: true,         // فعال کردن autoplay
              interval: 4000,         // مدت زمان نمایش هر اسلاید
              breakpoints: {
                768: {
                  perPage: 3,
                },
                480: {
                  perPage: 1,
                },
              },
            }}
          >
            <SplideSlide onClick={() => handleSlideClick(0)}>
              <div className=" h-64 text-white flex items-center justify-center">
                <img src="./src/assets/Landing/images/example.png" alt="" />
              </div>
            </SplideSlide>
            <SplideSlide onClick={() => handleSlideClick(1)}>
              <div className=" h-64 text-white flex items-center justify-center">
                <img src="./src/assets/Landing/images/example1.png" alt="" />
              </div>
            </SplideSlide>
            <SplideSlide onClick={() => handleSlideClick(2)}>
              <div className="h-64 text-white flex items-center justify-center">
                <img src="./src/assets/Landing/images/example2.png" alt="" />
              </div>
            </SplideSlide>
            <SplideSlide onClick={() => handleSlideClick(3)}>
              <div className="h-64 text-white flex items-center justify-center">
                <img src="./src/assets/Landing/images/example.png" alt="" />
              </div>
            </SplideSlide>
            <SplideSlide onClick={() => handleSlideClick(4)}>
              <div className="h-64 text-white flex items-center justify-center">
                <img src="./src/assets/Landing/images/example1.png" alt="" />
              </div>
            </SplideSlide>
            <SplideSlide onClick={() => handleSlideClick(5)}>
              <div className="h-64 text-white flex items-center justify-center">
                <img src="./src/assets/Landing/images/example2.png" alt="" />
              </div>
            </SplideSlide>
            <SplideSlide onClick={() => handleSlideClick(6)}>
              <div className="h-64 text-white flex items-center justify-center">
                <img src="./src/assets/Landing/images/example.png" alt="" />
              </div>
            </SplideSlide>
            <SplideSlide onClick={() => handleSlideClick(7)}>
              <div className="h-64 text-white flex items-center justify-center">
                <img src="./src/assets/Landing/images/example1.png" alt="" />
              </div>
            </SplideSlide>
          </Splide>
        </div>

        </div>
      </div>
      <div
        id="footer-bottom"
        class="mt-20 lg:text-sm text-2xs lg:tracking-wider"
      >
        <hr />
        <div class="p-10 text-center">
          Powered By Sampad IT & Computer Association(SITCA)
        </div>
      </div>
    </>
  );
};

export default Footer;
