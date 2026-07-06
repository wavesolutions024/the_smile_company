import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./DentalImplantsTreatment.scss";
import img1 from "../../../assets/general_service/img.webp";
import gallery1 from "../../../assets/about_page/after1.webp";

const services = [
  {
    title: "Expert Team ",
    description:
      "Our skilled dental professionals specialize in implant dentistry, ensuring safe, precise, and effective treatment.",
  },
  {
    title: "Advanced Technology",
    description:
      "We use modern tools like CBCT scans and 3D imaging for accurate planning and precise implant placement. ",
  },
  {
    title: "Global Exposure & Standards ",
    description:
      "Our team follows internationally accepted dental protocols and stays updated with global advancements in implant dentistry, ensuring world-class treatment standards in every procedure. ",
  },
  {
    title: "Personalized Care  ",
    description:
      "Every patient receives a customized treatment plan based on their dental needs and bone structure. ",
  },
  {
    title: "Complete Dental Solutions",
    description:
      "From consultation to implant placement and final crown restoration, all treatments are available under one roof.",
  },
  {
    title: "Comfort-Focused Clinic",
    description:
      "Our clinic is designed to ensure a smooth, stress-free, and comfortable patient experience. ",
  },
  {
    title: "High-Quality Materials ",
    description:
      "We use durable, biocompatible implant systems for long-lasting and natural-looking results.",
  },
  {
    title: "Patient-Centered Approach  ",
    description:
      "We prioritize clear communication, comfort, and complete transparency throughout treatment. ",
  },

  {
    title: "Affordable Treatment Options  ",
    description:
      "We offer cost-effective implant solutions with flexible payment options. ",
  },

  {
    title: "Proven Results",
    description:
      "Our successful implant cases reflect consistent quality, precision, and patient satisfaction.  ",
  },
];

const services1 = [
  {
    title: "Implant Fixture  ",
    description:
      "A small titanium post placed into the jawbone, which acts as a strong and stable foundation. Titanium is biocompatible and integrates naturally with the bone. ",
  },
  {
    title: "Abutment",
    description:
      "A  connector placed on top of the implant fixture after healing, which supports the final tooth restoration.",
  },
  {
    title: "Crown (Artificial Tooth) ",
    description:
      "The visible part of the implant, custom-made to match your natural teeth in shape, size, and color for a seamless smile.  ",
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

const DentalImplantsTreatment = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      <div className="parent general_dental_parent bg-img-cover">
        <marquee behavior="scroll" direction="left" scrollamount="20">
          Welcome to our Dental Implants Treatment!
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
            <h2>Best Dental Implants in Kharadi, Pune | Denza Dental </h2>
            <p>
              Dental implants are a reliable and long-lasting solution for
              replacing missing teeth and restoring a natural-looking smile. If
              you are searching for dental implants in Kharadi, Pune, affordable
              implant cost options, or dental implants near me, Denza Dental is
              here to help.
            </p>
            <p>
              At Denza Dental, we are committed to providing high-quality
              implant dentistry that restores both function and confidence. Our
              team focuses on safe procedures, modern techniques, and
              personalized care to help you achieve a strong, natural smile.
            </p>
            <p>
              We also offer a wide range of treatments including oral surgery
              and cosmetic dentistry, ensuring complete dental care under one
              roof.
            </p>
          </div>
        </div>
      </div>

      <div className="third_section">
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

      <div className="dental_implannts_parents parent">
        <div className="dental_implannts_cont cont">
          <h2>What Are Dental Implants?</h2>

          <p>
            Dental implants are a modern and long-lasting solution for replacing
            missing teeth and restoring natural function and aesthetics.
          </p>

          <p>A dental implant consists of three main components: </p>

          <div className="service_cards">
            {services1.map((service, index) => (
              <div key={index} className="service_card">
                <p className="service_card_index">{index + 1}.</p>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="need_dental_implants_parent parent ">
        <div className="need_dental_implants_cont cont">
          <div className="need_dental_implants_header">
            <h2>Why Does One Need Dental Implants?</h2>
            <p>
              Dental implants offer a long-term solution for missing teeth,
              improving both oral health and smile aesthetics.
            </p>
          </div>

          <div className="dental_implants_cards_main">
            <div className="dental_implants_cards_wrap">
              <h3>Restoring Missing Teeth</h3>
              <ul>
                <li>Restores full chewing ability for a normal diet</li>
                <li>Helps improve speech clarity affected by tooth loss</li>
              </ul>
            </div>

            <div className="dental_implants_cards_wrap">
              <h3>Improving Oral Health</h3>
              <ul>
                <li>Preserves jawbone and prevents bone loss </li>
                <li>Prevents shifting of nearby teeth </li>
                <li>Does not affect or damage adjacent teeth</li>
              </ul>
            </div>

            <div className="dental_implants_cards_wrap">
              <h3>Enhancing Aesthetics & Confidence </h3>
              <ul>
                <li>Designed to match natural teeth seamlessly </li>
                <li>Improves smile appearance and boosts self-confidence</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="parent dental_implants_procedures_parent">
        <div className="cont dental_implants_procedures_cont">
          <h2>Types of Dental Implant Procedures at Denza Dental, Kharadi </h2>
          <p>
            We offer a wide range of dental implant solutions tailored to
            individual needs:
          </p>

          
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
    </>
  );
};

export default DentalImplantsTreatment;
