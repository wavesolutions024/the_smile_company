import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./RestorativeDentistry.scss";
import img1 from "../../../assets/general_service/img.webp";
import gallery1 from "../../../assets/about_page/after1.webp";
import { Link } from "react-router-dom";
import PageTop from "../../../comp/page_top/PageTop";

const services = [
  {
    title: "Tooth Colored Fillings ",
    description:
      "Tooth fillings are one of the most common restorative treatments in Pune. At Denza Dental, tooth-colored materials are used so they blend naturally with your teeth. The procedure involves removing decay and filling the area with a strong material that helps prevent further damage.",
  },
  {
    title: "Dental Crowns ",
    description:
      "When a tooth is too damaged to be restored with a filling, a dental crown is used. It is a cap that covers the entire tooth, restoring its shape, strength, and appearance while protecting the remaining structure..",
  },
  {
    title: "Dental Bridges ",
    description:
      "Dental bridges are used to replace missing teeth by anchoring an artificial tooth to the adjacent natural teeth. This helps maintain proper alignment and prevents nearby teeth from shifting. Bridges are designed to look and function like natural teeth. ",
  },
  {
    title: "Dental Implants",
    description:
      "Dental implants are a permanent solution for missing teeth. A metal post is surgically placed into the jawbone, where it fuses with the bone over time. This creates a strong foundation for a crown that looks and functions like a natural tooth. ",
  },
  {
    title: "Inlays & Onlays",
    description:
      "Inlays and onlays are used when tooth damage is not severe enough for a crown. These custom-made restorations fit precisely into the damaged area and are made from durable materials that match the natural tooth in both appearance and function. ",
  },
];

const faqs = [
  {
    question: "What is restorative dentistry? ",
    answer:
      "At Denza Dental, restorative dentistry focuses on repairing and replacing damaged or missing teeth to restore natural smile appearance and proper bite function. ",
  },
  {
    question: " Is restorative dentistry painful? ",
    answer:
      " Most restorative dental treatments at Denza Dental are performed under local anesthesia, making the procedure comfortable and almost pain-free with minimal discomfort.  ",
  },
  {
    question: " How long do dental crowns and fillings last? ",
    answer:
      "At Denza Dental, dental fillings can last several years with proper care, while crowns generally last around 10–15 years or longer depending on oral hygiene and maintenance. ",
  },
  {
    question: "How much does restorative dentistry cost in Pune? ",
    answer:
      "The cost of restorative dentistry at Denza Dental varies based on the treatment required, such as fillings, crowns, implants, or bridges. A detailed estimate is provided after consultation.  ",
  },
  {
    question: "Do dental insurance plans cover restorative procedures?",
    answer:
      " Many insurance plans partially cover restorative treatments like fillings, crowns, and bridges. At Denza Dental, we can help you understand your coverage based on your policy. ",
  },

];

const RestorativeDentistry = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      <PageTop title="Restorative Dentistry Services" />

      <div className="parent second_parent">
        <div className="cont second_cont">
          <div className="general_left">
            <img src={img1} alt="General Dental Service" />
          </div>
          <div className="general_right">
            <h2 style={{ color: "var(--accent)" }}>Restorative Dentistry</h2>
            <p>
              In simple terms, restorative dentistry focuses on repairing and
              replacing damaged or missing teeth. It involves identifying dental
              issues, preventing further damage, and treating existing problems.
              Restorative dentistry is not only about improving appearance but
              also about restoring proper function of the teeth.
            </p>
          </div>
        </div>
      </div>

      <div className="center_alignment_parent parent">
        <div className="center_alignment_cont cont">
          <h2 style={{ color: "var(--accent)" }}>
            When Do You Need Restorative Dentistry?
          </h2>
          <p>
            There are several situations where your dentist may recommend
            restorative dentistry. It may be needed if a missing tooth is making
            eating or smiling uncomfortable, or if you feel a sharp or stinging
            pain while having hot, cold, or sweet foods. Damaged, cracked, or
            missing teeth can also make biting and chewing difficult. In some
            cases, gaps between teeth may affect confidence and make you feel
            self-conscious. The good thing is that modern restorative dentistry
            is simple, effective, and far less uncomfortable than most people
            expect. Today, restorative dentistry in Pune provides reliable
            solutions for a wide range of dental concerns, helping restore both
            function and confidence.
          </p>
        </div>
      </div>

      <div className="third_section">
        <div className="third_header">
          <h2 style={{ color: "var(--accent)" }}>
            Types of Restorative Dentistry Treatments Offered by Denza Dental
          </h2>
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

      <div className="center_alignment_parent parent">
        <div className="center_alignment_cont cont">
          <h2 style={{ color: "var(--accent)" }}>
            Why Choose Denza Dental for Restorative Dentistry in Pune?
          </h2>
          <p>
            If you are searching for restorative dentistry in Pune or
            “restorative dentistry near me,” Denza Dental is a trusted choice
            for complete dental care and smile restoration.
          </p>
          <p>
            At Denza Dental, treatments are handled by experienced dentists who
            have successfully managed a wide range of restorative dental cases
            over the years. Each patient receives a personalized treatment plan
            based on their specific dental condition, ensuring the best possible
            results for their smile and oral health. The clinic is equipped with
            modern dental technology that allows for precise, safe, and
            effective treatments. In addition, Denza Dental focuses on creating
            a calm and comfortable environment so that patients feel relaxed
            throughout their dental visit, helping reduce anxiety and making the
            overall experience more pleasant.{" "}
          </p>
        </div>
      </div>

      <div className="faq_section" style={{ backgroundColor: "white", margin: "0px" }}>
        <div className="faq_header">
          <h2>FAQs</h2>
          <p>
            Answers to the most common questions about our general dental care.
          </p>
        </div>

        <div className="faq_list">
          {faqs.map((item, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={index}
                className={`faq_item ${isOpen ? "open" : ""}`}
                onClick={() => toggleFaq(index)}
              >
                <button className="faq_question" type="button">
                  <span>{item.question}</span>
                  <span className="faq_toggle">{isOpen ? "▲" : "▼"}</span>
                </button>
                <div className="faq_answer">
                  <p>{item.answer}</p>
                </div>
              </div>
            );
          })}
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
      </div>
    </>
  );
};

export default RestorativeDentistry;
