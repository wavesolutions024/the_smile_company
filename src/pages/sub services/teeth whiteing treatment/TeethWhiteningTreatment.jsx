import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./TeethWhiteningTreatment.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import img1 from "../../../assets/general_service/img.webp";
import gallery1 from "../../../assets/about_page/after1.webp";
import apointment from "../../../assets/aapointment.webp";
import PageTop from "../../../comp/page_top/PageTop";


const whyChooseData = [
  {
    icon: "👨‍⚕️",
    title: "Experienced Dental Team ",
    description:
      "Our dentists are well-trained in cosmetic procedures and bring advanced expertise, including international exposure, to deliver high-quality whitening results.",
  },
  {
    icon: "🦷",
    title: "Advanced Whitening Techniques",
    description:
      "We use modern whitening systems, including light-activated and advanced techniques, to achieve faster, safer, and more noticeable results.",
  },
  {
    icon: "💰",
    title: "Patient-First Approach",
    description:
      "Your comfort is our priority. We ensure a smooth, stress-free experience with gentle procedures and attentive care throughout your treatment.",
  },
  {
    icon: "😊",
    title: "Customized Whitening Solutions",
    description:
      "Each treatment is tailored based on your dental condition and goals, ensuring optimal and natural-looking results. ",
  },
  {
    icon: "😊",
    title: "Proven & Reliable Results ",
    description:
      "With a focus on quality care and patient satisfaction, Denza Dental is trusted for delivering consistent and effective teeth whitening outcomes.",
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
    question: "What is the cost of teeth whitening in Pune? ",
    answer:
      " The cost varies based on the method used and individual requirements. At Denza Dental, pricing is discussed transparently during your consultation.",
  },
  {
    question: " How long do teeth whitening results last? ",
    answer:
      "Results can last several months to a few years, depending on your lifestyle, diet, and oral hygiene habits.  ",
  },
  {
    question: " Is teeth whitening a permanent solution? ",
    answer:
      " Teeth whitening is not permanent, but results can be maintained with proper care and occasional touch-ups.",
  },
  {
    question: " Can yellow stains be effectively removed? ",
    answer:
      " Yes, professional whitening treatments are designed to reduce or eliminate most surface stains and discoloration.",
  },
  {
    question: " How many sessions are needed for teeth whitening? ",
    answer:
      " Many patients see visible results in a single session, though some may require additional treatments for optimal brightness.",
  },
  {
    question: "Is teeth whitening safe for everyone?  ",
    answer:
      "Teeth whitening is generally safe, but suitability depends on your dental condition. A consultation helps determine the best approach.  ",
  },
  {
    question: "How can I maintain my whitening results? ",
    answer:
      "Maintaining good oral hygiene, limiting staining foods, and regular dental visits help keep your smile bright.  ",
  },
  {
    question: "How do I book a teeth whitening appointment at Denza Dental?  ",
    answer:
      " You can schedule an appointment by contacting the clinic directly or visiting Denza Dental in Kharadi for a consultation.",
  },
  
];

