import React from "react";
import Nav from "./Nav";
import logo from "../images/logo.png";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="logo" />
    </div>
  );
};

export default Header;
