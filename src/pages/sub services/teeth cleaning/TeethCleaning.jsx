import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./TeethCleaning.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import img1 from "../../../assets/general_service/img.webp";
import gallery1 from "../../../assets/about_page/after1.webp";
import apointment from "../../../assets/aapointment.webp";
import PageTop from "../../../comp/page_top/PageTop";

const whyChooseData = [
  {
    title: "Expert Dental Team",
    description:
      "At Denza Dental, our skilled and experienced dental professionals are dedicated to delivering high-quality care.You can trust our team to provide safe, effective, and thorough teeth cleaning treatments.",
  },
  {
    title: "Advanced Dental Technology",
    description:
      "We use modern equipment and the latest dental techniques to ensure precise and efficient cleaning. Our advanced tools help make the procedure more comfortable and less time-consuming. ",
  },
  {
    title: "Personalized Treatment Approach ",
    description:
      "Every patient is unique, and so is our care. We customize each teeth cleaning procedure based on your oral health needs, ensuring the best possible results",
  },
  {
    title: "Comprehensive Dental Care ",
    description:
      "From routine teeth cleaning to advanced dental treatments, Denza Dental offers a complete range of services. We focus on maintaining your long-term oral hygiene and overall dental wellness. ",
  },
  {
    title: "Comfortable and Relaxing Environment",
    description:
      "Our clinic is designed to make you feel at ease from the moment you walk in.We prioritize a stress-free and pleasant dental experience for every patient. ",
  },
  {
    title: "Affordable and Transparent Pricing",
    description:
      "We offer competitive teeth cleaning prices in Pune without compromising on quality. Our pricing is clear, ensuring you receive excellent care within your budget. ",
  },
];

const faqs = [
  {
    question: "Can I eat after teeth cleaning? ",
    answer:
      "Yes, you can eat after teeth cleaning. However, it is recommended to wait at least 30 minutes and avoid very hot, cold, or staining foods for a few hours.",
  },
  {
    question: "Does teeth cleaning remove yellow stains? ",
    answer:
      "Professional teeth cleaning helps remove surface stains caused by food, beverages, and smoking. However, deeper stains may require additional treatments like teeth whitening. ",
  },
  {
    question: "How often should I get my teeth cleaned?  ",
    answer:
      "It is generally recommended to get your teeth cleaned every six months. Regular cleaning helps maintain oral hygiene and prevents dental problems. ",
  },
];

const TeethCleaning = () => {
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
      <PageTop title="Teeth Cleaning Services" />

      <div className="second_section">
        <div className="second_section_container">
          <div className="second_section_header">
            <h2> Why Choose Denza Dental for Teeth Cleaning in Pune? </h2>
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

      <div className="teeth_cleaning_parent parent">
        <div className="teeth_cleaning_cont cont">
          <h2> Advanced Teeth Cleaning with GBT</h2>

          <p>
            At Denza Dental, we enhance regular teeth cleaning with GBT (Guided
            Biofilm Therapy), a modern and more precise approach to oral
            hygiene. This technique targets harmful biofilm using gentle,
            minimally invasive methods, making the cleaning process more
            comfortable and effective. GBT not only removes plaque and stains
            but also helps in better prevention of cavities and gum problems,
            ensuring a healthier and brighter smile.
          </p>
        </div>
      </div>

      <div className="dental_checkup_sec parent">
        <div className="dental_checkup_sec_cont cont" data-aos="fade-up">
          <div className="dental_checkup_sec_left">
            <h2>Why Teeth Cleaning is Essential for Your Oral Health </h2>
            <p>
              Teeth cleaning, also known as dental cleaning, is important for
              maintaining good oral hygiene.
            </p>
            <p>
              Regular teeth cleaning helps remove plaque and tartar that can
              cause cavities and gum disease. The benefits include:
            </p>

            <ol>
              <li>
                <strong>Preventing Cavities:</strong>
                Teeth cleaning removes plaque and helps prevent tooth decay.
              </li>
              <li>
                <strong>Avoiding Gum Disease :</strong>
                Regular cleaning reduces the risk of gum infections and tooth
                loss.
              </li>
              <li>
                <strong>Fresh Breath :</strong> It helps eliminate bad breath
                caused by bacteria build-up.
              </li>
              <li>
                <strong>Maintaining Bright Teeth :</strong>
                Professional cleaning removes stains and keeps your teeth
                naturally white.
              </li>
            </ol>
          </div>

          <div className="dental_checkup_sec_right">
            <img src={apointment} alt="Dental Appointment " />
          </div>
        </div>
      </div>

      <div className="dental_checkup_sec parent" style={{ background: "white" }}>
        <div className="dental_checkup_sec_cont cont" data-aos="fade-up">
          <div className="dental_checkup_sec_left ">
            <img src={apointment} alt="Dental Appointmen " style={{borderRadius:"var(--unit)"}} />
          </div>

          <div className="book_appoint_text">
            <h2>How Often Should You Schedule Teeth Cleaning? </h2>
            <p>
              For optimal oral health, Denza Dental recommends scheduling teeth
              cleaning and polishing every six months. This routine helps
              maintain healthy teeth and gums while preventing common dental
              problems.
            </p>
            <p>
              Regular teeth cleaning removes plaque and tartar build-up that
              cannot be eliminated by brushing alone. It also helps reduce the
              risk of gum disease, cavities, and bad breath.
            </p>

            <p>
              By visiting Denza Dental consistently, any early signs of dental
              issues can be detected and treated on time, ensuring long-term
              oral health and a confident smile.
            </p>
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

export default TeethCleaning;
