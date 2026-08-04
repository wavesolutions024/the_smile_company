import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./WisdomToothExtraction.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import img1 from "../../../assets/general_service/img.webp";
import gallery1 from "../../../assets/about_page/after1.webp";
import apointment from "../../../assets/aapointment.webp";
import PageTop from "../../../comp/page_top/PageTop";

const whyChooseData = [
  {
    title: "Persistent Jaw Pain",
    description:
      "Continuous pain or pressure at the back of the mouth may indicate an impacted or problematic wisdom tooth.",
  },
  {
    title: "Repeated Gum Infections ",
    description:
      "Partially erupted wisdom teeth can trap food and bacteria, leading to frequent infections and swelling. ",
  },
  {
    title: "Damage to Nearby Teeth",
    description:
      "Impacted wisdom teeth may push against adjacent teeth, causing crowding, decay, or alignment issues.",
  },
  {
    title: "Cyst Formation",
    description:
      "Fluid-filled sacs can develop around impacted teeth, potentially affecting the surrounding bone and tissues. ",
  },
  {
    title: "Orthodontic Concerns",
    description:
      "Wisdom teeth can shift aligned teeth over time, affecting the results of braces or aligner treatments.",
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
    question: "Is it possible to remove an impacted wisdom tooth safely?  ",
    answer:
      "Yes, impacted wisdom teeth can be safely removed using a minor surgical procedure performed by experienced dentists with proper anesthesia and care. ",
  },
  {
    question:
      "How long does it take to heal after impacted wisdom tooth removal? ",
    answer:
      "Initial recovery usually takes 2–4 days, while complete healing of the area may take a few weeks depending on the complexity of the extraction.",
  },
  {
    question: "What precautions should I follow after wisdom tooth removal?",
    answer:
      "Avoid smoking, using straws, eating hard foods, and touching the extraction site to prevent complications and ensure proper healing.",
  },
  {
    question: "When can I resume brushing after wisdom tooth extraction?",
    answer:
      "You can brush your teeth the next day, but avoid the extraction area for the first 24 hours and continue gently afterward.  ",
  },
  {
    question:
      "Are there any risks or complications after wisdom tooth extraction? ",
    answer:
      "Mild swelling, discomfort, or slight bleeding is normal. Rarely, complications like infection or dry socket may occur if aftercare instructions are not followed. ",
  },
];

const WisdomToothExtraction = () => {
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
      <PageTop title="Wisdom Tooth Extraction Services" />

      <div className="wisdom_tooth_extract_parent parent">
        <div className="wisdom_tooth_extract_cont cont">
          <h2>
            Impacted Wisdom Tooth Extraction in Kharadi, Pune – Denza Dental
          </h2>

          <div>
            <p>
              Experiencing pain or discomfort at the back of your jaw? It could
              be due to impacted wisdom teeth. At Denza Dental, we provide safe
              and effective impacted wisdom tooth extraction in Kharadi, Pune
              using advanced techniques for a smooth and comfortable
              experience.{" "}
            </p>

            <p>
              Choosing the right dental clinic is important for successful
              treatment and quick recovery. Our experienced team ensures precise
              diagnosis, gentle removal, and proper aftercare guidance to help
              you heal faster.{" "}
            </p>

            <p>
              If you’re looking for reliable wisdom tooth extraction near you in
              Kharadi, Denza Dental is here to provide expert care and
              long-lasting relief.
            </p>
          </div>
        </div>
      </div>

      <div className="second_section">
        <div className="second_section_container">
          <div className="second_section_header">
            <h2> Key Reasons for Wisdom Tooth Extraction </h2>
            <p>When Wisdom Tooth Removal is Recommended</p>
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

      <div className="parent wisdom_tooth_extraction_1_parent">
        <div className="cont wisdom_tooth_extraction_1_cont">
          <h2>Types of Wisdom Tooth Extractions </h2>

          <div className="wisdom_tooth_extraction_1_left_right">
            <div className="wisdom_tooth_extraction_1_left">
              <h3>Simple Wisdom Tooth Extraction (Fully Erupted Tooth) </h3>
              <p>
                This procedure is suitable for wisdom teeth that have fully come
                out and are easily accessible. Recovery is usually quick, taking
                around 2–3 days.{" "}
              </p>

              <ul>
                <strong>Procedure Steps:</strong>
                <li>The area is numbed using local anesthesia</li>
                <li>The tooth is gently loosened using dental instruments</li>
                <li>The tooth is carefully removed using forceps</li>
              </ul>
            </div>
            <div className="wisdom_tooth_extraction_1_right">
              <h3>Surgical Wisdom Tooth Extraction (Impacted Tooth)</h3>
              <p>
                This method is used for impacted or partially erupted wisdom
                teeth that are not easily visible. It is a more advanced
                procedure performed with precision.
              </p>
              <ul>
                <strong>Procedure Steps:</strong>
                <li>Local anesthesia is given to ensure comfort</li>
                <li>
                  A small incision is made in the gum to access the tooth{" "}
                </li>
                <li>Any bone covering the tooth is carefully removed</li>
                <li>
                  The tooth may be divided into sections for easier removal
                </li>
                <li>The area is cleaned thoroughly to prevent infection</li>
                <li>Dissolvable stitches may be placed to support healing </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="wisdom_tooth_extract_aftercare_parent parent">
        <div className="wisdom_tooth_extract_aftercare_cont cont">
          <h2>Wisdom Tooth Extraction Aftercare & Recovery in </h2>

          <div className="wisdom_tooth_extract_aftercare_three_point">
            <div className="wisdom_tooth_extract_aftercare_points">
              <ul>
                <b>Immediate Care (First 24 Hours) </b>
                <li>Keep gentle pressure on the gauze to control bleeding</li>
                <li>Apply an ice pack on the cheek in intervals to reduce swelling </li>
                <li>Take prescribed medication on time for better pain control </li>
                <li>Stick to soft and cool foods; avoid straws, smoking, or spitting </li>
                <li>Rest well and keep your head slightly elevated while sleeping </li>
              </ul>
            </div>
            <div className="wisdom_tooth_extract_aftercare_points">
              <ul>
                <b>Recovery Phase (Day 2 to Day 4)</b>
                <li>Begin rinsing with warm salt water to keep the area clean</li>
                <li>Maintain oral hygiene but avoid brushing directly on the extraction site </li>
                <li>Gradually include soft foods like khichdi, curd, or soft rice </li>
                <li>Mild swelling may peak around day 2–3 and then slowly reduce</li>
              </ul>
            </div>
            <div className="wisdom_tooth_extract_aftercare_points">
              <ul>
                <b>When to Contact Your Dentist</b>
                <li>Bleeding continues even after applying pressure </li>
                <li>Severe or worsening pain despite medication </li>
                <li>Swelling increases instead of improving after a few days</li>
                <li>Signs of infection such as fever or discharge</li>
                <li>Numbness that does not resolve over time</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

     

      <div className="faq_section1">
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

export default WisdomToothExtraction;
