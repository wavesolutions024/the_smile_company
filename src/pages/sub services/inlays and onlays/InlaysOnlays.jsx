import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./InlaysOnlays.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import img1 from "../../../assets/general_service/img.webp";
import gallery1 from "../../../assets/about_page/after1.webp";
import apointment from "../../../assets/aapointment.webp";
import PageTop from "../../../comp/page_top/PageTop";

const whyChooseData = [
  {
    icon: "👨‍⚕️",
    title: " Initial Consultation",
    description:
      "Your treatment begins with a comprehensive dental examination, including digital imaging to assess the extent of decay or damage. We discuss your concerns, review your dental history, and create a personalized treatment plan along with a clear cost estimate.",
  },
  {
    icon: "🦷",
    title: " Tooth Preparation & Digital Scanning",
    description:
      "The damaged portion of the tooth is carefully removed and the area is thoroughly cleaned. Using advanced intraoral 3D scanning, we capture precise digital impressions, ensuring accuracy and a perfect fit. Shade matching is also done to blend seamlessly with your natural teeth.",
  },
  {
    icon: "💰",
    title: "Custom Design & Fabrication",
    description:
      "With advanced CAD/CAM technology, your inlay or onlay is digitally designed and crafted from a high-quality ceramic block. This allows for precise, durable, and natural-looking restorations, often completed in a single visit without the need for temporary solutions.",
  },
  {
    icon: "😊",
    title: "Placement & Finishing",
    description:
      "The custom restoration is placed and adjusted to ensure a comfortable and natural bite. Once finalized, it is securely bonded using high-strength dental cement and polished for a smooth finish. You will also receive guidance on maintaining your restoration for long-term results. ",
  },
];

const services = [
  {
    title: "Quick Discussion",
    description:
      "The dentist talks with you about any pain, concerns, or changes you’ve noticed. This helps focus on what matters most to you. ",
  },
  {
    title: "Mouth Check ",
    description:
      "Your teeth, gums, and overall oral health are carefully checked to spot cavities, gum issues, or other problems early. ",
  },
  {
    title: "X-rays (Only if Needed)",
    description:
      "If required, X-rays are taken to see what’s happening beneath the surface, like hidden decay or jaw issues.",
  },
  {
    title: " Deep Cleaning ",
    description:
      "Plaque and tartar are removed, and your teeth are polished to make them feel clean and smooth.",
  },
  {
    title: "Next Steps & Advice ",
    description:
      "You’ll get clear guidance on your dental health, tips to improve your routine, and recommendations if any treatment is needed. ",
  },
];

const faqs = [
  {
    question: "What are inlays and onlays in dentistry?  ",
    answer:
      "Inlays and onlays are custom restorations used to repair teeth with moderate damage or decay. They offer a stronger and more precise alternative to traditional fillings while preserving natural tooth structure.  ",
  },
  {
    question: "When are inlays or onlays recommended?",
    answer:
      "They are ideal when a tooth is too damaged for a filling but does not require a full crown, helping restore strength and function effectively. ",
  },
  {
    question: "How are inlays different from veneers?  ",
    answer:
      "Inlays repair damage within the tooth surface, while veneers are thin coverings placed on the front of teeth mainly for cosmetic improvement.",
  },
  {
    question: "Are onlays a better option than crowns? ",
    answer:
      "Onlays are a more conservative choice as they cover only the damaged portion of the tooth, whereas crowns cover the entire tooth structure. ",
  },
  {
    question: "What materials are used for inlays and onlays? ",
    answer:
      "They are typically made from durable materials like ceramic or composite resin, chosen for strength and a natural tooth-like appearance. ",
  },
  {
    question: "What is the purpose of an onlay? ",
    answer:
      "An onlay restores and protects a tooth with larger areas of damage, especially when the cusps (chewing surfaces) are involved.",
  },
  {
    question: "How do inlays compare to traditional metal fillings?",
    answer:
      "Inlays provide a more precise fit, better durability, and a natural look compared to traditional metal fillings, making them a preferred modern solution. ",
  },
];

const InlaysOnlays = () => {
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
      <PageTop title="Inlays Onlays Services" />

      <div className="book_appoint">
        <div className="book_appoint_container" data-aos="fade-up">
          <div className="book_appoint_text">
            <h2> What Are Inlays & Onlays?</h2>
            <p>
              Inlays and onlays are custom-made dental restorations used to repair
              teeth affected by decay or damage while preserving as much natural
              tooth structure as possible. Inlays fit within the grooves of the tooth,
              whereas onlays extend over one or more cusps, providing additional
              coverage and strength. They are a conservative and durable
              alternative to full crowns, restoring both function and appearance
              effectively.
            </p>

          </div>

          <div className="book_appoint_side red_background">
            <img src={apointment} alt="Dental Appointment " />
          </div>
        </div>
      </div>


      <div className="second_section">
        <div className="second_section_container">
          <div className="second_section_header">
            <h2>  The Inlays & Onlays Procedure at Denza Dental  </h2>
            <p>
              
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

export default InlaysOnlays;
