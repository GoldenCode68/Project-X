import React from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import data from "../../assets/Landing/db/data.json";
import { Link } from "react-router-dom";

const OurTeam = () => {
  useEffect(() => {
    AOS.init();
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
          className="3xl:w-10/12 w-full m-auto flex justify-around flex-wrap mt-8"
        >
          {data.people.map((person, index) => (
            <div data-aos="fade-up" data-aos-duration="900">
              <Link to={"/Profile"}>
                <div
                  key={index}
                  className="m-auto students box-border relative flex items-center flex-col justify-around mt-10"
                >
                  <div className="imgs mt-3">
                    <img src="./src/assets/Landing/images/nik.png" alt="" />
                  </div>
                  <div className="names text-xl tracking-wider">
                    {person.name}
                  </div>
                  <div
                    id="personSkill"
                    className="skills relative -top-3 text-lg tracking-widest"
                  >
                    (Junior{" "}
                    <span className="bg-gradient-to-br from-blue-700 from-10% to-purple-700 to-100%0% text-transparent bg-clip-text">
                      {person.skill}
                    </span>{" "}
                    {person.title})
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
