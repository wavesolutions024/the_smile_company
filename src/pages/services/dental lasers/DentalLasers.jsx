import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./DentalLasers.scss";
import img1 from "../../../assets/general_service/img.webp";
import gallery1 from "../../../assets/about_page/after1.webp";
import PageTop from "../../../comp/page_top/PageTop";
import { Helmet } from "react-helmet";

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


const RestorativeDentistry = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      <Helmet>
        <title>
          Dental Laser Technology in Kharadi, Pune |
          Denza Dental Center
        </title>
        <meta
          name="description"
          content="Explore advanced dental laser 
technology at Denza Dental Center in Kharadi, 
Pune. Our diode laser supports precise, minimally 
invasive dental procedures with a focus on 
comfort and efficient care."
        />

        <link
          rel="canonical"
          href="https://denzadental.com/dental-lasers"
        />
        <meta
          name="keywords"
          content=" 
dental laser technology Kharadi, 
dental laser Kharadi, 
dental laser Pune, 
dental laser treatment Kharadi, 
laser dentistry Kharadi, 
laser dentistry Pune, 
diode laser dentistry Kharadi, 
diode dental laser Pune, 
dental lasers near Kharadi, 
laser dental treatment Pune, 
laser gum treatment Kharadi, 
laser gum treatment Pune, 
laser gum reshaping Kharadi, 
soft tissue laser dentistry Pune, 
dental laser clinic Kharadi, 
advanced dental technology Kharadi, 
advanced dental technology Pune, 
minimally invasive dentistry Kharadi, 
modern dental technology Pune, 
dental laser dentist Kharadi, 
dentist Kharadi Pune, 
dental clinic Kharadi Pune, 
Denza Dental Center, 
Denza Dental, 
Denza Dental Kharadi, 
Denza Dental Pune 
"
        />
        <meta
          name="geo.region"
          content="IN-MH"
        />
        <meta
          name="geo.placename"
          content="Kharadi, Pune, Maharashtra, India"
        />
        <meta
          property="og:type"
          content="website"
        />
        <meta
          property="og:site_name"
          content="Denza Dental Center"
        />
        <meta
          property="og:title"
          content="Dental Laser Technology in 
Kharadi, Pune | Denza Dental Center"
        />
        <meta
          property="og:description"
          content="Advanced dental laser technology 
at Denza Dental Center in Kharadi, Pune. Diode 
laser dentistry supports precise, minimally 
invasive dental procedures with a focus on patient 
comfort."
        />
        <meta
          property="og:url"
          content="https://denzadental.com/dental-lasers"
        />
        <meta
          property="og:image"
          content="https://denzadental.com/og-image.jpg"
        />
        <meta
          property="og:image:alt"
          content="Dental laser technology at Denza 
Dental Center in Kharadi, Pune"
        />
        <meta
          property="og:locale"
          content="en_IN"
        />
      </Helmet>
      <PageTop title="Dental Lasers Technology" />

      <div className="parent second_parent">
        <div className="cont second_cont">
          <div className="general_left">
            <img src={img1} alt="General Dental Service" />
          </div>
          <div className="general_right">
            <h2>Premium Laser Dentistry<br /> Precision That You Can Feel</h2>
            <p>
              At Denza Dental, our advanced laser treatments transform the patient experience—offering refined care, enhanced accuracy, and a more comfortable approach to modern dentistry.
            </p>
          </div>
        </div>
      </div>

      <div className="third_section">
        <div className="third_header">
          <h2> Advanced Precision with Enhanced Comfort </h2>
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

      <div className="parent gallery_parent">
        <div className="cont gallery_cont">
          <div className="gallery_header">
            <h2>Clinic Gallery</h2>
          </div>
          <div className="gallery_slider">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={24}
              slidesPerView={4}
              navigation={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                0: { slidesPerView: 1, spaceBetween: 16 },
                600: { slidesPerView: 2, spaceBetween: 18 },
                900: { slidesPerView: 3, spaceBetween: 20 },
                1200: { slidesPerView: 4, spaceBetween: 24 },
              }}
            >
              {[gallery1, gallery1, gallery1, gallery1, gallery1].map((src, index) => (
                <SwiperSlide key={index}>
                  <div className="gallery_card">
                    <img src={src} alt={`Clinic slide ${index + 1}`} />
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

export default RestorativeDentistry;
