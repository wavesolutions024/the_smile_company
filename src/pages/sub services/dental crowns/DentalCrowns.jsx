import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./DentalCrowns.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import img1 from "../../../assets/general_service/img.webp";
import gallery1 from "../../../assets/about_page/after1.webp";
import apointment from "../../../assets/aapointment.webp";
import PageTop from "../../../comp/page_top/PageTop";
import { Helmet } from "react-helmet";

const whyChooseData = [
  {
    icon: "👨‍⚕️",
    title: "Highly Experienced Dental Team ",
    description:
      "At Denza Dental, our dentists bring years of hands-on experience in dental crown treatments, ensuring precise fitting and natural-looking results for every patient. ",
  },
  {
    icon: "🦷",
    title: "Premium Crown Materials",
    description:
      "We use top-quality materials like porcelain and zirconia to create crowns that are strong, long-lasting, and blend perfectly with your natural teeth.",
  },
  {
    icon: "💰",
    title: "Modern Digital Dentistry ",
    description:
      "With advanced CAD/CAM technology and digital scanning, we provide accurate, efficient treatments, including same-day crown solutions in many cases.",
  },
  {
    icon: "😊",
    title: "Proven Patient Satisfaction",
    description:
      "Denza Dental is trusted by many patients in Pune for consistent results and dependable dental care, especially for crown treatments.",
  },
  {
    icon: "😊",
    title: "Ongoing Care & Support",
    description:
      "We guide you even after the procedure with proper aftercare and follow-ups to ensure your crown stays in excellent condition.",
  },
  {
    icon: "😊",
    title: "Comfort-Focused Experience",
    description:
      "From consultation to treatment, we ensure a smooth and stress-free experience in a calm and patient-friendly environment.",
  },
  {
    icon: "😊",
    title: "Expert Care with Global Exposure",
    description:
      "At Denza Dental, your treatment is handled by dentists with international exposure, ensuring advanced techniques and globally accepted standards of care. This results in precise, effective procedures focused on preserving your natural tooth and long-term oral health. With a blend of expertise and modern technology, you receive care that reflects true international quality.",
  },
];

const services = [
  {
    title: "Porcelain Crowns ",
    description:
      "Porcelain crowns are a great choice for front teeth as they closely match the natural color and appearance of your smile. They offer excellent aesthetics but may not be as strong as other materials.",
  },
  {
    title: "Porcelain-Fused-to-Metal (PFM) Crowns",
    description:
      "PFM crowns combine the strength of metal with the natural look of porcelain. They are suitable for both front and back teeth, offering a balance of durability and appearance.",
  },
  {
    title: "Metal Crowns ",
    description:
      "Metal crowns are extremely strong and long-lasting, making them ideal for back teeth where chewing pressure is high. However, they are less preferred for visible areas due to their metallic appearance. ",
  },
  {
    title: "Zirconia Crowns ",
    description:
      "Zirconia crowns are highly durable and provide a natural look. They are a popular choice for both front and back teeth due to their strength and aesthetics.",
  },
  {
    title: "E-Max Crowns ",
    description:
      "E-Max crowns are known for their superior strength and lifelike translucency. They are especially suitable for front teeth where appearance is important. ",
  },
  {
    title: "Composite Resin Crowns ",
    description:
      "These crowns are more affordable and are typically used as a temporary solution or for areas with less stress. They provide decent aesthetics but may wear down faster.",
  },
  {
    title: "Stainless Steel Crowns",
    description:
      "Commonly used in pediatric dentistry, stainless steel crowns are durable, cost-effective, and ideal for protecting children’s teeth.",
  },
];

const faqs = [
  {
    question: " How much do dental crowns cost at Denza Dental?  ",
    answer:
      " Dental crown costs at Denza Dental depend on the type of crown selected and the condition of your tooth. A detailed estimate is provided after a consultation and examination. ",
  },
  {
    question: " Which type of dental crown is best for me? ",
    answer:
      "The best crown depends on your needs. At Denza Dental, zirconia and E-Max crowns are popular for their strength and natural look, while other options may be recommended based on the tooth’s location and function. ",
  },
  {
    question: " How long do dental crowns last? ",
    answer:
      " With proper care and regular dental visits at Denza Dental, dental crowns can last anywhere from 10 to 15 years or even longer.",
  },
  {
    question: " Is getting a dental crown painful?",
    answer:
      " At Denza Dental, dental crown procedures are performed under local anesthesia, making the process comfortable and minimally painful for patients. ",
  },

];

