import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./DentalLoupes.scss";
import img1 from "../../../assets/general_service/img.webp";
import img4 from "../../../assets/about_section/img5.webp";
import PageTop from "../../../comp/page_top/PageTop";
import { Helmet } from "react-helmet";

const DentalLoupes = () => {
  const services = [
    {
      title: "Enhanced Visual Clarity ",
      description:
        "Magnified, high-definition views allow for better visibility of even the smallest details.",
    },
    {
      title: "Superior Treatment Accuracy",
      description:
        "Improved precision leads to more accurate diagnoses and refined treatment outcomes.",
    },
    {
      title: "Minimally Invasive Approach",
      description:
        "Greater visibility allows for more controlled procedures with less impact on surrounding tissues. ",
    },
    {
      title: "Improved Efficiency",
      description:
        "Better visualization helps complete procedures more efficiently without compromising quality. ",
    },
    {
      title: "Consistent High Standards",
      description:
        "Ensures every treatment is performed with a uniform level of precision and excellence. ",
    },
  ];

  const clinicImages = [img4, img4, img4, img4, img4, img4, img4, img4];

  return (
    <>
      <Helmet>
        <title>
          Dental Loupes in Kharadi, Pune | Precision
          Dental Technology
        </title>
        <meta
          name="description"
          content="Discover advanced dental loupes at 
Denza Dental Center in Kharadi, Pune. Dental 
magnification enhances visual clarity and 
precision for accurate, minimally invasive dental 
procedures."
        />

        <link
          rel="canonical"
          href="https://denzadental.com/dental-loupes"
        />
        <meta
          name="keywords"
          content=" 
dental loupes Kharadi, 
dental loupes Pune, 
dental magnification loupes Kharadi, 
dental magnification loupes Pune, 
dentist loupes Kharadi, 
dentist loupes Pune, 
dental surgical loupes Pune, 
dental magnification technology Kharadi, 
dental magnification technology Pune, 
precision dentistry Kharadi, 
precision dentistry Pune, 
advanced dental technology Kharadi, 
advanced dental technology Pune, 
magnification dentistry Kharadi, 
magnification dentistry Pune, 
minimally invasive dentistry Kharadi, 
minimally invasive dentistry Pune, 
precise dental treatment Kharadi, 
accurate dental treatment Pune, 
dental technology Kharadi, 
dental technology Pune, 
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
          content="Dental Loupes in Kharadi, Pune | 
Precision Dental Technology"
        />
        <meta
          property="og:description"
          content="Explore advanced dental loupes at 
Denza Dental Center in Kharadi, Pune for 
enhanced visual clarity, treatment precision and 
minimally invasive dental care."
        />
        <meta
          property="og:url"
          content="https://denzadental.com/dental-loupes"
        />
        <meta
          property="og:image"
          content="https://denzadental.com/og-image.jpg"
        />
        <meta
          property="og:image:alt"
          content="Dental loupes technology at Denza 
Dental Center in Kharadi, Pune"
        />
        <meta
          property="og:locale"
          content="en_IN"
        />
      </Helmet>
      <PageTop title="Dental Loupes Technology" />

      <div className="parent second_parent">
        <div className="cont second_cont">
          <div className="general_left">
            <img src={img1} alt="General Dental Service" />
          </div>
          <div className="general_right">
            <h2>Premium Precision with Dental Loupes </h2>
            <p>
              We use advanced dental loupes to deliver premium levels of
              accuracy and clarity, enabling precise treatments, improved
              outcomes, and a higher standard of care for every patient.
            </p>
          </div>
        </div>
      </div>

      <div className="third_section">
        <div className="third_header">
          <h2>Elevated Precision in Every Procedure</h2>
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
      </div>

      <div className="parent second_parent_gbt">
        <div className="cont second_cont_gbt">
          <h2> Why Choose Denza Dental Center for Dental Loupes ? </h2>
          <h3 style={{ fontSize: "24px" }}>Precision-Driven, Premium Care </h3>
          <div className="text_gbt">
            <p>
              At Denza Dental Center, we use advanced dental loupes to enhance
              every aspect of your treatment. This allows our team to work with
              greater accuracy, ensuring more precise procedures and
              consistently better outcomes.
            </p>
            <p>
              Our focus on detail means nothing is overlooked. By combining
              magnification technology with expert clinical skills, we deliver a
              higher standard of care that is efficient, minimally invasive, and
              tailored to each patient.
            </p>
          </div>
        </div>
      </div>

      <div className="parent second_parent_gbt" style={{ background: "var(--background)" }}>
        <div className="cont second_cont_gbt">
          <h2>How Dental Loupes Work ?</h2>

          <div className="text_gbt">
            <p>
              Dental loupes are high-precision magnification tools worn by
              dentists to enhance visibility during procedures. They allow for a
              clearer, enlarged view of your teeth, helping detect even the
              smallest details that are not visible to the naked eye.
            </p>
          </div>
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

export default DentalLoupes;
