import React from "react";
import { FiClock, FiMail, FiPhone } from "react-icons/fi";
import PageTop from "../../comp/page_top/PageTop";
import "./Contact.scss";
import Button from "../../comp/button/Button";

const Contact = () => {
  return (
    <>
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
                    Office No. 111, Zen Square, Opp. Eon Free Zone Road, Phase
                    2, Kharadi, Pune, Maharashtra 411014{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="phone_call">
              <div className="phone_icon">
                <FiPhone />
              </div>
              <strong>7028131132 / 7028143959</strong>
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
