import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./RootCanalTreatment.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import img1 from "../../../assets/general_service/img.webp";
import gallery1 from "../../../assets/about_page/after1.webp";
import apointment from "../../../assets/aapointment.webp";
import PageTop from "../../../comp/page_top/PageTop";

const whyChooseData = [
  {
    title: "Experienced Dental Specialists ",
    description:
      "Our team of skilled dentists has extensive experience in performing root canal treatments with precision, ensuring accurate diagnosis and successful outcomes. ",
  },
  {
    title: "Advanced Dental Technology ",
    description:
      "We utilize modern equipment and updated techniques to improve treatment efficiency, enhance accuracy, and deliver high-quality results for every patient. ",
  },
  {
    title: "Comfort-Focused Treatment",
    description:
      "We prioritize your comfort by using gentle methods and effective pain management techniques, making the entire root canal procedure as stress-free as possible. ",
  },
  {
    title: "Customized Treatment Plans ",
    description:
      "Every patient’s dental condition is unique, which is why we create personalized treatment plans tailored to your specific needs and oral health goals. ",
  },
  {
    title: "Faster Healing and Recovery  ",
    description:
      "With the use of advanced procedures, we aim to reduce downtime and help you recover quickly so you can return to your daily activities without delay.  ",
  },
  {
    title: "Strict Hygiene and Sterilization",
    description:
      "We follow high standards of cleanliness and sterilization protocols to maintain a safe and hygienic environment for all our patients.  ",
  },
  {
    title: "Expert Care with Global Exposure ",
    description:
      "At Denza Dental, your treatment is handled by dentists with international exposure, ensuring advanced techniques and globally accepted standards of care. This results in precise, effective procedures focused on preserving your natural tooth and long-term oral health. With a blend of expertise and modern technology, you receive care that reflects true international quality.  ",
  },
];

const services = [
  {
    title: "Effective Pain Relief",
    description:
      "Root canal treatment removes the infected pulp, helping to eliminate the source of pain and providing long-lasting relief.  ",
  },
  {
    title: "Preserves Your Natural Tooth",
    description:
      "Instead of extraction, RCT helps retain your original tooth, which is essential for maintaining proper alignment and bite. ",
  },
  {
    title: "Restores Normal Function ",
    description:
      "After treatment, you can comfortably chew and eat without sensitivity or discomfort, improving your daily quality of life.",
  },
  {
    title: "Stops Infection from Spreading ",
    description:
      "By cleaning and sealing the infected area, root canal treatment prevents bacteria from spreading to nearby teeth and gums. ",
  },
];

const faqs = [
  {
    question: "How do I know if I really need a root canal treatment?",
    answer:
      "If you are experiencing continuous tooth pain, sensitivity that doesn’t go away, gum swelling, or a damaged tooth, a dental check-up with X-rays can confirm whether a root canal is required. ",
  },
  {
    question: "What is the cost of root canal treatment in Kharadi, Pune?",
    answer:
      "The cost of root canal treatment at Denza Dental depends on the tooth involved and the severity of infection. Typically, it ranges based on complexity and whether a dental crown is recommended after the procedure.  ",
  },
  {
    question: "How many sittings are required for a root canal?  ",
    answer:
      "Most root canal treatments can be completed in 1 to 3 visits, depending on the condition of the tooth and level of infection. ",
  },
  {
    question: "Do I need a crown after a root canal treatment?",
    answer:
      "In many cases, a dental crown is advised after RCT to protect the treated tooth, restore strength, and prevent future damage. ",
  },
  {
    question: "Can I eat normally after a root canal? ",
    answer:
      "Yes, once the treatment is completed and the tooth is restored, you can return to normal eating habits. It’s best to avoid hard foods until the final restoration is done. ",
  },
  {
    question: "Is root canal treatment safe?",
    answer:
      "Yes, root canal treatment is a common and safe dental procedure performed to remove infection and preserve your natural tooth.",
  },
  {
    question: "How long does a root canal-treated tooth last?",
    answer:
      "With proper care, good oral hygiene, and regular dental check-ups, a root canal-treated tooth can last for many years or even a lifetime. ",
  },
  {
    question: "What should I expect after the procedure?",
    answer:
      "You may experience mild sensitivity for a few days after treatment, which usually subsides quickly. Your dentist may recommend medication if needed. ",
  },
  {
    question: "Can a failed root canal be treated again?",
    answer:
      "Yes, if a root canal fails or infection returns, a retreatment procedure can be performed to save the tooth. ",
  },
  {
    question: "How can I avoid needing a root canal in the future?",
    answer:
      "Maintaining good oral hygiene, regular dental visits, early cavity treatment, and avoiding excessive sugar intake can help prevent severe tooth decay and infection. ",
  },
];

