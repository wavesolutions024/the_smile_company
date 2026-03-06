import React from "react";
import "./Home.scss";
import HeroSection from "../../comp/Hero_section/HeroSection";
import Button from "../../comp/button/Button";
import abt_img from "../../assets/about_section/img5.webp";
import img5 from "../../assets/about_section/img4.webp";
import icon1 from "../../assets/about_section/medical-symbol.png";
import icon2 from "../../assets/about_section/medicine.png";
import icon3 from "../../assets/about_section/doctor.png";
const Home = () => {
  return (
    <>
      <HeroSection />

      <div class="about_section_parent bg-img-cover parent">
        <div class="about_section_cont cont">
          <div class="abt_top_sec">
            <div class="ab_left">
              <div class="image">
                <img src={abt_img} alt="" />

                <div class="round_image">
                  <img src={img5} alt="" />
                </div>
              </div>
            </div>
            <div class="ab_right">
              <h1>We Care About Your Dental Health</h1>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using.
              </p>
              <Button />
            </div>
          </div>

          <div class="abt_bottom_sec">
            <div class="abt_sec sec1">
              <div class="left">
                <h1>Medical Service</h1>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page.
                </p>
              </div>
              <div class="right">
                <h1>01</h1>
                <div class="icon">
                  <img src={icon1} alt="" />
                </div>
              </div>
            </div>
            <div class="abt_sec sec2">
              <div class="left">
                <h1>24/7 Medicines</h1>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page.
                </p>
              </div>
              <div class="right">
                <h1>02</h1>
                <div class="icon">
                  <img src={icon2} alt="" />
                </div>
              </div>
            </div>
            <div class="abt_sec sec3">
              <div class="left">
                <h1>Best Doctor</h1>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page.
                </p>
              </div>
              <div class="right">
                <h1>03</h1>
                <div class="icon">
                  <img src={icon3} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
