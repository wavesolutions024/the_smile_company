import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./PediatricDentistry.scss";
import img1 from "../../../assets/general_service/img.webp";
import gallery1 from "../../../assets/about_page/after1.webp";
import PageTop from "../../../comp/page_top/PageTop";

const services = [
  {
    title: "Specialized Pediatric Care ",
    description:
      "We provide gentle and customized dental treatments designed specifically for children’s oral health needs.",
  },
  {
    title: "Child-Friendly Environment ",
    description:
      "Our clinic is designed to make children feel comfortable and relaxed, reducing dental anxiety during visits. ",
  },
  {
    title: "Experienced Dentists ",
    description:
      "Our team is skilled in handling kids with a soft, patient, and friendly approach to ensure a positive dental experience. ",
  },
  {
    title: "Advanced Technology",
    description:
      "We use modern dental equipment to provide safe, precise, and effective pediatric treatments. ",
  },
  {
    title: "Preventive Focus ",
    description:
      "We strongly emphasize prevention, helping children develop healthy oral habits early in life. ",
  },
  {
    title: "Personalized Treatment Plans ",
    description:
      "Every child receives a tailored treatment plan based on their dental condition and individual needs.",
  },
  {
    title: "Patient & Parent Education ",
    description:
      "We guide parents and children on proper oral hygiene practices for long-term dental health. ",
  },
  {
    title: "Compassionate Care ",
    description:
      "Our team ensures a supportive, caring, and stress-free environment for every child visit.  ",
  },
];

const faqs = [
  {
    question: "How do I choose a dentist for my child?  ",
    answer:
      "Choose a pediatric dentist who is experienced in treating children, offers a child-friendly environment, and communicates well with both parent and child. Reviews, recommendations, and clinic atmosphere also matter. ",
  },
  {
    question: "Should a 5-year-old go to the dentist? ",
    answer:
      "Yes. Children should have regular dental visits by age 5, or earlier if any issues appear, to ensure proper oral health development. ",
  },
  {
    question: "How often should my child visit the dentist?  ",
    answer:
      "Every 6 months is recommended for routine check-ups, cleaning, and preventive care.",
  },
  {
    question:
      "Are pediatric dentists trained to handle children with special needs?",
    answer:
      "Yes. Pediatric dentists are specially trained to manage children with physical, developmental, or behavioral needs using gentle and customized approaches. ",
  },
  {
    question: "What age should my child first see a pediatric dentist?",
    answer:
      "A  child should visit the dentist by age 1 or within 6 months of the first tooth erupting, whichever comes first. ",
  },
];

