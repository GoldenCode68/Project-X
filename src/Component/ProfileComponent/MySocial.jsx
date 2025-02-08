import React, { useState } from "react";

const MySocial = () => {
  return (
    <div className="m-auto w-4/5 h-full mt-20">
      {/* title */}
      <div
        className="m-auto mb-8 w-40 h-10 bg-gradient-to-r from-blue-600 to-purple-500  bg-clip-text text-transparent text-3xl"
        style={{ fontFamily: "poppins" }}
      >
        My Social
      </div>
      {/* BOX SOCIAL */}
      <div className="mt-14">
        {/* top--1 */}
        <div className="w-full h-32 flex mb-4">
          {/* email */}
          <div className="w-7/12 h-32 mr-2 rounded-3xl bg-blue-950">
            <div className="border-2 w-44 h-20 flex">
              <img className="border-2 w-30 h-20" src="./src/assets/Profile/img/.icon effects.png"/>
              <img className="border-2 w-10 h-16"/>
            </div>
          </div>
          {/* figma */}
          <div className="w-5/12 h-32 ml-2 rounded-3xl bg-gradient-to-b from-zinc-800 to-slate-950"></div>
        </div>
        {/* top--2 */}
        {/* instagram */}
        <div className="w-full h-32 mb-4 rounded-3xl bg-gradient-to-br via-blue-500 from-sky-500 via-yellow-500 via-red-500 to-purple-500 "></div>
        {/* top--3 */}
        <div className=" w-full h-32 flex mb-4">
          {/* linkdin */}
          <div className="w-7/12 h-32 mr-2 rounded-3xl bg-gradient-to-b from-cyan-300 to-sky-600"></div>
          {/* dev */}
          <div className="w-5/12 h-32 ml-2 rounded-3xl bg-gradient-to-b from-gray-50 to-gray-200"></div>
        </div>
        {/* top--4 */}
        {/* github */}
        <div className="w-full h-32 rounded-3xl bg-gradient-to-t from-black to-gray-800"></div>
      </div>
      {/*  */}
    </div>
  );
};

export default MySocial;
