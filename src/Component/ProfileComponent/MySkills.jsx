import React, { useEffect, useState } from "react";
import AOS from "aos";
import logoskill from "../../assets/Profile/img/Vector.png";
import axios from "axios";
import { useParams } from "react-router-dom";

const MySkills = () => {
  const { id } = useParams();
  const [List, setList] = useState(null);

  const getlist = async () => {
    const res = await axios.get("https://reevan.ir/api/getPersonalPage/");
    const datafind = res.data.find((item) => {
      return item.id === id;
    });
    setList(datafind);
  };

  useEffect(() => {
    AOS.init();
    getlist();
  }, []);

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="900"
      className="border-2 border-violet-800 w-3/4 h-full m-auto rounded-3xl mt-20 bg-gradient-to-b from-zinc-900  to-black z-10"
    >
      <div className="w-11/12 h-5/6 m-auto mt-8">
        {/* logo skill and text */}
        <div className="border-violet-800 w-full h-10">
          <div className="border-red-800 w-10 h-10 float-left">
            <img src={logoskill} />
          </div>
          <div
            className="float-left w-36 h-10 ml-2 text-xl leading-10 mt-1"
            style={{ fontFamily: "poppins" }}
          >
            Skills
          </div>
        </div>
        {/* Skills */}

        {List &&
          List.skills &&
          List.skills.map((skill) => (
            <div className="mb-4 mt-10" key={skill.id}>
              <div className="flex justify-between mb-2">
                <span>{skill.name}</span>
                <span
                  className="text-slate-600"
                  style={{ fontFamily: "satoshi" }}
                >
                  {skill.value}%
                </span>
              </div>
              <div className="w-full bg-blue-950 rounded-full h-2.5">
                <div
                  className="bg-gradient-to-l from-purple-500 to-blue-600 h-2.5 rounded-full blur-sm"
                  style={{ width: `${skill.value}%` }}
                ></div>
              </div>
            </div>
          ))}
        <div className="mt-20"></div>
        {/*  */}
      </div>
    </div>
  );
};

export default MySkills;
