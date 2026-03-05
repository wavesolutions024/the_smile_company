import React from "react";
import "./Header.scss";
import logo from "../../assets/header/header_logo.png";
import Button from "../button/Button";
const Header = () => {
  return (
    <>
      <div class="header_parent parent">
        <div class="header_cont cont">
          <div class="header_left">
            <img src={logo} alt="" />
          </div>
          <div class="header_right">
            <div class="header_btn">
              <Button/>
            </div>
            <div class="hamburger">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
