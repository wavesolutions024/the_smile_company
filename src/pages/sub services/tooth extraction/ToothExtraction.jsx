import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./ToothExtraction.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import img1 from "../../../assets/general_service/img.webp";
import gallery1 from "../../../assets/about_page/after1.webp";
import apointment from "../../../assets/aapointment.webp";
import PageTop from "../../../comp/page_top/PageTop";
import { Helmet } from "react-helmet";

const whyChooseData = [
  {
    title: " Skilled Dental Experts ",
    description:
      "AO Dentistry boasts a team of skilled and experienced dentists who specialize in various fields of dentistry. From general dental check-ups in Pune to more complex treatments, you can be sure you're in good hands.",
  },
  {
    title: " Minimally Invasive Techniques",
    description:
      "The clinic is equipped with the latest dental technologies to ensure that every dental check-up is thorough and accurate. Digital X-rays, intraoral cameras, and advanced diagnostic tools help in identifying even the smallest issues during the dental examination.",
  },
  {
    title: "Modern Equipment & Imaging",
    description:
      "AO Dentistry offers a range of affordable packages for dental check-ups in Pune. The clinic understands that dental care should be accessible to everyone and provides flexible payment options to make it easier for patients.",
  },
  {
    title: " Gentle & Stress-Free Experience",
    description:
      "What truly sets AO Dentistry apart is its patient-centric approach. Every patient receives personalized care based on their specific needs. Our dentists take the time to understand your concerns, explain procedures, and ensure you're comfortable throughout.",
  },
  {
    title: " Complete Pre & Post Care Support ",
    description:
      "From consultation to aftercare guidance, we provide end-to-end support to ensure proper healing and prevent complications.  ",
  },
  {
    title: " Expertise in Wisdom Tooth Removal",
    description:
      "We specialize in removing impacted and partially erupted wisdom teeth with precision and care. ",
  },
  {
    title: "Hygienic & Safe Environment",
    description:
      "We follow strict sterilization and infection control protocols to maintain a clean and safe dental setting.",
  },
  {
    title: " Easy Accessibility in Kharadi ",
    description:
      "Conveniently located in Kharadi, Pune, Denza Dental is easily accessible for patients looking for reliable tooth extraction services nearby.",
  },
];

const services = [
  {
    title: "Comprehensive Dental Evaluation ",
    description:
      "Your visit begins with a detailed oral examination and digital X-rays to assess the condition of the tooth and surrounding structures. This helps us plan a safe and effective extraction.",
  },
  {
    title: "Personal Consultation & Treatment Planning ",
    description:
      "We review your medical history, understand your concerns, and explain the recommended extraction method along with the recovery expectations.",
  },
  {
    title: "Ensuring Comfort with Anesthesia ",
    description:
      "Before starting the procedure, the area is numbed using local anesthesia. For more complex cases, additional sedation options may be considered for a relaxed experience. ",
  },
  {
    title: "Clinical Setup & Safety Preparation ",
    description:
      "Our team follows strict sterilization protocols and prepares all necessary instruments to ensure a clean and safe procedure.",
  },
  {
    title: "Gentle Tooth Removal Procedure",
    description:
      "Depending on your case, the tooth is carefully loosened and removed. For impacted or complex cases, a minor surgical approach may be used for precise extraction.  ",
  },
  {
    title: "Post-Extraction Care & Recovery Support ",
    description:
      "After the procedure, we provide clear aftercare instructions to promote healing. Follow-up guidance ensures a smooth recovery and helps prevent complications.",
  },
];

const faqs = [
  {
    question: "How do I know if I need a tooth extraction?  ",
    answer:
      "Severe decay, infection, broken teeth, or impacted wisdom teeth are common reasons a dentist may recommend extraction after clinical and X-ray evaluation.",
  },
  {
    question: "Is tooth extraction a safe procedure? ",
    answer:
      "Yes, tooth extraction is a safe and commonly performed dental procedure when done by experienced dentists using proper techniques and sterilization protocols.  ",
  },
  {
    question: "How long does recovery take after tooth extraction?",
    answer:
      "Initial healing usually takes a few days, while complete recovery of the extraction site may take 1–3 weeks depending on the case. ",
  },
  {
    question: "Can I go to work after a tooth extraction?",
    answer:
      "Most patients can resume normal activities within a day, but it is recommended to rest for at least 24 hours after the procedure.  ",
  },
  {
    question: "What should I avoid after tooth extraction? ",
    answer:
      "You should avoid smoking, drinking through a straw, hard foods, and vigorous rinsing for the first 24–48 hours to ensure proper healing.",
  },
  {
    question: "Do all tooth extractions require stitches?",
    answer:
      "No, stitches are only needed in surgical or complex extractions. Simple extractions usually do not require sutures. ",
  },
];

