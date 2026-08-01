import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./DentureTreatment.scss";
import img1 from "../../../assets/general_service/img.webp";
import gallery1 from "../../../assets/about_page/after1.webp";
import PageTop from "../../../comp/page_top/PageTop";

const services = [
  {
    title: "Expert Team ",
    description:
      "ur skilled dental professionals specialize in denture treatments, ensuring accurate fit, comfort, and reliable results. ",
  },
  {
    title: "Personalized Care ",
    description:
      "We design customized denture solutions after detailed consultations to match your oral needs and facial structure. ",
  },
  {
    title: "Advanced Technology",
    description:
      "We use modern techniques and high-quality materials to create durable, comfortable, and natural-looking dentures.",
  },
  {
    title: "Comprehensive Services ",
    description:
      "From diagnosis to final fitting and follow-up care, we provide complete denture treatment under one roof. .",
  },
  {
    title: "Comfort & Natural Appearance",
    description:
      "Our dentures are designed for a secure fit, improved function, and a natural smile appearance.",
  },
  {
    title: "Patient-Centric Approach",
    description:
      "We prioritize patient comfort, clear communication, and flexible appointment scheduling. ",
  },
  {
    title: "Proven Results ",
    description:
      "Our consistent outcomes and patient satisfaction reflect our commitment to quality dental care. ",
  },
];

const faqs = [
  {
    question: "How long does it take to get dentures? ",
    answer:
      "It usually takes a few days to 2–3 weeks, depending on impressions, fittings, and adjustments.",
  },
  {
    question: "Can I eat normally with dentures?",
    answer:
      "Yes, but it may take a short adjustment period. Gradually, you can eat most foods comfortably.  ",
  },
  {
    question: "Can I sleep with my dentures in? ",
    answer:
      "It is generally recommended to remove dentures at night to allow gums to rest and maintain oral hygiene. ",
  },
  {
    question: "How often should I visit the dentist with dentures? ",
    answer:
      "Regular check-ups every 6 months are recommended for adjustments and oral health monitoring. ",
  },
  {
    question: "Can dentures be repaired if they break? ",
    answer:
      "Yes, most dentures can be repaired or relined depending on the type and extent of damage. ",
  },
];

const RestorativeDentistry = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      <PageTop title="Denture Treatment Services" />


      {/* <div className="parent second_parent">
        <div className="cont second_cont">
          <div className="general_left">
            <img src={img1} alt="General Dental Service" />
          </div>
          <div className="general_right">
            <h2>General Dental Services</h2>
            <p>
              Just like you visit your family doctor for check-ups to stay
              healthy, similarly, general dental services are for regular care
              of your teeth. These general dental services help you catch
              problems when they are small. They also allow problems to be
              treated before they become more severe.
            </p>
          </div>
        </div>
      </div> */}

      <div className="parent second_parent">
        <div className="cont second_cont">
          <div className="general_left">
            <img src={img1} alt="Full Mouth Rehabilitation" />
          </div>
          <div className="general_right">
            <h2>Types of Dentures Offered at Denza Dental, Kharadi (Pune)</h2>
            <ul>
              Complete Dentures
              <li>Replace all missing teeth in an upper or lower arch </li>
              <li>Removable and designed for full-mouth restoration</li>
            </ul>

            <ul>
              Partial Dentures
              <li>Used when some natural teeth are still present</li>
              <li>Fill gaps and help maintain remaining teeth alignment</li>
            </ul>

            <ul>
              Immediate Dentures
              <li>Placed immediately after tooth extraction </li>
              <li>
                Act as a temporary solution during healing before final
                dentures{" "}
              </li>
            </ul>

            <ul>
              Implant-Supported Dentures
              <li>Attached to dental implants for better stability</li>
              <li>
                Provide improved comfort, function, and a secure fit compared to
                traditional dentures{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        className="parent second_parent"
        style={{ background: "var(--background)" }}
      >
        <div className="cont second_cont">
          <div className="general_right">
            <h2>
              Benefits of Dentures for Missing Teeth at Denza Dental, Kharadi
              (Pune)
            </h2>
            <ul>
              <li>
                <b>Restored Function:</b> Improves chewing ability and speech
                clarity
              </li>
            </ul>

            <ul>
              <li>
                <b>Natural Appearance :</b>
                Restores a confident and aesthetic smile
              </li>
            </ul>

            <ul>
              <li>
                <b>Facial Support:</b> Maintains facial structure and prevents a
                sunken look
              </li>
            </ul>

            <ul>
              <li>
                <b>Better Oral Health:</b> Helps prevent shifting of remaining
                teeth and supports gum health
              </li>
            </ul>
            <ul>
              <li>
                <b>Cost-Effective Solution:</b> More affordable compared to
                dental implants
              </li>
            </ul>
            <ul>
              <li>
                <b>Custom Fit Options:</b> Designed to suit individual comfort
                and needs
              </li>
            </ul>
            <ul>
              <li>
                <b>Easy Maintenance :</b> Removable and simple to clean for
                better hygiene
              </li>
            </ul>
            <ul>
              <li>
                <b>Improved Oral Hygiene :</b> Helps reduce risk of infection
                and supports overall oral health
              </li>
            </ul>
            <ul>
              <li>
                <b>Quick Results :</b>Immediate improvement with options like
                temporary dentures
              </li>
            </ul>
          </div>
          <div className="general_left">
            <img src={img1} alt="Full Mouth Rehabilitation" />
          </div>
        </div>
      </div>

      <div className="third_section" style={{ background: "var(--white)" }}>
        <div className="third_header">
          <h2 style={{ textAlign: "center", color: "var(--accent)" }}>
            Why Choose Denza Dental for Dentures in Pune?
          </h2>
        </div>

        <div className="service_cards">
          {services.map((service, index) => (
            <div
              key={index}
              className="service_card"
              style={{ background: "var(--background)" }}
            >
              <p className="service_card_index">{index + 1}.</p>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="equipment_parent parent">
        <div className="equipment_cont cont">
          <h2>
            Equipment Used in Denture Treatment at Denza Dental, Kharadi (Pune)
          </h2>
          <div className="equipment_list">
            <ul>
              <li>
                <b>Digital Scanners :</b> Capture accurate 3D impressions of
                your mouth, improving comfort and precision without traditional
                molds
              </li>
            </ul>

            <ul>
              <li>
                <b>CAD/CAM Systems :</b> Computer-aided design and manufacturing
                for highly accurate, custom-fit dentures
              </li>
            </ul>

            <ul>
              <li>
                <b>3D Printing Technology :</b> Creates precise denture models
                and final prosthetics with speed and accuracy
              </li>
            </ul>

            <ul>
              <li>
                <b>Digital & Panoramic X-Rays :</b> Provide detailed images of
                teeth, gums, and bone structure for proper treatment planning
              </li>
            </ul>

            <ul>
              <li>
                <b>Dental Articulators :</b>Simulate jaw movements to ensure
                correct bite alignment and function
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="faq_section" style={{ background: "var(--white)" }}>
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
