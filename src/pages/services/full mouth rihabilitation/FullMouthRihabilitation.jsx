import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./FullMouthRihabilitation.scss";
import img1 from "../../../assets/general_service/img.webp";
import gallery1 from "../../../assets/about_page/after1.webp";
import { Link } from "react-router-dom";
import PageTop from "../../../comp/page_top/PageTop";

const services = [
  {
    title: "Expert Team ",
    description:
      "Our experienced dental professionals specialize in comprehensive full mouth rehabilitation, ensuring precise diagnosis and effective treatment planning. ",
  },
  {
    title: "Advanced Technology",
    description:
      "We use modern diagnostic tools and equipment for accurate treatment and predictable results. ",
  },
  {
    title: "Global Exposure & Expertise ",
    description:
      "Our dentists bring global exposure through advanced clinical training, international workshops, and  evidence-based dental practices, ensuring world-class treatment standards in full mouth rehabilitation. ",
  },
  {
    title: "Personalized Care ",
    description:
      "Each treatment plan is customized based on the patient’s oral condition, functional needs, and aesthetic goals. ",
  },
  {
    title: "Holistic Approach ",
    description:
      "We focus on restoring both function and appearance for complete oral rehabilitation. ",
  },
  {
    title: "High-Quality Materials",
    description:
      "We use durable, premium-quality materials for long-lasting restorations.",
  },
  {
    title: "Patient Comfort ",
    description:
      "We ensure a relaxed, pain-free, and supportive treatment experience. ",
  },
  {
    title: "Patient Comfort ",
    description:
      "We ensure a relaxed, pain-free, and supportive treatment experience. ",
  },
  {
    title: "Comprehensive Dental Care  ",
    description:
      "All treatments including restorative, cosmetic, and periodontal care are available under one roof. ",
  },
  {
    title: "Proven Results",
    description:
      "Our successful cases and patient satisfaction reflect consistent quality and care.",
  },
  {
    title: "Modern Facility  ",
    description:
      "Our clinic is equipped with a clean, safe, and advanced dental setup for optimal care.",
  },
  {
    title: "Continual Learning  ",
    description:
      "Our team stays updated with the latest global advancements in dentistry.",
  },
];

const faqs = [
  {
    question: "What is included in full mouth rehabilitation? ",
    answer:
      "It includes a combination of treatments such as dental implants, crowns, bridges, dentures, fillings, and orthodontic corrections, depending on individual dental needs.",
  },
  {
    question: "How long does full mouth reconstruction last? ",
    answer:
      "With proper care, results can last 10–20 years or more, especially when dental implants and good oral hygiene are maintained. ",
  },
  {
    question:
      "What is the difference between full mouth rehabilitation and a smile makeover? ",
    answer:
      "Full mouth rehabilitation focuses on restoring function, health, and aesthetics, while a smile makeover mainly focuses on cosmetic improvements. ",
  },
  {
    question: "Is full mouth rehabilitation painful? ",
    answer:
      "No, the procedures are performed under local anesthesia. Mild discomfort after treatment is normal and temporary.  ",
  },
  {
    question: "How do I know if I need full mouth rehabilitation? ",
    answer:
      "You may need it if you have multiple missing teeth, severe decay, bite problems, gum disease, or difficulty in chewing and speaking. ",
  },
];

const servicess = [
  {
    title: "Initial Consultation & Assessment",
    points: [
      "Detailed oral and medical history evaluation",
      "Comprehensive dental examination",
      "Digital X-rays, CBCT 3D scans, and intraoral imaging for precise diagnosis",
    ],
  },
  {
    title: "Customized Treatment Planning ",
    points: [
      "Personalized rehabilitation plan based on individual needs ",
      "Digital smile design and treatment simulation for predictable outcomes ",
      "Step-by-step explanation of the complete process",
    ],
  },
  {
    title: "Restorative Procedures ",
    points: [
      "Use of high-quality materials for crowns, bridges, and implants ",
      "Advanced techniques like CAD/CAM and precision dentistry",
      "Focus on durability, function, and aesthetics ",
    ],
  },
  {
    title: "Cosmetic Enhancements",
    points: [
      "Veneers, teeth whitening, and bonding for smile improvement ",
      "Digital smile designing for visualizing final results ",
    ],
  },
  {
    title: " Functional Corrections ",
    points: [
      "Bite correction and alignment improvement  ",
      "Management of jaw-related issues and TMJ concerns ",
      ,
    ],
  },
  {
    title: "Periodontal (Gum) Care  ",
    points: [
      "Treatment of gum disease ",
      "Strengthening gum health before restorative procedures  ",
      "Long-term maintenance planning  ",
      ,
    ],
  },
  {
    title: "Follow-Up & Maintenance ",
    points: [
      "Regular check-ups to monitor progress ",
      "Preventive care and maintenance guidance ",
      "Oral hygiene education for long-term success ",
      ,
    ],
  },
  {
    title: "Patient Comfort & Care  ",
    points: [
      "Experienced dental team handling complex cases ",
      "Comfortable, stress-free treatment environment  ",
      "Focus on safety, precision, and patient satisfaction",
      ,
    ],
  },
];

