import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./CompositeBonding.scss";
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
    title: " Consultation & Smile Analysis",
    description:
      "Your journey begins with a detailed consultation where we understand your concerns and smile goals. Our dentists evaluate your teeth, explain the procedure, and create a personalized treatment plan that suits your needs and budget. ",
  },
  {
    title: "Professional Cleaning ",
    description:
      "Before the procedure, your teeth are thoroughly cleaned to remove plaque and buildup, ensuring a clean surface for effective bonding.",
  },
  {
    title: "Tooth Preparation",
    description:
      "A mild conditioning solution is applied to slightly roughen the tooth surface for better adhesion. Protective measures are taken to keep your gums safe and comfortable.",
  },
  {
    title: " Application of Composite Resin",
    description:
      "Tooth-colored composite material is applied in layers. Each layer is hardened using a special curing light to build the desired shape and structure.",
  },
  {
    title: " Shaping & Contouring ",
    description:
      "Our dentists carefully sculpt and shape the bonded material to create natural-looking teeth that align perfectly with your bite. ",
  },
  {
    title: " Polishing & Final Adjustments ",
    description:
      "The bonded teeth are polished for a smooth, glossy finish. Final bite checks ensure comfort, function, and a flawless smile.",
  },

];

const faqs = [
  {
    question: "How long does composite bonding last?",
    answer:
      "Composite bonding at Denza Dental typically lasts 5–7 years with proper care, good oral hygiene, and regular dental check-ups.",
  },
  {
    question: "What is tooth bonding? ",
    answer:
      "Tooth bonding is a cosmetic dental procedure where a tooth-colored resin is applied and shaped to improve the appearance of teeth affected by chips, gaps, stains, or minor misalignment. ",
  },
  {
    question: "What is the cost of composite bonding in Kharadi, Pune?",
    answer:
      "The cost of composite bonding at Denza Dental usually ranges between ₹3,000 to ₹8,000 per tooth, depending on the complexity of the case and the number of teeth treated.",
  },
  {
    question: "Is composite bonding painful?",
    answer:
      "No, composite bonding is a painless procedure. It is minimally invasive and usually does not require anesthesia unless used for restorative purposes.",
  },
  {
    question: "How many teeth can be treated with composite bonding?",
    answer:
      "The number of teeth depends on your smile goals. Some patients choose bonding for a single tooth, while others opt for multiple teeth for a complete smile enhancement. ",
  },
  {
    question: "Who is an ideal candidate for composite bonding?",
    answer:
      "Anyone with minor cosmetic concerns such as chipped teeth, small gaps, discoloration, or slightly uneven teeth can benefit from composite bonding.",
  },
  {
    question: "Can composite bonding be removed or reversed? ",
    answer:
      "Yes, composite bonding is generally reversible or adjustable since it involves minimal alteration of your natural teeth.",
  },

];

const CompositeBonding = () => {
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
      <PageTop title="Composite Bonding" />

      <div className="parent second_parent">
        <div className="cont second_cont">
          <div className="general_left">
            <img src={img1} alt="General Dental Service" />
          </div>
          <div className="general_right">
            <h2>What is Composite Bonding? </h2>
            <p>
              Composite bonding is a simple and effective cosmetic dental treatment that
              enhances the appearance of your teeth using a tooth-colored resin material. At
              Denza Dental, this procedure is carefully performed to give you a natural and
              aesthetically pleasing smile.
            </p>

            <p>The resin is directly applied and bonded to your teeth to correct multiple
              concerns, such as:
            </p>

            <p style={{ fontWeight: "bold", color: "var(--accent" }}>
              Common Reasons for Braces{" "}
            </p>

            <ul style={{ paddingLeft: "20px" }}>
              <li>Small chips or cracks in front teeth</li>
              <li>Gaps between teeth</li>
              <li>Stubborn stains or discoloration</li>
              <li>Minor misalignment</li>
              <li>Worn or uneven tooth edges </li>

            </ul>
          </div>
        </div>
      </div>

      <div className="parent braces_treat_parent">
        <div className="cont braces_treat_cont">
          <div className="braces_treat_right">
            <h2>Key Features of Composite Bonding at Denza Dental  </h2>


            <p style={{ fontWeight: "bold", color: "var(--accent" }}>
              Typical Duration
            </p>

            <ul>
              <li>
                <b>Quick & Efficient Treatment </b>Composite bonding is a fast procedure that often gets completed in a single visit.
                You can walk in with dental concerns and leave with a refreshed smile—no
                downtime or recovery required.
              </li>

              <li>
                <b>Minimally Invasive Approach </b>This treatment preserves your natural teeth, as little to no enamel removal is
                needed. It’s a gentle solution that keeps future dental options open while
                protecting your tooth structure.
              </li>

              <li>
                <b>Highly Versatile Solution </b>Composite bonding can address multiple concerns in one go—from chips and
                gaps to discoloration and uneven edges—making it a flexible cosmetic option.
              </li>

              <li>
                <b>Natural-Looking Results </b>The composite resin is carefully shade-matched to blend seamlessly with your
                natural teeth, ensuring a flawless and natural appearance.
              </li>

              <li>
                <b>Customized Smile Enhancement </b>Each treatment is tailored to your unique smile goals, delivering results that
                complement your facial features and overall look.
              </li>

            </ul>
          </div>

          <div className="braces_treat_left">
            <img src={img1} alt="General Dental Service" />
          </div>
        </div>
      </div>


      <div className="third_section">
        <div className="third_header">
          <h2>Composite Bonding Procedure at Denza Dental, Kharadi
            Understanding the composite bonding process helps you feel
            confident about your smile transformation. Here’s what your
            journey at Denza Dental looks like:</h2>
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

export default CompositeBonding;
