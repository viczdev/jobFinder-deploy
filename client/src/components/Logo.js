import React from "react";
import logo from "../assets/images/logo.png";
const Logo = (props) => {
  return (
    <img src={logo} alt="jobify" className="logo" width={props.width}></img>
  );
};

export default Logo;
