import React, { useState } from "react";
import { FiClock, FiMail, FiPhone } from "react-icons/fi";
import PageTop from "../../comp/page_top/PageTop";
import "./Contact.scss";
import Button from "../../comp/button/Button";
import { Helmet } from "react-helmet";
import teeth from "../../assets/header/tooth.png";
import img4 from "../../assets/about_section/img5.webp";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [leftAccordion, setLeftAccordion] = useState(0);

  function Submit(e) {
    e.preventDefault();

    setIsSubmitting(true); // Set submitting state to true

    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);
    const getDate = new Date();

    const date = getDate.toDateString();

    formDatab.append("Date", date);
    formDatab.append("type", "Contact");

    fetch(
      "https://script.google.com/macros/s/AKfycbyR-drlnKnz_7saPjdbKKL430xYpDcrTohd_jKzUjtoiUE8wWywUG4a-dQrqgEbvSDL/exec",
      {
        method: "POST",
        body: formDatab,
      },
    )
      .then((res) => res.text())
      .then((data) => {
        setIsSubmitting(false); // Reset submitting state
        alert("Form submitted successfully!");
        formEle.reset(); // Reset the form
      })
      .catch((error) => {
        console.error("Error:", error);
        setIsSubmitting(false); // Reset submitting state even on error
        alert("Something went wrong. Please try again.");
      });
  }

  const accordianContent = [
    {
      title: "How do I book an appointment at Denza Dental? ",
      description:
        "You can book an appointment at Denza Dental, the Best Dental Clinic in Kharadi, by calling +91 7028 131 132, using the Book Appointment button on our website, or filling out the enquiry form on this page.  ",
    },
    {
      title: "Where is Denza Dental located in Kharadi? ",
      description:
        "Denza Dental Center is located at Office No. 111, First Floor, Zen Square, Opp Marvel Enigma, Kharadi, Pune - 411014 — easily accessible from all parts of Kharadi and Pune.  ",
    },
    {
      title: "What are Denza Dental's clinic timings? ",
      description:
        "Denza Dental is open from 9:00 AM to 9:00 PM, all days of the week, making it convenient to book an appointment with the Best Dentist in Kharadi at a time that suits you. ",
    },
    {
      title: "Do I need an appointment, or can I walk in?",
      description:
        "We recommend booking an appointment in advance by calling +91 7028 131 132 or using our online form, so our specialists can give you their full attention without a long wait. ",
    },
    {
      title: "Is Denza Dental easy to find near Zen Square, Kharadi?",
      description:
        "Yes. Denza Dental Center is located at Zen Square, opposite Marvel Enigma in Kharadi, Pune — a wellknown landmark that makes the clinic simple to locate for both local and first-time patients. ",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Contact Denza Dental Center | Dentist in Kharadi, Pune</title>

        <meta
          name="description"
          content="Contact Denza Dental Center in Kharadi, Pune to book a dental consultation. Find our clinic address, phone number, timings and appointment information."
        />

        <meta
          name="keywords"
          content="
          Denza Dental Center,
          Denza Dental,
          Denza Dentistry,
          Contact Denza Dental Center,
          Denza Dental contact,
          Denza Dental phone number,
          Denza Dental address,
          Denza Dental Kharadi,
          Denza Dental Pune,
          dental clinic Kharadi Pune,
          dentist Kharadi Pune,
          dentist near Kharadi Pune,
          dental clinic near Marvel Enigma Kharadi,
          dentist near Marvel Enigma Kharadi,
          dental appointment Kharadi,
          dental consultation Kharadi,
          dentist appointment Pune,
          dental consultation Pune,
          dental clinic Pune,
          specialist dentist Kharadi,
          MDS dentist Kharadi Pune,
          dental clinic near me Kharadi
        "
        />

        <link rel="canonical" href="https://denzadental.com/contact-us" />

        <meta name="geo.region" content="IN-MH" />

        <meta
          name="geo.placename"
          content="Kharadi, Pune, Maharashtra, India"
        />

        <meta name="geo.position" content="18.5515;73.9430" />

        <meta name="ICBM" content="18.5515, 73.9430" />

        <meta property="og:type" content="website" />

        <meta property="og:site_name" content="Denza Dental Center" />

        <meta
          property="og:title"
          content="Contact Denza Dental Center | Dentist in Kharadi, Pune"
        />

        <meta
          property="og:description"
          content="Contact Denza Dental Center in Kharadi, Pune to book a dental consultation. Find our clinic address, phone number, timings and appointment information."
        />

        <meta property="og:url" content="https://denzadental.com/contact-us" />

        <meta
          property="og:image"
          content="https://denzadental.com/og-image.jpg"
        />

        <meta
          property="og:image:alt"
          content="Denza Dental Center in Kharadi, Pune"
        />

        <meta property="og:locale" content="en_IN" />
      </Helmet>
      <div className="parent dental_tourish_parent">
        <div className="overlay"></div>

        <div className="cont dental_tourish_cont">
          <div className="hero_content">
            <h1>Connect with Denza Dental </h1>
            <p>
              Experience expert care and personalized support from our dedicated
              dental team.{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="contact_page_parent parent">
        <div className="contact_page_cont cont">
          <div className="contact_left">
            <div className="title_block">
              <h1>Contact Information</h1>
              <p>
                Book Your Appointment with the Best Dental Clinic in Kharadi,
                Pune — trusted by patients for smile makeovers, dental implants,
                and complete family dental care.{" "}
              </p>
              <p>
                {/* Book your consultation at Denza Dental for advanced,
                personalized dental treatments.  */}
                From smile makeovers to full mouth rehabilitation, our
                specialists provide complete care tailored to your needs.
              </p>
            </div>

            <div className="info_cards">
              <div className="card card--white card--big">
                <div className="card_icon card_icon--pink">
                  <FiClock />
                </div>
                <div className="card_content">
                  <h4>Timing</h4>
                  <p>9:00 AM - 9:00 PM (All Days)</p>
                </div>
              </div>

              <div className="card card--white card--big">
                <div className="card_icon card_icon--purple">
                  <FiMail />
                </div>
                <div className="card_content">
                  <h4>Office Address:</h4>
                  <p>
                    Denza Dental Center, Office no 111, First floor, Zen Square,
                    Opp Marvel Enigma, Kharadi, Pune- 411014{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="phone_call">
              <div className="phone_icon">
                <FiPhone />
              </div>
              <strong>+91 7028 131 132</strong>
            </div>
          </div>

          <div className="contact_right">
            <div className="ask_card">
              <h2>Ask a Question</h2>
              <p>
                If you have any questions, you can contact us. Please, fill out
                the form below.
              </p>

              <form className="contact_form" onSubmit={Submit}>
                <div className="row_two">
                  <input
                    type="text"
                    name="FName"
                    placeholder="First Name"
                    required
                  />
                  <input
                    type="text"
                    name="LName"
                    placeholder="Last Name"
                    required
                  />
                </div>

                <div className="row_two">
                  <input
                    type="tel"
                    name="Phone"
                    placeholder="Phone Number"
                    required
                  />
                  <input
                    type="email"
                    name="Email"
                    placeholder="Your Email"
                    required
                  />
                </div>

                <textarea
                  name="Message"
                  placeholder="Message"
                  rows="4"
                  required
                />

                <div className="form_footer">
                  <button
                    disabled={isSubmitting}
                    type="submit"
                    className="btn_contact"
                  >
                    <span>
                      <img src={teeth} alt="" />
                    </span>
                    <p>{isSubmitting ? "Submitting..." : "Submit Now"}</p>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* faq */}

      <div class="why_choose_parent bg-img-cover parent">
        <div class="why_choose_cont cont">
          <h1>Frequently Asked Questions </h1>
          <div className="wc_left_right">
            <div class="wc_left">
              <div class="accordian">
                {accordianContent?.map((item, index) => (
                  <div class="accordian_item">
                    <div
                      class="accordian_title"
                      onClick={() => setLeftAccordion(index)}
                    >
                      <h1> {item.title} </h1>
                      <div class="count"> {index + 1} </div>
                    </div>
                    {leftAccordion === index && (
                      <div
                        class={
                          leftAccordion === index
                            ? "accordian_desc active"
                            : "accordian_desc"
                        }
                      >
                        <div class="left">
                          <h1> {item.title} </h1> <p>{item.description}</p>
                        </div>
                        <div class="rg_image">
                          <img src={img4} alt="" />
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
