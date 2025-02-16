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
          <div className="footer w-7/12 h-32 mr-2 rounded-3xl bg-blue-950 flex">
            {/* part one */}
            <div className="w-36 h-20 flex">
              <img
                className="w-22 h-14 ml-7 mt-3"
                src="./src/assets/Profile/img/.icon effects.png"
              />
              <img
                className="w-6 h-6 ml-3 mt-3"
                src="./src/assets/Profile/img/External_00Link.png"
              />
            </div>
            {/* part tow */}
            <div className="part-tow w-72 h-20 ml-3">
              <div className="w-20 h-5 mt-4" style={{ fontFamily: "space" }}>
                Email
              </div>
              <div className="w-60 h-5 mt-1" style={{ fontFamily: "inter" }}>
                satarsilent@gmail.com
              </div>
            </div>
          </div>
          {/* figma */}
          <div className="footer w-5/12 h-32 ml-2 rounded-3xl bg-gradient-to-b from-zinc-800 to-slate-950 flex">
            {/* part one */}
            <div className="w-32 h-20 flex">
              <img
                className="w-22 h-14 ml-7 mt-3"
                src="./src/assets/Profile/img/Main.png"
              />
              <img
                className="w-6 h-6 ml-3 mt-3"
                src="./src/assets/Profile/img/External_00Link.png"
              />
            </div>
            {/* part tow */}
            <div className="w-72 h-20">
              <div className="w-20 h-5 mt-4" style={{ fontFamily: "space" }}>
                Figma
              </div>
              <div className="w-60 h-5 mt-1" style={{ fontFamily: "inter" }}>
                @aqsam
              </div>
            </div>
          </div>
        </div>
        {/* top--2 */}
        {/* instagram */}
        <div className="footer flex w-full h-32 mb-4 rounded-3xl bg-gradient-to-br via-blue-500 from-sky-500 via-yellow-500 via-red-500 to-purple-500 ">
          {/* part one */}
          <div className="w-36 h-20 flex">
            <img
              className="w-22 h-14 ml-7 mt-3"
              src="./src/assets/Profile/img/.icon effect00s.png"
            />
            <img
              className="w-6 h-6 ml-3 mt-3"
              src="./src/assets/Profile/img/External_00Link.png"
            />
          </div>
          {/* part tow */}
          <div className="w-72 h-20 ml-3">
            <div className="w-32 h-5 mt-4" style={{ fontFamily: "space" }}>
              Instagram
            </div>
            <div className="w-60 h-5 mt-1" style={{ fontFamily: "inter" }}>
              @dev.aqsam
            </div>
          </div>
        </div>
        {/* top--3 */}
        <div className="w-full h-32 flex mb-4">
          {/* linkdin */}
          <div className="footer w-7/12 h-32 mr-2 rounded-3xl bg-gradient-to-b from-cyan-300 to-sky-600 flex">
            {/* part one */}
            <div className="w-36 h-20 flex">
              <img
                className="w-22 h-14 ml-7 mt-3"
                src="./src/assets/Profile/img/Mai00n.png"
              />
              <img
                className="w-6 h-6 ml-3 mt-3"
                src="./src/assets/Profile/img/External_00Link.png"
              />
            </div>
            {/* part tow */}
            <div className="w-72 h-20 ml-3">
              <div className="w-20 h-5 mt-4" style={{ fontFamily: "space" }}>
                Linkedin
              </div>
              <div className="w-60 h-5 mt-1" style={{ fontFamily: "inter" }}>
                @m_aqsam11
              </div>
            </div>
          </div>
          {/* dev */}
          <div className="footer w-5/12 h-32 ml-2 rounded-3xl bg-gradient-to-b from-gray-50 to-gray-200 flex">
            {/* part one */}
            <div className="w-36 h-20 flex">
              <img
                className="w-22 h-14 ml-7 mt-3"
                src="./src/assets/Profile/img/.icon effec00ts.png"
              />
              <img
                className="w-5 h-5 ml-3 mt-3"
                src="./src/assets/Profile/img/Vect00or.png"
              />
            </div>
            {/* part tow */}
            <div className="w-72 h-20 ml-3 text-black">
              <div className="w-40 h-5 mt-4 " style={{ fontFamily: "space" }}>
                Dev-Community
              </div>
              <div
                className="w-60 h-5 mt-1 text-black"
                style={{ fontFamily: "inter" }}
              >
                @maqsam
              </div>
            </div>
          </div>
        </div>
        {/* top--4 */}
        {/* github */}
        <div className="footer w-full h-32 rounded-3xl bg-gradient-to-t from-black to-gray-800 flex">
          {/* part one */}
          <div className="w-36 h-20 flex">
            <img
              className="w-22 h-14 ml-7 mt-3"
              src="./src/assets/Profile/img/Frame 229.png"
            />
            <img
              className="w-6 h-6 ml-3 mt-3"
              src="./src/assets/Profile/img/External_00Link.png"
            />
          </div>
          {/* part tow */}
          <div className="w-72 h-20 ml-3">
            <div className="w-20 h-5 mt-4" style={{ fontFamily: "space" }}>
              GitHub
            </div>
            <div className="w-60 h-5 mt-1" style={{ fontFamily: "inter" }}>
              senator/github.com
            </div>
          </div>
        </div>
      </div>
      {/*  */}
    </div>
  );
};

export default MySocial;
