import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./DentureTreatment.scss";
import img1 from "../../../assets/general_service/img.webp";
import gallery1 from "../../../assets/about_page/after1.webp";
import PageTop from "../../../comp/page_top/PageTop";
import { Helmet } from "react-helmet";

const services = [
  {
    title: "Expert Team ",
    description:
      "ur skilled dental professionals specialize in denture treatments, ensuring accurate fit, comfort, and reliable results. ",
  },
  {
    title: "Personalized Care ",
    description:
      "We design customized denture solutions after detailed consultations to match your oral needs and facial structure. ",
  },
  {
    title: "Advanced Technology",
    description:
      "We use modern techniques and high-quality materials to create durable, comfortable, and natural-looking dentures.",
  },
  {
    title: "Comprehensive Services ",
    description:
      "From diagnosis to final fitting and follow-up care, we provide complete denture treatment under one roof. .",
  },
  {
    title: "Comfort & Natural Appearance",
    description:
      "Our dentures are designed for a secure fit, improved function, and a natural smile appearance.",
  },
  {
    title: "Patient-Centric Approach",
    description:
      "We prioritize patient comfort, clear communication, and flexible appointment scheduling. ",
  },
  {
    title: "Proven Results ",
    description:
      "Our consistent outcomes and patient satisfaction reflect our commitment to quality dental care. ",
  },
];

const faqs = [
  {
    question: "How long does it take to get dentures? ",
    answer:
      "It usually takes a few days to 2–3 weeks, depending on impressions, fittings, and adjustments.",
  },
  {
    question: "Can I eat normally with dentures?",
    answer:
      "Yes, but it may take a short adjustment period. Gradually, you can eat most foods comfortably.  ",
  },
  {
    question: "Can I sleep with my dentures in? ",
    answer:
      "It is generally recommended to remove dentures at night to allow gums to rest and maintain oral hygiene. ",
  },
  {
    question: "How often should I visit the dentist with dentures? ",
    answer:
      "Regular check-ups every 6 months are recommended for adjustments and oral health monitoring. ",
  },
  {
    question: "Can dentures be repaired if they break? ",
    answer:
      "Yes, most dentures can be repaired or relined depending on the type and extent of damage. ",
  },
];

const RestorativeDentistry = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      <Helmet>
        <title>
          Denture Treatment in Kharadi, Pune | Denza
          Dental Center
        </title>
        <meta
          name="description"
          content="Get denture treatment in Kharadi, 
Pune at Denza Dental Center. Explore complete, 
partial, immediate and implant-supported 
dentures for replacing missing teeth with 
personalized fitting and care."
        />

        <link
          rel="canonical"
          href="https://denzadental.com/denture-treatment"
        />

        <meta
          name="keywords"
          content=" 
denture treatment Kharadi, 
dentures Kharadi, 
dentures Pune, 
denture treatment Pune, 
denture dentist Kharadi, 
denture clinic Kharadi, 
dentures near Kharadi, 
dentures near me Kharadi, 
complete dentures Kharadi, 
complete dentures Pune, 
full dentures Kharadi, 
partial dentures Kharadi, 
partial dentures Pune, 
removable dentures Kharadi, 
immediate dentures Kharadi, 
immediate dentures Pune, 
implant supported dentures Kharadi, 
implant supported dentures Pune, 
fixed dentures Pune, 
teeth replacement dentures Kharadi, 
missing teeth replacement Pune, 
artificial teeth Kharadi, 
denture replacement Kharadi, 
denture repair Pune, 
denture fitting Kharadi, 
denture cost Kharadi, 
denture cost Pune, 
dentures price Kharadi, 
affordable dentures Pune, 
prosthodontic treatment Kharadi, 
prosthodontist Kharadi Pune, 
tooth replacement Kharadi, 
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
          content="Denture Treatment in Kharadi, 
Pune | Denza Dental Center"
        />
        <meta
          property="og:description"
          content="Complete, partial, immediate and 
implant-supported denture treatment at Denza 
Dental Center in Kharadi, Pune."
        />
        <meta
          property="og:url"
          content="https://denzadental.com/denture-treatme
nt"
        />
        <meta
          property="og:image"
          content="https://denzadental.com/og-image.jpg"
        />
        <meta
          property="og:image:alt"
          content="Denture treatment at Denza Dental 
