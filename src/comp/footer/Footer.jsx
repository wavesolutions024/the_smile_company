import React from "react";
import "./Footer.scss";
import { BsFacebook } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FiYoutube } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { BsTwitterX } from "react-icons/bs";
import logo from "../../assets/header/new_logo.png";
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
              <a
                href="https://www.facebook.com/profile.php?id=61575538874507"
                target="_blank"
                className="social_media_icon"
              >
                <BsFacebook />
              </a>
              <a
                href="https://www.instagram.com/denzadentalcenter/?hl=en"
                target="_blank"
                className="social_media_icon"
              >
                <FaInstagram />
              </a>
              <a
                href=" https://www.linkedin.com/company/112810199/admin/dashboard/"
                target="_blank"
                className="social_media_icon"
              >
                <CiLinkedin />
              </a>
              <a
                href="https://www.youtube.com/@DenzaDentalCenter"
                target="_blank"
                className="social_media_icon"
              >
                <FiYoutube />
              </a>
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
              <h3>Our Technology</h3>
              <ul>
                <li>
                  <Link to="/cbct">CBCT</Link>
                </li>
                <li>
                  <Link to="/intra-oral-scanning">Intra-Oral Scanning</Link>
                </li>
                <li>
                  <Link to="/gbt-cleaning">Gbt Cleaning</Link>
                </li>
                <li>
                  <Link to="/dental-lasers">Dental Lasers</Link>
                </li>
                 <li>
                  <Link to="/gbt-machine">Gbt Machine</Link>
                </li>
                <li>
                  <Link to="/dental-loupes">Dental Loupes</Link>
                </li>
                <li>
                  <Link to="/laughing-gas">Laughing Gas</Link>
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.501209670591!2d73.95412277496366!3d18.55142908254814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c3c4047c069d%3A0x56298114ed1f664b!2sDivine%20Dental%20%26%20Implant%20Clinic!5e0!3m2!1sen!2sin!4v1785918504132!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"
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
