import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./DentalLasers.scss";
import img1 from "../../../assets/general_service/img.webp";
import gallery1 from "../../../assets/about_page/after1.webp";
import PageTop from "../../../comp/page_top/PageTop";

const services = [
  {
    title: "Initial Consultation ",
    description:
      "We assess your dental condition and recommend suitable laser treatment options. We also explain the procedure and discuss cost-related queries. ",
  },
  {
    title: "Preparation ",
    description:
      "The treatment area is prepared, and local anesthesia may be used if required to ensure a comfortable, pain-free experience. ",
  },
  {
    title: " Laser Treatment  ",
    description:
      "Advanced dental lasers are used to perform precise soft or hard tissue procedures with minimal discomfort and faster healing. ",
  },
  {
    title: "Post-Treatment Care",
    description:
      "After the procedure, we provide clear aftercare instructions to ensure smooth healing and the best results.",
  },
  {
    title: " Follow-Up Visits  ",
    description:
      "Regular follow-ups are scheduled to monitor healing and ensure successful outcomes, with ongoing support from our dental team. ",
  },
];



const whyChooseData = [
  {

    title: "Cutting-Edge Technology",
    description:
      "We use advanced dental laser systems for highly precise, safe, and efficient treatments with minimal discomfort. ",
  },
  {

    title: "Expert Dental Team ",
    description:
      "Our experienced professionals are trained in modern laser dentistry techniques, ensuring accurate and high-quality outcomes.",
  },
  {

    title: "Global Exposure & Clinical Expertise",
    description:
      "Our dentists bring global exposure through international training, advanced workshops, and modern clinical practices, ensuring world-class standards in laser dental care.",
  },
  {

    title: "Comfortable & Minimally Invasive Treatment ",
    description:
      "Laser dentistry reduces pain, bleeding, and recovery time, making treatments more comfortable for patients.",
  },
  {

    title: "Personalized Treatment Plans",
    description:
      "Each patient receives customized care based on their dental condition and treatment goals.",
  },
  {

    title: "State-of-the-Art Facility ",
    description:
      "Our clinic is equipped with modern technology and a patient-friendly environment for safe and effective care. ",
  },
  {

    title: "Affordable & Transparent Care",
    description:
      "We offer competitive pricing and flexible payment options, ensuring high-quality laser dentistry is accessible to all patients. ",
  },
];

const faqs = [
  {
    question: "Is laser treatment good for teeth?",
    answer:
      "Yes, laser dentistry is safe, precise, and minimally invasive. It reduces pain, bleeding, and recovery time compared to traditional methods. ",
  },
  {
    question: "What is the disadvantage of dental laser?",
    answer:
      "Laser treatment may not be suitable for all dental cases, especially very complex or deep structural issues that still require conventional methods.",
  },
  {
    question: "How long does laser dental treatment last?",
    answer:
      "Results are long-lasting, especially when proper oral hygiene and regular dental check-ups are maintained. ",
  },
  {
    question: "What conditions can laser dentistry treat?",
    answer:
      "Laser dentistry can treat gum disease, cavity removal, gum reshaping, infection control, teeth whitening, and minor surgical procedures. ",
  },
  {
    question: "How long is the recovery time after laser dental procedure? ",
    answer:
      "Recovery is usually quick—most patients resume normal activities within 24–48 hours. ",
  },
  {
    question: "What types of laser treatments do you offer at Denza Dental?",
    answer:
      "We offer laser gum treatments, periodontal therapy, soft tissue surgeries, cavity management, teeth whitening, and minor oral procedurusing advanced dental lasers.",
  },
  
];



const RestorativeDentistry = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      <PageTop title="Dental Lasers Services" />

      <div className="second_section">
        <div className="second_section_container">
          <div className="second_section_header">
            <h2>Why Choose Denza Dental for Laser Dentistry in Pune?</h2>

          </div>

          <div className="why_choose_cards">
            {whyChooseData.map((item, index) => (
              <div key={index} className="why_choose_card"  >
                {/* <div className="card_icon">{item.icon}</div> */}
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="after_care_parent parent">
        <div className="after_care_cont cont">
          <h2>Types of Dental Lasers – Denza Dental, Kharadi (Pune)</h2>

          <p style={{ fontWeight: "bold", color: "var(--accent" }}>
            Diode Lasers{" "}
          </p>
          <ul>
            <li>
              Used for soft tissue procedures like gum reshaping and infection treatment
            </li>
            <li>
              Highly precise with minimal discomfort and faster healing
            </li>
          </ul>

          <p style={{ fontWeight: "bold", color: "var(--accent" }}>
            Nd:YAG Lasers{" "}
          </p>
          <ul>
            <li>
              Suitable for deeper gum and periodontal procedures
            </li>
            <li>
              Helps reduce bleeding and improves treatment efficiency
            </li>
          </ul>

          <p style={{ fontWeight: "bold", color: "var(--accent" }}>
            Er:YAG Lasers {" "}
          </p>
          <ul>
            <li>
              Used for hard tissue procedures like cavity removal and tooth preparation
            </li>
            <li>
              Offers high precision with minimal impact on surrounding tooth structure
            </li>
          </ul>
        </div>
      </div>

      <div className="third_section">
        <div className="third_header">
          <h2>Dental Laser Treatment Procedure – Denza Dental, Kharadi (Pune) </h2>
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

      <div className="parent second_parent">
        <div className="cont second_cont">
          <div className="general_left">
            <img src={img1} alt="General Dental Service" />
          </div>
          <div className="general_right">
            <h2>Uses & Benefits of Dental Lasers – Denza Dental, Kharadi, Pune </h2>

            <ul style={{ paddingLeft: "20px" }}>
              <li>
                <b>Minimally Invasive Treatment </b>Reduces the need for drills and stitches, making procedures more comfortable.
              </li>

              <li>
                <b>Less Pain & Discomfort </b>Patients usually experience minimal pain during and after laser procedures.
              </li>

              <li>
                <b>Reduced Bleeding </b>Laser technology seals blood vessels during treatment, resulting in less bleeding.
              </li>

              <li>
                <b>Faster Healing </b>Promotes quicker recovery compared to traditional dental methods.
              </li>

              <li>
                <b>High Precision </b>Targets only affected areas while preserving healthy surrounding tissue.
              </li>

              <li>
                <b>Better Treatment Outcomes </b>Improves accuracy, efficiency, and overall success of various dental procedures.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="equipment_parent parent">
        <div className="equipment_cont cont">
          <h2>Equipment Used in Dental Laser Treatment – Denza Dental, Kharadi (Pune) </h2>
          <div className="equipment_list">
            <ul>
              <li>
                <b>High-Powered Dental Laser Units </b>Advanced laser systems used for both soft and hard tissue procedures,
                ensuring precision and minimal discomfort.
              </li>
            </ul>

            <ul>
              <li>
                <b>Precision Handpieces </b>Ergonomically designed tools that allow accurate laser application for
                effective treatment outcomes.
              </li>
            </ul>

            <ul>
              <li>
                <b>Digital Imaging Systems </b>Modern imaging technology used for accurate diagnosis, treatment
                planning, and monitoring of procedures.
              </li>
            </ul>

            <ul>
              <li>
                <b>Comfortable Dental Chairs </b>Patient-friendly chairs designed to ensure maximum comfort during laser
                dental procedures.

              </li>
            </ul>

          </div>
        </div>
      </div>

      <div className="faq_section">
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
