import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./SmileDesigning.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import img1 from "../../../assets/general_service/img.webp";
import gallery1 from "../../../assets/about_page/after1.webp";
import apointment from "../../../assets/aapointment.webp";
import PageTop from "../../../comp/page_top/PageTop";


const whyChooseData = [
  {
    icon: "👨‍⚕️",
    title: "Precision-Driven Expertise",
    description:
      "Our team combines clinical expertise with advanced smile designing techniques to deliver accurate, long-lasting results tailored to each patient. ",
  },
  {
    icon: "🦷",
    title: "Customized Smile Solutions ",
    description:
      "Every smile is unique, which is why we create personalized treatment plans that align with your facial features, dental structure, and aesthetic goals. ",
  },
  {
    icon: "💰",
    title: "Advanced Digital Technology",
    description:
      "We use modern tools like 3D imaging and digital scanning to ensure precise planning and predictable, high-quality outcomes.",
  },
  {
    icon: "😊",
    title: "Patient-Centric Experience ",
    description:
      "From consultation to final results, we ensure a smooth, transparent, and comfortable journey, guiding you at every step of your smile transformation. ",
  },
];

const services = [
  {
    title: "Teeth Whitening ",
    description:
      "Professional whitening treatments help remove deep stains and discoloration, improving the brightness of your smile with safe and effective methods. ",
  },
  {
    title: "Porcelain Veneers ",
    description:
      "Thin, custom-made shells are placed over the front surface of teeth to correct gaps, discoloration, and minor alignment issues, delivering a natural appearance.  ",
  },
  {
    title: "Dental Bonding",
    description:
      "A tooth-colored resin is applied to repair chips, close small gaps, and improve the shape of teeth, offering a quick and minimally invasive solution.",
  },
  {
    title: "Dental Implants ",
    description:
      "Implants replace missing teeth by acting as artificial roots, providing strong support for crowns and restoring both function and appearance.",
  },
  {
    title: " Gum Contouring",
    description:
      "This procedure reshapes uneven gum lines, enhancing the balance between teeth and gums for a more symmetrical smile.  ",
  },
  {
    title: "Clear Aligners (Invisalign)  ",
    description:
      "Transparent aligners gradually straighten teeth without the need for metal braces, offering a comfortable and discreet orthodontic solution.  ",
  },
  {
    title: "Facial Harmony  ",
    description:
      "Smile designing considers overall facial features such as the eyes, lips, and jawline to create a well-balanced and aesthetically pleasing result.  ",
  },
  {
    title: " Smile Line Enhancement",
    description:
      "The alignment of upper teeth with the curve of the lower lip is refined to achieve a natural and attractive smile while speaking and smiling. ",
  },
];

const faqs = [
  {
    question: "What does smile designing include? ",
    answer:
      "Smile designing involves a combination of cosmetic and restorative treatments aimed at improving the appearance, alignment, and overall balance of your smile. ",
  },
  {
    question: "Who is a good candidate for smile designing?",
    answer:
      " Anyone with concerns like stained, uneven, chipped, or misaligned teeth can benefit from a customized smile designing plan.",
  },
  {
    question: "How long does a smile designing treatment take?  ",
    answer:
      "The duration varies depending on the procedures involved, ranging from a single visit for minor enhancements to multiple visits for complete smile makeovers.",
  },
  {
    question: "Will smile designing look natural?",
    answer:
      "Yes, treatments are carefully planned to match your facial features, ensuring results that look natural and enhance your overall appearance.  ",
  },
  {
    question: "Is there any downtime after smile designing procedures?",
    answer:
      "Most cosmetic treatments involve minimal to no downtime, allowing you to return to your daily routine quickly. ",
  },

];

const SmileDesigning = () => {
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
      <PageTop title="Smile Designing Services" />

      <div className="second_section">
        <div className="second_section_container">
          <div className="second_section_header">
            <h2>Advanced Smile Designing Clinic in Pune</h2>
            <p>
              At Denza Dental, we are dedicated to creating confident, natural-looking smiles through
              advanced smile designing solutions. Our focus on precision, aesthetics, and patient
              satisfaction has made us a trusted choice for smile transformations in Pune.
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
          <h2>Tips for Smile Design Treatment </h2>

          <ul>
            <li>
              <b>Consult a Professional: </b>In all cases, careful consultation with the dentist is required to
              agree upon the goals and design an individualized protocol.
            </li>

            <li>
              <b>Follow Post-Treatment Care: </b> Obey your dentist’s instructions in aftercare, so that your
              smile design results can be sustained.
            </li>

            <li>
              <b>Maintain Oral Hygiene: </b>It is also extremely important to keep your healthy smile, so that,
              through brushing and flossing plus checkups, it continues to stay that way.
            </li>

            <li>
              <b>Avoid Staining Foods: </b>Do not drink coffee, tea, or tobacco to keep that of your smile
              white. Features of Smile Designing
            </li>

          </ul>
        </div>
      </div>


      <div className="third_section">
        <div className="third_header">
          <h2>Key Features of Smile Designing</h2>
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

export default SmileDesigning;
