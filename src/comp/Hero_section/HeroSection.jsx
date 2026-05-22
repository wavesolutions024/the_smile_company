import React from "react";
import "./HeroSection.scss";

import dental_video from "../../assets/dental_video.mp4";

const HeroSection = () => {
  return (
    <>
      <div className="parent video_parent">
        <div class="video_overlay"></div>
        <div className="video_cont cont">
          <p className="video-label">Denza Dentistry</p>
          <h1 className="video-heading">Redefining Excellence in Dentistry</h1>
          <p style={{color:"#c5c5c5"}}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla
            nesciunt, a eaque asperiores cupiditate vero iste, magnam ipsum
            repellendus nemo unde placeat similique! Earum, qui?
          </p>
        </div>
        <video width="100%" autoPlay loop muted playsInline>
          <source src={dental_video} type="video/mp4" />
        </video>
      </div>
    </>
  );
};

export default HeroSection;
