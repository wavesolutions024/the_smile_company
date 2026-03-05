import React from "react";
import "./Home.scss";
import HeroSection from "../../comp/Hero_section/HeroSection";
import Button from "../../comp/button/Button";
const Home = () => {
  return (
    <>
      <HeroSection />

      <div class="about_section_parent bg-img-cover parent">
        <div class="about_section_cont cont">
          <div class="ab_left">
            <div class="image">
              
            </div>
          </div>
          <div class="ab_right">
            <h1>We Care About Your Dental Health</h1>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using.
            </p>
            <Button/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
