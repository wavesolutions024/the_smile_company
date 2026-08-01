import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./PorcelainVennersTreatment.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import img1 from "../../../assets/general_service/img.webp";
import gallery1 from "../../../assets/about_page/after1.webp";
import apointment from "../../../assets/aapointment.webp";
import PageTop from "../../../comp/page_top/PageTop";


const whyChooseData = [
  {
    icon: "👨‍⚕️",
    title: "Convenient Location in Kharadi",
    description:
      "Convenient Location in Kharadi Our clinic is easily accessible in Kharadi, Pune, making it convenient for patients seeking high-quality porcelain veneers near them.",
  },
  {
    icon: "🦷",
    title: "Experienced Dentists with Global Exposure",
    description:
      "Our skilled team brings extensive experience along with international exposure, ensuring precise veneer placement and natural-looking results.",
  },
  {
    icon: "💰",
    title: "Advanced Digital Technology",
    description:
      "We use modern tools and techniques to design customized veneers that perfectly match your facial features and dental structure.",
  },
  {
    icon: "😊",
    title: "Personalized Smile Solutions",
    description:
      "Each treatment is tailored to your unique needs and aesthetic goals, ensuring a smile that looks natural and balanced.",
  },
  {
    icon: "😊",
    title: "Comfort-Focused Care",
    description:
      "We prioritize a gentle, pain-free experience, making your veneer treatment smooth and stress-free. ",
  },
  {
    icon: "😊",
    title: "Trusted Results",
    description:
      "Denza Dental is known for delivering consistent, high-quality outcomes with a strong focus on patient satisfaction.",
  },
];

const services = [
  {
    title: " Consultation & Smile Assessment ",
    description:
      "Your journey begins with a detailed evaluation where we understand your concerns and discuss your smile goals to plan the ideal treatment. ",
  },
  {
    title: " Tooth Preparation ",
    description:
      "A minimal amount of enamel is gently reshaped to create space for the veneers while preserving maximum natural tooth structure. ",
  },
  {
    title: " Digital Scanning & Design ",
    description:
      " We use advanced digital scanning technology to capture precise impressions and design veneers that fit perfectly.",
  },
  {
    title: "Custom Veneer Fabrication ",
    description:
      "Your veneers are carefully crafted using high-quality porcelain to match the color, shape, and size of your natural teeth. ",
  },
  {
    title: "Veneer Placement",
    description:
      " Once ready, the veneers are securely bonded to your teeth, instantly enhancing your smile.",
  },
  {
    title: " Final Adjustments & Aftercare",
    description:
      "We fine-tune the fit and appearance for maximum comfort and provide guidance to help maintain your new smile long-term. ",
  },
];

const faqs = [
  {
    question: "Are porcelain veneers a good option for smile enhancement? ",
    answer:
      "Yes, veneers are a popular cosmetic solution for improving the shape, color, and alignment of teeth, offering natural-looking and long-lasting results. ",
  },
  {
    question: "Can teeth get damaged under veneers?",
    answer:
      "With proper placement and good oral hygiene, veneers protect the tooth surface. However, maintaining regular dental care is important to prevent decay. ",
  },
  {
    question: "Is the veneer procedure painful?",
    answer:
      "The procedure is minimally invasive and typically comfortable, with little to no discomfort during or after treatment. ",
  },
  {
    question: "Are there any disadvantages of porcelain veneers?",
    answer:
      "Are there any disadvantages of porcelain veneers? Veneers are a long-term solution and may require minor enamel reshaping. They also need proper care to maintain their appearance and durability over time. ",
  },

];

const PorcelainVennersTreatment = () => {
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
      <PageTop title="Porcelain Veneers Treatment Services"/>

      <div className="second_section">
        <div className="second_section_container">
          <div className="second_section_header">
            <h2>Why Choose Denza Dental for Porcelain Veneers in Kharadi, Pune?</h2>
            <p>
              Denza Dental is a trusted destination for porcelain veneers, offering
              advanced cosmetic solutions to enhance your smile with precision and
              care.
            </p>
          </div>

          <div className="why_choose_cards">
            {whyChooseData.map((item, index) => (
              <div key={index} className="why_choose_card" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="card_icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="teeth_cleaning_parent parent">
        <div className="teeth_cleaning_cont cont">
          <h2>What Are Porcelain Veneers? </h2>

          <p>
            Porcelain veneers are thin, custom-crafted shells made from high-quality ceramic
            that are placed on the front surface of your teeth to enhance their appearance. At
            Denza Dental, veneers are designed to correct concerns such as discoloration,
            chips, gaps, and minor misalignment. They offer a durable, stain-resistant
            solution that mimics the natural look of teeth, helping you achieve a brighter,
            more even, and confident smile.
          </p>

        </div>
      </div>

      <div className="third_section">
        <div className="third_header">
          <h2>The Process of Getting Porcelain Veneers at Denza Dental  </h2>
          <p>

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
          <h2>Benefits of Porcelain Veneers </h2>

          <ul>
            <li>
              <b>Natural-Looking Results </b>Porcelain veneers are designed to closely match the color, shape,
              and translucency of natural teeth, creating a seamless and aesthetic
              smile.
            </li>

            <li>
              <b>Long-Lasting Durability </b>With proper care and maintenance, veneers offer a strong and
              reliable solution that can last for many years.
            </li>

            <li>
              <b>Stain-Resistant Surface </b>Porcelain material resists common stains from food and beverages,
              helping your smile stay bright and fresh.
            </li>

            <li>
              <b>Instant Smile Transformation </b>Veneers provide noticeable improvements in just a few visits,
              enhancing the overall appearance of your smile quickly.
            </li>

            <li>
              <b>Minimally Invasive Treatment</b>The procedure involves minimal tooth preparation, preserving most of
              your natural tooth structure compared to more extensive treatments.
            </li>

          </ul>
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

export default PorcelainVennersTreatment;
