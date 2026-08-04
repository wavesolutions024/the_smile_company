import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./ToothReshaping.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import img1 from "../../../assets/general_service/img.webp";
import gallery1 from "../../../assets/about_page/after1.webp";
import apointment from "../../../assets/aapointment.webp";
import PageTop from "../../../comp/page_top/PageTop";


const whyChooseData = [
  {
    icon: "👨‍⚕️",
    title: "Tooth Contouring",
    description:
      "Contouring involves gently reshaping the enamel to smooth uneven edges and correct minor imperfections. This quick and painless procedure helps create a more balanced and refined appearance.",
  },
  {
    icon: "🦷",
    title: "Dental Bonding",
    description:
      "Bonding uses a tooth-colored composite resin to reshape and restore teeth. The material is carefully sculpted and hardened using a special light, making it ideal for repairing chips, closing small gaps, and improving tooth shape.",
  },
  {
    icon: "💰",
    title: "Porcelain Veneers",
    description:
      "Veneers are thin, custom-made shells placed over the front surface of teeth to correct more noticeable imperfections. They provide a durable, natural-looking solution for enhancing overall smile aesthetics.",
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
    question: "What is teeth reshaping and who can benefit from it? ",
    answer:
      "-Teeth reshaping is a cosmetic procedure that improves the shape, edges, and overall appearance of teeth. It is ideal for individuals with minor imperfections like uneven edges or small chips.",
  },
  {
    question: "What treatment options are included in teeth reshaping? ",
    answer:
      "-Depending on your needs, treatments may include contouring, dental bonding, or veneers to achieve the desired smile enhancement.",
  },
  {
    question: "Is teeth reshaping a painful procedure? ",
    answer:
      "-The procedure is usually painless as it involves minimal enamel adjustment, and most patients do not require anesthesia.",
  },
  {
    question: "How long do the results of teeth reshaping last? ",
    answer:
      "-Results can last for many years with proper care, good oral hygiene, and regular dental check-ups.",
  },
  {
    question: "Can teeth be reshaped without dental treatment?",
    answer:
      "- Natural reshaping at home is not recommended. Professional dental procedures ensure safe and effective results.",
  },
  {
    question: "Is teeth reshaping safe? ",
    answer:
      "-Yes, when performed by experienced dentists, it is a safe and conservative procedure with minimal risks.",
  },
  {
    question: "What is the cost of teeth reshaping in Pune? ",
    answer:
      "- The cost depends on the type of treatment and complexity. A personalized estimate is provided during consultation at Denza Dental.",
  },
  {
    question: "Are there any side effects of teeth reshaping? ",
    answer:
      "-Side effects are minimal, but some patients may experience temporary sensitivity, which usually resolves quickly.",
  },
];

const ToothReshaping = () => {
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
      <PageTop title="Tooth Reshaping Services" />

      <div className="brace_treat_parent parent">
        <div className="brace_treat_cont cont">
          <h2>Braces Treatment in Kharadi, Pune | Denza Dental </h2>
          <div>
            <p>
              Teeth reshaping is an effective solution for enhancing your smile by correcting
              minor imperfections such as uneven edges, small chips, or slightly irregular
              teeth. At Denza Dental in Kharadi, Pune, we offer advanced teeth reshaping
              treatments designed to refine your smile with minimal intervention. Our
              experienced dentists use modern techniques and technology to deliver precise,
              personalized care for natural-looking results. From tooth contouring to bonding
              and veneers, we provide a range of solutions to help you achieve a more
              balanced, confident smile.
            </p>

          </div>
        </div>
      </div>

      <div className="parent braces_treat_parent">
        <div className="cont braces_treat_cont">
          <div className="braces_treat_right">
            <h2>Reasons for Teeth Reshaping</h2>

            <ul>

              <li>
                <b>Correcting Uneven Edges </b>Teeth reshaping helps smooth out rough or jagged edges, creating a more
                uniform and polished smile.
              </li>

              <li>
                <b>Repairing Minor Damage </b>It is an effective solution for fixing small chips or cracks, improving both
                appearance and tooth integrity.
              </li>

              <li>
                <b>Improving Alignment Appearance </b>Reshaping can address slight overlaps or irregular positioning, enhancing
                overall smile aesthetics.
              </li>

              <li>
                <b>Adjusting Tooth Length </b>The procedure can subtly shorten or reshape teeth to create better proportion
                and balance.
              </li>

              <li>
                <b>Enhancing Tooth Shape </b>It refines irregular tooth shapes, resulting in a more symmetrical and visually
                appealing smile.
              </li>
            </ul>
          </div>

          <div className="braces_treat_left">
            <img src={img1} alt="General Dental Service" />
          </div>
        </div>
      </div>

      <div className="second_section">
        <div className="second_section_container">
          <div className="second_section_header">
            <h2>Types of Teeth Reshaping Procedures</h2>
            <p>
              At Denza Dental, we offer a range of teeth reshaping treatments to address
              different cosmetic concerns and enhance your smile.
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

      <div className="parent second_parent">
        <div className="cont second_cont">
          <div className="general_left">
            <img src={img1} alt="General Dental Service" />
          </div>
          <div className="general_right">
            <h2>Teeth Reshaping Aftercare & Recovery</h2>

            <p style={{ fontWeight: "bold", color: "var(--accent" }}>
              Common Reasons for Braces{" "}
            </p>

            <ul style={{ paddingLeft: "20px" }}>
              <li>
                <b>Quick Recovery </b>Teeth reshaping is a minimally invasive procedure, and most patients can
                resume normal activities immediately. Any slight sensitivity usually settles within
                a few days.
              </li>

              <li>
                <b>Maintain Oral Hygiene </b>Regular brushing and flossing are essential to keep your teeth clean and
                maintain the results of the reshaping treatment.
              </li>

              <li>
                <b>Avoid Hard & Sticky Foods </b>Limiting hard, crunchy, or sticky foods helps protect the reshaped edges and
                prevents unnecessary wear or damage.
              </li>

              <li>
                <b>Regular Dental Check-Ups </b>Routine dental visits allow us to monitor your oral health and ensure your
                reshaped teeth remain in optimal condition.
              </li>

              <li>
                <b>Long-Lasting Results </b>Following proper aftercare helps preserve the appearance and function of your
                teeth, keeping your smile looking refined and natural over time.
              </li>

            </ul>
          </div>
        </div>
      </div>

      <div className="parent braces_treat_parent">
        <div className="cont braces_treat_cont">
          <div className="braces_treat_right">
            <h2>Before and After Teeth Reshaping </h2>

            <p>
              Experience the visible difference that teeth reshaping can make. At Denza
              Dental, our before and after results showcase how minor corrections can create
              a more balanced and aesthetically pleasing smile. These transformations
              highlight the precision and care involved in enhancing tooth shape, edges, and
              symmetry. If you’re considering teeth reshaping in Kharadi, Pune, our results
              offer a clear idea of how this simple procedure can significantly improve your
              smile and overall appearance.
            </p>
          </div>

          <div className="braces_treat_left">
            <img src={img1} alt="General Dental Service" />
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

export default ToothReshaping;