const PediatricDentistry = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      <PageTop title="Pediatric Dentistry Services" />

      <div className="parent second_parent">
        <div className="cont second_cont">
          <div className="general_left">
            <img src={img1} alt="Full Mouth Rehabilitation" />
          </div>
          <div className="general_right">
            <h2>
              Common Pediatric Dental Issues & Prevention – Denza Dental,
              Kharadi (Pune)
            </h2>
            <ul>
              Neonatal Teeth
              <li>
                Teeth present at birth may irritate the tongue or affect
                feeding.
              </li>
              <li>
                Prevention: Infant dental check-ups and gentle gum cleaning
                after feeding.{" "}
              </li>
            </ul>

            <ul>
              Nursing Bottle Caries
              <li>Decay caused by prolonged exposure to sugary bottles.</li>
              <li>
                Prevention: Avoid sleeping with bottles and stop bottle use by
                12–18 months.
              </li>
            </ul>

            <ul>
              Decayed Teeth (Cavities)
              <li>Caused by plaque and sugar buildup. </li>
              <li>
                Prevention: Regular brushing, flossing, fluoride use, and dental
                visits.
              </li>
            </ul>

            <ul>
              Pain & Sensitivity
              <li>Due to cavities, enamel wear, or gum issues. </li>
              <li>
                Prevention: Good oral hygiene and early treatment of discomfort.
              </li>
            </ul>

            <ul>
              Gum Boils (Abscesses)
              <li>Infection-related pus formation from untreated decay. </li>
              <li>Prevention: Maintain hygiene and seek prompt dental care.</li>
            </ul>

            <ul>
              Tooth Extraction
              <li>Required in severe decay or damage cases. </li>
              <li>
                Prevention: Regular check-ups and early treatment reduce the
                need for extraction.
              </li>
            </ul>

            <ul>
              Space Issues (Space Maintainers Needed)
              <li>
                Occurs when baby teeth fall out early, affecting alignment.{" "}
              </li>
              <li>
                Prevention: Timely cavity treatment and dental monitoring after
                tooth loss.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* <div
        className="parent second_parent"
        style={{ background: "var(--background)" }}
      >
        <div className="cont second_cont">
          <div className="general_right">
            <h2>
              Benefits of Dentures for Missing Teeth at Denza Dental, Kharadi
              (Pune)
            </h2>
            <ul>
              <li>
                <b>Restored Function:</b> Improves chewing ability and speech
                clarity
              </li>
            </ul>

            <ul>
              <li>
                <b>Natural Appearance :</b>
                Restores a confident and aesthetic smile
              </li>
            </ul>

            <ul>
              <li>
                <b>Facial Support:</b> Maintains facial structure and prevents a
                sunken look
              </li>
            </ul>

            <ul>
              <li>
                <b>Better Oral Health:</b> Helps prevent shifting of remaining
                teeth and supports gum health
              </li>
            </ul>
            <ul>
              <li>
                <b>Cost-Effective Solution:</b> More affordable compared to
                dental implants
              </li>
            </ul>
            <ul>
              <li>
                <b>Custom Fit Options:</b> Designed to suit individual comfort
                and needs
              </li>
            </ul>
            <ul>
              <li>
                <b>Easy Maintenance :</b> Removable and simple to clean for
                better hygiene
              </li>
            </ul>
            <ul>
              <li>
                <b>Improved Oral Hygiene :</b> Helps reduce risk of infection
                and supports overall oral health
              </li>
            </ul>
            <ul>
              <li>
                <b>Quick Results :</b>Immediate improvement with options like
                temporary dentures
              </li>
            </ul>
          </div>
          <div className="general_left">
            <img src={img1} alt="Full Mouth Rehabilitation" />
          </div>
        </div>
      </div> */}

      <div className="third_section" style={{ background: "var(--white)" }}>
        <div className="third_header">
          <h2 style={{ textAlign: "center", color: "var(--accent)" }}>
            Why Choose Denza Dental for Pediatric Dentistry in Pune?
          </h2>
        </div>

        <div className="service_cards">
          {services.map((service, index) => (
            <div
              key={index}
              className="service_card"
              style={{ background: "var(--background)" }}
            >
              <p className="service_card_index">{index + 1}.</p>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="equipment_parent parent">
        <div className="equipment_cont cont">
          <h2>Pediatric Services Offered at Denza Dental, Kharadi (Pune)</h2>
          <div className="equipment_list">
            <ul>
              <li>
                <b>General Pediatric Dentistry :</b> We provide routine dental
                exams, professional cleaning, and cavity management to support
                overall oral health in children.
              </li>
            </ul>

            <ul>
              <li>
                <b>Pediatric Orthodontics:</b> Early evaluation and treatment
                for alignment issues such as crooked teeth, crowding, and bite
                problems using braces or aligners when needed.
              </li>
            </ul>

            <ul>
              <li>
                <b>Dental Emergencies :</b> Immediate care for urgent dental
                issues like tooth pain, broken teeth, knocked-out teeth, and
                oral injuries.
              </li>
            </ul>

            <ul>
              <li>
                <b>Sports Dentistry & Mouthguards :</b>Custom-fitted mouthguards
                to protect children’s teeth during sports and manage
                sports-related dental injuries.
              </li>
            </ul>

            <ul>
              <li>
                <b>Dentistry for Children with Special Needs :</b>Specialized
                care for children with physical, developmental, or behavioral
                challenges in a calm and supportive environment, ensuring
                stress-free treatment.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="faq_section" style={{ background: "var(--white)" }}>
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
                  <div className="gallery_card">
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

export default PediatricDentistry;
