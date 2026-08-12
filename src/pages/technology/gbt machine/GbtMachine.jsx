import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./GbtMachine.scss";
import gallery1 from "../../../assets/about_page/after1.webp";
import img4 from "../../../assets/about_section/img5.webp";
import patientImg from "../../../assets/about_page/left1.png";
import PageTop from "../../../comp/page_top/PageTop";
import { Link } from "react-router-dom";

const GbtMachine = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const services = [
    {
      title: "360° Airflow Precision",
      description:
        "A dynamic handpiece delivers a fine stream of air, water, and powder, ensuring smooth and even cleaning across every surface. ",
    },
    {
      title: "Deep Gum Care System",
      description:
        "A specialized nozzle designed to gently clean below the gumline, reaching sensitive areas with accuracy and care.",
    },
    {
      title: "Ultrasonic Precision Scaling",
      description:
        "Advanced ultrasonic technology removes hardened deposits efficiently, offering a gentler alternative to traditional methods.",
    },
    {
      title: "Comfort-Controlled Hydration",
      description:
        "Warm, temperature-regulated water flows throughout the process, minimizing sensitivity and enhancing overall comfort.",
    },
    {
      title: "Intelligent Powder Flow",
      description:
        "A precision-controlled system ensures the perfect amount of cleaning agent is delivered for consistent, effective results.",
    },
  ];

  const faqs = [
    {
      question: "Why is GBT considered more advanced than regular cleaning? ",
      answer:
        "GBT follows a guided, step-by-step protocol that targets biofilm first, rather than relying on aggressive scraping. This results in a more precise, comfortable, and effective cleaning experience.",
    },
    {
      question:
        "Does GBT cleaning feel completely different from traditional scaling?",
      answer:
        "Yes, it feels significantly different. Instead of scraping sensations, GBT uses a gentle stream of air, warm water, and fine powder—making the process smooth and far more comfortable. ",
    },
    {
      question: "Can GBT help prevent future dental problems? ",
      answer:
        "Absolutely. By thoroughly removing biofilm—the root cause of cavities and gum disease—GBT helps reduce the risk of future oral health issues. ",
    },
    {
      question: "Is GBT suitable for people with sensitive teeth?",
      answer:
        "Yes, GBT is ideal for sensitive teeth. The use of warm water and non-invasive technology minimizes discomfort and avoids triggering sensitivity. ",
    },
    {
      question: "How soon can I eat or drink after GBT cleaning?",
      answer:
        "Yes, GBT is ideal for sensitive teeth. The use of warm water and non-invasive technology minimizes discomfort and avoids triggering sensitivity. ",
    },
  ];

  const clinicImages = [img4, img4, img4, img4, img4, img4, img4, img4];

  return (
    <>
      <PageTop title="GBT Machine Technology" />

      <div className="parent second_parent_gbt">
        <div className="cont second_cont_gbt">
          <h2>What is a GBT machine ?</h2>
          <div className="text_gbt">
            <p>
              Dental cleanings have traditionally been associated with scraping,
              sensitivity, and discomfort—making many people hesitant about
              their hygiene visits. Today, that experience has evolved. The GBT
              (Guided Biofilm Therapy) machine, a Swiss-developed innovation,
              transforms the way dental professionals approach cleaning by
              making it more comfortable, efficient, and precise.
            </p>
            <p>
              At Denza Dental Center, we use advanced EMS Airflow GBT technology
              to gently remove plaque and stains using a stream of warm water,
              air, and fine powder—without the need for aggressive scraping.
              This modern approach not only enhances comfort but also delivers a
              deeper, more effective clean, redefining what a dental cleaning
              experience should feel like.
            </p>
          </div>
        </div>
      </div>

      <div className="parent second_parent_gbt">
        <div className="cont second_cont_gbt">
          <h2>The Science Behind GBT Technology </h2>
          <div className="text_gbt">
            <p>
              Each GBT cleaning session follows a structured, step-by-step
              process designed for precision and comfort. It begins with a
              detailed assessment to identify areas that need attention.
            </p>
            <p>
              A special dye is then applied to highlight biofilm, making hidden
              buildup clearly visible. This ensures no problem area is missed
              during the cleaning.
            </p>
            <p>
              The EMS Airflow system gently removes biofilm using a stream of
              warm water, air, and fine powder. This allows for a thorough,
              comfortable clean across all tooth surfaces.
            </p>
            <p>
              Finally, any remaining hardened deposits are removed using
              ultrasonic technology. Since most of the work is already done,
              this step is quick, gentle, and far more comfortable.
            </p>
          </div>
        </div>
      </div>

      <div className="third_section">
        <div className="third_header">
          <h2>The Technology Powering GBT Cleaning </h2>
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

      {/* benefits */}

      <div className="parent gbtcleaning_parent">
        <div className="cont gbtcleaning_cont">
          <div className="right-section">
            <div className="image-frame">
              <img src={gallery1} alt="Dr. Nashid" className="doctor-img" />
            </div>
          </div>

          <div className="left-section">
            <h1>Why Denza Dental Center Uses the EMS Airflow GBT Technology</h1>

            <div className="skills-grid">
              {[
                "At Denza Dental Center, we chose the EMS Airflow GBT system to transform the dental cleaning experience into something far more comfortable and effective. Many patients tend to delay care due to discomfort, and this technology helps remove that barrier completely. ",
                " Our team is specially trained in Guided Biofilm Therapy protocols, ensuring every treatment is precise, consistent, and gentle. This allows us to deliver a deeper clean while keeping the experience smooth and stress-free. ",
                "The result is a noticeable difference—patients feel more relaxed, more confident, and more willing to maintain regular visits. Over time, this leads to better oral health and a more positive relationship with dental care. ",
              ].map((skill) => (
                <p key={skill}>{skill}</p>
              ))}
            </div>
            <div className="bottom-row">
              <Link to="/contact-us" className="btn">
                Appointment
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* why choose denza */}

      <div
        className="parent second_parent_gbt"
        style={{ background: "var(--background)" }}
      >
        <div className="cont second_cont_gbt why_choose_denza">
          <div className="why_header">
            <h2>Why Choose EMS Airflow GBT Technology</h2>
          </div>

          <div className="why_cards">
            {[
              {
                title: " All-Day Comfort ",
                description:
                  "The guided biofilm therapy system cleans through a gentle washing action instead of scraping, making the entire experience smooth and comfortable. ",
              },
              {
                title: "No Sensitivity Shock",
                description:
                  "Warm, temperature-controlled water prevents sudden sensitivity, ensuring a relaxed and pain-free treatment.",
              },
              {
                title: "Superior Stain Removal",
                description:
                  "Effectively removes stains from coffee, tea, tobacco, and more, delivering noticeably brighter and cleaner teeth. ",
              },
              {
                title: "Deep Gum Access",
                description:
                  "Specialized technology reaches below the gumline, making it highly effective for maintaining gum health.",
              },
              {
                title: " Enamel-Safe Cleaning",
                description:
                  "Erythritol powder gently cleans without damaging enamel, preserving the natural strength of your teeth.",
              },
              {
                title: "Safe for Restorations",
                description:
                  "Ideal for patients with braces, implants, crowns, or veneers—cleaning thoroughly without causing damage.",
              },
            ].map((item, index) => (
              <div key={index} className="why_card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* <div className="patient_parent parent">
        <div className="patient_cont cont">

          <div className="patient_heading">
            <h2>Why Denza Dental Center Uses the EMS Airflow GBT Technology</h2>
          </div>

          <div className="patient_wrapper">

            <div className="patient_left">
              <img src={patientImg} alt="Patient and Doctor Discussion" />
            </div>

            <div className="patient_right">
              <p>
                At Denza Dental Center, we chose the EMS Airflow GBT system to
                transform the dental cleaning experience into something far more
                comfortable and effective. Many patients tend to delay care due to
                discomfort, and this technology helps remove that barrier completely.
              </p>

              <p>
                Our team is specially trained in Guided Biofilm Therapy protocols,
                ensuring every treatment is precise, consistent, and gentle. This
                allows us to deliver a deeper clean while keeping the experience
                smooth and stress-free.
              </p>

              <p>
                The result is a noticeable difference—patients feel more relaxed,
                more confident, and more willing to maintain regular visits. Over
                time, this leads to better oral health and a more positive
                relationship with dental care.
              </p>
            </div>

          </div>

        </div>
      </div> */}

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

export default GbtMachine;
