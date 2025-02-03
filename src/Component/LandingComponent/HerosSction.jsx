import React from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import Typed from "typed.js";
import { useEffect, useRef } from "react";

const HerosSction = () => {
  const text = useRef(null);
  useEffect(() => {
    AOS.init();
    var typed = new Typed(text.current, {
      strings: [
        "Welcome to our journey of innovation and growth. Here, we showcase our passion, skills, and achievements, reflecting the hard work and dedication we've put into our projects. Explore our work and see how we transform ideas into reality, one project at a time",
      ],
      typeSpeed: 20,
      backSpeed: 25,
      loop: false,
      showCursor: false,
    });
  }, []);
  return (
    <div id="hero-box" className="lg:w-10/12 md:w:10/12 w-full m-auto">
      <div
        id="heroSection"
        className="flex flex-col-reverse items-center justify-between lg:flex-row lg:items-start mt-28 lg:w-full md:w-full w-10/12 m-auto"
      >
        <div
          className="lg:text-5xl text-2xl tracking-wider lg:w-2/3 lg:mt-0 -mt-44"
          data-aos="fade-right"
          data-aos-duration="900"
        >
          <div className="text-3xl">Hi &#x1F44B;</div>
          <div id="hi" className="mt-6 text-3xl typed">
            we are
          </div>
          <div className="mt-6">
            <span className="text-blue-700">SITCA</span> Develope Team
          </div>
          <div
            id="text"
            style={{ fontFamily: "inter" }}
            class="lg:w-5/6 text-xl mt-6 text-justify w-full"
            ref={text}
          ></div>
        </div>
        <div
          className="lg:w-2/3 w-full"
          data-aos="fade-left"
          data-aos-duration="900"
        >
          <div
            id="logo-bg"
            style={{
              backgroundImage: "url(./src/assets/Landing/images/logo-bg.png)",
              width: "560px",
              height: "520px",
            }}
            className="bg-no-repeat bg-center relative m-auto md:left-0 lg:-top-14 -top-20 lg:left-14 -left-28 lg:scale-100 md:scale-100 scale-70"
          >
            <img
              className="relative left-11 top-16"
              width="411px"
              height="350px"
              src="./src/assets/Landing/images/logo.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HerosSction;
