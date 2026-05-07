import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./OrthodonticTreatments.scss";
import img1 from "../../../assets/general_service/img.webp";
import gallery1 from "../../../assets/about_page/after1.webp";

const services = [
  {
    title: "Dental Checkups and Consultations",
    description:
      "A dental checkup includes an in-depth analysis of your overall dental health, helping you stay ahead of decay and gum issues.",
  },
  {
    title: "Dental X-ray",
    description:
      "Modern digital X-rays reveal what’s happening under the surface so we can catch cavities, bone loss, and impacted teeth early.",
  },
  {
    title: "Teeth Cleaning",
    description:
      "Professional teeth cleaning removes plaque and tartar from hard-to-reach areas, protecting teeth and gums from disease.",
  },
  {
    title: "Cavity Detection and Fillings",
    description:
      "Using modern diagnostics, we locate early cavities and restore damaged teeth with tooth-colored fillings.",
  },
  {
    title: "Root Canal Treatment",
    description:
      "Gentle root canal therapy relieves pain and saves a damaged tooth while preserving your natural smile.",
  },
  {
    title: "Tooth Extractions",
    description:
      "When a tooth cannot be saved, our team performs safe extractions with comfort and careful aftercare.",
  },
  {
    title: "Wisdom Tooth Extraction",
    description:
      "We remove impacted wisdom teeth cleanly and gently, minimizing discomfort and accelerating recovery.",
  },
];

const faqs = [
  {
    question: "Do Dental Check-ups at Denza Dental Hurt? ",
    answer:
      "No, dental check-ups at Denza Dental are gentle and comfortable. You may feel slight sensitivity during cleaning, but the process is quick and handled with care. ",
  },
  {
    question: "How Long Does a Check-up at Denza Dental Take?",
    answer:
      "A routine dental check-up at Denza Dental usually takes about 30 to 45 minutes, depending on your oral health and any additional care required. ",
  },
  {
    question: "Can I Eat Before Visiting Denza Dental? ",
    answer:
      "Yes, you can eat before your appointment at Denza Dental. However, brushing your teeth beforehand is recommended for a smoother examination.",
  },
  {
    question: "Do I Need a Check-up at Denza Dental If I Have No Pain?",
    answer:
      "Absolutely. At Denza Dental, we emphasize preventive care since many dental issues develop without pain. Regular visits help catch problems early. ",
  },
  {
    question: "Are X-rays at Denza Dental Safe?",
    answer:
      "Yes, Denza Dental uses modern digital X-ray technology with minimal radiation, ensuring safe and accurate diagnosis when needed.",
  },
  {
    question: "How Often Should I Visit Denza Dental for Cleaning?",
    answer:
      "Denza Dental recommends professional teeth cleaning every 6 months, though it may vary based on your individual dental needs.",
  },
];

const OrthodonticTreatments = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      <div className="parent general_dental_parent bg-img-cover">
        <marquee behavior="scroll" direction="left" scrollamount="20">
          Welcome to our General Dental Services!
        </marquee>
        <div className="cont general_dental_cont">
          <div className="bts_grp">
            <div className="service1_btn ">Book Consultant</div>
            <div className="service1_btn call_btn">Call +9865213025</div>
            <div className="service1_btn">Get Directions</div>
          </div>
        </div>
      </div>

      <div className="parent second_parent">
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
      </div>

      <div className="third_section">
        <div className="third_header">
          <h2>General Dental Services that AO Dentistry Offers in Pune</h2>
          <p>
            We offer a wide range of general dental services to meet all your
            oral health needs. Our team of experienced dentists is dedicated to
            providing you with the best possible care.
          </p>
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

        <div className="faq_section">
          <div className="faq_header">
            <h2>FAQs</h2>
            <p>
              Answers to the most common questions about our general dental
              care.
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
              <p>
                Explore our clinic spaces and patient-friendly treatment rooms.
              </p>
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
      </div>
    </>
  );
};

export default OrthodonticTreatments;
