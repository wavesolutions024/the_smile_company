import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer parent bg-img-cover">
<div className="footer_overlay">

</div>

      <div className="footer__inner cont">
        <div className="footer__brand">
          <h2>ClinicMaster</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam
            nonummy nibh.
          </p>
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
            <h3>Social Media</h3>
            <ul>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>LinkedIn</li>
              <li>YouTube</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
