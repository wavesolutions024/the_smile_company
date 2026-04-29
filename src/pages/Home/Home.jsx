import React, { useState } from "react";
import "./Home.scss";
import HeroSection from "../../comp/Hero_section/HeroSection";
import Button from "../../comp/button/Button";
import Appointment from "../../comp/appointment/Appointment";
import abt_img from "../../assets/about_section/img5.webp";
import img5 from "../../assets/about_section/img4.webp";
import img4 from "../../assets/about_section/img5.webp";
import icon1 from "../../assets/about_section/medical-symbol.png";
import icon2 from "../../assets/about_section/medicine.png";
import icon3 from "../../assets/about_section/doctor.png";
import { Link } from "react-router-dom";
import { IoArrowForwardOutline } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../assets/before_after/img1.jpg";
import img2 from "../../assets/before_after/img2.jpg";
import img3 from "../../assets/before_after/img3.jpg";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

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

  const data = [img1, img2, img3, img1, img2, img3, img1, img2, img3];

  const counter = [
    {
      title: "Happy Patients",
      count: 450,
      suffix: "K",
      icon: icon1,
    },
    {
      title: "Specialists",
      count: 200,
      suffix: "K",
      icon: icon2,
    },
    {
      title: "Winning Awards",
      count: 150,
      icon: icon3,
    },
  ];

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  return (
    <>
      <HeroSection />

      <div className="about_section_parent bg-img-cover parent">
        <div className="about_section_cont cont">
          <div className="abt_top_sec">
            <div className="ab_left">
              <div className="image">
                <img src={abt_img} alt="" />

                <div className="round_image">
                  <img src={img5} alt="" />
                </div>
              </div>
            </div>
            <div className="ab_right">
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

          <div className="abt_bottom_sec">
            <div className="count_main" ref={ref}>
              {counter.map((item, index) => (
                <div className="abt_sec sec1" key={index}>
                  <div className="left">
                    <div className="icon">
                      <img src={item.icon} alt="" />
                    </div>
                  </div>

                  <div className="right">
                    <h1>
                      {inView && (
                        <CountUp start={0} end={item.count} duration={2} />
                      )}
                      {item.suffix || ""}+
                    </h1>

                    <span className="service_name">{item.title}</span>
                  </div>
                </div>
              ))}
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
                  <img src={img5} alt="" />
                </div>
                <div class="lg2 bg-img-cover"></div>
              </div>
              <div class="rp_tp_rg bg-img-cover"></div>
            </div>
            <div class="bottom_rg">
              <div class="bt_lg bg-img-cover"></div>
              <div class="bt_rg">
                <div class="inner bg-img-cover"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* blog and news */}

      <div className="blog_parent parent">
        <div className="overlay bg-img-cover"></div>
        <div className="blog_cont cont">
          <div className="top_bar">
            <h1>Blog And News</h1>
            <Button text="Read More" path="/blog" />
          </div>

          <div className="blog_cards">
            <div className="card">
              <div className="image bg-img-cover">
                <p className="date">17 may 2025</p> ̰
              </div>
              <h1 className="blog_heading">
                The Art of Managing Business and Patient Care
              </h1>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content. ̰
              </p>
              <Link to="/blog-details" className="arrow">
                <IoArrowForwardOutline />
              </Link>
            </div>
            <div className="card">
              <div className="image bg-img-cover">
                <p className="date">17 may 2025</p> ̰
              </div>
              <h1 className="blog_heading">
                The Art of Managing Business and Patient Care
              </h1>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content. ̰
              </p>
              <Link to="/blog-details" className="arrow">
                <IoArrowForwardOutline />
              </Link>
            </div>
            <div className="card">
              <div className="image bg-img-cover">
                <p className="date">17 may 2025</p> ̰
              </div>
              <h1 className="blog_heading">
                The Art of Managing Business and Patient Care
              </h1>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content. ̰
              </p>
              <Link to="/blog-details" className="arrow">
                <IoArrowForwardOutline />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="testimoneals_parent parent">
        <div className="testimoneal_cont cont">
          <div className="top_bar">
            <h1 className="testimoneal_heading">What our patient say</h1>
          </div>
          <div className="testimoneal_listing">
            <Swiper
              slidesPerView={2}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                980: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                350: {
                  slidesPerView: 1,
                  spaceBetween: 30,
                },
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide className="swiper-slide">
                <div className="left bg-img-cover"></div>
                <div className="right_content">
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    making it look like readable English.
                  </p>
                  <h3>Lorem lipsum</h3>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="left bg-img-cover"></div>
                <div className="right_content">
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    making it look like readable English.
                  </p>
                  <h3>Lorem lipsum</h3>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="left bg-img-cover"></div>
                <div className="right_content">
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    making it look like readable English.
                  </p>
                  <h3>Lorem lipsum</h3>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

      {/* appointment page */}
      <Appointment />

      <div class="parent before_after_gallery_parent">
        <div class="cont before_after_gallery_cont">
          <div className="results-section">
            <div className="header">
              <h1>Real People Real Results.</h1>
              <div className="nav-buttons">
                <button className="prev">←</button>
                <button className="next">→</button>
              </div>
            </div>

            <Swiper
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView={4}
              navigation={{
                nextEl: ".next",
                prevEl: ".prev",
              }}
              autoplay={{
                delay: 2000, // time between slides (2 sec)
                disableOnInteraction: false, // keeps autoplay after click/swipe
              }}
              breakpoints={{
                0: { slidesPerView: 1.2 },
                600: { slidesPerView: 2 },
                900: { slidesPerView: 3 },
                1200: { slidesPerView: 4 },
              }}
            >
              {data.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="card">
                    <div className="image-wrapper">
                      <img src={item} alt="before" />
                      <div className="divider"></div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
