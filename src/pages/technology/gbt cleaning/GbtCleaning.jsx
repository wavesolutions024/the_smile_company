import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./GbtCleaning.scss";
import gallery1 from "../../../assets/about_page/after1.webp";
import img4 from "../../../assets/about_section/img5.webp";
import PageTop from "../../../comp/page_top/PageTop";
import { Link } from "react-router-dom";

const GbtCleaning = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const services = [
    {
      title: "Biofilm Mapping  ",
      description:
        "A harmless dye highlights biofilm on the teeth, making it clearly visible and easy to target during treatment.  ",
    },
    {
      title: "Personalized Guidance ",
      description:
        "Using these insights, we help you understand your oral hygiene habits and provide tailored recommendations for improvement.",
    },
    {
      title: "Gentle Airflow Cleaning ",
      description:
        "A fine stream of air, water, and powder removes biofilm efficiently from all tooth surfaces, even in hard-to-reach areas. ",
    },
    {
      title: "Deep Gum Care ",
      description:
        "Specialized tools clean below the gumline, targeting areas affected by gum concerns with precision and care. ",
    },
    {
      title: "Advanced Deposit Removal ",
      description:
        "Any remaining hardened deposits are gently removed using modern ultrasonic technology.",
    },
    {
      title: "Precision Check",
      description:
        "Every tooth is carefully reviewed to ensure a complete and thorough clean. ",
    },

    {
      title: "Enamel Protection  ",
      description:
        "A fluoride treatment strengthens your enamel and helps protect against future decay. ",
    },
    {
      title: "Tailored Maintenance Plan ",
      description:
        "At Denza Dental Center,  we recommend a personalized follow-up schedule to help maintain your oral health long-term. ",
    },
  ];

  const faqs = [
    {
      question: "What is GBT Cleaning? ",
      answer:
        "GBT (Guided Biofilm Therapy) is an advanced dental cleaning method that removes plaque and bacteria using a gentle stream of air, warm water, and fine powder, instead of traditional scraping. ",
    },
    {
      question: "What makes GBT cleaning different from regular scaling?",
      answer:
        "Unlike traditional scaling, GBT focuses on identifying and removing biofilm first using a guided protocol. This makes the process more precise, less invasive, and significantly more comfortable. ",
    },
    {
      question: "Will I feel any sensitivity during or after the treatment?",
      answer:
        "Most patients experience little to no sensitivity. The use of warm water and non-abrasive technology ensures a smooth and comfortable experience.",
    },
    {
      question: "Is GBT cleaning suitable if I have braces or dental implants?",
      answer:
        "Yes, GBT is highly effective for cleaning around braces, implants, crowns, and veneers, without causing any damage.",
    },
    {
      question: "Is GBT Cleaning safe for kids and sensitive gums?",
      answer:
        "Absolutely. GBT is gentle, non-invasive, and safe for children as well as patients with sensitive gums, making it ideal for all age groups.",
    },
  ];

  const clinicImages = [img4, img4, img4, img4, img4, img4, img4, img4];

  return (
    <>
      <PageTop title="GBT Cleaning Technology" />

      <div className="parent second_parent_gbt">
        <div className="cont second_cont_gbt">
          <h2>What is GBT Cleaning ?</h2>
          <div className="text_gbt">
            <p>
              Every time you eat—or skip brushing before bed—bacteria begin to
              gather on your teeth in a sticky film called biofilm.{" "}
            </p>
            <p>
              These bacteria are highly active, producing acids that gradually
              wear down enamel and lead to cavities. At the same time, they
              irritate the gums, causing inflammation and bleeding. Over time,
              this soft biofilm hardens into tartar deposits that cannot be
              removed with regular brushing.
            </p>
            <p>
              At Denza Dental, GBT cleaning takes a completely different
              approach from traditional methods. Using the EMS Airflow system, a
              controlled stream of fine powder, warm water, and air is directed
              onto the teeth, gently removing biofilm without the need for metal
              instruments. The powder, typically erythritol, is safe,
              non-abrasive, and even offers antibacterial benefits.
            </p>
            <p>
              The “guided” aspect comes from its structured protocol. Eight
              scientifically proven steps are followed in a precise
              sequence—starting with making biofilm visible, then removing it
              systematically, and finishing with protective treatments like
              fluoride. This evidence-based approach ensures consistency,
              thoroughness, and a significantly more advanced cleaning
              experience.
            </p>
          </div>
        </div>
      </div>

      <div className="third_section">
        <div className="third_header">
          <h2>The GBT Cleaning Process, Step by Step </h2>
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
            <h1>BENEFITS OF GBT CLEANING </h1>

            <div className="skills-grid">
              {[
                "Pain-free experience - No scraping, ensuring maximum comfort throughout the procedure  ",
                " Healthier gums – Less bleeding and improved long-term gum health ",
                "Comprehensive cleaning – Reaches areas traditional tools often miss ",
                "Effective stain removal – Removes coffee, tea, and surface stains gently",
                "Reduced risk of cavities – Eliminates harmful biofilm buildup",
                "Suitable for everyone – Ideal for all ages and dental conditions",
              ].map((skill) => (
                <div key={skill} className="skill-item">
                  <span>✔</span> {skill}
                </div>
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
        <div className="cont second_cont_gbt">
          <h2>Why Choose Denza Dental Center for GBT Cleaning? </h2>
          <div className="text_gbt">
            <p>
              At Denza Dental Center, we’ve embraced Guided Biofilm Therapy
              (GBT) to offer a next-level dental cleaning experience that
              prioritizes both precision and comfort. Our commitment to advanced
              dentistry ensures that every patient receives care that is modern,
              effective, and tailored to their needs.
            </p>

            <h3>What You Can Expect : </h3>
            <ul style={{ paddingLeft: "20px" }}>
              <li>
                <p>
                  {" "}
                  Access to the latest advancements in dental hygiene technology
                </p>
              </li>
              <li>
                <p>
                  Expert care from a specially trained team in GBT protocols
                </p>
              </li>
              <li>
                {" "}
                <p>
                  A strong focus on comfort, minimizing anxiety and discomfort
                </p>{" "}
              </li>
              <li>
                {" "}
                <p>
                  Evidence-based treatments that deliver reliable, long-lasting
                  results
                </p>{" "}
              </li>
              <li>
                {" "}
                <p>
                  A modern, elevated dental experience that redefines routine
                  cleanings
                </p>{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>

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

export default GbtCleaning;