const TeethWhiteningTreatment = () => {
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
      <PageTop title="Teeth Whitening Treatment Services" />

      <div className="book_appoint">
        <div className="book_appoint_container" data-aos="fade-up">
          <div className="book_appoint_text">
            <h2> Best Teeth Whitening in Kharadi, Pune</h2>
            <p>
              At Denza Dental, we believe a brighter smile can boost your confidence and enhance
              your overall appearance. Here’s why patients choose us for professional teeth whitening
              in Kharadi, Pune:
            </p>

            <ol>
              <li>
                <strong>Experienced Dental Professionals</strong> Our team has extensive experience in cosmetic dentistry, ensuring safe, effective, and
                high-quality teeth whitening treatments.
              </li>
              <li>
                <strong>Advanced Whitening Technology</strong> We use modern whitening systems and advanced equipment to deliver noticeable,
                long-lasting results with minimal sensitivity.
              </li>
              <li>
                <strong>Personalized Whitening Solutions</strong> Every smile is different, so we customize each teeth whitening treatment based on your
                dental condition and desired results.
              </li>
              <li>
                <strong>Comfort-Focused Care </strong>Your comfort is our priority. We provide a relaxed environment and gentle procedures to
                make your whitening experience smooth and stress-free.
              </li>

              <li>
                <strong>Detailed Consultation</strong>We conduct thorough consultations to understand your concerns and recommend the
                most suitable whitening options for optimal results.
              </li>

              <li>
                <strong>Transparent & Affordable Pricing</strong>We offer clear pricing with no hidden costs, making professional teeth whitening
                accessible without compromising on quality.
              </li>
            </ol>
          </div>

          <div className="book_appoint_side red_background">
            <img src={apointment} alt="Dental Appointment " />
          </div>
        </div>
      </div>

      <div className="second_section">
        <div className="second_section_container">
          <div className="second_section_header">
            <h2>Why Choose Denza Dental for Teeth Whitening in Kharadi, Pune? </h2>
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

      <div className="book_appoint">
        <div className="book_appoint_container" data-aos="fade-up">
          <div className="book_appoint_text">
            <h2>Common Causes of Tooth Discoloration </h2>
            <p>
              Tooth discoloration can occur due to several everyday factors that affect the natural
              brightness of your smile.
            </p>

            <ol>
              <li>
                <strong>Dietary Habits</strong> Frequent consumption of staining foods and beverages like coffee, tea, and colored
                drinks can gradually dull the natural whiteness of teeth.
              </li>
              <li>
                <strong>Tobacco Use</strong> Smoking or chewing tobacco leads to stubborn stains that can deeply discolor the
                enamel over time.
              </li>
              <li>
                <strong>Poor Oral Hygiene </strong> Inadequate brushing and flossing can cause plaque and tartar buildup, resulting in a
                yellow or dull appearance.
              </li>
              <li>
                <strong>Aging </strong>As you age, the outer enamel layer wears down, exposing the underlying dentin, which
                has a naturally yellow tone.
              </li>

              <li>
                <strong>Medications </strong>Certain medications can contribute to discoloration, especially when taken over long
                periods or during tooth development.
              </li>

              <li>
                <strong>Genetic Factors </strong>Natural tooth color can vary from person to person, with some individuals having
                inherently darker or more yellow-toned teeth.
              </li>
            </ol>
          </div>

          <div className="book_appoint_side red_background">
            <img src={apointment} alt="Dental Appointment " />
          </div>
        </div>
      </div>

      <div className="book_appoint parent" style={{ background: "white" }}>
        <div className="book_appoint_container" data-aos="fade-up">
          <div className="book_appoint_side red_background">
            <img src={apointment} alt="Dental Appointment " />
          </div>

          <div className="book_appoint_text">
            <h2>When Should You Consider Teeth Whitening?  </h2>
            <p>
              Teeth whitening is an effective way to enhance your smile and
              improve overall appearance in various situations.
            </p>

            <ol>
              <li>
                <strong>Before Special Occasions</strong>If you’re preparing for events like weddings, celebrations, or important
                gatherings, teeth whitening can help you achieve a brighter, more
                confident smile.
              </li>

              <li>
                <strong>To Boost Confidence </strong>A whiter smile can enhance your self-esteem and make you feel more
                confident in social and personal interactions.
              </li>

              <li>
                <strong>For Stained or Dull Teeth </strong>If your teeth have lost their brightness due to food, beverages, or
                lifestyle habits, whitening treatments can restore their natural shine.
              </li>

              <li>
                <strong>For a Professional Appearance</strong>A clean, bright smile can create a strong first impression in
                professional settings such as interviews or client interactions.
              </li>
            </ol>

          </div>
        </div>
      </div>

      <div className="book_appoint">
        <div className="book_appoint_container" data-aos="fade-up">
          <div className="book_appoint_text">
            <h2>Teeth Whitening Aftercare & Recovery Tips</h2>
            <p>
              Proper aftercare helps maintain your whitening results and keeps your smile
              brighter for longer.
            </p>

            <ol>
              <li>
                <strong>Avoid Staining Foods & Drinks </strong>For the first 24–48 hours, avoid coffee, tea, colored beverages, and strongly
                pigmented foods that can cause stains.
              </li>

              <li>
                <strong>Maintain Good Oral Hygiene </strong>Brush and floss regularly to prevent plaque buildup and preserve the brightness
                of your teeth.
              </li>

              <li>
                <strong>Use a Straw for Beverages</strong>When consuming colored drinks, using a straw can reduce direct contact with
                your teeth and help maintain results.
              </li>

              <li>
                <strong>Regular Dental Check-Ups </strong>Follow up with routine dental visits to monitor your results and ensure
                long-lasting whitening effects.
              </li>

            </ol>
          </div>

          <div className="book_appoint_side red_background">
            <img src={apointment} alt="Dental Appointment " />
          </div>
        </div>
      </div>

      <div className="book_appoint parent" style={{ background: "white" }}>
        <div className="book_appoint_container" data-aos="fade-up">
          <div className="book_appoint_side red_background">
            <img src={apointment} alt="Dental Appointment " />
          </div>

          <div className="book_appoint_text">
            <h2>Advanced Equipment Used for Teeth Whitening  </h2>
            <p>
              At Denza Dental, we use modern technology and high-quality materials to
              deliver safe, effective, and long-lasting teeth whitening results.
            </p>

            <ol>
              <li>
                <strong>LED Light Activation Systems </strong>Advanced LED technology is used to enhance and speed up the whitening
                process, helping achieve visible results in less time.
              </li>

              <li>
                <strong>Laser Whitening Technology</strong>Laser-assisted whitening allows for precise and effective stain removal,
                delivering faster and more noticeable improvements.
              </li>

              <li>
                <strong>Custom-Fit Whitening TraysWe provide personalized trays designed to fit your teeth perfectly, ensuring even
                  application and maximum comfort for at-home maintenance. </strong>
              </li>

              <li>
                <strong>Professional-Grade Whitening Gels </strong>Our high-quality whitening gels are formulated to effectively brighten teeth while
                minimizing sensitivity and protecting enamel.
              </li>
            </ol>
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

export default TeethWhiteningTreatment;