const RootCanalTreatment = () => {
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
      <PageTop title="Root Canal Treatment" />

      <div className="book_appoint" style={{background:"white"}}>
        <div className="book_appoint_container" data-aos="fade-up">
          <div className="book_appoint_side red_background">
            <img src={apointment} alt="Dental Appointment " />
          </div>

          <div className="book_appoint_text">
            <h2>Best Root Canal Treatment in Kharadi, Pune – Denza Dental </h2>
            <p>
              Welcome to Denza Dental, your trusted destination for high-quality
              and painless root canal treatment in Kharadi, Pune. Our clinic is
              known for providing advanced and effective RCT procedures designed
              to save infected or damaged teeth while ensuring maximum comfort.
              If you are searching for the best root canal treatment near you in
              Kharadi, our experienced dental team is here to deliver reliable
              and long-lasting results.
            </p>

            <p>
              At Denza Dental, we use modern technology and proven techniques to
              perform root canal treatments with precision and care. Common
              signs that may indicate the need for a root canal include
              persistent tooth pain, sensitivity to hot or cold, swelling or
              tenderness in the gums, deep decay, or discoloration of the tooth.
              Early treatment can help prevent further complications and protect
              your natural tooth.
            </p>

            <p>
              We offer affordable and transparent pricing for root canal
              treatment in Kharadi, Pune, with costs depending on the condition
              of the tooth and complexity of the procedure. Our focus is always
              on providing value-driven, high-quality dental care in a hygienic
              and patient-friendly environment.
            </p>
          </div>
        </div>
      </div>

      <div className="second_section">
        <div className="second_section_container">
          <div className="second_section_header">
            <h2>
              Why Choose Denza Dental for Root Canal Treatment in Kharadi,
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

      <div className="book_appoint" style={{background:"white"}}>
        <div className="book_appoint_container" data-aos="fade-up">
          <div className="book_appoint_text">
            <h2>Symptoms and Causes of Root Canal Treatment </h2>

            <h3>Symptoms of Root Canal Treatment </h3>

            <ol>
              <li>
                <strong>Persistent Tooth Pain :</strong> Continuous or severe
                toothache, especially while chewing or applying pressure, may
                indicate an infected pulp.
              </li>
              <li>
                <strong>Sensitivity to Hot and Cold :</strong> Prolonged
                sensitivity to hot or cold foods and drinks that lingers even
                after the stimulus is removed.
              </li>
              <li>
                <strong>Walk-in Visits :</strong> Need urgent care or nearby?
                You’re welcome to walk in. We do our best to accommodate you as
                quickly as possible.
              </li>
              <li>
                <strong>Swollen or Tender Gums :</strong>Pain, swelling, or
                tenderness around the affected tooth can be a sign of infection.
              </li>

              <li>
                <strong>Tooth Discoloration:</strong>A tooth turning darker than
                usual may indicate internal damage or nerve issues.
              </li>
            </ol>

            <h3>Causes of Root Canal Problems </h3>

            <ol>
              <li>
                <strong>Deep Tooth Decay :</strong>
                Untreated cavities can extend into the inner layers of the
                tooth, leading to infection.
              </li>
              <li>
                <strong>Cracked or Broken Tooth :</strong> Structural damage
                allows bacteria to enter the pulp, causing inflammation and
                infection.
              </li>
              <li>
                <strong>Dental Trauma or Injury :</strong>An impact or injury
                can damage the tooth’s nerve, even without visible cracks.
              </li>
              <li>
                <strong>Excessive Wear or Grinding :</strong>Habitual grinding
                (bruxism) or wear over time can weaken the tooth and expose the
                pulp.
              </li>
            </ol>
          </div>

          <div className="book_appoint_side red_background">
            <img src={apointment} alt="Dental Appointment " />
          </div>
        </div>
      </div>

      <div className="third_section">
        <div className="third_header">
          <h2>Benefits of Root Canal Treatment </h2>
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

export default RootCanalTreatment;
