import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./MinorOralSurgeries.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import img1 from "../../../assets/general_service/img.webp";
import gallery1 from "../../../assets/about_page/after1.webp";
import apointment from "../../../assets/aapointment.webp";
import PageTop from "../../../comp/page_top/PageTop";
import { Helmet } from "react-helmet";

const whyChooseData = [
  {
    icon: "👨‍⚕️",
    title: "Experienced Dental Team ",
    description:
      "Our dentists are trained in performing a wide range of minor oral surgical procedures with precision.",
  },
  {
    icon: "🦷",
    title: "Advanced Equipment",
    description:
      "We use modern tools and techniques for accurate diagnosis and effective treatment. ",
  },
  {
    icon: "💰",
    title: "Pain-Controlled Procedures ",
    description:
      "All treatments are performed under proper anesthesia to ensure maximum comfort.",
  },
  {
    icon: "😊",
    title: "Quick Recovery Support",
    description:
      "We provide detailed aftercare guidance to promote faster healing",
  },
  {
    icon: "😊",
    title: "Strict Hygiene Protocols ",
    description:
      "We maintain high standards of sterilization and infection control. ",
  },
];

const faqs = [
  {
    question: "What are minor oral surgeries?  ",
    answer:
      "Minor oral surgeries are simple dental procedures performed under local anesthesia to treat issues related to teeth, gums, or surrounding tissues. ",
  },
  {
    question: "Are minor oral surgeries painful?",
    answer:
      "No, these procedures are usually painless as they are done under anesthesia. You may experience mild discomfort after the procedure, which is manageable with medication. ",
  },
  {
    question: "How long does it take to recover from minor oral surgery?  ",
    answer:
      "Most patients recover within a few days, while complete healing may take 1–2 weeks depending on the procedure.",
  },
  {
    question: "Do I need to take leave after minor oral surgery? ",
    answer:
      "In most cases, you can resume normal activities within 24 hours, but it’s best to avoid strenuous work for a day or two.  ",
  },
  {
    question: "What procedures are included under minor oral surgery?",
    answer:
      "Common procedures include tooth extraction, wisdom tooth removal, gum surgery, minor cyst removal, and root-end surgeries.",
  },
];

const MinorOralSurgeries = () => {
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
      <Helmet>
        <title>
          Minor Oral Surgery in Kharadi, Pune | Denza
          Dental Center
        </title>
        <meta
          name="description"
          content="Minor oral surgery in Kharadi, Pune 
at Denza Dental Center, including tooth 
extraction, wisdom tooth removal, apicoectomy 
and selected oral surgical procedures with 
personalized treatment planning and aftercare."
        />

        <link
          rel="canonical"
          href="https://denzadental.com/minor-oral-surgerie
s"
        />

        <meta
          name="keywords"
          content=" 
minor oral surgery Kharadi, 
minor oral surgery Pune, 
minor oral surgeries Kharadi, 
minor oral surgery dentist Kharadi, 
minor oral surgery clinic Pune, 
oral surgery Kharadi, 
oral surgery Pune, 
dental surgery Kharadi, 
minor dental surgery Pune, 
oral surgical procedures Kharadi, 
tooth extraction Kharadi, 
wisdom tooth removal Kharadi, 
impacted wisdom tooth surgery Pune, 
apicoectomy Kharadi, 
root end surgery Pune, 
gum surgery Kharadi, 
oral cyst removal Pune, 
dental abscess treatment Kharadi, 
surgical tooth extraction Pune, 
dental surgery near Kharadi, 
oral surgeon near Kharadi, 
oral surgery near me Kharadi, 
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
          content="Minor Oral Surgery in Kharadi, 
Pune | Denza Dental Center"
        />
        <meta
          property="og:description"
          content="Minor oral surgery in Kharadi, Pune 
including tooth extraction, wisdom tooth removal, 
apicoectomy and selected oral surgical 
procedures at Denza Dental Center."
        />
        <meta
          property="og:url"
          content="https://denzadental.com/minor-oral-surg
eries"
        />
        <meta
          property="og:image"
          content="https://denzadental.com/og-image.jpg"
        />
        <meta
          property="og:image:alt"
          content="Minor oral surgery at Denza Dental 
Center in Kharadi, Pune"
        />
        <meta
          property="og:locale"
          content="en_IN"
        />
      </Helmet>
      <PageTop title="Minor Oral Surgeries Services" />

      <div className="wisdom_tooth_extract_parent parent">
        <div className="wisdom_tooth_extract_cont cont">
          <h2>Minor Oral Surgeries in Kharadi, Pune – Denza Dental</h2>

          <div>
            <p>
              At Denza Dental, we offer safe and effective minor oral surgeries
              in Kharadi, Pune using advanced techniques and a patient-focused
              approach. These procedures are designed to treat common dental
              issues with minimal discomfort and faster recovery.
            </p>
          </div>
        </div>
      </div>

      <div className="second_section">
        <div className="second_section_container">
          <div className="second_section_header">
            <h2>
              {" "}
              Why Choose Denza Dental for Minor Oral Surgeries in Kharadi?{" "}
            </h2>
          </div>

          <div className="why_choose_cards">
            {whyChooseData.map((item, index) => (
              <div
                key={index}
                className="why_choose_card"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="book_appoint" style={{ background: "white" }}>
        <div className="book_appoint_container" data-aos="fade-up">
          <div className="book_appoint_text">
            <h2>Common Minor Oral Surgery Procedures We Offer</h2>

            <ol>
              <li>
                <strong>Tooth Extraction :</strong> Removal of severely damaged,
                decayed, or non-restorable teeth.
              </li>
              <li>
                <strong>Wisdom Tooth Removal :</strong> Treatment for impacted
                or painful wisdom teeth causing discomfort or infection.
              </li>
              <li>
                <strong>Root Canal Surgery (Apicoectomy) :</strong> A minor
                surgical procedure to treat infection at the tip of the tooth
                root when conventional RCT is not sufficient.
              </li>
              <li>
                <strong>Gum Surgery :</strong>Procedures to treat gum
                infections, overgrowth, or periodontal issues.
              </li>

              <li>
                <strong>Cyst or Abscess Removal :</strong>Removal of infected
                tissue or fluid-filled sacs to prevent further complications.
              </li>
            </ol>
          </div>

          <div className="book_appoint_side red_background">
            <img src={apointment} alt="Dental Appointment " />
          </div>
        </div>
      </div>

      <div className="faq_section1" style={{ background: "var(--background)" }}>
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

      <div className="parent gallery_parent" style={{ background: "white" }}>
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
                  <div
                    className="gallery_card"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
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

export default MinorOralSurgeries;
