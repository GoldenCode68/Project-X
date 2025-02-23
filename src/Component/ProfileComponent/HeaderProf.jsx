import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const HeaderProf = () => {
  return (
    <div className="w-10/12 m-auto mt-12 flex justify-between items-end">
      <Link to={"/"}>
        <div className="w-24">
          <img src={logo} />
        </div>
      </Link>
    </div>
  );
};

export default HeaderProf;
