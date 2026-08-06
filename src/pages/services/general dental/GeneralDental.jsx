import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./GeneralDental.scss";
import img1 from "../../../assets/general_service/img.webp";
import gallery1 from "../../../assets/about_page/after1.webp";
import { Link } from "react-router-dom";
import PageTop from "../../../comp/page_top/PageTop";

const services = [
  {
    title: "Dental Checkups",
    description:
      "At Denza Dental, routine dental checkups are the foundation of preventive dentistry. Our dentists perform a detailed evaluation of your teeth, gums, and oral tissues to identify early signs of tooth decay, gum disease, and other dental conditions. Personalized consultations help you maintain long-term oral health and a confident smile. ",
  },
  {
    title: "Dental X-ray",
    description:
      "Our clinic uses advanced digital dental X-ray technology to accurately diagnose underlying oral health issues. These scans help detect interproximal cavities, bone loss, impacted teeth, and other hidden dental problems, allowing us to plan precise and effective treatments. ",
  },
  {
    title: "Teeth Cleaning",
    description:
      "Professional teeth cleaning at Denza Dental removes plaque, tartar, and bacteria buildup that cannot be eliminated with regular brushing and flossing. This preventive dental procedure helps reduce the risk of cavities, gingivitis, and periodontal disease while enhancing your smile’s appearance. ",
  },
  {
    title: "Root Canal Treatment",
    description:
      "Root canal treatment is an effective endodontic procedure used to treat infected or damaged tooth pulp. At Denza Dental, we ensure a comfortable experience while removing infection, relieving pain, and preserving your natural tooth structure. ",
  },
  {
    title: "Root Canal Retreatment ",
    description:
      "In some cases, a previously treated root canal may not heal properly or can develop new infection. Root canal retreatment involves reopening the tooth, removing the old filling material, and carefully cleaning and sealing the canals again to restore oral health and save the tooth. ",
  },
  {
    title: " Tooth Extractions ",
    description:
      "When a tooth is beyond repair due to severe decay, damage, or infection, extraction may be necessary. We perform safe and gentle tooth extractions while ensuring patient comfort and proper healing.  ",
  },
  {
    title: "Wisdom Tooth Extraction",
    description:
      "Wisdom teeth can lead to pain, swelling, and alignment issues if not properly managed. We evaluate their position with dental imaging and perform extractions only when required, using minimally invasive techniques for faster recovery. ",
  },
  {
    title: "Minor Oral Surgeries",
    description:
      "Denza Dental offers a range of minor oral surgical procedures to treat various dental conditions, including soft tissue concerns, minor infections, and corrective treatments. Our team uses precise techniques and modern equipment to ensure safe procedures, minimal discomfort, and quick recovery.",
  },
];

const faqs = [
  {
    question:
      " What dental services does Denza Dental offer in Kharadi, Pune? ",
    answer:
      "Denza Dental provides a wide range of general dentistry services including dental checkups, teeth cleaning, cavity fillings, root canal treatment, root canal retreatment, tooth extractions, wisdom tooth removal, dental X-rays, and minor oral surgeries—all under one roof in Kharadi, Pune. ",
  },
  {
    question: "How often should I visit Denza Dental for a dental checkup? ",
    answer:
      "It is recommended to visit Denza Dental every 6 months for a routine dental checkup and cleaning. Regular visits help in early detection of cavities, gum disease, and other oral health issues. ",
  },
  {
    question: "Do you provide digital dental X-rays? ",
    answer:
      "Yes, Denza Dental uses advanced digital dental X-ray technology for accurate diagnosis. These X-rays are safe, quick, and help detect hidden dental problems effectively.",
  },
  {
    question: " When is tooth extraction necessary? ",
    answer:
      "Tooth extraction is recommended when a tooth is severely damaged, decayed,infected, or impacted. At Denza Dental, extractions are performed with a focus on patient comfort and safety.  ",
  },
  {
    question: "Are minor oral surgeries safe at Denza Dental?",
    answer:
      "Yes, Denza Dental performs minor oral surgeries using modern techniques and strict safety protocols to ensure minimal discomfort and quick recovery. ",
  },
];

const GeneralDental = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      <PageTop title="General Dental Services" />

      <div className="parent second_parent">
        <div className="cont second_cont">
          <div className="general_left">
            <img src={img1} alt="General Dental Service" />
          </div>
          <div className="general_right">
            <h2 style={{ color: "var(--accent)" }}>General Dental Services</h2>
            <p>
              Just like you visit your family doctor for check-ups to stay
              healthy, similarly, general dental services are for regular care
              of your teeth. These general dental services help you catch
              problems when they are small. They also allow problems to be
              treated before they become more severe.
            </p>
          </div>
        </div>
      </div>

      <div className="third_section">
        <div className="third_header">
          <h2 style={{ color: "var(--accent)" }}>
            General Dental Services that Denza Dental Provides in Pune
          </h2>
        </div>

        <div className="service_cardss">
          {services.map((service, index) => (
            <div key={index} className="service_cardssss">
              <p className="service_card_index">{index + 1}.</p>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="center_alignment_parent parent">
        <div className="center_alignment_cont cont">
          <h2>
            Why Denza Dental is Trusted for General Dentistry in Kharadi, Pune
          </h2>
          <p>
            Denza Dental is a trusted name for high-quality general dentistry in
            Kharadi, Pune. Our clinic is committed to providing comprehensive
            dental care using modern technology and patient-focused treatment
            approaches.
          </p>
          <p>
            With a team of experienced dentists, we focus on preventive,
            restorative, and advanced dental treatments to ensure long-term oral
            health. From routine dental checkups and teeth cleaning to root
            canal treatments, extractions, and minor oral surgeries, every
            procedure is performed with precision and care.
          </p>
          <p>
            Located conveniently in Kharadi, Pune, Denza Dental combines
            clinical expertise with a comfortable environment, making every
            visit stress-free. Our goal is to deliver personalized dental
            solutions that help you maintain a healthy, confident smile.
          </p>
        </div>
      </div>

      <div className="faq_section_general">
        <div className="faq_header">
          <h2>FAQs</h2>
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

export default GeneralDental;
