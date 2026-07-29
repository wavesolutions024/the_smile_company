import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./SmileAnalysisConsultation.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import img1 from "../../../assets/general_service/img.webp";
import gallery1 from "../../../assets/about_page/after1.webp";
import apointment from "../../../assets/aapointment.webp";
import PageTop from "../../../comp/page_top/PageTop";

const whyChooseData = [
  {
    icon: "👨‍⚕️",
    title: "Skilled Dentists with Global Exposure ",
    description:
      "Our experienced dentists bring advanced skills and international exposure, ensuring precise smile analysis and effective treatment planning focused on aesthetics and long-term outcomes. ",
  },
  {
    icon: "🦷",
    title: "Modern Digital Smile Technology",
    description:
      "We use advanced tools like 3D imaging and smile design software to evaluate your facial features and dental structure with high accuracy. ",
  },
  {
    icon: "💰",
    title: "Personalized & Patient-First Approach ",
    description:
      "We prioritize your comfort with customized treatment plans, transparent pricing, flexible scheduling, and continuous support throughout your smile journey. ",
  },

];

const services = [
  {
    title: "Personalized Treatment Planning",
    description:
      "It helps create a clear and structured roadmap by identifying specific areas that need attention, ensuring realistic expectations and targeted results. ",
  },
  {
    title: "Cost-Efficient Approach",
    description:
      "By focusing only on necessary treatments, smile analysis avoids unnecessary procedures and helps prioritize care, making it more cost-effective in the long run. ",
  },
  {
    title: "Improved Results & Function",
    description:
      "A detailed analysis addresses underlying dental concerns, enhancing not just appearance but also overall function and long-term stability. ",
  },
  {
    title: "Early Detection & Prevention  ",
    description:
      "It helps identify potential issues at an early stage, reducing future complications and supporting better oral health maintenance. ",
  },

];

const faqs = [
  {
    question: "What does a smile analysis involve?",
    answer:
      "A smile analysis evaluates the alignment of your teeth, gum line, lip shape, and facial proportions to design a smile that looks natural and balanced.",
  },
  {
    question: "Why is a smile assessment important before treatment?",
    answer:
      " It helps identify aesthetic and functional concerns, allowing for a more precise and personalized treatment plan. ",
  },
  {
    question: "What factors define an ideal smile?  ",
    answer:
      "An ideal smile depends on tooth proportion, symmetry, gum display, and how well it complements your facial features.",
  },
  {
    question: "What happens during a smile analysis consultation?",
    answer:
      "The consultation includes a detailed examination, digital imaging, and discussion of suitable treatment options based on your goals. ",
  },
  {
    question: "What is the cost of a smile makeover in Pune? ",
    answer:
      "The cost varies depending on the treatments involved. At Denza Dental, a clear and customized estimate is provided after evaluation.",
  },

];

const SmileAnalysisConsultation = () => {
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      offset: 120,
    });
    AOS.refresh();
  }, []);


  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      <PageTop title="Smile Analysis Consultation" />

      <div className="second_section">
        <div className="second_section_container">
          <div className="second_section_header">
            <h2> Advanced Smile Analysis Clinic in Pune </h2>
            <p>
              Choosing the right clinic for smile analysis is essential for achieving a balanced,
              confident smile. At Denza Dental, we combine expertise, advanced technology, and a
              patient-first approach for accurate results.
            </p>
          </div>

          <div className="why_choose_cards">
            {whyChooseData.map((item, index) => (
              <div key={index} className="why_choose_card" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="card_icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="parent second_parent">
        <div className="cont second_cont">
          <div className="general_left">
            <img src={img1} alt="General Dental Service" />
          </div>
          <div className="general_right">
            <h2>What is Smile Analysis?   </h2>

            <p>Smile analysis in orthodontics dentistry measures key aspects of your smile:</p>
            <ul style={{ paddingLeft: "20px" }}>
              <li>Teeth position and alignment</li>
              <li>Gum line symmetry</li>
              <li>Bite relationship </li>
              <li>Facial proportions</li>
              <li>Lip line and movement</li>
              <li>Color and shape of teeth </li>
              <li>Benefits of Smile Analysis </li>
              
            </ul>
          </div>
        </div>
      </div>

      <div className="third_section">
        <div className="third_header">
          <h2> Benefits of Smile Analysis   </h2>
          <p>

          </p>
        </div>

        <div className="service_cards">
          {services.map((service, index) => (
            <div key={index} className="service_card" data-aos="fade-up" data-aos-delay={index * 100}>
              <p className="service_card_index">{index + 1}.</p>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>



      <div className="faq_section1">
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
                data-aos="fade-up"
                data-aos-delay={index * 50}
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
                  <div className="gallery_card" data-aos="fade-up" data-aos-delay={index * 100}>
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

export default SmileAnalysisConsultation;
