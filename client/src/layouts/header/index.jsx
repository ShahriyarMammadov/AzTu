import React, { useState } from "react";
import "./index.scss";
import aztuLogo from "../../assets/images/aztu.png";
import { Link, NavLink } from "react-router-dom";
import { Dropdown, Drawer, Collapse, Divider } from "antd";

const Header = () => {
  const [toggleBtn, setToggleBtn] = useState(false);

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

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
    setToggleBtn(false);
  };
  const onChange = (e) => {
    setPlacement(e.target.value);
  };

  const { Panel } = Collapse;

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
          <div
            id="responsiveMenu"
            className={toggleBtn ? "change" : "menuBar"}
            onClick={() => {
              showDrawer(), setToggleBtn(!toggleBtn);
            }}
          >
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
        </nav>
      </div>
      <div className="menu">
        <Drawer
          title="AzTu"
          placement="left"
          closable={false}
          onClose={onClose}
          open={open}
          key="left"
        >
          <Collapse size="small">
            <Panel header="Haqqımızda" key="1">
              <Link
                to={"/fexriDoktorlar"}
                onClick={() => {
                  onClose(), setToggleBtn(false);
                }}
              >
                Fəxri Doktorlarımız
              </Link>
              <Link
                to={"/fexriMezunlar"}
                onClick={() => {
                  onClose(), setToggleBtn(false);
                }}
              >
                Fəxri Məzunlarımız
              </Link>
              <Link
                to={"/qehremanlarimiz"}
                onClick={() => {
                  onClose(), setToggleBtn(false);
                }}
              >
                Qəhrəmanlarımız
              </Link>
              <Link
                to={"/strategiya"}
                onClick={() => {
                  onClose(), setToggleBtn(false);
                }}
              >
                Strategiya
              </Link>
              <Link
                to={"/rektor"}
                onClick={() => {
                  onClose(), setToggleBtn(false);
                }}
              >
                Rektor
              </Link>
              <Link
                to={"/sabiqRektorlar"}
                onClick={() => {
                  onClose(), setToggleBtn(false);
                }}
              >
                Sabiq Rektorlarımız
              </Link>
              <Link
                to={"/suralar"}
                onClick={() => {
                  onClose(), setToggleBtn(false);
                }}
              >
                Şuralar
              </Link>
              <Link
                to={"/prorektorlar"}
                onClick={() => {
                  onClose(), setToggleBtn(false);
                }}
              >
                Prorektorlar
              </Link>
            </Panel>
          </Collapse>
          <Link to={"/blog"} className="menuBlog">
            Blog
          </Link>
        </Drawer>
      </div>
    </header>
  );
};

export default Header;
