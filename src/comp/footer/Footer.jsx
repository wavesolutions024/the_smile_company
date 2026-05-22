import React from "react";
import "./Footer.scss";
import { BsFacebook } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FiYoutube } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="whatsapp_icon">
        <a
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="box">
            <FaWhatsapp />
          </div>
        </a>
      </div>

      <footer className="footer parent bg-img-cover">
        <div className="footer_overlay"></div>

        <div className="footer__inner cont">
          <div className="footer__brand">
            <h2>ClinicMaster</h2>
            <p style={{ color: "white" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam
              nonummy nibh.
            </p>
            <div className="social_media_main">
              <span className="social_media_icon">
                <BsFacebook />
              </span>
              <span className="social_media_icon">
                <FaInstagram />
              </span>
              <span className="social_media_icon">
                <CiLinkedin />
              </span>
              <span className="social_media_icon">
                <FiYoutube />
              </span>
            </div>
          </div>

          <div className="footer__links">
            <div className="footer__col">
              <h3>Our Services</h3>
              <ul>
                <li>Emergency Care</li>
                <li>Operation Theater</li>
                <li>Medical Checkup</li>
                <li>Diagnostic Center</li>
                <li>Outdoor Checkup</li>
              </ul>
            </div>

            <div className="footer__col">
              <h3>Useful Links</h3>
              <ul>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
                <li>Contact Us</li>
                <li>Latest News</li>
                <li>Our Sitemap</li>
              </ul>
            </div>

            <div className="footer__col">
              <h3>Quick Links</h3>
              <ul>
                <li>About Us</li>
                <li>Our Services</li>
                <li>Our Team</li>
                <li>Appointments</li>
                <li>Contact Us</li>
              </ul>
            </div>

            <div className="footer__col">
              <h3>Our Location</h3>
              <a
                href="https://maps.google.com/?q=Dr.+Samidha+Patil+Dentist+in+Kharadi"
                target="_blank"
                rel="noopener noreferrer"
                className="map_box"
              >
                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps?q=Dr.+Samidha+Patil+Dentist+in+Kharadi&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
