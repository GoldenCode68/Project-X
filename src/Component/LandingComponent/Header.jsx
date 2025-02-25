import React from "react";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <div className="w-10/12 m-auto mt-12 flex items-end">
        <div className="w-20 imgheader">
          <img src={logo} />
        </div>
        <span className="textheader text-7xl ml-2 bg-gradient-to-tl from-blue-700 from-10% to-purple-700 to-100%0% text-transparent bg-clip-text" style={{ fontFamily: "poppins" }}>REE</span>
        <span className="textheader text-7xl bg-gradient-to-br from-blue-700 from-10% to-purple-700 to-100%0% text-transparent bg-clip-text" style={{ fontFamily: "satoshi" }}>VAN</span>
    </div>
  );
};

export default Header;
