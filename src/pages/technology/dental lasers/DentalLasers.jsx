import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./DentalLasers.scss";
import img1 from "../../../assets/general_service/img.webp";
import gallery1 from "../../../assets/about_page/after1.webp";
import img4 from "../../../assets/about_section/img5.webp";

const DentalLasers = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const services = [
    {
      title: "Precision-Driven Care ",
      description:
        "Our diode laser technology enables highly precise treatments, targeting specific areas with minimal impact on surrounding tissues for accurate and effective results.",
    },
    {
      title: "Comfort-Focused Experience  ",
      description:
        "Experience dental procedures with minimal discomfort, as diode lasers work gently and efficiently—often reducing the need for anesthesia. ",
    },
    {
      title: "Rapid Recovery Time ",
      description:
        "Enjoy quicker healing times with advanced laser treatments, with many patients noticing significant improvement within just 24 hours. ",
    },
    {
      title: "Comprehensive Treatment Range  ",
      description:
        "From gum reshaping to treating cold sores, diode laser technology addresses a wide range of dental concerns—offering comprehensive care in one place.",
    },
    {
      title: "Cleaner, Safer Procedures ",
      description:
        "Diode laser treatments often result in little to no bleeding during and after procedures, enhancing comfort and reducing post-treatment complications.",
    },
  ];

  const clinicImages = [img4, img4, img4, img4, img4, img4, img4, img4];

  return (
    <>
      <div className="parent general_dental_parent bg-img-cover">
        <marquee behavior="scroll" direction="left" scrollamount="20">
          Welcome to our General Dental Services!
        </marquee>
        <div className="cont general_dental_cont">
          <div className="bts_grp">
            <div className="service1_btn ">Book Consultant</div>
            <div className="service1_btn call_btn">Call +9865213025</div>
            <div className="service1_btn">Get Directions</div>
          </div>
        </div>
      </div>

      <div className="parent second_parent">
        <div className="cont second_cont">
          <div className="general_left">
            <img src={img1} alt="General Dental Service" />
          </div>
          <div className="general_right">
            <h2>Premium Laser Dentistry  Precision That You Can Feel</h2>
            <p>
              At Denza Dental, our advanced laser treatments transform the patient experience—offering refined care, enhanced accuracy, and a more comfortable approach to modern dentistry. 
            </p>
          </div>
        </div>
      </div>

      <div className="third_section">
        <div className="third_header">
          <h2> Elevate Your Dental Experience with 3D Intra-Oral Scanning </h2>
        </div>

        <div className="service_cards" >
          {services.map((service, index) => (
            <div key={index} className="service_card">
              <p className="service_card_index">{index + 1}.</p>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>

       
      </div>

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

export default DentalLasers;
