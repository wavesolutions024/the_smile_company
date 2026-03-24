import React from "react";
import { FiClock, FiMail, FiPhone } from "react-icons/fi";
import PageTop from "../../comp/page_top/PageTop";
import "./Contact.scss";

const Contact = () => {
  return (
    <>
      <PageTop title="Contact Us" />

      <div className="contact_page_parent parent">
        <div className="contact_page_cont cont">
          <div className="contact_left">
            <div className="title_block">
              <h1>Contact Information</h1>
              <p>
                Thank you for visiting our website. We are here to assist you
                with any inquiries you may have.
              </p>
            </div>

            <div className="info_cards">
              <div className="card card--white card--big">
                <div className="card_icon card_icon--pink">
                  <FiClock />
                </div>
                <div className="card_content">
                  <h4>Opening Time</h4>
                  <p>Mon-Thu: 8:00am - 5:00pm</p>
                  <p>Fri: 8:00am - 1:00pm</p>
                </div>
              </div>

              <div className="card card--white card--big">
                <div className="card_icon card_icon--purple">
                  <FiMail />
                </div>
                <div className="card_content">
                  <h4>Office Address:</h4>
                  <p>764 15768 Delmer Shoals,</p>
                  <p>Eliasport, FL 04331-6195</p>
                </div>
              </div>
            </div>

            <div className="phone_call">
              <div className="phone_icon">
                <FiPhone />
              </div>
              <strong>+1 123 456 7890</strong>
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
                  <button className="btn" type="submit">Submit Now →</button>
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
