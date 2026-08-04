import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./RootCanalReTreatment.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import img1 from "../../../assets/general_service/img.webp";
import gallery1 from "../../../assets/about_page/after1.webp";
import apointment from "../../../assets/aapointment.webp";
import PageTop from "../../../comp/page_top/PageTop";

const whyChooseData = [
  {
    title: "Expertise in Complex Cases",
    description:
      "We specialize in handling failed or complicated root canal cases, ensuring precise diagnosis and effective re-treatment solutions.",
  },
  {
    title: "Advanced Diagnostic Tools",
    description:
      "Our clinic uses modern imaging and diagnostic technology to identify hidden infections or missed canals that may have caused the initial treatment to fail.",
  },
  {
    title: "Microscopic Precision ",
    description:
      "We follow highly detailed techniques to carefully clean and disinfect the previously treated tooth for better long-term success.",
  },
  {
    title: "Focus on Saving Natural Teeth ",
    description:
      "Our primary goal is to preserve your natural tooth whenever possible, avoiding unnecessary extractions. ",
  },
  {
    title: "Pain-Controlled Procedure ",
    description:
      "We use updated methods and anesthesia techniques to ensure your re-treatment is comfortable and stress-free. ",
  },
  {
    title: "Customized Re-Treatment Plans ",
    description:
      "Each case is different, so we create personalized treatment strategies based on the condition of the tooth and previous treatment.  ",
  },
  {
    title: "High Success Rate",
    description:
      "With improved techniques and careful planning, re-treatment can effectively eliminate infection and restore tooth function. ",
  },
];

const services = [
  {
    title: "Eliminates Persistent Infection",
    description:
      "Re-treatment helps remove any remaining bacteria or infection that was not fully cleared during the initial procedure.",
  },
  {
    title: "Saves Your Natural Tooth ",
    description:
      "Instead of opting for extraction, re-treatment gives your natural tooth a second chance, helping maintain proper function and alignment. ",
  },
  {
    title: "Relieves Ongoing Pain or Discomfort ",
    description:
      "It addresses recurring pain, swelling, or sensitivity, improving overall comfort and oral health. ",
  },
  {
    title: "Prevents Further Dental Damage  ",
    description:
      "Timely re-treatment stops the spread of infection to surrounding teeth and tissues. ",
  },
  {
    title: "Improves Long-Term Success  ",
    description:
      "With updated techniques and careful cleaning, re-treatment increases the chances of long-lasting results.",
  },
];

const faqs = [
  {
    question: "When is root canal re-treatment necessary? ",
    answer:
      "Re-treatment is recommended when a previously treated tooth develops infection again, or if pain and symptoms return after the initial root canal.",
  },
  {
    question:
      "Is root canal re-treatment more complicated than the first procedure?",
    answer:
      "Yes, re-treatment can be more complex as it involves removing old filling material and carefully cleaning the canals again, but it is highly effective when done by experienced dentists.  ",
  },
  {
    question: "How long does a root canal re-treatment take? ",
    answer:
      "The procedure may require 1 to 3 visits depending on the condition of the tooth and the extent of reinfection. ",
  },
  {
    question: "Is root canal re-treatment painful?",
    answer:
      "The procedure is usually not painful as local anesthesia is used. You may feel mild discomfort after treatment, which typically subsides within a few days.",
  },
  {
    question: "What happens if I delay root canal re-treatment? ",
    answer:
      "Delaying treatment can worsen the infection, lead to severe pain, and may eventually require tooth extraction if left untreated. ",
  },
];

const RootCanalReTreatment = () => {
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
      <PageTop title="Root Canal Re-Treatment Services" />

      <div className="second_section">
        <div className="second_section_container">
          <div className="second_section_header">
            <h2>
              Why Choose Denza Dental for Root Canal Re-Treatment in Kharadi,
              Pune?{" "}
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

      <div className="third_section">
        <div className="third_header">
          <h2> Benefits of Root Canal Re- Treatment </h2>
        </div>

        <div className="service_cards">
          {services.map((service, index) => (
            <div
              key={index}
              className="service_card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <p className="service_card_index">{index + 1}.</p>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="book_appoint">
        <div className="book_appoint_container" data-aos="fade-up">
          <div className="book_appoint_text">
            <h2>Symptoms and Causes of Root Canal Re-Treatment </h2>

            <h3>Symptoms of Root Canal Re-Treatment</h3>

            <ol>
              <li>
                <strong>Recurring Tooth Pain :</strong> Pain that returns weeks
                or months after a root canal may indicate that the infection has
                not completely healed.
              </li>
              <li>
                <strong>Swelling Around the Tooth :</strong> Persistent or
                recurring swelling in the gums near the treated tooth can signal
                reinfection.
              </li>
              <li>
                <strong>Sensitivity While Biting :</strong> Discomfort or pain
                when chewing or applying pressure may suggest underlying issues
                with the previous treatment.
              </li>
              <li>
                <strong>Pimple or Abscess on Gums :</strong>A small bump or pus
                discharge near the treated tooth is often a sign of infection.
              </li>

              <li>
                <strong>Tooth Discoloration :</strong>Darkening of a previously
                treated tooth may indicate internal damage or incomplete
                healing.
              </li>
            </ol>

            <h3>Causes of Root Canal Re-Treatment </h3>

            <ol>
              <li>
                <strong>Incomplete Cleaning of Canals :</strong> If some canals
                were missed or not fully disinfected during the initial
                procedure, bacteria can remain and cause reinfection.
              </li>
              <li>
                <strong>Delayed or Improper Crown Placement :</strong>Failure to
                place a protective crown on time can expose the tooth to further
                damage or contamination.
              </li>
              <li>
                <strong>New Decay or Infection :</strong> A treated tooth can
                still develop new cavities, allowing bacteria to re-enter.
              </li>
              <li>
                <strong>Cracks or Leakage in the Tooth :</strong>Small cracks or
                gaps in the filling can let bacteria seep back into the tooth.
              </li>

              <li>
                <strong>Complex Tooth Anatomy :</strong>Curved or narrow canals
                may have been difficult to treat fully during the first
                procedure.
              </li>
            </ol>
          </div>

          <div className="book_appoint_side red_background">
            <img src={apointment} alt="Dental Appointment " />
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

export default RootCanalReTreatment;
