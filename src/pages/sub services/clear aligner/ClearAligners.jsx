import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./ClearAligners.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import img1 from "../../../assets/general_service/img.webp";
import gallery1 from "../../../assets/about_page/after1.webp";
import apointment from "../../../assets/aapointment.webp";
import PageTop from "../../../comp/page_top/PageTop";


const whyChooseData = [
  {
    icon: "👨‍⚕️",
    title: "Precision-Driven Expertise ",
    description:
      "Our experienced dentists specialize in clear aligner treatments, ensuring accurate and effective tooth alignment with predictable results. ",
  },
  {
    icon: "🦷",
    title: "Personalized Smile Plans",
    description:
      "Every smile is unique. We design customized aligner plans based on your dental structure and alignment needs for the best outcomes.",
  },
  {
    icon: "💰",
    title: "Advanced Digital Technology ",
    description:
      "We use modern 3D scanning and digital imaging to create precise, comfortable, and highly effective clear aligner treatments.",
  },
  {
    icon: "😊",
    title: "Patient-Centered Approach",
    description:
      "From consultation to completion, we guide you through every step of your aligner journey with complete transparency and care. ",
  },
  {
    icon: "😊",
    title: "Comfort & Convenience",
    description:
      "Located in Kharadi, Pune, our clinic offers flexible appointment timings to suit your schedule and ensure a smooth treatment experience. ��Visit Denza Dental, Kharadi, Pune ��Call / WhatsApp:   +91 7028 131 132 / 7028143959 ",
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
    question: " Do clear aligners really work?",
    answer:
      "Yes, clear aligners are highly effective for correcting mild to moderate crowding, gaps, and bite issues with predictable results.",
  },
  {
    question: "Are clear aligners painful? ",
    answer:
      "They are not painful, but you may feel mild pressure for a few days as teeth begin to shift. ",
  },
  {
    question: "Are clear aligners better than braces?  ",
    answer:
      "They are more aesthetic and comfortable, but braces may be better for complex orthodontic cases.",
  },
  {
    question: " Do clear aligners give permanent results?",
    answer:
      "Yes, results are long-lasting if you wear retainers as advised after treatment. ",
  },
  {
    question: "Can we eat with clear aligners? ",
    answer:
      "No, aligners should be removed while eating or drinking anything except water.",
  },
  {
    question: " Can teeth be aligned naturally without treatment?",
    answer:
      "Natural methods cannot significantly move teeth; orthodontic treatments like aligners are required for real correction.",
  },

];

const ClearAligners = () => {
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
      <PageTop title="Clear Aligners Services" />

      <div className="brace_treat_parent parent">
        <div className="brace_treat_cont cont">
          <h2>Clear Aligners Treatment in Kharadi, Pune | Denza Dental</h2>
          <div>
            <p>
              Clear aligners offer a modern and discreet way to straighten your teeth without
              the need for traditional braces. These transparent, custom-made trays gradually
              move your teeth into proper alignment while remaining virtually invisible.
            </p>

            <p>
              Unlike metal braces, clear aligners are smooth, removable, and
              comfortable—allowing you to maintain your confidence in social and professional
              settings. Made from high-quality medical-grade material, they are designed to fit
              your teeth precisely and work efficiently in the background.
            </p>

            <p>
              At Denza Dental, Kharadi, we provide advanced clear aligner solutions tailored to
              your smile goals, helping you achieve a straighter, more confident smile without
              compromising your lifestyle.
            </p>
          </div>
        </div>
      </div>

      <div className="second_section">
        <div className="second_section_container">
          <div className="second_section_header">
            <h2>Best Dental Clinic for Affordable Clear Aligners in Kharadi, Pune | Denza Dental</h2>
            <p>
              What makes Denza Dental a preferred choice for clear aligner
              treatment in Kharadi? We combine expertise, technology, and
              personalized care to deliver confident, well-aligned smiles.
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
            <h2>About Invisible Aligners (Clear Aligners)</h2>
            <p>
              Clear aligners are a modern advancement in orthodontic treatment designed to straighten teeth using
              custom-made, transparent plastic trays that fit comfortably over your teeth.
            </p>

            <p>
              Unlike traditional braces, invisible aligners are smooth, removable, and virtually unnoticeable, offering
              greater comfort and convenience throughout treatment. At Denza Dental, Kharadi, we provide advanced
              clear aligner solutions that are ideal for teenagers and working professionals who want a discreet way to
              achieve a well-aligned smile.
            </p>

            <p style={{ fontWeight: "bold", color: "var(--accent" }}>
              Common Reasons for Braces{" "}
            </p>

          </div>
        </div>
      </div>

      <div className="parent braces_treat_parent">
        <div className="cont braces_treat_cont">
          <div className="braces_treat_right">
            <h2>Benefits of Invisible Aligners at Denza Dental </h2>
            <p>
              Clear aligners offer a modern and convenient way to straighten teeth with multiple advantages:
            </p>

            <p style={{ fontWeight: "bold", color: "var(--accent" }}>
              Typical Duration
            </p>

            <ul>
              <li>
                <b>Virtually Invisible </b>– Discreet treatment that doesn’t affect your appearance
              </li>

              <li>
                <b>Removable Convenience </b>– Eat, drink, brush, and floss with ease
              </li>

              <li>
                <b>Comfortable Design </b>– No wires or brackets, ensuring a smooth experience
              </li>

              <li>
                <b>Predictable Results </b>– Digital planning ensures controlled and accurate tooth movement
              </li>

              <li>
                <b>Efficient Treatment </b>– In many cases, faster results compared to traditional braces
              </li>

            </ul>
          </div>

          <div className="braces_treat_left">
            <img src={img1} alt="General Dental Service" />
          </div>
        </div>
      </div>

      <div className="side_side_parent parent">
        <div className="side_side_cont cont">
          <div className="left_side_side">
            <h3>Before and After Clear Aligners</h3>

            <p>
              <strong>Before: </strong>Crooked teeth, gaps, or bite misalignment affecting smile and function. 
            </p>

            <p>
              <strong>After: </strong>Straight, well-aligned smile with improved aesthetics and confidence.
            </p>

            <h3>Timeline</h3>
            <ul>
              <li>Adjustment: 1–2 weeks</li>
              <li>Mild discomfort: 3–5 days </li>
              <li>Total treatment: 6–18 months</li>
            </ul>

            <h3>What to Expect</h3>
            <ul>
              <li>Mild pressure during tooth movement</li>
              <li>Temporary speech changes</li>
              <li>Gradual smile improvement</li>
            </ul>
          </div>

          <div className="right_side_side">
            <h3>During Clear Aligner Treatment</h3>
            <ul>
              <li>Remove aligners while eating</li>
              <li>Avoid hot drinks with aligners on</li>
              <li>Stay well hydrated </li>
              <li>Prefer soft foods in initial days</li>
            </ul>

            <h3>Care Instructions</h3>
            <ul>
              <li>Wear aligners 20–22 hours daily</li>
              <li>Brush teeth after every meal</li>
              <li>Clean aligners regularly </li>
              <li>Attend scheduled follow-ups</li>
              <li>Maintain good oral hygiene throughout treatment</li>
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

export default ClearAligners;
