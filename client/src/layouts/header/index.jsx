import React, { useEffect, useState } from "react";
import "./index.scss";
import aztuLogo from "../../assets/images/aztu.png";
import { Link, NavLink } from "react-router-dom";
import { Button, Dropdown } from "antd";

const Header = () => {
  const handleToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const items = [
    {
      key: "1",
      label: <Link to="/fexriDoktorlar">Fəxri Doktorlarımız</Link>,
    },
    {
      key: "2",
      label: <Link to="/fexriMezunlar">Fəxri Məzunlarımız</Link>,
    },
    {
      key: "3",
      label: <Link to="/qehremanlarimiz">Qəhrəmanlarımız</Link>,
    },
    {
      key: "4",
      label: <Link to="/strategiya">Strategiya</Link>,
    },
    {
      key: "5",
      label: <Link to="/rektor">Rektor</Link>,
    },
    {
      key: "6",
      label: <Link to="/sabiqRektorlar">Sabiq Rektorlarımız</Link>,
    },
    {
      key: "7",
      label: <Link to="/suralar">Şuralar</Link>,
    },
    {
      key: "8",
      label: <Link to="/prorektorlar">Prorektorlar</Link>,
    },
  ];

  return (
    <header id="header">
      <div className="header">
        <div className="logo">
          <Link to={"/"}>
            <img src={aztuLogo} alt="AzTu" onClick={handleToTop} />
          </Link>
        </div>
        <nav>
          <Dropdown
            menu={{
              items,
            }}
            placement="bottomLeft"
            arrow
          >
            <Link>Haqqımızda</Link>
          </Dropdown>
          <NavLink to={"/blog"}>Blog</NavLink>
          <NavLink to={"/login"}>Daxil Ol</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
