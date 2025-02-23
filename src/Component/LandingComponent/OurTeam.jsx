import React, { useState } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import data from "../../assets/Landing/db/data.json";
import { Link } from "react-router-dom";

import img from "../../assets/Landing/images/nik.png";
import axios from "axios";

const OurTeam = () => {
  const [List, setList] = useState(null);

  const getlist = async () => {
    const res = await axios.get("https://reevan.ir/api/getPersonalPage/");
    setList(res.data);
  };
  useEffect(() => {
    AOS.init();
    getlist();
  }, []);
  return (
    <div id="content-one-box" className="lg:w-10/12 md:w:10/12 w-full m-auto">
      <div id="content-two" className="w-full m-auto mt-40">
        <div className="text-center text-4xl tracking-wider">
          Our{" "}
          <span className="tracking-wider bg-gradient-to-br from-blue-700 from-10% to-purple-700 to-100%0% w-56 text-transparent bg-clip-text">
            Team
          </span>
        </div>
        <div
          id="team"
          className="3xl:w-10/12 w-full m-auto flex lg:justify-center md:justify-around justify-evenly flex-wrap lg:mt-20 mt-8 lg:gap-10"
        >
          {List?.map((item) => (
            <div data-aos="fade-up" data-aos-duration="900">
              <Link to={"/Profile"}>
                <div
                  key={item}
                  className="m-auto lg:w-[366px] lg:h-[245px] md:w-[366px] md:h-[245px] w-[170px] h-[122px] students box-border relative flex items-center flex-col justify-around lg:mt-0 mt-10"
                >
                  <div className="">
                    <img
                      src={item.profilePicture}
                      className="rounded-full w-36 h-36"
                    />
                  </div>
                  <div className="names lg:text-xl md:text-xl text-[12px] tracking-wider">
                    {item.name}
                  </div>
                  <div
                    className="skills relative lg:-top-3 md:-top-3 -top-2 lg:text-lg md:text-lg text-[9px] tracking-widest"
                    style={{ fontFamily: "inter" }}
                  >
                    ({})
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
