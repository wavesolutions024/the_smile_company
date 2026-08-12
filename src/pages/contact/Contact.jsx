import React from "react";
import { FiClock, FiMail, FiPhone } from "react-icons/fi";
import PageTop from "../../comp/page_top/PageTop";
import "./Contact.scss";
import Button from "../../comp/button/Button";
import { Helmet } from "react-helmet";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>
          Contact Denza Dental Center | Dentist in Kharadi, Pune
        </title>

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

        <link
          rel="canonical"
          href="https://denzadental.com/contact"
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
          name="geo.position"
          content="18.5515;73.9430"
        />

        <meta
          name="ICBM"
          content="18.5515, 73.9430"
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
          content="Contact Denza Dental Center | Dentist in Kharadi, Pune"
        />

        <meta
          property="og:description"
          content="Contact Denza Dental Center in Kharadi, Pune to book a dental consultation. Find our clinic address, phone number, timings and appointment information."
        />

        <meta
          property="og:url"
          content="https://denzadental.com/contact"
        />

        <meta
          property="og:image"
          content="https://denzadental.com/og-image.jpg"
        />

        <meta
          property="og:image:alt"
          content="Denza Dental Center in Kharadi, Pune"
        />

        <meta
          property="og:locale"
          content="en_IN"
        />




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
                Book your consultation at Denza Dental for advanced,
                personalized dental treatments. From smile makeovers to full
                mouth rehabilitation, our specialists provide complete care
                tailored to your needs.
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
                    Denza Dental Center,
                    Office no 111, First floor, Zen Square, Opp Marvel Enigma, Kharadi, Pune- 411014{" "}
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

              <form
                className="contact_form"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="row_two">
                  <input type="text" placeholder="First Name" required />
                  <input type="text" placeholder="Last Name" required />
                </div>

                <div className="row_two">
                  <input type="tel" placeholder="Phone Number" required />
                  <input type="email" placeholder="Your Email" required />
                </div>

                <textarea placeholder="Message" rows="4" required />

                <div className="form_footer">
                  <Button text="Submit Now" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
