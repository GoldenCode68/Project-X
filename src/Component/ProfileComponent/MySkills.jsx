import React, { useState } from "react";

const MySkills = () => {
  const [ListSkill, setListSkill] = useState([
    { skill: "Figma", percentage: 70 },
    { skill: "Adobe XD", percentage: 25 },
    { skill: "Photoshop", percentage: 100},
    { skill: "Illustrator", percentage: 85 },
    { skill: "Aftereffect", percentage: 45 },
    { skill: "Indesign", percentage: 75 },
  ]);

  return (
    <div className="border-2 border-violet-800 w-3/4 h-full m-auto rounded-3xl mt-20 bg-gradient-to-b from-zinc-900  to-black z-10">
      <div className="w-11/12 h-5/6 m-auto mt-8">
        {/* logo skill and text */}
        <div className="border-violet-800 w-full h-10">
          <div className="border-red-800 w-10 h-10 float-left">
            <img src="./src/assets/Profile/img/Vector.png" />
          </div>
          <div
            className="float-left w-36 h-10 ml-2 text-xl leading-10 mt-1"
            style={{ fontFamily: "poppins" }}
          >
            Design Skills
          </div>
        </div>
        {/* Skills */}
        {ListSkill.map((item) => {
          return (
            <div className="mb-4 mt-10" key={item}>
              <div className="flex justify-between mb-1">
                <span>{item.skill}</span>
                <span
                  className="text-slate-600"
                  style={{ fontFamily: "satoshi" }}
                >
                  {item.percentage}%
                </span>
              </div>
              <div className="w-full bg-blue-950 rounded-full h-2.5">
                <div
                  className="bg-gradient-to-l from-purple-500 to-blue-600 h-2.5 rounded-full blur-sm"
                  style={{ width: `${item.percentage}%` }}
                ></div>
              </div>
            </div>
          );
        })}
        <div className="mt-20"></div>
        {/*  */}
      </div>
    </div>
  );
};

export default MySkills;