Center in Kharadi, Pune"
        />
        <meta
          property="og:locale"
          content="en_IN"
        />
      </Helmet>
      <PageTop title="Denture Treatment Services" />


      {/* <div className="parent second_parent">
        <div className="cont second_cont">
          <div className="general_left">
            <img src={img1} alt="General Dental Service" />
          </div>
          <div className="general_right">
            <h2>General Dental Services</h2>
            <p>
              Just like you visit your family doctor for check-ups to stay
              healthy, similarly, general dental services are for regular care
              of your teeth. These general dental services help you catch
              problems when they are small. They also allow problems to be
              treated before they become more severe.
            </p>
          </div>
        </div>
      </div> */}

      <div className="parent second_parent">
        <div className="cont second_cont">
          <div className="general_left">
            <img src={img1} alt="Full Mouth Rehabilitation" />
          </div>
          <div className="general_right">
            <h2>Types of Dentures Offered at Denza Dental, Kharadi (Pune)</h2>
            <ul style={{ paddingLeft: "20px" }}>
              Complete Dentures
              <li>Replace all missing teeth in an upper or lower arch </li>
              <li>Removable and designed for full-mouth restoration</li>
            </ul>

            <ul style={{ paddingLeft: "20px" }}>
              Partial Dentures
              <li>Used when some natural teeth are still present</li>
              <li>Fill gaps and help maintain remaining teeth alignment</li>
            </ul>

            <ul style={{ paddingLeft: "20px" }}>
              Immediate Dentures
              <li>Placed immediately after tooth extraction </li>
              <li>
                Act as a temporary solution during healing before final
                dentures{" "}
              </li>
            </ul>

            <ul style={{ paddingLeft: "20px" }}>
              Implant-Supported Dentures
              <li>Attached to dental implants for better stability</li>
              <li>
                Provide improved comfort, function, and a secure fit compared to
                traditional dentures{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        className="parent second_parent"
        style={{ background: "var(--background)" }}
      >
        <div className="cont second_cont">
          <div className="general_right">
            <h2>
              Benefits of Dentures for Missing Teeth at Denza Dental, Kharadi
              (Pune)
            </h2>
            <ul style={{ paddingLeft: "20px" }}>
              <li>
                <b>Restored Function:</b> Improves chewing ability and speech
                clarity
              </li>
              <li>
                <b>Natural Appearance :</b>
                Restores a confident and aesthetic smile
              </li>
              <li>
                <b>Facial Support:</b> Maintains facial structure and prevents a
                sunken look
              </li>
              <li>
                <b>Better Oral Health:</b> Helps prevent shifting of remaining
                teeth and supports gum health
              </li>
              <li>
                <b>Cost-Effective Solution:</b> More affordable compared to
                dental implants
              </li>
              <li>
                <b>Custom Fit Options:</b> Designed to suit individual comfort
                and needs
              </li>
              <li>
                <b>Easy Maintenance :</b> Removable and simple to clean for
                better hygiene
              </li>
              <li>
                <b>Improved Oral Hygiene :</b> Helps reduce risk of infection
                and supports overall oral health
              </li>
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
      </div>

      <div className="third_section" style={{ background: "var(--white)" }}>
        <div className="third_header">
          <h2 style={{ textAlign: "center", color: "var(--accent)" }}>
            Why Choose Denza Dental for Dentures in Pune?
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
          <h2>
            Equipment Used in Denture Treatment at Denza Dental, Kharadi (Pune)
          </h2>
          <div className="equipment_list">
            <ul>
              <li>
                <b>Digital Scanners :</b> Capture accurate 3D impressions of
                your mouth, improving comfort and precision without traditional
                molds
              </li>
            </ul>

            <ul>
              <li>
                <b>CAD/CAM Systems :</b> Computer-aided design and manufacturing
                for highly accurate, custom-fit dentures
              </li>
            </ul>

            <ul>
              <li>
                <b>3D Printing Technology :</b> Creates precise denture models
                and final prosthetics with speed and accuracy
              </li>
            </ul>

            <ul>
              <li>
                <b>Digital & Panoramic X-Rays :</b> Provide detailed images of
                teeth, gums, and bone structure for proper treatment planning
              </li>
            </ul>

            <ul>
              <li>
                <b>Dental Articulators :</b>Simulate jaw movements to ensure
                correct bite alignment and function
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

export default RestorativeDentistry;
