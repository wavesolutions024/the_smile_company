import { useState } from "react";
import "./Header.scss";
import logo from "../../assets/header/header_logo.png";
import Button from "../button/Button";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Header = () => {
  const [header, setHeader] = useState(false);
  return (
    <>
      <div class="header_parent parent">
        <div class="header_cont cont">
          <div class="header_left">
            <img src={logo} alt="" />
          </div>
          <div class="header_right">
            <div class="header_btn">
              <Button />
            </div>

            <div class="hamburger" onClick={() => setHeader(true)}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>

        <div class={header ? "header_section active" : "header_section"}>
          <div
            class={
              header
                ? "inner_header_section inner_active"
                : "inner_header_section"
            }
          >
            <div class="top_section">
              <div class="logo">
                <img src={logo} alt="" />
              </div>

              <div class="cross_button" onClick={()=>setHeader(false)}>
                <RxCross2 />
              </div>
            </div>

            <div class="bottom_hed_section">
              <Link to="/">
                Home
              </Link>
              <Link to="/">
                About Us
              </Link>
              <Link to="/">
                Services
              </Link>
              <Link to="/">
                Contact
              </Link>

              <div class="social_icons">
                <a href="#">
                  <FaWhatsapp />
                </a>
                <a href="#">
                 <FaFacebook />
                </a>
                <a href="#">
                 <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
