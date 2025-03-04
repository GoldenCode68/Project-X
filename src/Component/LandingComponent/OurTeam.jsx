import React, { useState } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import { Link } from "react-router-dom";
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
              <Link to={`Profile/${item.id}`}>
                <div
                  key={item.id}
                  className="m-auto lg:w-[366px] lg:h-[245px] md:w-[366px] md:h-[245px] w-[170px] h-[122px] students box-border relative flex items-center flex-col justify-around lg:mt-0 mt-10"
                >
                  <div className="">
                    <img
                      id="imgourteam"
                      src={item.profilePicture}
                      className="rounded-full w-36 h-36 mt-3"
                    />
                  </div>
                  <div className="names lg:text-xl md:text-xl text-[12px] tracking-wider mt-2">
                    {item.name}
                  </div>

                  <div className="text-white mb-5" id="titleourteam">
                    <span style={{ fontFamily: "satoshi" }}>
                      (
                      {item.title.split(" ").map((word, index) => (
                        <span
                          key={index}
                          style={{ color: index % 2 === 0 ? "blue" : "white" }}
                        >
                          {" "}
                          {word}{" "}
                        </span>
                      ))}
                      )
                    </span>
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
