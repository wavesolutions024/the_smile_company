import React from "react";
import "./DentalTourism.scss";

const benefitCards = [
  {
    title: "World-class Dental Care",
    description:
      "Receive expert treatment from a leading dental team using modern technology and international standards.",
  },
  {
    title: "Comfortable Treatment Packages",
    description:
      "All-inclusive packages include consultation, treatment planning, accommodation support, and follow-up care.",
  },
  {
    title: "Travel Support for Guests",
    description:
      "We assist with airport pickup, hotel recommendations, and local guidance for a smooth visit.",
  },
  {
    title: "Personalized Smile Solutions",
    description:
      "Custom treatment plans are designed to match your dental goals and create long-lasting results.",
  },
  {
    title: "Clear Communication",
    description:
      "Our team provides detailed treatment explanations and milestone updates in English for peace of mind.",
  },
  {
    title: "Recovery-friendly Environment",
    description:
      "Enjoy a calm recovery experience with gentle aftercare and easy access to follow-up appointments.",
  },
  {
    title: "Affordable Premium Care",
    description:
      "Save on high-quality dentistry without compromising on safety, comfort, or outcomes.",
  },
  {
    title: "Convenient International Access",
    description:
      "Denza is located close to major transport routes and hospitality services for returning patients.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Plan Your Visit",
    description:
      "Tell us your goals and receive a tailored dental tourism package with travel and treatment details.",
  },
  {
    step: "02",
    title: "Receive Treatment",
    description:
      "Enjoy care in our modern clinic, with expert dentists and a supportive team by your side.",
  },
  {
    step: "03",
    title: "Recover & Return",
    description:
      "We guide you through post-treatment recovery and help you schedule follow-up care after your trip.",
  },
];

const DentalTourism = () => {
  return (
    <div className="dental_tourism_page">
      <section className="page_hero">
        <div className="cont hero_content">
          <span className="eyebrow">Dental Tourism</span>
          <h1>Premium dental care designed for international visitors.</h1>
          <p>
            Discover affordable, expert dentistry in a comfortable destination with full travel support and personalized treatment plans.
          </p>
          <div className="hero_actions">
            <button className="primary_btn">Book a consultation</button>
            <button className="secondary_btn">Learn about packages</button>
          </div>
        </div>
      </section>

      <section className="tourism_intro parent">
        <div className="cont intro_grid">
          <div className="intro_text">
            <h2>Why choose Denza for dental tourism?</h2>
            <p>
              Our clinic combines advanced dental treatments with dedicated travel support, giving you confidence from arrival to recovery.
            </p>
            <ul>
              <li>Fully equipped modern dental clinic</li>
              <li>Coordinated care for international patients</li>
              <li>Expert dentists with global experience</li>
            </ul>
          </div>
          <div className="intro_image">
            <div className="image_block">Dental Tourism</div>
          </div>
        </div>
      </section>

      <section className="why_choose_section parent">
        <div className="cont section_header">
          <span className="section_label">Advantages</span>
          <h2>What makes our dental tourism experience different?</h2>
          <p>
            From treatment planning to follow-up care, we create a seamless experience so you can focus on your smile and your trip.
          </p>
        </div>

        <div className="cont benefit_grid">
          {benefitCards.map((item, index) => (
            <div key={index} className="benefit_card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="process_section parent">
        <div className="cont section_header">
          <span className="section_label">How it works</span>
          <h2>From first inquiry to recovery</h2>
        </div>

        <div className="cont process_grid">
          {processSteps.map((item) => (
            <div key={item.step} className="process_card">
              <div className="process_number">{item.step}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default DentalTourism;
