import React from "react";
import Logo from "../Logo/Logo";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header_component">
        <Logo />
      </div>
    </div>
  );
};

export default Header;
