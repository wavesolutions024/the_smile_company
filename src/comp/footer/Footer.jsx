import React from "react";
import "./Footer.scss";
import { BsFacebook } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FiYoutube } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import logo from "../../assets/header/denza_logo-removebg-preview.png";
import { Link } from "react-router-dom";

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

      <div className="call_icon">
        <a
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="call_box">
            <IoIosCall />
          </div>
        </a>
      </div>

      <footer className="footer parent bg-img-cover">
        <div className="footer_overlay"></div>

        <div className="footer__inner cont">
          <div className="footer__brand">
            <img src={logo} alt="Logo" />
            <p style={{ color: "white" }}>
              Denza Dental Center, creating beautiful smiles through excellence,
              innovation, and care.
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
                <li>
                  <Link to="/general-dental">General Dental Services</Link>
                </li>
                <li>
                  <Link to="/restorative-dentistry">Restorative Dentistry</Link>
                </li>
                <li>
                  <Link to="/cosmetic-dentistry">Cosmetic Dentistry</Link>
                </li>
                <li>
                  <Link to="/orthodontic-treatments">
                    Orthodontic Treatment
                  </Link>
                </li>
                <li>
                  <Link to="/dental-check-ups">Dental Checkups</Link>
                </li>
                <li>
                  <Link to="/full-mouth-rehabilitation">
                    Full mouth rehabilitation
                  </Link>
                </li>
                <li>
                  <Link to="/pediatric-dentistry">Pediatric Dentistry</Link>
                </li>
              </ul>
            </div>

            <div className="footer__col">
              <h3>Useful Links</h3>
              <ul>
                <li>
                  <Link to="/privacy-policy">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/terms-and-conditions">Terms & Conditions</Link>
                </li>
              </ul>
            </div>

            <div className="footer__col">
              <h3>Quick Links</h3>
              <ul>
                <li>
                  <Link to="/about">About Us</Link>
                </li>

                <li>
                  <Link to="/our-work">Our Work</Link>
                </li>
                <li>
                  <Link to="/dental-tourism">Dental Tourism</Link>
                </li>
                <li>
                  <Link to="/blogs">Blogs</Link>
                </li>

                <li>
                  <Link to="/contact-us">Contact Us</Link>
                </li>
              </ul>
            </div>

            <div className="footer__col">
              <h3>Our Location</h3>
              <a
                href="https://maps.app.goo.gl/L2FxZP5U5wL3WA9t9"
                target="_blank"
                rel="noopener noreferrer"
                className="map_box"
              >
                <iframe
                  title="Google Map"
                  src="https://maps.app.goo.gl/L2FxZP5U5wL3WA9t9"
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
