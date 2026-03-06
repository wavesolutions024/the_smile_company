import React, { useState } from "react";
import "./Home.scss";
import HeroSection from "../../comp/Hero_section/HeroSection";
import Button from "../../comp/button/Button";
import abt_img from "../../assets/about_section/img5.webp";
import img5 from "../../assets/about_section/img4.webp";
import img4 from "../../assets/about_section/img5.webp";
import icon1 from "../../assets/about_section/medical-symbol.png";
import icon2 from "../../assets/about_section/medicine.png";
import icon3 from "../../assets/about_section/doctor.png";

const Home = () => {
  const [accordian, setAccordian] = useState(0);
  const accordianContent = [
    {
      title: "Expertise in Dental Industry",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a making it look like readable English.",
    },
    {
      title: "Expertise in Dental Industry",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a making it look like readable English.",
    },
    {
      title: "Expertise in Dental Industry",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a making it look like readable English.",
    },
  ];
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
      <div class="why_choose_parent bg-img-cover parent">
        <div class="why_choose_cont cont">
          <div class="wc_left">
            <h1>Why Choose Dental Care</h1>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
            <div class="accordian">
              {accordianContent?.map((item, index) => (
                <div class="accordian_item">
                  <div
                    class="accordian_title"
                    onClick={() => setAccordian(index)}
                  >
                    <h1> {item.title} </h1>
                    <div class="count"> {index + 1} </div>
                  </div>
                  {accordian === index && (
                    <div
                      class={
                        accordian === index
                          ? "accordian_desc active"
                          : "accordian_desc"
                      }
                    >
                      <div class="left">
                        <h1> {item.title} </h1> <p>{item.description}</p>
                      </div>
                      <div class="rg_image">
                        <img src={img4} alt="" />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div class="wc_right">
           
            <div class="top_rg">
              <div class="rg_tp_lg">
                <div class="lg1 bg-img-contain">
                  <img src={img5} alt=""/>
                </div>
                <div class="lg2 bg-img-cover"></div>
              </div>
              <div class="rp_tp_rg bg-img-cover"></div>
            </div>
            <div class="bottom_rg">
              <div class="bt_lg bg-img-cover">

              </div>
              <div class="bt_rg">
                <div class="inner bg-img-cover"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
