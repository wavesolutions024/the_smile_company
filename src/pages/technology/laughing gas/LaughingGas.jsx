import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./LaughingGas.scss";
import img1 from "../../../assets/general_service/img.webp";
import img4 from "../../../assets/about_section/img5.webp";

const LaughingGas = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const services = [
    {
      title: "Calm & Relaxed Feel",
      description:
        "Feel at ease throughout your treatment as laughing gas gently reduces anxiety and nervousness.",
    },
    {
      title: "Pain-Free Comfort ",
      description:
        "Minimizes discomfort during procedures, making your dental visit smooth and worry-free.",
    },
    {
      title: "Quick Onset, Quick Recovery",
      description:
        "Takes effect within minutes and wears off just as quickly, allowing you to resume your day normally. ",
    },
    {
      title: "Safe & Controlled Sedation",
      description:
        "Carefully monitored and adjusted throughout your treatment for maximum safety and comfort.",
    },
    {
      title: "Ideal for Anxious Patients",
      description:
        "Perfect for those with dental fear, sensitive gag reflex, or difficulty sitting through procedures.",
    },
    {
      title: "Enhanced Treatment Experience",
      description:
        "Helps you stay relaxed and cooperative, allowing procedures to be completed more efficiently.",
    },
  ];

  const faqs = [
    {
      question: "Is laughing gas safe for dental procedures? ",
      answer:
        "Yes, laughing gas is a safe and widely used sedation method in dentistry, carefully controlled throughout your treatment for maximum safety.",
    },
    {
      question:
        "Will I be asleep during the procedure?",
      answer:
        "No, you will remain fully awake and aware, just feeling relaxed and calm while the treatment is performed.",
    },
    {
      question: "How quickly does laughing gas work?",
      answer:
        "It works within a few minutes, helping you feel at ease almost immediately after the mask is placed. ",
    },
    {
      question: "How long does it take to wear off?",
      answer:
        "The effects wear off quickly once the gas is stopped, allowing you to return to your normal routine soon after your visit.",
    },
    {
      question: "Is laughing gas suitable for anxious patients?",
      answer:
        "Absolutely, it is ideal for patients who feel nervous or fearful, helping make dental visits much more comfortable and stress-free",
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
            <h2>Relaxed Dental Care with Laughing Gas </h2>
            <p>
              We use safe and controlled conscious sedation (laughing gas) to
              help you feel calm and comfortable during your treatment, reducing
              anxiety and ensuring a smooth, stress-free dental experience.
            </p>
          </div>
        </div>
      </div>

      <div className="third_section">
        <div className="third_header">
          <h2> Stress-Free Dental Experience </h2>
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

      <div className="brace_treat_parent parent">
        <div className="brace_treat_cont cont">
          <h2>Why Choose Denza Dental Center for Laughing Gas?</h2>
          <div>
            <p>
              At Denza Dental Center, we prioritize your comfort at every step. Our team
              carefully administers laughing gas to help you feel calm, relaxed, and completely
              at ease throughout your treatment, ensuring a safe, smooth, and stress-free
              experience.
            </p>
          </div>
        </div>
      </div>

      {/* faq */}

      <div className="faq_section" style={{ background: "white" }}>
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

export default LaughingGas;
