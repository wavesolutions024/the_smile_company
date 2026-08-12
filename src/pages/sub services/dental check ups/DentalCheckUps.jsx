import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./DentalCheckUps.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import img1 from "../../../assets/general_service/img.webp";
import gallery1 from "../../../assets/about_page/after1.webp";
import apointment from "../../../assets/aapointment.webp";
import PageTop from "../../../comp/page_top/PageTop";
import { Helmet } from "react-helmet";

const whyChooseData = [
  {
    title: "Skilled & Experienced Dentists",
    description:
      "Denza Dental is backed by a team of highly qualified and experienced dentists who specialize in multiple areas of dentistry. Whether it’s a routine dental check-up or a complex procedure, you can feel confident knowing you’re in expert hands.",
  },
  {
    title: "Modern Technology & Equipment",
    description:
      "We use advanced dental technology to ensure accurate diagnosis and effective treatment. From digital X-rays to modern diagnostic tools, our clinic is equipped to detect even the smallest dental concerns early. ",
  },
  {
    title: " Budget-Friendly Dental Plans",
    description:
      "Quality dental care should be accessible to everyone. Denza Dental offers a variety of affordable packages along with flexible payment options, making it easier for patients to prioritize their oral health.",
  },
  {
    title: "Personalized Patient Care ",
    description:
      "Our patient-first approach ensures that every individual receives customized treatment. We take the time to understand your concerns, explain procedures clearly, and make sure you feel comfortable throughout your visit. ",
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

const DentalCheckUps = () => {
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
      <Helmet>
        <title>
          Dental Check-Up in Kharadi, Pune | Denza Dental Center
        </title>

        <meta
          name="description"
          content="Book a dental check-up at Denza Dental Center in Kharadi, Pune. Get a thorough examination of your teeth and gums, X-rays when needed, professional cleaning and personalized oral health advice."
        />
        <link
          rel="canonical"
          href="https://denzadental.com/dental-check-ups"
        />

        <meta
          name="keywords"
          content="
          dental check-up Kharadi,
          dental checkup Kharadi,
          dental check-up Pune,
          dental checkup Pune,
          dentist for dental checkup Kharadi,
          dental examination Kharadi,
          dental examination Pune,
          routine dental checkup Kharadi,
          routine dental checkup Pune,
          preventive dentistry Kharadi,
          preventive dentistry Pune,
          oral health checkup Kharadi,
          teeth checkup Kharadi,
          gum checkup Kharadi,
          dental cleaning Kharadi,
          professional teeth cleaning Pune,
          dental X-ray Kharadi,
          dentist Kharadi Pune,
          dental clinic Kharadi Pune,
          dental clinic near Marvel Enigma Kharadi,
          Denza Dental Center,
          Denza Dental,
          Denza Dental Kharadi,
          Denza Dental Pune
        "
        />

        <meta
          name="geo.region"
          content="IN-MH"
        />

        <meta
          name="geo.placename"
          content="Kharadi, Pune, Maharashtra, India"
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:site_name"
          content="Denza Dental Center"
        />

        <meta
          property="og:title"
          content="Dental Check-Up in Kharadi, Pune | Denza Dental Center"
        />

        <meta
          property="og:description"
          content="Book a dental check-up at Denza Dental Center in Kharadi, Pune. Get dental examination, X-rays when needed, professional cleaning and personalized oral health guidance."
        />

        <meta
          property="og:url"
          content="https://denzadental.com/dental-check-ups"
        />

        <meta
          property="og:image"
          content="https://denzadental.com/og-image.jpg"
        />

        <meta
          property="og:image:alt"
          content="Dental check-up at Denza Dental Center in Kharadi, Pune"
        />

        <meta
          property="og:locale"
          content="en_IN"
        />
      </Helmet>


      <PageTop title="Dental Check Up Services" />

      <div className="second_section">
        <div className="second_section_container">
          <div className="second_section_header">
            <h2>Why Choose Denza Dental for Your Dental Check-Ups in Pune?</h2>
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
          <h2> What Happens During a Dental Check-up? </h2>
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
            <h2> How to Book Your Dental Check-up at Denza Dental </h2>
            <p>
              Now this section includes description on left and – book an
              appointment type image such as receptionist in clinical attire and
              patient booking an appointment in right.
            </p>

            <ol>
              <li>
                <strong>Book Online </strong>Schedule your appointment{" "}
                <a
                  href="https://www.denzadental.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.denzadental.com
                </a>{" "}
                through our website. Pick a date and time that suits you, and
                we’ll confirm your booking quickly.
              </li>

              <li>
                <strong>Call Us Directly </strong>Prefer to speak with someone?
                Give us a call and our team will help you find the best
                available time for your visit.
              </li>

              <li>
                <strong>Walk-in Visits </strong>Need urgent care or nearby?
                You’re welcome to walk in. We do our best to accommodate you as
                quickly as possible.
              </li>

              <li>
                <strong>Visit Our Clinic </strong>Denza Dental is conveniently
                located in Pune, making it easy for you to access quality dental
                care. Our clinic is Open all 7 days , 9:00 AM – 9:00 PM.
              </li>

              <li>
                <strong>Get in Touch </strong>Have questions or need help
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

export default DentalCheckUps;
