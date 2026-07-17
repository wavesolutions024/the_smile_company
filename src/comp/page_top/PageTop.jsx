import React from "react";
import "./PageTop.scss";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import smile_img from "../../assets/page-top/page_top.webp";
import teeth1 from "../../assets/page-top/teeth.webp";
import teeth2 from "../../assets/page-top/teeth1.webp";
import { Link } from "react-router-dom";

const PageTop = ({
  title = "Dental Check Up Services",
  phone = "+91 7028131132",
  contactPath = "/contact",
  mapUrl = "https://maps.app.goo.gl/L2FxZP5U5wL3WA9t9",
  consultantLabel = "Book Consultant",
  callLabel = "Call",
  directionLabel = "Get Directions",
}) => {
  return (
    <div className="parent general_dental_parent bg-img-cover">
      <marquee behavior="scroll" direction="left" scrollamount="20">
        Welcome to our {title} Service!
      </marquee>
      <div className="cont general_dental_cont">
        <div className="bts_grp">
          <Link to={contactPath} className="service1_btn">
            {consultantLabel}
          </Link>
          <a href={`tel:${phone}`} className="service1_btn call_btn">
            {callLabel} {phone}
          </a>
          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="service1_btn"
          >
            {directionLabel}
          </a>
        </div>
      </div>
    </div>
  );
};

export default PageTop;
