import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./ImplantSupported.scss";
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

const servicess = [
  {
    title: " Initial Consultation & Planning",
    points: [
      "Detailed oral examination",
      "X-rays and CBCT scans for bone assessment",
      "Treatment planning based on bone strength ",
      "Bone grafting recommended if required for support ",
    ],
  },
  {
    title: "Implant Placement (Surgery Day) ",
    points: [
      "Ensuring complete patient comfort ",
      "Titanium implants placed into the jawbone ",
      "Sutures used to close the gums ",
      "Temporary teeth may be provided during healing ",
       "Healing period allows implants to integrate with bone",
    ],
  },
  {
    title: "Fabrication of New Teeth",
    points: [
      "Placement of attachment caps on healed implants",
      "Digital impressions taken for precise fit",
      "Custom overdentures designed for comfort and aesthetics",
      "Bite and alignment adjustments performed ",
    ],
  },
  {
    title: "Final Placement & Function ",
    points: [
      "Overdentures securely attached to implants",
      "Improved ability to chew and speak confidently ",
      "Stable fit with no slipping or movement",
      "Easy adaptation to daily routine",
    ],
  },
  {
    title: "Long-Term Results & Maintenance",
    points: [
      "Restores facial structure and prevents sunken appearance ",
      "Regular check-ups ensure long-term success",
      "Simple oral hygiene routine for maintenance ",
      "Durable and long-lasting solution with proper care ",
    ],
  },
  
  
];

const faqs = [
  {
    question: "Can you sleep with an implant overdenture? ",
    answer:
      " Yes, many patients can wear them while sleeping, but your dentist may advise removing them at night for cleaning in some cases. ",
  },
  {
    question: "How long do overdenture implants last?",
    answer:
      "With proper care and regular check-ups, implant-supported overdentures can last 10–20+ years or even longer.  ",
  },
  {
    question: "Can you eat normally with implant-supported dentures? ",
    answer:
      " Yes, they provide strong stability, allowing you to eat most foods comfortably compared to traditional dentures. ",
  },
  {
    question: "Who is a good candidate for overdentures?",
    answer:
      "Patients with multiple missing teeth, loose dentures, or reduced jawbone support are usually good candidates for implant-supported overdentures. ",
  },
];

const ImplantSupported = () => {
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
      <PageTop title="Implant-Supported Overdenture Services" />

      <div className="parent second_parent">
        <div className="cont second_cont">
          <div className="general_left">
            <img src={img1} alt="General Dental Service" />
          </div>
          <div className="general_right">
            <h2>Implant-Supported Overdenture in Kharadi, Pune | Denza Dental</h2>
            <p>
              Missing teeth? At Denza Dental, Kharadi, we offer advanced implant-supported
              overdenture treatment in Pune to restore your smile, comfort, and confidence.
            </p>

            <p>
              Our clinic provides stable and natural-looking overdentures that are supported by dental
              implants, giving you a secure and long-lasting alternative to traditional removable
              dentures.
            </p>

            <p>
              Patients choose implant-supported overdentures for improved comfort, better chewing
              ability, and a confident smile without the worry of slipping dentures.
            </p>

            <p>
              No more discomfort, movement issues, or embarrassment—just a stable and functional
              smile.
            </p>

          </div>
        </div>
      </div>

      <div className="after_care_parent parent">
        <div className="after_care_cont cont">
          <h2>What is Implant-Supported Overdenture? </h2>

          <p>
            Implant-supported overdentures are modern “snap-on” dentures that securely attach to
            dental implants placed in the jawbone.
          </p>

          <p>
            <strong>Unlike traditional removable dentures, they:</strong>
          </p>
          <ul>
            <li>
              Stay firmly in place while eating and speaking
            </li>
            <li>
              Do not slip or move during daily activities
            </li>

            <li>
              Provide a natural-looking and stable smile
            </li>
            <li>
              Improve chewing comfort, even with tougher foods
            </li>
          </ul>
          <p>They are a reliable and comfortable solution for replacing multiple missing teeth.</p>
        </div>
      </div>

      <div className="parent braces_treat_parent">
        <div className="cont braces_treat_cont">
          <div className="braces_treat_right">
            <h2>When Do You Need an Implant-Supported Overdenture? </h2>
            <p>
              You may need implant-supported overdentures if you experience:
            </p>

            <p style={{ fontWeight: "bold", color: "var(--accent" }}>
              Typical Duration
            </p>

            <p>
              Most braces treatments take around 18 to 24 months, though this
              can differ based on the case.{" "}
            </p>

            <p style={{ fontWeight: "bold", color: "var(--accent" }}>
              Factors That Affect Treatment Time
            </p>

            <ul>
              <li>Multiple missing teeth or most teeth missing in one or both jaws</li>
              <li>Loose or unstable dentures that slip while eating or speaking </li>
              <li>Difficulty eating certain foods like apples, nuts, or meat</li>
              <li>Facial changes such as a sunken or aged appearance</li>
              <li>Speech issues caused by poor denture fit </li>
              <li>Frequent gum irritation or soreness from dentures </li>
              <li>Overdependence on denture adhesives </li>
              <li>Avoiding social situations due to denture discomfort or embarrassment </li>
              <li>Discomfort wearing removable dentures daily or at night</li>
            </ul>
            <p>
              Implant-supported overdentures provide better stability, comfort, and confidence
              compared to traditional removable dentures.
            </p>
          </div>

          <div className="braces_treat_left">
            <img src={img1} alt="General Dental Service" />
          </div>
        </div>
      </div>

      <div className="third_section" style={{ background: "var(--white)" }}>
        <div className="third_header">
          <h2 style={{ textAlign: "center", color: "var(--accent)" }}>
            Why Choose Denza Dental for Full Mouth Rehabilitation in Pune?
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


      <div className="parent second_parent">
        <div className="cont second_cont">
          <div className="general_left">
            <img src={img1} alt="General Dental Service" />
          </div>
          <div className="general_right">
            <h2>Benefits of Implant-Supported Overdenture at Denza Dental, Kharadi (Pune)</h2>
            <p>
              At Denza Dental, we are committed to delivering long-lasting and comfortable solutions
              for missing teeth with implant-supported overdentures.
            </p>

            <p style={{ fontWeight: "bold", color: "var(--accent" }}>
              Common Reasons for Braces{" "}
            </p>

            <ul style={{ paddingLeft: "20px" }}>
              <li>
                <b>Precision-Driven Expertise</b> Our team has extensive experience in implant dentistry, ensuring accurate planning
                and long-term stable results using advanced techniques.
              </li>

              <li>
                <b>Personalized Treatment Plans </b>Every patient receives a customized plan based on their bone structure, oral health,
                and smile goals for the best possible outcome.
              </li>

              <li>
                <b>Advanced Technology </b>We use 3D CBCT imaging and digital scanning for precise implant placement and
                highly accurate denture fit.
              </li>

              <li>
                <b>Patient-Centered Care </b>We guide you through every step of the process with clear communication, ensuring a
                comfortable and stress-free experience.
              </li>

              <li>
                <b>Improved Quality of Life</b> Implant-supported overdentures restore chewing ability, speech clarity, and facial
                aesthetics—helping patients regain confidence in daily life.
              </li>

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

export default ImplantSupported;
