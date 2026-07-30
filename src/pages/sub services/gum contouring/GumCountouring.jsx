import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./GumCountouring.scss";
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
    title: "Consultation & Evaluation",
    description:
      "We begin with a detailed examination of your gums and teeth. Digital scans or X-rays may be used to assess your gum structure. Based on your needs, we create a personalized treatment plan and clearly explain the procedure and costs. ",
  },
  {
    title: "Comfortable & Precise Treatment ",
    description:
      "Your comfort is our priority. The treatment area is numbed before starting. We use advanced laser technology to gently reshape your gum line with high precision, minimal bleeding, and quicker healing compared to traditional methods.",
  },
  {
    title: "Recovery & Aftercare ",
    description:
      "After the procedure, you’ll receive easy-to-follow aftercare instructions. If needed, medications are prescribed to support healing. We also schedule follow-up visits to monitor your recovery and ensure optimal results.",
  },
];

const faqs = [
  {
    question: "Can a gummy smile be corrected? ",
    answer:
      "Yes, a gummy smile can be effectively treated with laser gum contouring at Denza Dental. The procedure removes excess gum tissue to reveal more of your natural teeth and create a balanced smile.",
  },
  {
    question: "How long does gum contouring last?",
    answer:
      "Gum contouring results are usually permanent, as the reshaped gum tissue does not grow back in most cases.",
  },
  {
    question: "What is the cost of gummy smile correction in Kharadi, Pune? ",
    answer:
      "The cost typically ranges between ₹5,000 to ₹20,000, depending on the extent of treatment and complexity of your case.",
  },
  {
    question: "Are gummy smiles considered unattractive?",
    answer:
      "Beauty is subjective, but many people choose gum contouring to achieve a more balanced and proportionate smile that enhances facial aesthetics.",
  },
  {
    question: "Can a gummy smile be fixed naturally?",
    answer:
      "Natural methods have limited impact. Effective correction usually requires professional dental treatments like gum contouring or orthodontics.",
  },
  {
    question: "Is gum contouring painful? ",
    answer:
      "No, the procedure is generally painless as local anesthesia is used. You may feel slight discomfort after the treatment, which subsides quickly.",
  },
  {
    question: "Is gum contouring safe? ",
    answer:
      "Yes, gum contouring is a safe and commonly performed procedure when done by experienced dental professionals using modern techniques like lasers.",
  },
];

const GumCountouring = () => {
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
      <PageTop title="Gum Contouring" />

      <div className="brace_treat_parent parent">
        <div className="brace_treat_cont cont">
          <h2>Braces Treatment in Kharadi, Pune | Denza Dental </h2>
          <div>
            <p>
              Looking for gum contouring near you in Kharadi, Pune? At Denza Dental, we
              offer advanced and precise gum contouring treatments to enhance your smile
              right in your neighborhood.
            </p>

            <p>
              <strong>Transform Your Smile with Expert Care</strong>Uneven or excess gum tissue can affect the way your smile looks. At Denza
              Dental, we help reshape your gum line to create a more balanced, attractive
              appearance. Our experienced dental team focuses on delivering natural-looking
              results that complement your teeth and facial features.
            </p>

            <p>
              <strong>Trusted Gum Contouring Clinic in Kharadi</strong>Conveniently located in Kharadi, we welcome patients from across Pune and
              beyond who are looking for safe, effective, and affordable smile enhancement
              treatments.
            </p>

            <p>
              Your search for the best gum contouring in Kharadi, Pune ends here at Denza
              Dental—where precision meets personalized care.
            </p>
          </div>
        </div>
      </div>

      <div className="parent second_parent">
        <div className="cont second_cont">
          <div className="general_left">
            <img src={img1} alt="General Dental Service" />
          </div>
          <div className="general_right">
            <h2>What is Gum Contouring?</h2>
            <p>
              Gum contouring is a cosmetic dental procedure that reshapes your gum line to improve
              the overall appearance of your smile. At Denza Dental, we design your gum line to
              create a balanced and harmonious look that complements your teeth.
            </p>

            <p style={{ fontWeight: "bold", color: "var(--accent" }}>
              What Can Gum Contouring Fix?{" "}
            </p>

            <ul style={{ paddingLeft: "20px" }}>
              <li>
                Excess gum display (commonly known as a “gummy smile”)
              </li>
              <li>
                Uneven or irregular gum lines
              </li>
              <li>
                Gums that appear too high or too low on teeth
              </li>
              <li>
                Thick or bulky gum tissue affecting smile aesthetics
              </li>

            </ul>
          </div>
        </div>
      </div>

      <div className="third_section">
        <div className="third_header">
          <h2>Gum Contouring Procedure at Denza Dental, Kharadi</h2>
          <p>
            Understanding the gum contouring process helps you feel confident about your
            treatment. Here’s what your journey at Denza Dental looks like:
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
          <h2>How long does it take for recovery?</h2>

          <ul>
            <li>Gum contouring treatment recovery may take around 7-10 days. </li>
            <li>During this time: </li>
            <li>Eat soft, cool foods</li>
            <li>Avoid spicy or acidic items</li>
            <li>Maintain oral hygiene </li>
            <li>Take prescribed medications </li>
            <li>Follow dentist instructions</li>
          </ul>
        </div>
      </div>

      <div className="parent braces_treat_parent">
        <div className="cont braces_treat_cont">
          <div className="braces_treat_right">
            <h2>Benefits & Risks of Gum Contouring at Denza Dental</h2>
            

            <p style={{ fontWeight: "bold", color: "var(--accent" }}>
              Benefits of Gum Contouring 
            </p>

            <ul>
              <li>
                <b>Balanced Smile </b>– Improves gum proportions and tooth visibility 
              </li>
              <li>
                <b>Boosts Confidence </b>– Helps you smile and interact more freely 
              </li>
              <li>
                <b>Better Oral Hygiene </b>– Easier cleaning and maintenance 
              </li>
              <li>
                <b>Long-Lasting Results </b>– Permanent improvement in most cases
              </li>
              <li>
                <b>Quick Recovery </b>– Resume routine in 1–2 days
              </li>
            </ul>

            <p style={{ fontWeight: "bold", color: "var(--accent" }}>
              Risks of Gum Contouring 
            </p>

            <ul>
              <li>
                <b>Temporary Sensitivity </b>– Mild reaction to hot/cold foods 
              </li>

              <li>
                <b>Swelling </b>– Usually settles within a few days 
              </li>

              <li>
                <b>Low Risk of Infection </b>– Managed with proper care 
              </li>

              <li>
                <b>Short-Term Adjustment </b>– Minor changes in eating/speaking during healing
              </li>
            </ul>
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

export default GumCountouring;
