import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./MetalBraces.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import img1 from "../../../assets/general_service/img.webp";
import gallery1 from "../../../assets/about_page/after1.webp";
import apointment from "../../../assets/aapointment.webp";
import PageTop from "../../../comp/page_top/PageTop";


const servicess = [
  {
    title: "Initial Consultation ",
    points: [
      "Detailed dental check-up",
      "Medical history review ",
      "Digital X-rays and scans",
      "3D impressions of teeth ",
      "Discussion of treatment goals and timeline ",
      "Cost and payment options explained ",
    ],
  },
  {
    title: "Pre-Treatment Phase ",
    points: [
      "Professional teeth cleaning",
      "Treatment of existing dental issues",
      "Smile photos for records ",
      "Space and bite analysis",
      "Final treatment planning",
    ],
  },
  {
    title: "Braces Installation",
    points: [
      "Tooth surface preparation",
      "Accurate bracket placement",
      "Archwire fitting and adjustments",
      "Elastic band placement ",
      "Guidance on care and maintenance",
    ],
  },
  {
    title: "Regular Adjustments ",
    points: [
      "Monthly follow-up visits ",
      "Progress tracking ",
      "Wire tightening and adjustments",
      "Alignment refinements ",
      "Oral hygiene checks ",
      "Elastic band replacement",
    ],
  },
];


const faqs = [
  {
    question: "Are metal braces better?",
    answer:
      "Metal braces are highly effective, especially for complex alignment cases, offering precise and reliable results. ",
  },
  {
    question: "How painful are metal braces? ",
    answer:
      "You may feel mild discomfort or pressure after placement and adjustments, but it usually subsides within a few days.",
  },
  {
    question: "Which braces are the most affordable?",
    answer:
      "Metal braces are generally the most cost-effective option among all types of orthodontic treatments.",
  },
  {
    question: "What are the risks of metal braces?",
    answer:
      "Minor risks include temporary discomfort, mouth irritation, and difficulty in cleaning, which can be managed with proper care.",
  },
  {
    question: "Do braces change face shape? ",
    answer:
      "Yes, braces can improve facial balance and profile by correcting teeth alignment and jaw positioning. ",
  },
];

const MetalBraces = () => {
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
      <PageTop title="Metal Braces Services" />

      <div className="brace_treat_parent parent">
        <div className="brace_treat_cont cont">
          <h2>Metal Braces in Kharadi, Pune | Denza Dental </h2>
          <div>
            <p>
              Transform your smile with metal braces treatment in Kharadi, Pune at Denza
              Dental. Our experienced orthodontists provide precise teeth alignment using
              traditional metal braces combined with modern dental technology, ensuring
              effective and long-lasting results.
            </p>

            <p>
              <strong>Best Dental Clinic for Metal Braces in Kharadi, Pune</strong>
            </p>

            <p>
              <strong>Denza Dental is trusted for metal braces treatment because we offer: </strong>
            </p>

            <ul style={{ paddingLeft: "20px" }}>
              <li>Advanced orthodontic equipment</li>
              <li>Experienced orthodontic specialists </li>
              <li>Personalized treatment planning </li>
              <li>Transparent and clear pricing </li>
              <li>Strict sterilization and hygiene standards </li>
              <li>Digital X-rays and imaging systems</li>
              <li>Flexible appointment scheduling </li>
              <li>Comfortable and patient-friendly environment</li>
            </ul>
            <p>
              We focus on delivering reliable orthodontic care that combines precision,
              comfort, and consistent results.
            </p>
            <p>
              You can also reach us via email at denzadentalcenter@gmail.com for more details. Visit
              our clinic – Get Directions.
            </p>
          </div>
        </div>
      </div>

      <div className="parent second_parent">
        <div className="cont second_cont">
          <div className="general_left">
            <img src={img1} alt="General Dental Service" />
          </div>
          <div className="general_right">
            <h2>Features of Metal Braces at Denza Dental</h2>

            <ul style={{ paddingLeft: "20px" }}>
              <li>High-quality stainless steel brackets</li>
              <li>Advanced heat-activated archwires </li>
              <li>Consistent and controlled pressure for alignment</li>
              <li>Strong grip for complex tooth movements</li>
              <li>Highly durable and long-lasting </li>
              <li>Faster results in many cases </li>
              <li>Better control over tooth positioning</li>
              <li>Cost-effective orthodontic option</li>
              <li>Proven and reliable treatment method </li>
              <li>Suitable for children, teens, and adults</li>
              <li>Customizable colored elastic bands </li>
              <li>Ideal for severe misalignment cases</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="third_section" style={{ background: "var(--white)" }}>
        <div className="third_header">
          <h2 style={{ textAlign: "center", color: "var(--accent)" }}>
            Metal Braces Procedure at Denza Dental, Kharadi (Pune)
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

      <div className="side_side_parent parent">
        <div className="side_side_cont cont">
          <div className="left_side_side">
            <h3>Precautions During Metal Braces Treatment</h3>
            <ul>
              <li>Maintain excellent oral hygiene daily</li>
              <li>Avoid hard, sticky, and chewy foods </li>
              <li>Clean braces using special orthodontic brushes</li>
              <li>Wear a mouthguard during sports</li>
              <li>Attend all scheduled adjustment visits</li>
              <li>Follow your orthodontist’s instructions carefully</li>
            </ul>
          </div>

          <div className="right_side_side">
            <h3>Aftercare for Metal Braces </h3>
            <ul>
              <li>Wear retainers as advised </li>
              <li>Continue regular dental check-ups</li>
              <li>Maintain proper oral hygiene </li>
              <li>Follow recommended cleaning routines </li>
              <li>Report any discomfort or issues promptly</li>
              <li>Avoid hard, sticky, and sugary foods</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="faq_section1">
        <div className="faq_header">
          <h2>FAQs</h2>
          <p>
            Metal Braces at Denza Dental, Kharadi (Pune)
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
                  <div className="gallery_card" data-aos="fade-up" data-aos-delay={index * 100}>
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

export default MetalBraces;
