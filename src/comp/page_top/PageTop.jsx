import React from "react";
import "./PageTop.scss";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import smile_img from "../../assets/page-top/page_top.webp";
import teeth1 from "../../assets/page-top/teeth.webp";
import teeth2 from "../../assets/page-top/teeth1.webp";

const PageTop = () => {
  return (
    <>
      <div className="parent pagetop_parent">
        <div className="cont pagetop_cont">
          <div className="left_pagetop">
            <div className="small_img_top">
              <img src={teeth1} alt="" />
            </div>

            <h1>About Us</h1>
            <div class="bread_crum">
              <p style={{ color: "var(--accent)" }}>Home</p>
              <span className="icon">
                <MdKeyboardDoubleArrowRight />
              </span>
              <p>About Us</p>
            </div>

            <div className="small_img_bottom">
              <img src={teeth2} alt="" />
            </div>
          </div>

          <div className="right_pagetop">
            <img src={smile_img} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default PageTop;
