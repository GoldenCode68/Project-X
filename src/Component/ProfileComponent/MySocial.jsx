import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import AOS from "aos";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";


import slide1 from "../../assets/Landing/images/example.png";
import slide2 from "../../assets/Landing/images/example1.png";
import slide3 from "../../assets/Landing/images/example2.png";

const MySocial = () => {
  const splideRef = useRef(null);

  // تابع برای انتقال به اسلاید مشخص با کلیک
  const handleSlideClick = (index) => {
    if (splideRef.current) {
      splideRef.current.go(index);
    }
  };

  return (
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


      <div className="w-10/12 flex justify-between mt-20 m-auto">
          <div className="container mx-auto">
          <Splide
              ref={splideRef}
              options={{
                type: "loop", // اسلاید بی‌نهایت
                perPage: 5, // نمایش ۵ اسلاید در هر صفحه
                focus: "center", // اسلاید وسط به عنوان اولین اسلاید
                gap: "0rem", // فاصله بین اسلایدها
                arrows: false, // نمایش فلش‌های پیمایش
                pagination: false, // غیرفعال کردن صفحه‌بندی
                drag: "free", // فعال‌سازی قابلیت درگ (کشیدن اسلایدها)
                snap: true, // اسنپ به نزدیک‌ترین اسلاید
                autoplay: true, // فعال کردن autoplay
                interval: 4000, // مدت زمان نمایش هر اسلاید
                breakpoints: {
                  768: {
                    perPage: 3,
                  },
                  480: {
                    perPage: 3,
                  },
                },
              }}
            >
              <SplideSlide onClick={() => handleSlideClick(0)}>
                <div className=" h-64 text-white flex items-center justify-center lg:scale-100 scale-75">
                  <img src={slide1} alt="" />
                </div>
              </SplideSlide>
              <SplideSlide onClick={() => handleSlideClick(1)}>
                <div className=" h-64 text-white flex items-center justify-center lg:scale-100 scale-75">
                  <img src={slide2} alt="" />
                </div>
              </SplideSlide>
              <SplideSlide onClick={() => handleSlideClick(2)}>
                <div className="h-64 text-white flex items-center justify-center lg:scale-100 scale-75">
                  <img src={slide3} alt="" />
                </div>
              </SplideSlide>
              <SplideSlide onClick={() => handleSlideClick(3)}>
                <div className="h-64 text-white flex items-center justify-center lg:scale-100 scale-75">
                  <img src={slide1} alt="" />
                </div>
              </SplideSlide>
              <SplideSlide onClick={() => handleSlideClick(4)}>
                <div className="h-64 text-white flex items-center justify-center lg:scale-100 scale-75">
                  <img src={slide2} alt="" />
                </div>
              </SplideSlide>
              <SplideSlide onClick={() => handleSlideClick(5)}>
                <div className="h-64 text-white flex items-center justify-center lg:scale-100 scale-75">
                  <img src={slide3} alt="" />
                </div>
              </SplideSlide>
              <SplideSlide onClick={() => handleSlideClick(6)}>
                <div className="h-64 text-white flex items-center justify-center lg:scale-100 scale-75">
                  <img src={slide1} alt="" />
                </div>
              </SplideSlide>
              <SplideSlide onClick={() => handleSlideClick(7)}>
                <div className="h-64 text-white flex items-center justify-center lg:scale-100 scale-75">
                  <img src={slide2} alt="" />
                </div>
              </SplideSlide>
            </Splide>
          </div>
        </div>
    </div>
  );
};

export default MySocial;
