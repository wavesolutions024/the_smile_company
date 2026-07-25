import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./CrownsBridges.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import img1 from "../../../assets/general_service/img.webp";
import gallery1 from "../../../assets/about_page/after1.webp";
import apointment from "../../../assets/aapointment.webp";

const whyChooseData = [
  {
    icon: "👨‍⚕️",
    title: "Expert Care with Global Exposure ",
    description:
      "Our skilled dentists bring international exposure and extensive experience, ensuring precise and high-quality results in every crowns and bridges procedure. ",
  },
  {
    icon: "🦷",
    title: "Advanced Digital Technology ",
    description:
      "We use modern digital tools and advanced scanning technology to design and create accurate, well-fitting crowns and bridges with enhanced efficiency and comfort. ",
  },
  {
    icon: "💰",
    title: "Use of High-Quality Materials ",
    description:
      "We prioritize premium dental materials that ensure durability, strength, and a natural-looking finish that blends seamlessly with your teeth.",
  },
  {
    icon: "😊",
    title: "Personalized Treatment Plans",
    description:
      "Every crowns and bridges procedure is customized to suit your specific dental needs, ensuring optimal comfort, function, and long-term success. ",
  },
  {
    icon: "😊",
    title: "Comprehensive Dental Care",
    description:
      "From consultation to final placement and follow-ups, we provide complete care to ensure the best possible treatment outcomes.",
  },
  {
    icon: "😊",
    title: "Patient-Centric Approach",
    description:
      "Your comfort is our priority. We guide you through every step with clear communication, helping you make confident and informed decisions.",
  },
  {
    icon: "😊",
    title: "Affordable and Transparent Pricing ",
    description:
      " We offer competitive pricing with clear cost breakdowns, making high-quality dental care accessible without compromising on standards.",
  },
];

const services = [
  {
    title: " Initial Consultation ",
    description:
      "We begin with a comprehensive dental evaluation, including X-rays and advanced digital scans, to assess your oral health. Our team discusses your concerns and explains suitable crown and bridge treatment options to help you make an informed decision.",
  },
  {
    title: "  Personalized Treatment Planning ",
    description:
      "Using digital technology, we create a customized treatment plan tailored to your dental needs. This ensures precision, efficiency, and predictable results. ",
  },
  {
    title: "Tooth Preparation & Digital Impressions ",
    description:
      "For crowns, the affected tooth is reshaped, while for bridges, adjacent teeth or implants are prepared. We then take accurate digital impressions using intra-oral scanning for a precise fit. ",
  },
  {
    title: " Temporary Restoration (If Required) ",
    description:
      "If needed, temporary crowns or bridges are placed to protect your teeth while your permanent restoration is being prepared.",
  },
  {
    title: "Advanced Fabrication  ",
    description:
      "Your custom crown or bridge is designed using modern CAD/CAM technology, allowing for quick, precise, and high-quality restorations using premium materials.  ",
  },
  {
    title: " Fitting & Adjustments ",
    description:
      " The final restoration is carefully placed and adjusted to ensure proper fit, bite alignment, and comfort. ",
  },
  {
    title: "Final Placement & Care Guidance  ",
    description:
      " Once perfected, the crown or bridge is securely fixed in place. We also provide detailed aftercare instructions to maintain longevity and oral health.",
  },
  {
    title: " Follow-Up Care ",
    description:
      "Regular follow-ups are scheduled to monitor your progress and ensure long-term success of your dental crowns or bridges.  ",
  },
];

const faqs = [
  {
    question: " Will getting a crown or bridge hurt?",
    answer:
      "The procedure is carried out under anesthesia, so you won’t feel pain during treatment. Mild sensitivity afterward is normal and settles quickly..  ",
  },
  {
    question: "How durable are dental crowns and bridges? ",
    answer:
      " They are designed to be long-lasting and can serve you well for years with good oral hygiene and routine dental check-ups.",
  },
  {
    question: "Is it possible to eat normally after the treatment? ",
    answer:
      "Yes, once your crown or bridge is placed, you can return to regular eating habits, with minor precautions initially. ",
  },
  {
    question: "How are crowns different from bridges?",
    answer:
      "Crowns are used to restore and protect a single damaged tooth, whereas bridges are used to replace one or more missing teeth. ",
  },
  {
    question: "What if my crown or bridge gets damaged later?",
    answer:
      "If needed, they can be repaired or replaced to restore proper function and appearance. ",
  },
  
];

const CrownsBridges = () => {
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

      <div className="book_appoint">
        <div className="book_appoint_container" data-aos="fade-up">
          <div className="book_appoint_text">
            <h2> What Are Dental Crowns?  </h2>
            <p>
              Dental crowns are custom-made caps designed to cover and protect damaged or
              weakened teeth. At Denza Dental, each crown is carefully crafted to restore the
              tooth’s shape, size, strength, and natural appearance, ensuring both function and
              aesthetics. Using advanced techniques and high-quality materials, crowns
              provide long-lasting protection while seamlessly blending with your natural teeth.
              They are an effective solution for preserving tooth structure, improving bite
              function, and enhancing overall smile confidence.
            </p>
          </div>

          

          <div className="book_appoint_side red_background">
            <img src={apointment} alt="Dental Appointment " />
          </div>
        </div>
      </div>

      <div className="second_section">
        <div className="second_section_container">
          <div className="second_section_header">
            <h2>Why Choose Denza Dental for Dental Crowns and Bridges in Pune? </h2>
            <p>
              
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

      <div className="third_section">
        <div className="third_header">
          <h2>Treatment Process for Dental Crowns and Bridges </h2>
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

export default CrownsBridges;
