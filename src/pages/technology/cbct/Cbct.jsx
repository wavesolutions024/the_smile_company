import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./Cbct.scss";
import img1 from "../../../assets/general_service/img.webp";
import gallery1 from "../../../assets/about_page/after1.webp";
import img4 from "../../../assets/about_section/img5.webp";

const Cbct = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const services = [
    {
      title: "Clear, Detailed Views ",
      description:
        "Get a complete 3D view of your teeth, jaw, and surrounding structures—far beyond what traditional X-rays can show. ",
    },
    {
      title: "Accurate Detection ",
      description:
        "Identify dental concerns early and precisely, helping avoid guesswork and improving treatment outcomes. ",
    },
    {
      title: "Personalized Care ",
      description:
        "Every scan helps us design treatments tailored specifically to your dental structure and needs. ",
    },
    {
      title: " Better Understanding ",
      description:
        "We walk you through your scan, so you can clearly see and understand your dental condition. ",
    },
    {
      title: "Safe & Efficient ",
      description:
        "Advanced imaging with minimal radiation exposure, ensuring both safety and comfort during the process.",
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
            <h2>Precision Dental Imaging</h2>
            <p>
              We use advanced CBCT technology to create detailed 3D scans of
              your teeth and jaw, enabling accurate diagnosis and efficient
              treatment with enhanced safety.
            </p>
          </div>
        </div>
      </div>

      <div className="third_section">
        <div className="third_header">
          <h2>Next-Generation Dental Insights</h2>
        </div>

        <div className="service_cards">
          {services.map((service, index) => (
            <div key={index} className="service_card">
              <p className="service_card_index">{index + 1}.</p>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>

        {/* <div className="parent gallery_parent">
          <div className="cont gallery_cont">
            <div className="gallery_header">
              <h2>Clinic Gallery</h2>
              <p>
                Explore our clinic spaces and patient-friendly treatment rooms.
              </p>
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
                {[gallery1, gallery1, gallery1, gallery1].map((src, index) => (
                  <SwiperSlide key={index}>
                    <div className="gallery_card">
                      <img src={src} alt={`Clinic slide ${index + 1}`} />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div> */}
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

export default Cbct;
