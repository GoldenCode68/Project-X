import React, { useEffect, useState } from "react";
import AOS from "aos";

const MyPortfolio = () => {
  const [List, setList] = useState([{}]);

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="900"
      className="m-auto w-10/12 h-full mt-20"
    >
      {/* title */}
      <div
        className="m-auto mb-8 w-40 h-10 bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent text-3xl"
        style={{ fontFamily: "actor" }}
      >
        My Portfolio
      </div>
      {/* box web & github */}
      <div id="portfolio" className="flex justify-around flex-wrap">
        {/*  */}

        <div className="w-96 h-full border-2 border-violet-800 rounded-3xl bg-gradient-to-r from-zinc-900 to-black ml-1.5 mr-1.5 mb-10">
          <div className="my-protfolio w-80 h-96 m-auto mt-8 border-2 "></div>
          <div className="w-80 h-0.5 m-auto mt-10 bg-gradient-to-r from-purple-500 to-blue-600"></div>
          <div
            className="w-48 h-7 m-auto mt-5 bg-gradient-to-r from-purple-500 to-blue-600 bg-clip-text text-transparent text-2xl"
            style={{ fontFamily: "actor" }}
          >
            Portfolio Website
          </div>
          <div className="h-8"></div>
        </div>
        {/*  */}
      </div>
    </div>
  );
};

export default MyPortfolio;
