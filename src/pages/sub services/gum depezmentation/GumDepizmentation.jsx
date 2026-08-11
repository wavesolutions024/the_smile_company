import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./GumDepizmentation.scss";
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

const services = [
  {
    title: "Comfortable Start",
    description:
      "We apply a numbing gel to ensure a pain-free and relaxed experience.",
  },
  {
    title: "Gum Preparation",
    description:
      "Your gums are thoroughly cleaned to create a healthy base for treatment. ",
  },
  {
    title: "Laser Treatment ",
    description:
      "Advanced laser technology gently removes dark pigmentation, revealing a natural pink tone. ",
  },
  {
    title: "Aftercare Guidance",
    description:
      "You receive simple instructions on diet, oral care, and healing for the best results.",
  },

];

const faqs = [
  {
    question: "How do you treat gum depigmentation?",
    answer:
      "At Denza Dental, we use advanced laser technology to gently remove dark pigmentation from the gums, revealing a healthy pink appearance—without cuts or stitches. ",
  },
  {
    question: " Is gum depigmentation safe?",
    answer:
      "Yes, gum depigmentation is a safe and commonly performed cosmetic procedure when done by experienced dental professionals using modern laser techniques. ",
  },
  {
    question: " What is the cost of gum depigmentation in Kharadi, Pune?",
    answer:
      "The cost usually ranges between ₹5,000 to ₹15,000, depending on the extent of pigmentation and treatment required.",
  },
  {
    question: "Can gums return to their original color after treatment? ",
    answer:
      "Results are long-lasting, but slight repigmentation can occur over time in some cases, especially due to genetics or lifestyle habits like smoking. ",
  },
  {
    question: "Is gum pigmentation normal? ",
    answer:
      "Yes, dark gums are completely normal and often caused by melanin levels, genetics, or external factors like smoking. ",
  },
  {
    question: "Can gums be lightened naturally? ",
    answer:
      "Natural methods have limited effect. Professional treatments like laser gum depigmentation provide the most effective and noticeable results. ",
  },

];

const GumDepizmentation = () => {
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
      <PageTop title=" Gum Depigmentation Services" />

      <div className="book_appoint">
        <div className="book_appoint_container" data-aos="fade-up">
          <div className="book_appoint_text">
            <h2>What is Gum Depigmentation?</h2>
            <p>
              Gum depigmentation eradicates dark spots from gums using laser technology. This
              procedure lightens dark gums by targeting excess melanin deposits. The treatment
              creates natural-looking pink gums in one visit. Our gum-bleaching techniques restore
              confidence in your smile.
            </p>

          </div>

          <div className="book_appoint_side red_background">
            <img src={apointment} alt="Dental Appointment " style={{objectFit:"cover"}} />
          </div>
        </div>
      </div>

      <div className="teeth_cleaning_parent parent">
        <div className="teeth_cleaning_cont cont">
          <h2>Best Dental Clinic for Gum Depigmentation in Kharadi, Pune | Denza Dental  </h2>

          <p>
            Looking for gum depigmentation near you in Kharadi, Pune? At Denza Dental, we
            specialize in advanced laser gum depigmentation treatments that restore the natural
            pink appearance of your gums.
          </p>

          <p>
            Step into a modern, comfortable clinic designed to deliver high-quality dental care. Our
            experienced team combines expertise with the latest technology to ensure safe,
            effective, and long-lasting results.
          </p>
        </div>
      </div>

      <div className="after_care_parent parent">
        <div className="after_care_cont cont">
          <h2>Why Choose Denza Dental for Gum Depigmentation?</h2>

          <ul>
            <li>Advanced Laser Technology for precise and effective gum bleaching </li>
            <li>Experienced Dental Team with years of expertise in cosmetic dentistry</li>
            <li>Personalized Treatment Plans tailored to your unique smile goals</li>
            <li>Transparent Pricing with no hidden costs</li>
            <li>High Standards of Sterilization for complete safety </li>
            <li>Digital Imaging Systems for accurate diagnosis and planning</li>
            <li>Flexible Appointments to suit your schedule</li>
            <li>Comfort-Focused Care in a relaxing, patient-friendly environment</li>
          </ul>

          <p>
            At Denza Dental, every gum depigmentation treatment follows global standards,
            ensuring optimal results with maximum comfort.
          </p>

          <p>
            Your search for the best gum depigmentation in Kharadi, Pune ends here—experience
            expert care and confident smiles at Denza Dental.
          </p>
        </div>
      </div>

      <div className="book_appoint parent" style={{ background: "white" }}>
        <div className="book_appoint_container" data-aos="fade-up">
          <div className="book_appoint_side red_background">
            <img src={apointment} alt="Dental Appointment " />
          </div>

          <div className="book_appoint_text">
            <h2>Who Can Get Gum Depigmentation at Denza Dental?</h2>
            <p>
              Gum depigmentation is ideal for people with healthy gums who want to improve dark or
              uneven gum color.
            </p>

            <p>Common Causes of Dark Gums</p>

            <ol>
              <li>Genetics</li>
              <li> Smoking or lifestyle habits </li>
              <li>Certain medications </li>
              <li>Hormonal changes </li>
            </ol>

            <p>Before Treatment, We Check:</p>

            <ol>
              <li>Gum health and thickness</li>
              <li>Tooth and root position </li>
              <li>Medical history</li>
              <li>Healing capacity </li>
            </ol>

          </div>
        </div>
      </div>


      <div className="third_section">
        <div className="third_header">
          <h2>Gum Depigmentation Procedure at Denza Dental, Kharadi </h2>
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
          <h2>Laser vs Manual Gum Depigmentation – Which is Better? </h2>

          <p>
            Laser gum depigmentation is generally the preferred choice due to its precision 
and comfort compared to manual methods.
          </p>
          <p>Benefits of Laser Gum Depigmentation</p>

          <ul>
            <li>
              <b>Less Bleeding </b>– Minimally invasive technique 
            </li>

            <li>
              <b>Faster Healing </b>– Quicker recovery time
            </li>

            <li>
              <b>High Precision </b>– Targets pigmentation accurately
            </li>

            <li>
              <b>Minimal Discomfort </b>– More comfortable procedure 
            </li>

            <li>
              <b>Better Gum Contours </b>– Smoother, natural-looking results 
            </li>

            <li>
              <b>Predictable Outcomes </b>– Consistent and reliable results
            </li>

            <li>
              <b>Shorter Treatment Time </b>– Efficient and quick procedure
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

export default GumDepizmentation;
