import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./DentalTourism.scss";
import img from "../../assets/about_page/woman_dr.jpg";
import img4 from "../../assets/about_section/img5.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import clnic_img from "../../assets/dental_tourism_img.jpeg";

const DentalTourism = () => {
  const services = [
    {
      title: "Global Exposure",
      description:
        "Trusted by international patients across multiple countries",
    },
    {
      title: "Expert Clinicians",
      description: "Internationally trained dental specialists",
    },
    {
      title: "Advanced Technology",
      description: "3D imaging, digital dentistry, laser treatments ",
    },
    {
      title: "Cost Advantage",
      description: "Save up to 60–80% vs global prices",
    },
    {
      title: "Personalized Care",
      description: "Tailored treatment plans for every patient ",
    },
  ];

  const faqs = [
    {
      question: "Is dental treatment in India safe?",
      answer:
        "Yes, Denza Dental follows strict international sterilization and safety protocols.",
    },
    {
      question: "How much can I save with dental tourism? ",
      answer:
        "You can save up to 60–80% compared to countries like the USA, UK, or Australia. ",
    },
    {
      question: "How long do I need to stay in Pune?",
      answer:
        "It depends on the treatment—simple procedures may take a few days, while complex treatments may require multiple visits.",
    },
    {
      question: "Do you assist with travel arrangements?",
      answer:
        "Yes, we provide guidance for travel, stay, and local assistance. ",
    },
    {
      question: "Is follow-up possible after I return home?",
      answer: "Yes, we offer virtual consultations and follow-up care.",
    },
  ];

  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const clinicImages = [img4, img4, img4, img4, img4, img4, img4, img4];

  const specialtyCards = [
    { label: "Dental Implants", image: img4 },
    { label: "Smile Makeover", image: img4 },
    { label: "Veneers", image: img4 },
    { label: "Laser Dentistry", image: img4 },
  ];

  return (
    <>
      <div className="parent dental_tourish_parent">
        <div className="overlay"></div>

        <div className="cont dental_tourish_cont">
          <div className="hero_content">
            <h1>
              Dental Tourism in Pune – World-Class Dental Care at Denza
              Dental{" "}
            </h1>
            <p>
              Affordable, advanced, and globally trusted dental treatments in
              India for international patients
            </p>
         
          </div>
        </div>
      </div>

      <div className="parent denatl_tourism_about">
        <div className="cont denatl_tourism_about_cont">
          <div className="left_denatl_tourism">
            <img src={img} alt="About Us" />
          </div>
          <div className="right_denatl_tourism">
            <h2>lorem ipsum</h2>
            <p>
              Denza Dental Center is poised to become a distinguished name in
              the evolving landscape of dental tourism. With internationally
              trained clinicians, advanced technology, and a patient-centric
              approach, we aspire to welcome patients from around the world
              seeking exceptional dental care in India.{" "}
            </p>
            <p>
              By integrating high-quality, specialized dental treatments with a
              thoughtfully curated travel experience, we aim to offer global
              patients a seamless journey—combining clinical excellence,
              comfort, and remarkable value. At Denza Dental Center, world-class
              dentistry will be made accessible at a significantly lower
              investment compared to many international markets.{" "}
            </p>
          </div>
        </div>
      </div>

      {/* form */}

      <section className="form_landscape_parent">
        <div className="cont form_landscape_cont">
          <div className="treatment_form_card">
            <div className="form_header_group">
              <h3 className="form_heading">
                Get Your Personalized Treatment Plan
              </h3>
              <p className="form_sub">
                Fill in your details and our team will get in touch with you
                within 24 hours.
              </p>
            </div>

            <form className="treatment_form">
              <div className="form_section">
                <div className="section_header">
                  <div className="section_number">1</div>
                  <div>
                    <h4>Personal Details</h4>
                    <p>Enter your name, country and contact details.</p>
                  </div>
                </div>
                <div className="section_fields two_col">
                  <label className="field">
                    <span>Full Name</span>
                    <input type="text" placeholder="Enter your full name" />
                  </label>
                  <label className="field">
                    <span>Country</span>
                    <select>
                      <option>Select your country</option>
                      <option>India</option>
                      <option>United States</option>
                      <option>United Kingdom</option>
                      <option>Australia</option>
                    </select>
                  </label>
                  <label className="field">
                    <span>Phone / WhatsApp Number</span>
                    <input type="tel" placeholder="Enter your number" />
                  </label>
                  <label className="field">
                    <span>Email Address</span>
                    <input type="email" placeholder="Enter your email" />
                  </label>
                </div>
              </div>

              <div className="form_section">
                <div className="section_header">
                  <div className="section_number">2</div>
                  <div>
                    <h4>Dental Information</h4>
                    <p>
                      Choose your concern, describe it and upload any reports.
                    </p>
                  </div>
                </div>
                <div className="section_fields two_col">
                  <label className="field">
                    <span>Dental Concern</span>
                    <select>
                      <option>Select Dental Concern</option>
                      <option>Dental Implants</option>
                      <option>Full Mouth Rehabilitation</option>
                      <option>Smile Makeover</option>
                      <option>Dentures</option>
                      <option>Other</option>
                    </select>
                  </label>
                  <label className="field">
                    <span>Brief Description</span>
                    <textarea placeholder="Describe your dental issue"></textarea>
                  </label>
                  <label className="field full_width file_upload">
                    <span>Upload Reports / Photos</span>
                    <small>Click to upload or drag and drop your files.</small>
                    <input type="file" />
                  </label>
                </div>
              </div>

              <div className="form_section">
                <div className="section_header">
                  <div className="section_number">3</div>
                  <div>
                    <h4>Travel Plans</h4>
                    <p>Share your preferred timeline and stay duration.</p>
                  </div>
                </div>
                <div className="section_fields two_col">
                  <label className="field">
                    <span>Preferred Travel Timeline</span>
                    <select>
                      <option>Select timeline</option>
                      <option>Within 7 days</option>
                      <option>Within 2 weeks</option>
                      <option>Within 1 month</option>
                    </select>
                  </label>
                  <label className="field">
                    <span>Duration of Stay</span>
                    <input type="text" placeholder="e.g. 7 days, 10 days" />
                  </label>
                </div>
              </div>

              <div className="form_section">
                <div className="section_header">
                  <div className="section_number">4</div>
                  <div>
                    <h4>Preferred Contact Method</h4>
                    <p>Choose how you'd like us to contact you.</p>
                  </div>
                </div>
                <div className="contact_options">
                  <label className="radio_card">
                    <input type="radio" name="contact" defaultChecked />{" "}
                    WhatsApp
                  </label>
                  <label className="radio_card">
                    <input type="radio" name="contact" /> Call
                  </label>
                  <label className="radio_card">
                    <input type="radio" name="contact" /> Email
                  </label>
                </div>
              </div>

              <div className="form_footer">
                <button type="button" className="form_submit">
                  ✈️ Get My Treatment Plan &amp; Cost Estimate
                </button>
                <p className="privacy_note">
                  Your information is secure and will not be shared.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      <div className="third_section">
        <div className="third_header">
          <h2>WHY CHOOSE DENZA DENTAL </h2>
        </div>

        <div className="service_cards">
          {services.map((service, index) => (
            <div key={index} className="service_card">
              <p className="service_card_index">{index + 1}.</p>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* steps */}

      <section className="steps_parent">
        <div className="cont steps_cont">
          <h2
            style={{
              textAlign: "center",
              padding: "20px 0 30px 0px",
              fontSize: "40px",
              fontWeight: "700",
            }}
          >
            PATIENT JOURNEY
          </h2>
          <div className="steps_row">
            <div className="step">
              <div className="step_circle">1</div>
              <h4 className="step_title">Online Consultation</h4>
              <p className="step_desc">Share reports & get expert advice </p>
            </div>

            <div className="step">
              <div className="step_circle">2</div>
              <h4 className="step_title">Treatment Plan</h4>
              <p className="step_desc">Transparent cost & planning</p>
            </div>

            <div className="step">
              <div className="step_circle">3</div>
              <h4 className="step_title">Arrival & Welcome</h4>
              <p className="step_desc">
                Our team assists with orientation, accommodation recommendations
                and appointment schedule.
              </p>
            </div>

            <div className="step">
              <div className="step_circle">4</div>
              <h4 className="step_title">Treatment</h4>
              <p className="step_desc">Advanced care in Pune </p>
            </div>

            <div className="step">
              <div className="step_circle">5</div>
              <h4 className="step_title">Follow-up</h4>
              <p className="step_desc">Ongoing support after return</p>
            </div>
          </div>
        </div>
      </section>

      {/* card section */}

      <section className="specialty_cards_section">
        <div className="cont specialty_cards_cont">
          <h2
            style={{
              textAlign: "center",
              padding: "20px 0 30px 0px",
              fontSize: "40px",
              fontWeight: "700",
            }}
          >
            TREATMENTS SECTION
          </h2>
          <div className="specialty_cards_grid">
            {specialtyCards.map((card, index) => (
              <div
                key={index}
                className="specialty_card"
                style={{ backgroundImage: `url(${card.image})` }}
              >
                <div className="specialty_card_overlay" />
                <div className="specialty_card_label">{card.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* img section */}

      <div className="parent clinic_img_parent">
        <img src={clnic_img} alt="Clinic Image" className="clinic_img" />
      </div>

      <div className="faq_section" style={{ background: "white" }}>
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

      <div
        className="parent clinic_images_parent"
        style={{ background: "var(--background)" }}
      >
        <Swiper
          modules={[Autoplay]}
          slidesPerView={4.5}
          spaceBetween={30}
          loop={true}
          speed={10000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1.2,
              spaceBetween: 16,
            },

            576: {
              slidesPerView: 2,
              spaceBetween: 20,
            },

            768: {
              slidesPerView: 2.5,
              spaceBetween: 24,
            },

            1200: {
              slidesPerView: 4.5,
              spaceBetween: 30,
            },
          }}
          className="gallery_swiper"
        >
          {clinicImages.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="gallery_card">
                <img src={img} alt="" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default DentalTourism;
