import React from 'react'
import 'aos/dist/aos.css';
import AOS from 'aos';
import 'intersection-observer';
import { useEffect } from 'react';
import data from '../../assets/Landing/db/data.json'

const OurSkills = () => {
  useEffect(() => {
        AOS.init();
        const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              document.querySelectorAll('.skills-animation').forEach(e => {
                e.style.width = '100%';
              });
            }
          });
        }, { threshold: 0.5 });
        const target = document.getElementById('developerSkills');
        if (target) observer.observe(target);
      }, []);
  return (
    <div id="content-two-box" className="lg:w-10/12 md:w:10/12 w-full m-auto">

      <div id="content-three" className="lg:w-full md:w-full w-10/12 m-auto mt-40">

        <div className="text-center text-4xl tracking-widest">Our <span className="tracking-widest bg-gradient-to-br from-blue-700 from-10% to-purple-700 to-100%0% w-56 text-transparent bg-clip-text">Skills</span></div>
          <div id="" className="w-full mt-8 flex justify-between" data-aos="slide-up" data-aos-duration="1200">
            <div id="delevopers" className="skill box-border relative flex items-center flex-col mt-10">


              <div className="w-10/12 mt-11 tracking-wider">


                <div className="flex w-5/12 items-center relative lg:right-0 right-4">
                  <img className="md:scale-100 scale-50" src="./src/assets/Landing/images/code.png" alt=""/>
                  <span className="relative lg:left-2 -left-2 lg:text-xl text-sm">Developers</span>
                </div>


                <div id="developerSkills" className="w-full -mt-2">


                  <div>
                    {
                        data.skills.development.map((skill, index) => (

                            
                            <div className="w-full flex flex-col lg:mt-12 mt-5">

                                <div className="w-full flex justify-between lg:text-lg text-xs">
                                    <span id="skillName">{skill.name}</span>
                                    <span id="skillValue" className="text-gray-500">{skill.value}%</span>
                                </div>

                                <div className="mt-2 relative z-10">
                                    <div style={{ background: "#6C63FF80"}} className="w-full rounded-full lg:h-2.5 h-1.5">
                                        <div style={{ width: skill.value + "%"}}> <div id="progress" className={"skills-animation relative bg-gradient-to-r from-blue-700 from-10% to-purple-700 to-50% lg:h-2.5 h-1.5 rounded-full box-border"} style={{width:"0%",boxShadow: "100px" }}></div>
                                        </div>
                                        </div>
                                </div>
                            </div>

                            

                        ))

                    }

                  </div>



                </div>

              </div>



            </div>



            <div id="designers" className="skill box-border relative flex items-center flex-col mt-10">

              <div className="w-10/12 mt-11 tracking-wider">


                <div className="flex w-5/12 items-center relative lg:right-0 right-4">
                  <img className="md:scale-100 scale-50" src="./src/assets/Landing/images/design.png" alt=""/>
                  <span className="relative lg:left-2 -left-2 lg:text-xl text-sm">Designers</span>
                </div>


                <div id="designerSkills" className="w-full -mt-2">

                {
                    data.skills.design.map((skill, index) => (


                        <div className="w-full flex flex-col lg:mt-12 mt-5">

                            <div className="w-full flex justify-between lg:text-lg text-xs">
                                <span id="skillName">{skill.name}</span>
                                <span id="skillValue" className="text-gray-500">{skill.value}%</span>
                            </div>

                            <div className="mt-2 relative z-10">
                                <div style={{ background: "#6C63FF80" }} className="w-full rounded-full lg:h-2.5 h-1.5">
                                <div style={{ width: skill.value + "%"}}><div id="progress" className="skills-animation relative bg-gradient-to-r from-blue-700 to-purple-700 lg:h-2.5 h-1.5 rounded-full box-border" style={{ width: "0px", boxShadow: "100px" }}></div></div>
                                </div>
                            </div>

                        </div>

                    ))
                }

                </div>



              </div>

            </div>


        </div>



      </div>

    </div>
  )
}

export default OurSkills