import React from "react";
import "./HeroSection.scss";
import image1 from "../../assets/hero_section/img2.webp"
import image2 from "../../assets/hero_section/img4.webp"
const HeroSection = () => {
  return (
    <>
      <div class="hero_parent parent bg-img-cover">
        <div class="grid_parent "></div>
        <div class="overlay"></div>
        <div class="hero_cont cont">
          <div class="hero_left">
            <h1>
              Get Beautiful Straight{" "}
              <span class="span1">
                Smile
                <svg
                  class="smile_svg"
                  width="207"
                  height="44"
                  viewBox="0 0 207 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 12C83 50 121.2 54.4 198 12"
                    stroke="var(--accent2)"
                    stroke-width="3"
                  ></path>
                  <path
                    d="M14 1L2 23"
                    stroke="var(--accent2)"
                    stroke-width="3"
                  ></path>
                  <path
                    d="M193 1L205 23"
                    stroke="var(--accent2)"
                    stroke-width="3"
                  ></path>
                </svg>
              </span>{" "}
              <span class="span2">Quickly</span>
            </h1>
            <div class="hero_para">
              <p>
                Experienced staff is dedicated to improving our patientsâ€™
                dental health and enhancing
              </p>
            </div>

            <div class="image1">
              <img src={image1} alt=""/>
            </div>
            <div class="image2">
              <img src={image2} alt=""/>
            </div>
          </div>
          <div class="hero_right"></div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
