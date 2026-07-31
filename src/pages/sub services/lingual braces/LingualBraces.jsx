import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./LingualBraces.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import img1 from "../../../assets/general_service/img.webp";
import gallery1 from "../../../assets/about_page/after1.webp";
import apointment from "../../../assets/aapointment.webp";
import PageTop from "../../../comp/page_top/PageTop";

const whyChooseData = [
  {
    icon: "👨‍⚕️",
    title: "Experienced Team",
    description:
      "AO Dentistry boasts a team of skilled and experienced dentists who specialize in various fields of dentistry. From general dental check-ups in Pune to more complex treatments, you can be sure you're in good hands.",
  },
  {
    icon: "🦷",
    title: "Advanced Technology",
    description:
      "The clinic is equipped with the latest dental technologies to ensure that every dental check-up is thorough and accurate. Digital X-rays, intraoral cameras, and advanced diagnostic tools help in identifying even the smallest issues during the dental examination.",
  },
  {
    icon: "💰",
    title: "Affordable Packages",
    description:
      "AO Dentistry offers a range of affordable packages for dental check-ups in Pune. The clinic understands that dental care should be accessible to everyone and provides flexible payment options to make it easier for patients.",
  },
  {
    icon: "😊",
    title: "Patient-Centric Approach",
    description:
      "What truly sets AO Dentistry apart is its patient-centric approach. Every patient receives personalized care based on their specific needs. Our dentists take the time to understand your concerns, explain procedures, and ensure you're comfortable throughout.",
  },
];

const services = [
  {
    title: "Quick Discussion",
    description:
      "The dentist talks with you about any pain, concerns, or changes you’ve noticed. This helps focus on what matters most to you. ",
  },
  {
    title: "Mouth Check ",
    description:
      "Your teeth, gums, and overall oral health are carefully checked to spot cavities, gum issues, or other problems early. ",
  },
  {
    title: "X-rays (Only if Needed)",
    description:
      "If required, X-rays are taken to see what’s happening beneath the surface, like hidden decay or jaw issues.",
  },
  {
    title: " Deep Cleaning ",
    description:
      "Plaque and tartar are removed, and your teeth are polished to make them feel clean and smooth.",
  },
  {
    title: "Next Steps & Advice ",
    description:
      "You’ll get clear guidance on your dental health, tips to improve your routine, and recommendations if any treatment is needed. ",
  },
];

const servicess = [
  {
    title: "Consultation ",
    points: [
      "Consultation",
      "Photos and impressions if required",
      "Discussion of smile concerns ",
      "Explanation of treatment, timeline, and cost",
    ],
  },
  {
    title: "Treatment Planning ",
    points: [
      "Customized treatment plan",
      "Expected results overview ",
      "Timeline and appointment scheduling",
    ],
  },
  {
    title: "Braces Placement ",
    points: [
      "Teeth cleaning and preparation",
      "Precise placement of lingual brackets (behind teeth) ",
      "Instructions for care and maintenance",
    ],
  },
  {
    title: "Follow-Ups & Adjustments ",
    points: [
      "Regular check-ups ",
      "Progress monitoring ",
      "Necessary adjustments for alignment ",
      "Continuous support throughout treatment ",
    ],
  },
];


const faqs = [
  {
    question: "Do lingual braces take longer?",
    answer:
      "No, treatment time is usually similar to other types of braces, depending on the case.",
  },
  {
    question: "Are lingual braces better than normal braces?",
    answer:
      "They offer the same effectiveness as traditional braces but are completely hidden, making them ideal for aesthetic concerns.",
  },
  {
    question: "What are lingual braces?",
    answer:
      "Lingual braces are orthodontic braces placed on the inner (back) side of the teeth, making them invisible from the front.",
  },
  {
    question: "Are lingual braces more expensive?",
    answer:
      "Yes, they are generally costlier due to their custom design and specialized placement technique.",
  },
  {
    question: "Which type of braces works faster?",
    answer:
      "Treatment speed depends on the case, but metal braces are often slightly faster for complex corrections.",
  },
  {
    question: "Is there an age limit for lingual braces?",
    answer:
      "There is no strict age limit; they are suitable for both teens and adults with healthy teeth and gums.",
  },
  {
    question: "How painful are lingual braces?",
    answer:
      "You may feel mild discomfort initially and slight tongue irritation, which improves as you adjust. ",
  },
];

