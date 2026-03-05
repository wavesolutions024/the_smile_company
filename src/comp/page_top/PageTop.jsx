import React from "react";
import "./PageTop.scss";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import smile_img from "../../assets/page-top/page_top.webp";
import teeth1 from "../../assets/page-top/teeth.webp";
import teeth2 from "../../assets/page-top/teeth1.webp";

const PageTop = ({ title, parent = "Home" }) => {
  return (
    <>
      <div className="parent pagetop_parent">
        <div className="cont pagetop_cont">
          <div className="left_pagetop">
            <div className="small_img_top">
              <img src={teeth1} alt="" />
            </div>

            <h1>{title}</h1>
            <div class="bread_crum">
              <p style={{ color: "var(--accent)" }}>{parent}</p>
              <span className="icon">
                <MdKeyboardDoubleArrowRight />
              </span>
              <p>{title}</p>
            </div>

            <div className="small_img_bottom">
              <img src={teeth2} alt="" />
            </div>
          </div>

          <div className="right_pagetop">
            <div class="background_circle"></div>
            <img src={smile_img} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default PageTop;
