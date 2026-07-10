import React, { useState, useRef } from "react";
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
import doctorImg from "../../assets/about_page/woman_dr.jpg";
import { Link } from "react-router-dom";
import { IoArrowForwardOutline } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../assets/before_after/img1.jpg";
import img2 from "../../assets/before_after/img2.jpg";
import img3 from "../../assets/before_after/img3.jpg";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

import { Navigation, Autoplay } from "swiper/modules";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import "swiper/css";
import "swiper/css/navigation";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import Testimonials from "../../comp/testimonials/Testimonials";

const Home = () => {
  const [accordian, setAccordian] = useState(0);
  const [sliderPositions, setSliderPositions] = useState({});
  const sliderRefs = useRef({});

  const handleSliderMove = (e, index) => {
    e.stopPropagation();
    if (!sliderRefs.current[index]) return;
    
    const rect = sliderRefs.current[index].getBoundingClientRect();
    let x;
    
    // Handle both mouse and touch events
    if (e.clientX !== undefined) {
      x = e.clientX - rect.left;
    } else if (e.touches && e.touches[0]) {
      x = e.touches[0].clientX - rect.left;
    } else {
      return;
    }
    
    const percent = (x / rect.width) * 100;

    if (percent >= 0 && percent <= 100) {
      setSliderPositions(prev => ({
        ...prev,
        [index]: percent
      }));
    }
  };

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

  const doctors = [
    {
      name: "Dr. Aneesha Sharma",
      title: "Cosmetic Dentist",
      image: doctorImg,
      description:
        "Expert in smile design and minimal invasive cosmetic dental care.",
    },
    {
      name: "Dr. Onkar Patel",
      title: "Implant Specialist",
      image: doctorImg,
      description:
        "Experienced implant surgeon focused on comfortable patient outcomes.",
    },
    {
      name: "Dr. Riya Mehra",
      title: "Laser Dentistry",
      image: doctorImg,
      description:
        "Provides advanced laser dentistry and pain-free treatments.",
    },
  ];

  const clinicImages = [img4, img4, img4, img4, img4, img4, img4, img4];

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      offset: 120,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <HeroSection />

      <div
        className="about_section_parent bg-img-cover parent"
        data-aos="fade-up"
        data-aos-delay="100"
      >
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

      {/* <div
        class="why_choose_parent bg-img-cover parent"
        data-aos="fade-up"
        data-aos-delay="200"
      >
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
      </div> */}

      {/* meet our doctors */}
      {/* <section className="top_dentists">
        <div className="container">
          <div className="top_dentists_wrapper"> */}
            {/* Left Images */}
            {/* <div className="dentists_images">
              <div className="img_box">
                <img src={img4} alt="Doctor" />
              </div>

              <div className="img_box">
                <img src={img4} alt="Doctor" />
              </div>
            </div> */}

            {/* Right Content */}
            {/* <div className="dentists_content">
              <h2>
                Top rated dentists <br /> in India
              </h2>

              <p>
                Dr. Onkar and Dr. Aneesha live by the motto “educate to treat”!
              </p>

              <p>
                Dr. Onkar is an expert in Laser Dentistry and Micro Dentistry
                Implants along with his better half Dr. Aneesha, who is a
                Cosmetic Dentist herself.
              </p>

              <p>
                They both believe that quality creates long-lasting
                relationships, which is the core value at AO Dentistry.
              </p>

              <Button
                text="About Us"
                path="/about"
                style={{ width: "100%" }}
              />
            </div> */}
          {/* </div>
        </div>
      </section> */}

      {/* blog and news */}

      <div
        className="blog_parent parent"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <div className="overlay bg-img-cover"></div>
        <div className="blog_cont cont">
          <div className="top_bar">
            <h1>Blog And News</h1>
            <Button text="Read More" path="/blog" />
          </div>

          <div className="blog_cards">
            <div className="card">
              <div className="image bg-img-cover">
                <p className="date">17 may 2025</p>
              </div>
              <h1 className="blog_heading">
                The Art of Managing Business and Patient Care
              </h1>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content.
              </p>
              <Link to="/blog-details" className="arrow">
                <IoArrowForwardOutline />
              </Link>
            </div>
            <div className="card">
              <div className="image bg-img-cover">
                <p className="date">17 may 2025</p>
              </div>
              <h1 className="blog_heading">
                The Art of Managing Business and Patient Care
              </h1>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content.
              </p>
              <Link to="/blog-details" className="arrow">
                <IoArrowForwardOutline />
              </Link>
            </div>
            <div className="card">
              <div className="image bg-img-cover">
                <p className="date">17 may 2025</p>
              </div>
              <h1 className="blog_heading">
                The Art of Managing Business and Patient Care
              </h1>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content.{" "}
              </p>
              <Link to="/blog-details" className="arrow">
                <IoArrowForwardOutline />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* testimonials */}
      <div data-aos="fade-up" data-aos-delay="400">
        <Testimonials />
      </div>

      {/* appointment page */}
      <Appointment data-aos="fade-up" data-aos-delay="500" />

      <div
        class="parent before_after_gallery_parent"
        data-aos="fade-up"
        data-aos-delay="600 "
      >
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
                delay: 2000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                0: { slidesPerView: 1 },
                600: { slidesPerView: 2 },
                900: { slidesPerView: 3 },
                1200: { slidesPerView: 4 },
              }}
            >
              {data.map((item, index) => {
                const position = sliderPositions[index] !== undefined ? sliderPositions[index] : 50;
                return (
                  <SwiperSlide key={index}>
                    <div className="card">
                      <div 
                        className="image-wrapper"
                        ref={(el) => sliderRefs.current[index] = el}
                        onMouseMove={(e) => e.buttons === 1 && handleSliderMove(e, index)}
                        onMouseDown={(e) => handleSliderMove(e, index)}
                        onTouchMove={(e) => handleSliderMove(e, index)}
                        onTouchStart={(e) => handleSliderMove(e, index)}
                      >
                        <img src={item} alt="after" className="after-image" />
                        
                        <div className="before-wrapper" style={{ width: `${100 - position}%` }}>
                          <img src={item} alt="before" className="before-image" />
                        </div>
                        
                        <div className="slider-line" style={{ left: `${position}%` }}>
                          <div className="slider-icon">
                            <span>◀</span>
                            <span>▶</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>

      {/* clinic images */}

      <div className="parent clinic_images_parent">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={4.5}
          spaceBetween={30}
          loop={true}
          speed={10000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1.2,
              spaceBetween: 16,
            },

            576: {
              slidesPerView: 2,
              spaceBetween: 20,
            },

            768: {
              slidesPerView: 2.5,
              spaceBetween: 24,
            },

            1200: {
              slidesPerView: 4.5,
              spaceBetween: 30,
            },
          }}
          className="gallery_swiper"
        >
          {clinicImages.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="gallery_card">
                <img src={img} alt="" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Home;
