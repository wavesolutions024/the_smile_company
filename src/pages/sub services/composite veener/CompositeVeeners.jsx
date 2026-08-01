import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./CompositeVeeners.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import img1 from "../../../assets/general_service/img.webp";
import gallery1 from "../../../assets/about_page/after1.webp";
import apointment from "../../../assets/aapointment.webp";
import PageTop from "../../../comp/page_top/PageTop";

const whyChooseData = [
  {
    icon: "👨‍⚕️",
    title: "Experienced Team",
    description:
      "AO Dentistry boasts a team of skilled and experienced dentists who specialize in various fields of dentistry. From general dental check-ups in Pune to more complex treatments, you can be sure you're in good hands.",
  },
  {
    icon: "🦷",
    title: "Advanced Technology",
    description:
      "The clinic is equipped with the latest dental technologies to ensure that every dental check-up is thorough and accurate. Digital X-rays, intraoral cameras, and advanced diagnostic tools help in identifying even the smallest issues during the dental examination.",
  },
  {
    icon: "💰",
    title: "Affordable Packages",
    description:
      "AO Dentistry offers a range of affordable packages for dental check-ups in Pune. The clinic understands that dental care should be accessible to everyone and provides flexible payment options to make it easier for patients.",
  },
  {
    icon: "😊",
    title: "Patient-Centric Approach",
    description:
      "What truly sets AO Dentistry apart is its patient-centric approach. Every patient receives personalized care based on their specific needs. Our dentists take the time to understand your concerns, explain procedures, and ensure you're comfortable throughout.",
  },
];

const services = [
  {
    title: "Preparation",
    description:
      "Your teeth are gently cleaned and minimally prepared. Little to no drilling is required, ensuring most of your natural tooth structure is preserved. ",
  },
  {
    title: "Application of Composite Resin",
    description:
      "A tooth-colored composite material is carefully applied to the surface of your teeth in layers, matched to your natural shade for a seamless look. ",
  },
  {
    title: " Shaping & Curing ",
    description:
      "Each layer is hardened using a special curing light, while the dentist carefully shapes the material to achieve a natural appearance. ",
  },
  {
    title: "Polishing ",
    description:
      " The veneers are polished to create a smooth, glossy finish that closely resembles natural enamel. ",
  },
  {
    title: " Final Adjustments ",
    description:
      "Your bite is checked and adjusted to ensure comfort, proper function, and a perfectly balanced smile. ",
  },

];

const faqs = [
  {
    question: "How long do composite veneers last at Denza Dental? ",
    answer:
      "At Denza Dental, composite veneers typically last 5–7 years with proper care, regular check-ups, and good oral hygiene habits.",
  },
  {
    question: "Are composite veneers a good choice for improving my smile? ",
    answer:
      "Yes, composite veneers at Denza Dental are an excellent option for fixing minor chips, gaps, discoloration, and uneven teeth with a quick and minimally invasive procedure.",
  },
  {
    question: "What are composite veneers offered at Denza Dental? ",
    answer:
      "Composite veneers are a cosmetic treatment where a tooth-colored resin is applied and sculpted directly onto your teeth to enhance their shape, color, and overall appearance. ",
  },
  {
    question: "Can I eat normally after getting composite veneers at Denza Dental?",
    answer:
      "Yes, you can eat normally after the procedure. However, avoiding very hard or sticky foods helps maintain your veneers for a longer time.",
  },
  {
    question: "Are composite veneers reversible at Denza Dental? ",
    answer:
      "In most cases, composite veneers are minimally invasive and can be adjusted or removed if needed, as very little natural tooth structure is altered.",
  },
  
];

const CompositeVeeners = () => {
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
      <PageTop title=" Composite Veneers Services" />

      <div className="book_appoint parent" style={{ background: "white" }}>
        <div className="book_appoint_container" data-aos="fade-up">
          <div className="book_appoint_side red_background">
            <img src={apointment} alt="Dental Appointment " />
          </div>

          <div className="book_appoint_text">
            <h2>Why Choose Denza Dental for Composite Veneers in Kharadi, Pune?  </h2>
            <p>

            </p>

            <ol>
              <li>
                <strong>Expert Team</strong>Our dentists have extensive experience in creating and fitting precision dental
                crowns and bridges.
              </li>

              <li>
                <strong>Advanced Technology</strong>We use 3D scanning and CEREC CAD/CAM to produce high-quality restorations
                in-house in as little as 45 minutes.
              </li>

              <li>
                <strong>High-Quality Materials </strong>We utilize premium materials to ensure your dental work is durable and blends
                naturally with your teeth.
              </li>

              <li>
                <strong>Customized Solutions</strong>Each procedure is tailored to your specific needs to guarantee optimal comfort
                and function.
              </li>

              <li>
                <strong>Comprehensive Care</strong>We provide thorough support from your initial consultation through to your
                post-treatment follow-ups.
              </li>

              <li>
                <strong>Patient-Centered Approach </strong>We prioritize your comfort and provide clear information so you can make
                informed health decisions.
              </li>

              <li>
                <strong>Affordable Options </strong>Competitive pricing and flexible payment plans make our top-tier dental care
                accessible to all.
              </li>

              <li>
                <strong>Positive Reputation</strong>Denza Dental is recognized for exceptional service and successful results for
                every patient.
              </li>
            </ol>

          </div>
        </div>
      </div>

      <div className="teeth_cleaning_parent parent">
        <div className="teeth_cleaning_cont cont">
          <h2>What Are Composite Veneers?  </h2>

          <p>
            We enhance your smile by applying a slim coating of dental composite to your
            teeth. This modern method protects your natural enamel while fixing shape,
            color, and alignment issues. Unlike porcelain options, composite veneers need
            less tooth reduction.
          </p>

          <p>
            Our dental professionals apply the composite material in precise layers. Each
            layer undergoes light curing to ensure optimal hardening and durability. The
            material bonds microscopically with your tooth structure, creating a strong
            mechanical and chemical adhesion.
          </p>

        </div>
      </div>

      <div className="book_appoint">
        <div className="book_appoint_container" data-aos="fade-up">
          <div className="book_appoint_text">
            <h2>Who Is a Candidate for Composite Veneers? </h2>
            <p>

            </p>

            <ol>
              <li>Discolored teeth that do not respond to whitening</li>
              <li>Minor chips or cracks in teeth </li>
              <li>Gaps between teeth </li>
              <li>Slightly misaligned teeth</li>
              <li>Worn-down tooth edges</li>
              <li>Uneven tooth lengths </li>
              <li>Small or undersized teeth</li>
              <li>Mild tooth rotation </li>
              <li>Surface irregularities </li>
              <li> Previous dental work needing cosmetic improvement</li>
            </ol>
          </div>

          <div className="book_appoint_side red_background">
            <img src={apointment} alt="Dental Appointment " />
          </div>
        </div>
      </div>


      <div className="third_section">
        <div className="third_header">
          <h2>The Process of Getting Composite Veneers at Denza Dental</h2>
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

       <div className="after_care_parent parent">
        <div className="after_care_cont cont">
          <h2>Benefits of Getting Composite Veneers treatment </h2>

          <ul>
            <li>Immediate improvement in smile appearance </li>
            <li>Minimally invasive procedure with little to no tooth reduction </li>
            <li>Natural-looking results that blend seamlessly </li>
            <li>Quick treatment time compared to traditional veneers </li>
            <li>Easily repairable if something goes wrong </li>
            <li>More affordable composite veneers price compared to porcelain options </li>
            <li>Reversible procedure preserving natural tooth structure</li>
            
          </ul>
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

export default CompositeVeeners;
