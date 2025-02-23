import React from "react";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <div
      id="header"
      className="w-10/12 m-auto mt-12 flex justify-between items-end"
    >
      <div className="w-24">
        <img src={logo} />
      </div>
    </div>
  );
};

export default Header;
