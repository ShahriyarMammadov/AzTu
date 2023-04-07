import React from "react";
import "./index.scss";
import logo from "../../assets/images/aztu.png";

const Footer = () => {
  const handleToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer>
      <div className="footer">
        <div className="logo">
          <img src={logo} alt="AzTu" onClick={handleToTop} />
        </div>
        <nav>
          <div className="icons">
            <a href="https://www.instagram.com/aztueduaz/" target="_blank">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://twitter.com/aztueduaz" target="_blank">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a
              href="https://www.youtube.com/channel/UCu_PoZ-9DKNYs3hxuK9pW1Q"
              target="_blank"
            >
              <i className="fa-brands fa-youtube"></i>
            </a>
            <a
              href="https://www.linkedin.com/school/aztueduaz/"
              target="_blank"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a
              href="https://www.facebook.com/aztu1950.official/"
              target="_blank"
            >
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="https://t.me/aztu_edu_az" target="_blank">
              <i className="fa-brands fa-telegram"></i>
            </a>
          </div>
          <div className="address">
            <address>
              H.Cavid prospekti 25, Bakı, Azərbaycan AZ 1073 Azərbaycan Texniki
              Universiteti.
            </address>
          </div>
        </nav>

        <div className="contact">
          <h4>
            TEL: <a href="tel:+994125383383">(+994 12) 538-33-83</a>
          </h4>
          <h4>
            Qaynar xətt: <a href="tel:+994125391305">(+994 12) 539-13-05</a>
          </h4>
          <h4>
            E-poçt: <a href="mailto:aztu@aztu.edu.az">aztu@aztu.edu.az</a>
          </h4>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