const LingualBraces = () => {
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
      <PageTop title="Lingual Braces" />

      <div className="brace_treat_parent parent">
        <div className="brace_treat_cont cont">
          <h2>Lingual Braces in Kharadi, Pune | Denza Dental</h2>
          <div>
            <p>
              Want a perfectly aligned smile without anyone noticing your braces? Lingual braces are
              the ideal solution.
            </p>

            <p>
              At Denza Dental, Kharadi, we offer advanced lingual braces treatment that works
              discreetly by placing brackets on the inner (back) surface of your teeth—making them
              completely invisible from the outside.
            </p>

            <p>
              Lingual braces are perfect for patients who want effective teeth straightening without
              compromising their appearance in social or professional settings.
            </p>

            <p>
              With our expertise and precision-driven approach, we have helped many patients
              achieve confident smiles using this hidden orthodontic solution.
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
            <h2>Best Dental Clinic for Lingual Braces in Kharadi, Pune | Denza Dental</h2>
            <p>
              Choosing the right dental clinic is the most important step when considering lingual braces
              treatment in Kharadi, Pune. At Denza Dental, we ensure advanced orthodontic care in a
              comfortable and patient-friendly environment.
            </p>

            <p>
              We understand that braces are a big decision, and our team is here to guide you with the right
              solutions to help you achieve a confident, perfectly aligned smile—without visible braces.
            </p>

            <p style={{ fontWeight: "bold", color: "var(--accent" }}>
              Why Choose Denza Dental for Lingual Braces?{" "}
            </p>

            <ul style={{ paddingLeft: "20px" }}>
              <li>Experienced orthodontic specialists</li>
              <li>Personalized treatment planning</li>
              <li>Advanced orthodontic techniques </li>
              <li>Comfortable and relaxing clinic environment</li>
              <li>Clear communication and patient guidance </li>
            </ul>

            <p>
              Our expertise in lingual braces ensures precise, discreet, and effective results tailored to your
              smile goals.
            </p>

            <p>
              Visit Denza Dental, Kharadi, Pune
            </p>
            <p> Call / WhatsApp: 7028131132 / 7028143959</p>
          </div>
        </div>
      </div>

      <div className="after_care_parent parent">
        <div className="after_care_cont cont">
          <h2>Features of Lingual Braces at Denza Dental </h2>

          <ul>
            <li>Completely hidden behind the teeth </li>
            <li>Custom-made brackets for a perfect fit</li>
            <li>Works like traditional braces with effective results </li>
            <li>No visible wires or brackets while smiling</li>
            <li>Continuous progress without affecting appearance</li>
            <li>Ideal for professionals and image-conscious individuals</li>
            <li>Precise and efficient tooth movement</li>
          </ul>
        </div>
      </div>

      <div className="third_section" style={{ background: "var(--white)" }}>
        <div className="third_header">
          <h2 style={{ textAlign: "center", color: "var(--accent)" }}>
            Lingual Braces Procedure at Denza Dental, Kharadi (Pune) 
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
            <h3>Precautions During Lingual Braces Treatment </h3>
            <ul>
             <li>Avoid hard, sticky, and sugary foods</li>
             <li>Clean behind teeth carefully after every meal</li>
             <li>Use special orthodontic brushes and tools</li>
             <li>Do not miss adjustment appointments </li>
            </ul>
          </div>

          <div className="right_side_side">
            <h3>Aftercare for Lingual Braces</h3>
            <ul>
             <li>Brush teeth after meals </li>
             <li>Maintain proper oral hygiene </li>
             <li>Attend regular follow-up visits</li>
            </ul>
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
                data-aos="fade-up"
                data-aos-delay={index * 50}
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

export default LingualBraces;