const DentalCrowns = () => {
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
          Dental Crowns in Kharadi, Pune | Types,
          Cost & Treatment
        </title>
        <meta
          name="description"
          content="Get customized dental crowns in 
Kharadi, Pune at Denza Dental Center. Explore 
crown types, materials, treatment steps, costs, 
aftercare and crowns after root canal treatment."
        />

        <link
          rel="canonical"
          href="https://denzadental.com/dental-crowns"
        />

        <meta
          name="keywords"
          content=" 
dental crowns Kharadi, 
dental crowns Pune, 
dental crown Kharadi, 
dental crown dentist Kharadi, 
dental crown clinic Kharadi, 
dental crown treatment Pune, 
crown dentist Pune, 
zirconia crowns Kharadi, 
zirconia crowns Pune, 
porcelain crowns Pune, 
PFM crowns Pune, 
E-Max crowns Pune, 
dental crown cost Pune, 
dental crown cost Kharadi, 
dental crown price Pune, 
crown after root canal Pune, 
crown after RCT Kharadi, 
dental crown procedure Pune, 
types of dental crowns, 
tooth crown treatment Kharadi, 
dental restoration Kharadi, 
restorative dentistry Pune, 
dental crown near me, 
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
          content="Dental Crowns in Kharadi, Pune | 
Types, Cost & Treatment"
        />
        <meta
          property="og:description"
          content="Customized dental crowns in 
Kharadi, Pune at Denza Dental Center. Learn 
about crown types, materials, treatment steps, 
costs and aftercare."
        />
        <meta
          property="og:url"
          content="https://denzadental.com/dental-crowns"
        />
        <meta
          property="og:image"
          content="https://denzadental.com/og-image.jpg"
        />
        <meta
          property="og:image:alt"
          content="Dental crown treatment at Denza 
Dental Center in Kharadi, Pune"
        />
        <meta
          property="og:locale"
          content="en_IN"
        />
      </Helmet>
      <PageTop title="Dental Crowns Services" />

      <div className="second_section">
        <div className="second_section_container">
          <div className="second_section_header">
            <h2>Why Choose Denza Dental for Dental Crowns in Pune? </h2>
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

      <div className="after_care_parent parent">
        <div className="after_care_cont cont">
          <h2>When Are Dental Crowns Recommended? </h2>

          <p>Dental crowns are recommended in several scenarios where a tooth needs extra
            protection, restoration, or enhancement:
          </p>

          <ul>
            <li>Extensive decay that’s too severe for a filling.</li>
            <li>To protect a tooth with a large filling. </li>
            <li>To stabilize and reinforce damaged teeth.</li>
            <li>To protect a tooth that has had a root canal. </li>
            <li>To improve the appearance of misshapen or discolored teeth.</li>
            <li>To cover and complete the restoration of a dental implant.</li>
            <li>To anchor a bridge when replacing missing teeth.</li>
          </ul>
        </div>
      </div>

      <div className="third_section">
        <div className="third_header">
          <h2>Types of Dental Crowns  </h2>
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

      <div className="book_appoint">
        <div className="book_appoint_container" data-aos="fade-up">
          <div className="book_appoint_text">
            <h2>Advantages of Dental Crowns</h2>
            <p>
              Dental crowns offer multiple benefits when it comes to restoring and
              protecting damaged teeth. They act as a protective cover for
              weakened teeth, preventing further damage and helping maintain
              overall dental health. Crowns also restore normal chewing and biting
              function, making everyday activities more comfortable.
            </p>

            <p>
              In addition, dental crowns are highly durable and designed to
              withstand regular wear and tear. They are custom-made to match
              your natural teeth, improving the overall appearance of your smile.
              Crowns provide strength and stability to the tooth structure and
              serve as a long-term solution with proper care. They are also
              versatile and can be used in various treatments, including after root
              canal procedures or dental implants.
            </p>

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

export default DentalCrowns;
