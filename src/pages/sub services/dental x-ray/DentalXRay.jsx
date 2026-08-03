import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./DentalXRay.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import img1 from "../../../assets/general_service/img.webp";
import gallery1 from "../../../assets/about_page/after1.webp";
import apointment from "../../../assets/aapointment.webp";
import PageTop from "../../../comp/page_top/PageTop";

const whyChooseData = [
  {
    title: "State-of-the-Art Digital Technology",
    description:
      "We use the latest digital dental X-ray technology that delivers high-resolution images with minimal radiation for a safer experience",
  },
  {
    title: "Advanced CBCT & OPG Imaging",
    description:
      "Our clinic is equipped with Cone Beam Computed Tomography (CBCT) and Orthopantomogram (OPG) machines for comprehensive and precise dental imaging.",
  },
  {
    title: "Highly Accurate Results",
    description:
      "Our advanced imaging ensures detailed views of your teeth, bones, and soft tissues, enabling accurate diagnosis and effective treatment planning.",
  },
  {
    title: "Comfort Comes First",
    description:
      "We prioritize your comfort with fast, non-invasive, and painless imaging procedures in a calm and hygienic environment.",
  },
  {
    title: "Personalized Patient Care",
    description:
      "At Denza Dental, every patient receives individual attention and care. We take the time to understand your needs and guide you with the best solutions.",
  },
  {
    title: "Conveniently Located in Kharadi",
    description:
      "Visit us at our easily accessible clinic in the heart of Kharadi. We're here to make your dental care journey smooth and hassle-free.",
  },
];

const services = [
  {
    title: "Bitewing X-Rays – Detect Hidden Cavities Early ",
    description:
      "Bitewing X-rays are commonly used during routine check-ups. They capture both upper and lower teeth in a specific area, making it easier to spot cavities between teeth and monitor bone health. This helps us catch issues before they become serious. ",
  },
  {
    title:
      "Teeth X-Ray / RVG (Radiovisiography) – Precise Tooth-Level Diagnosis  ",
    description:
      "RVG is a digital teeth X-ray that focuses on individual teeth and surrounding tissues. It is highly effective in identifying tooth decay, root infections, and other localized dental concerns with minimal radiation exposure.",
  },
  {
    title:
      "Panoramic Dental Imaging (OPG) – Complete View of Your Oral Health ",
    description:
      "An OPG scan provides a full view of your teeth, jawbones, and surrounding structures in a single image. It is ideal for overall dental evaluation, wisdom tooth assessment, and planning orthodontic treatments.",
  },
  {
    title: "CBCT (Cone Beam Computed Tomography) – Advanced 3D Dental Imaging ",
    description:
      "For more complex cases, CBCT offers detailed 3D images of your teeth, jaw, and facial structure. This technology is essential for dental implants, bone analysis, and precise treatment planning, ensuring the best possible outcomes.",
  },
];

const faqs = [
  {
    question: " Why does Denza Dental recommend dental X-rays?  ",
    answer:
      "At Denza Dental, dental X-rays are recommended to detect problems that are not visible during a routine check-up. These include hidden cavities, infections, and bone loss, helping us provide accurate and early treatment. ",
  },
  {
    question: "How long does a dental X-ray take at Denza Dental?",
    answer:
      "A dental X-ray at Denza Dental usually takes only a few minutes. With advanced digital technology, results are available almost instantly, allowing our dentists to quickly explain your diagnosis and next steps.",
  },
  {
    question: "Does Denza Dental take X-rays at every visit?",
    answer:
      "No, Denza Dental only recommends X-rays when necessary. The decision depends on your oral health condition,symptoms, and dental history to ensure safe and minimal radiation exposure. ",
  },
  {
    question: "What happens during a dental X-ray at Denza Dental? ",
    answer:
      "During a dental X-ray at Denza Dental, you’ll be comfortably positioned while a small sensor or imaging device captures detailed images of your teeth. The process is quick, simple, and completely painless. ",
  },
  {
    question: ". Can Denza Dental use X-rays to detect gum problems? ",
    answer:
      "Yes, Denza Dental uses dental X-rays to identify signs of gum disease, such as bone loss around teeth. This helps in early diagnosis and effective treatment planning. ",
  },
 
];

const DentalXRay = () => {
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
      <PageTop title="Dental X-Ray" />

      <div className="second_section">
        <div className="second_section_container">
          <div className="second_section_header">
            <h2> Why Choose Denza Dental for Best Dental X-Rays in Pune?</h2>
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
          <h2> Types of Dental X-Rays Available at Denza Dental </h2>
          <p style={{ color: "var(--text)" }}>
            At Denza Dental, we offer advanced and reliable dental X-ray
            services in Pune to help diagnose problems early and plan the right
            treatment for you.
          </p>
        </div>

        <div className="service_cards">
          {services.map((service, index) => (
            <div
              key={index}
              className="service_card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* <p className="service_card_index">{index + 1}.</p> */}
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="book_appoint">
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
      </div> */}

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

export default DentalXRay;
