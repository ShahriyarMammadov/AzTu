import React, { useEffect, useState } from "react";
import "./index.scss";
import aztuLogo from "../../assets/images/aztu.png";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const handleToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <header id="header">
      <div className="header">
        <div className="logo">
          <Link to={"/"}>
            <img src={aztuLogo} alt="AzTu" onClick={handleToTop} />
          </Link>
        </div>
        <nav>
          <NavLink to={"/about"}>Haqqımızda</NavLink>
          <NavLink to={"/blog"}>Blog</NavLink>
          <NavLink to={"/login"}>Daxil Ol</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