const ToothExtraction = () => {
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
          Tooth Extraction in Kharadi, Pune | Denza
          Dental Center
        </title>
        <meta
          name="description"
          content="Get tooth extraction in Kharadi, 
Pune at Denza Dental Center. We provide simple 
and surgical tooth extraction, including wisdom 
tooth removal, with personalized treatment 
planning and aftercare."
        />

        <link
          rel="canonical"
          href="https://denzadental.com/tooth-extraction"
        />

        <meta
          name="keywords"
          content=" 
tooth extraction Kharadi, 
tooth extraction Pune, 
tooth removal Kharadi, 
tooth removal Pune, 
dental extraction Kharadi, 
dental extraction Pune, 
tooth extraction dentist Kharadi, 
tooth extraction clinic Kharadi, 
tooth extraction near Kharadi, 
tooth extraction near me Kharadi, 
tooth removal dentist Pune, 
simple tooth extraction Kharadi, 
surgical tooth extraction Kharadi, 
surgical tooth extraction Pune, 
wisdom tooth removal Kharadi, 
wisdom tooth extraction Kharadi, 
wisdom tooth removal Pune, 
impacted wisdom tooth removal Kharadi, 
impacted tooth extraction Pune, 
broken tooth extraction Kharadi, 
damaged tooth removal Pune, 
decayed tooth extraction Kharadi, 
dental extraction cost Kharadi, 
tooth extraction cost Pune, 
tooth removal cost Kharadi, 
surgical extraction cost Pune, 
tooth extraction recovery Kharadi, 
tooth extraction aftercare Pune, 
dentist Kharadi Pune, 
dental clinic Kharadi Pune, 
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
          content="Tooth Extraction in Kharadi, Pune | 
Denza Dental Center"
        />
        <meta
          property="og:description"
          content="Simple and surgical tooth extraction 
in Kharadi, Pune at Denza Dental Center, 
including wisdom tooth removal and personalized 
post-extraction care."
        />
        <meta
          property="og:url"
          content="https://denzadental.com/tooth-extraction
"
        />
        <meta
          property="og:image"
          content="https://denzadental.com/og-image.jpg"
        />
        <meta
          property="og:image:alt"
          content="Tooth extraction at Denza Dental 
Center in Kharadi, Pune"
        />
        <meta
          property="og:locale"
          content="en_IN"
        />
      </Helmet>
      <PageTop title="Tooth Extraction Services" />

      <div className="second_section">
        <div className="second_section_container">
          <div className="second_section_header">
            <h2>
              Best Dental Clinic for Tooth Extraction in Kharadi, Pune – Denza
              Dental{" "}
            </h2>
            <p>
              When it comes to safe and comfortable tooth extraction in Kharadi,
              Pune, Denza Dental is a trusted choice for patients seeking expert
              care and modern treatment solutions. Here’s what makes us stand
              out:
            </p>
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

      <div className="dental_checkup_sec parent" style={{ background: "white" }}>
        <div className="dental_checkup_sec_cont cont" data-aos="fade-up">
          <div className="dental_checkup_sec_left">
            <h2>Types of Tooth Extraction </h2>

            <ol>
              <li>
                <strong>Simple Tooth Extraction :</strong> This procedure is
                done when the tooth is clearly visible in the mouth. After
                numbing the area, the dentist gently loosens and removes the
                tooth. It is commonly recommended for decayed, damaged, or
                overcrowded teeth.
              </li>
              <li>
                <strong>Surgical Tooth Extraction :</strong>This is a more
                advanced procedure used for teeth that are not easily
                accessible, such as impacted wisdom teeth or broken teeth below
                the gum line. It involves a minor incision and is performed with
                precision for safe removal.
              </li>
            </ol>
          </div>

          <div className="dental_checkup_sec_right">
            <img src={apointment} alt="Dental Appointment " />
          </div>
        </div>
      </div>

      <div className="third_section">
        <div className="third_header">
          <h2>Tooth Extraction Process at Denza Dental in Kharadi, Pune </h2>
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

      <div className="parent second_parent">
        <div className="cont second_cont">
          <div className="general_left">
            <img src={img1} alt="General Dental Service" />
          </div>
          <div className="general_right">
            <h2> Aftercare and Recovery of Tooth Extraction</h2>
            <h3>Healing Time After Tooth Extraction</h3>
            <p>
              Initial recovery usually takes 2–3 days, with reduced pain and swelling.
              Complete healing of the extraction site typically occurs within 1–3 weeks,
              depending on the case.
            </p>

            <p style={{ fontWeight: "bold", color: "var(--accent" }}>
              Aftercare Tips for Tooth Extraction{" "}
            </p>

            <ul style={{ paddingLeft: "20px" }}>
              <li>
                <b>Control Bleeding </b>Mild bleeding is normal after extraction. Bite gently on the gauze provided to
                help stop it.

              </li>
              <li>
                <b>Reduce Swelling </b>Apply an ice pack on the outside of your cheek in intervals to minimize swelling.
              </li>

              <li>
                <b>Manage Discomfort </b>Take prescribed medications as advised by your dentist to control pain
                effectively.
              </li>

              <li>
                <b>Maintain Oral Hygiene </b>Avoid brushing near the extraction site for the first 24 hours. After that, clean
                gently using a soft-bristled toothbrush.
              </li>

              <li>
                <b>Salt Water Rinse </b>Start rinsing with warm salt water after 24 hours to keep the area clean and
                promote healing.
              </li>

              <li>
                <b>Follow a Soft Diet </b>Eat soft foods and avoid hot, spicy, or hard items that may irritate the area.
              </li>

              <li>
                <b>Stay Hydrated & Rest Well </b>Drink plenty of fluids and avoid strenuous activities for at least 24 hours to
                support recovery.
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

export default ToothExtraction;
