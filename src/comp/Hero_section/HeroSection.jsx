import React from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./HeroSection.scss";

import clinicImg1 from "../../assets/hero_section/clinic_img1.jpg";
import clinicImg2 from "../../assets/hero_section/clinic_img2.jpg";
import clinicImg3 from "../../assets/hero_section/clinic_img3.jpg";

const slides = [
  {
    image: clinicImg1,
    heading: "International Smile Makeover and Implant Center",
  },
  {
    image: clinicImg2,
    heading: "International Experience First Time in Kharadi",
  },
  {
    image: clinicImg3,
    heading: "Advanced Dental Care. A Smile You’ll Love.",
  },
];

const HeroSection = () => {
  return (
    <section className="parent hero_parent">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop
        pagination={{ clickable: true }}
        speed={700}
        className="hero_swiper"
      >
        {slides.map(({ image, heading }, index) => (
          <SwiperSlide key={image}>
            <div className="hero_slide">
              <img
                src={image}
                alt={`Denza Dentistry clinic ${index + 1}`}
                fetchPriority={index === 0 ? "high" : "auto"}
              />
              <div className="hero_overlay" aria-hidden="true" />
              <div className="hero_cont cont">
                <p className="hero_label">Denza Dentistry</p>
                <h1 className="hero_heading">{heading}</h1>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSection;
