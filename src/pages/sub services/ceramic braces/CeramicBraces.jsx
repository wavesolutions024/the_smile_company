import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./CeramicBraces.scss";
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

const faqs = [
  {
    question: "Are ceramic braces better than metal braces? ",
    answer:
      "Ceramic braces are more aesthetic as they blend with your teeth, while both options are equally effective for alignment.",
  },
  {
    question: "Do ceramic braces take longer to work?",
    answer:
      "In most cases, treatment time is similar to metal braces, depending on the complexity of your dental condition.",
  },
  {
    question: "Are ceramic braces painful?",
    answer:
      "They may cause mild discomfort initially, but this usually settles within a few days as you adjust.",
  },
  {
    question: "Do ceramic braces stain or turn yellow?",
    answer:
      "With proper oral hygiene and care, ceramic braces remain stain-free throughout treatment.",
  },
  {
    question: "Do ceramic braces affect appearance negatively?",
    answer:
      "No, they are designed to be discreet and blend naturally with your teeth for a more aesthetic look. ",
  },
  {
    question: "Which braces are best for teeth alignment?",
    answer:
      "The best option depends on your case—metal braces, ceramic braces, or aligners are recommended based on dental needs and goals. ",
  },
  
];

const CeramicBraces = () => {
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
      <PageTop title="Ceramic Braces" />

      <div className="brace_treat_parent parent">
        <div className="brace_treat_cont cont">
          <h2>Ceramic Braces in Kharadi, Pune | Denza Dental</h2>
          <div>
            <p>
              Your search for ceramic braces near you in Kharadi, Pune ends at Denza Dental.
            </p>

            <p>
              Ceramic braces offer a more aesthetic alternative to traditional metal braces. Designed
              with tooth-colored or clear brackets, they blend naturally with your teeth while effectively
              correcting alignment issues.
            </p>


            <p>
              At Denza Dental, we provide advanced orthodontic care using high-quality ceramic
              braces that straighten your teeth discreetly without compromising your confidence.
              Visit Denza Dental, Kharadi, Pune Call / WhatsApp:   +91 7028 131 132 / 7028 143 959
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
            <h2>Why Choose Denza Dental for Ceramic Braces? </h2>
            <ul style={{ paddingLeft: "20px" }}>
              <li>Modern orthodontic equipment </li>
              <li>Experienced orthodontic specialists </li>
              <li>Personalized treatment planning </li>
              <li>Transparent and clear pricing </li>
              <li>Strict sterilization and hygiene standards</li>
              <li>Advanced digital imaging systems </li>
              <li>Flexible appointment scheduling </li>
              <li>Comfortable and friendly clinic environment</li>
              
            </ul>
          </div>
        </div>
      </div>


      <div className="third_section">
        <div className="third_header">
          <h2> What Happens During a Dental Check-up? </h2>
          <p>
            We offer a wide range of general dental services to meet all your
            oral health needs. Our team of experienced dentists is dedicated to
            providing you with the best possible care.
          </p>
        </div>

        <div className="service_cards">
          {services.map((service, index) => (
            <div key={index} className="service_card" data-aos="fade-up" data-aos-delay={index * 100}>
              <p className="service_card_index">{index + 1}.</p>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="after_care_parent parent">
        <div className="after_care_cont cont">
          <h2>Precautions During Ceramic Braces Treatment</h2>

          <ul>
            <li>Avoid hard, sticky, and sugary foods to prevent damage and cavities </li>
            <li>Brush and clean teeth carefully after every meal using orthodontic tools</li>
            <li>Do not miss scheduled adjustment appointments for proper progress </li>
          </ul>

          <h2>Aftercare for Ceramic Braces</h2>

          <ul>
            <li>Brush teeth after meals regularly</li>
             <li>Maintain strict oral hygiene </li>
              <li>Attend all follow-up visits as advised by your dentist</li>
          </ul>
        </div>
      </div>

      <div className="book_appoint">
        <div className="book_appoint_container" data-aos="fade-up">
          <div className="book_appoint_text">
            <h2>How to Book Your Dental Check-up at AO Dentistry</h2>
            <p>
              Booking your dental check-up at AO Dentistry is quick and easy. We
              offer several options to accommodate your schedule and
              preferences:
            </p>

            <ol>
              <li>
                <strong>Online Booking:</strong> Schedule your appointment
                <span> www.denza.com</span> through our website. Pick a date and
                time that suits you, and we’ll confirm your booking quickly.
              </li>
              <li>
                <strong>Call Us Directly :</strong> Prefer to speak with
                someone? Give us a call and our team will help you find the best
                available time for your visit.
              </li>
              <li>
                <strong>Walk-in Visits :</strong> Need urgent care or nearby?
                You’re welcome to walk in. We do our best to accommodate you as
                quickly as possible.
              </li>
              <li>
                <strong>Visit Our Clinic :</strong>Denza Dental is conveniently
                located in Pune, making it easy for you to access quality dental
                care. Our clinic is Open all <strong>7 days</strong> ,
                <strong> 9:00 AM – 9:00 PM</strong>.
              </li>

              <li>
                <strong>Get in Touch :</strong>Have questions or need help
                booking? Reach out to us via call, WhatsApp, or email—we’re here
                to assist you every step of the way.
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

export default CeramicBraces;
