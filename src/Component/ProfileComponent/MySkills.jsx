// import React, { useEffect } from "react";
import AOS from "aos";
import logoskill from "../../assets/Profile/img/Vector.png";
import { useParams } from "react-router-dom";

const MySkills = () => {
  const { id } = useParams();

  const staticData = [
    {
      id: "1",
      skills: [
        { id: 1, name: "HTML", value: 80 },
        { id: 2, name: "CSS", value: 80 },
        { id: 3, name: "JavaScript", value: 70 },
        { id: 4, name: "React", value: 85 },
        { id: 4, name: "git", value: 60 },
      ],
    },
    {
      id: "2",
      skills: [
        { id: 1, name: "typescript", value: 85 },
        { id: 2, name: "Django", value: 40 },
        { id: 3, name: "MySQL", value: 70 },
      ],
    },
    {
      id: "3",
      skills: [
        { id: 1, name: "HTML", value: 80 },
        { id: 2, name: "CSS", value: 80 },
        { id: 3, name: "JavaScript", value: 70 },
        { id: 4, name: "React", value: 85 },
        { id: 4, name: "Django", value: 50 },
      ],
    },
    {
      id: "4",
      skills: [
        { id: 1, name: "UI", value: 85 },
        { id: 2, name: "UX", value: 40 },
        { id: 3, name: "photoshop", value: 70 },
      ],
    },
    {
      id: "5",
      skills: [
        { id: 1, name: "UI", value: 40 },
        { id: 2, name: "UX", value: 85 },
        { id: 3, name: "ilastrator", value: 70 },
      ],
    },
  ];

  const MyData = staticData.find((item) => item.id === id);

  // useEffect(() => {
  //   AOS.init();
  // }, []);

  // DAYNAMIC DATA

  // const getlist = async () => {
  //   const res = await axios.get("https://reevan.ir/api/getPersonalPage/");
  //   const datafind = res.data.find((item) => {
  //     return item.id === id;
  //   });
  //   setList(datafind);
  // };

  // useEffect(() => {
  //   AOS.init();
  //   getlist();
  // }, []);

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="900"
      className="border-2 border-violet-800 w-3/4 h-full m-auto rounded-3xl mt-20 bg-gradient-to-b from-zinc-900 to-black z-10"
    >
      <div className="w-11/12 h-5/6 m-auto mt-8">
        {/* logo skill and text */}
        <div className="w-full h-10 flex items-center">
          <img src={logoskill} alt="skills logo" className="w-10 h-10" />
          <div
            className="ml-2 text-xl leading-10 mt-1"
            style={{ fontFamily: "poppins" }}
          >
            Skills
          </div>
        </div>

        {/* Skills */}
        {MyData &&
          MyData.skills.map((skill) => (
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
      </div>
    </div>
  );
};

export default MySkills;
