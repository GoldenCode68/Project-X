import React, { useEffect } from "react";
import AOS from "aos";

const Contact = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="900"
      id="content"
      className="lg:w-10/12 md:w:10/12 w-full m-auto"
    >
      <div id="content-four" className="w-full m-auto mt-40 lg:block hidden">
        <div className="banner bg-no-repeat bg-cover h-44 w-full box-border relative flex justify-center items-center flex-col mt-10">
          <div className="w-10/12 h-20 flex justify-between items-center">
            <div className="flex justify-between items-center">
              <div>
                <img src="./src/assets/Landing/images/paperplane.png" alt="" />
              </div>
              <div className="h-20 flex flex-col justify-between relative left-4">
                <p
                  style={{ fontFamily: "space" }}
                  className="text-3xl font-bold"
                >
                  Have any project idea?
                </p>
                <p
                  style={{ fontFamily: "actor", color: "#E6E6E682" }}
                  className="text-sm w-64"
                >
                  If you have a project idea, contact us and present your idea
                </p>
              </div>
            </div>

            <div
              style={{ fontFamily: "satoshi" }}
              className="flex items-center justify-center text-sm w-52 h-10 rounded-full bg-gradient-to-r from-blue-700 from-10% to-purple-700 to-80%"
            >
              Contact Now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
