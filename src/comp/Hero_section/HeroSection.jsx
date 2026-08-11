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
          <h1 className="video-heading">International Smile Makeover and Implant Centre</h1>
         
        </div>
        <video width="100%" autoPlay loop muted playsInline>
          <source src={dental_video} type="video/mp4" />
        </video>
      </div>
    </>
  );
};

export default HeroSection;