const FullMouthRihabilitation = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      <PageTop title="Full Mouth Rihabilitation " />
 
      <div className="parent second_parent">
        <div className="cont second_cont">
          <div className="general_left">
            <img src={img1} alt="Full Mouth Rehabilitation" />
          </div>
          <div className="general_right">
            <h2>
              Best Full Mouth Rehabilitation in Kharadi, Pune | Denza
              Dental{" "}
            </h2>
            <p>
              Full mouth rehabilitation in Pune is a comprehensive dental
              treatment designed to restore the function, health, and aesthetics
              of the entire mouth. It involves a combination of restorative,
              cosmetic, and functional dental procedures tailored to each
              patient’s unique needs.
            </p>
            <h4>What Full Mouth Rehabilitation Includes </h4>
            <ul>
              Restorative Treatments
              <li>Crowns, bridges, and fillings to repair damaged teeth </li>
              <li>
                Replacement of missing teeth for complete oral restoration
              </li>
            </ul>

            <ul>
              Cosmetic Enhancements
              <li>
                Veneers, teeth whitening, and bonding to improve smile
                appearance
              </li>
              <li>Smile design for a natural and balanced look</li>
            </ul>

            <ul>
              Functional Improvements
              <li>Bite correction and alignment</li>
              <li>Jaw function improvement and stability </li>
            </ul>

            <ul>
              Gum & Periodontal Care
              <li>Treatment of gum disease</li>
              <li> Maintenance of overall oral health</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="third_section">
        <div className="third_header">
          <h2 style={{ textAlign: "center", color: "var(--accent)" }}>
            Why Choose Denza Dental for Full Mouth Rehabilitation in Pune?
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

      <div className="side_side_parent parent">
        <div className="side_side_cont cont">
          <div className="left_side_side">
            <h3>What is Full Mouth Rehabilitation in Pune? </h3>

            <p>
              Full mouth rehabilitation in Pune is a comprehensive dental
              treatment that restores the overall function, health, and
              appearance of the entire mouth. It combines multiple dental
              procedures based on individual needs.
            </p>
            <ul>
              It includes:
              <li>
                <b>Restoring Missing or Damaged Teeth </b> – Using crowns,
                bridges, implants, or dentures to rebuild teeth structure.
              </li>
              <li>
                <b>Correcting Bite & Alignment Issues </b> – Improving jaw
                alignment and bite function through orthodontic or restorative
                solutions.
              </li>
              <li>
                <b>Aesthetic Smile Improvement </b> – Enhancing tooth appearance
                using veneers, bonding, and teeth whitening.
              </li>
              <li>
                <b>Gum Health Management </b> – Treating gum disease and
                maintaining healthy periodontal support.
              </li>
            </ul>
          </div>

          <div className="right_side_side">
            <h3>Why Consider Full Mouth Rehabilitation in Pune? </h3>
            <p>
              Full mouth rehabilitation is recommended when there are multiple
              or complex dental concerns that affect function, health, and
              appearance.{" "}
            </p>
            <ul>
              <li>
                <b>Extensive Dental Damage </b> – Suitable for patients with
                severe decay, worn teeth, or multiple missing teeth.
              </li>
              <li>
                <b>Bite & Jaw Problems </b> – Helps correct misaligned bite, jaw
                issues, and uneven tooth contact affecting function .
              </li>

              <li>
                <b>Aesthetic Concerns</b> –Improves smile appearance in cases of
                discoloration, gaps, uneven, or damaged teeth.
              </li>
              <li>
                <b>Functional Difficulties</b> – Restores proper chewing,
                biting, and speech for better daily comfort and quality of life.
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
            <h2>What Are Treatment Options for Full Mouth Restorations?</h2>
            <p>
              Full mouth restoration is a comprehensive dental approach to
              rebuild or replace all teeth in the upper and lower jaws.
              Treatment options are customized based on individual needs and
              oral health conditions.
            </p>

            <ul>
              <li>
                <b>Dental Implants:</b> Permanent tooth replacements that
                support crowns, bridges, or dentures
              </li>
            </ul>

            <ul>
              <li>
                <b>Dental Crowns:</b>
                Protective caps placed over damaged teeth or implants
              </li>
            </ul>

            <ul>
              <li>
                <b>Dental Bridges:</b> Fixed restorations that replace missing
                teeth by anchoring to adjacent teeth or implants
              </li>
            </ul>

            <ul>
              <li>
                <b>Complete Dentures:</b> Removable prosthetics that replace all
                teeth in an arch{" "}
              </li>
            </ul>
            <ul>
              <li>
                <b>Partial Dentures:</b> Removable options for replacing a few
                missing teeth{" "}
              </li>
            </ul>
            <ul>
              <li>
                <b>Inlays and Onlays:</b> Custom restorations for moderately
                damaged teeth{" "}
              </li>
            </ul>
            <ul>
              <li>
                <b>Orthodontic Treatment :</b> Braces or aligners to correct
                bite and alignment issues{" "}
              </li>
            </ul>
            <ul>
              <li>
                <b>Gum Therapy :</b> Treatment of gum disease to ensure a
                healthy foundation before restoration{" "}
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
            Why Choose Denza Dental for Full Mouth Rehabilitation in Pune?
          </h2>
        </div>

        <div className="service_cards">
          {servicess.map((service, index) => (
            <div key={index} className="service_card" style={{ background: "var(--background)" }}>
              <h3>{service.title}</h3>
              <ul className="service_points" >
                {service.points.map((point, i) => (
                  <li style={{ color: "var(--text)" }} key={i}>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
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

      <div className="parent gallery_parent" style={{ background: "var(--white)" }}>
        <div className="cont gallery_cont">
          <div className="gallery_header">
            <h2 style={{ color: "var(--accent)" }}>Clinic Gallery</h2>
            
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

export default FullMouthRihabilitation;
