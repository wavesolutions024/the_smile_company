import React, { useState } from "react";
import "./Technology.scss";
import PageTop from "../../comp/page_top/PageTop";
import teeth from "../../assets/technology/teeth.webp";
import treatment from "../../assets/technology/img16.webp";
import phone from "../../assets/technology/phone.gif";

const Technology = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqItems = [
    {
      question: "How much do you charge for dental implants?",
      answer:
        "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      question: "What is the procedure for dental implant restoration?",
      answer:
        "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      question: "How long does the treatment take?",
      answer:
        "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      question: "Are dental implants painful?",
      answer:
        "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  ];

  const data = [
    {
      title: "Dental Implant Restorations",
      description1:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero,                praesentium fugiat. At, itaque dolorum officia harum ex illo                 numquam, aperiam aut sint culpa ipsum dignissimos aliquam,                soluta esse rem xercitationem possimus voluptas facere laborum                 sit repellendus eveniet! Eius sapiente aliquam, debitis               dignissimos, sed vero tempore, enim reiciendis dolores suscipit                 fugit?",
      description2:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero,                praesentium fugiat. At, itaque dolorum officia harum ex illo                 numquam, aperiam aut sint culpa ipsum dignissimos aliquam,                soluta esse rem xercitationem possimus voluptas facere laborum                 sit repellendus eveniet! Eius sapiente aliquam, debitis                 dignissimos, sed vero tempore, enim reiciendis dolores suscipit                 fugit?",
      topImg: teeth,
      sideImg: treatment,
    },
    {
      title: "Teeth Whitening",
       description1:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero,                praesentium fugiat. At, itaque dolorum officia harum ex illo                 numquam, aperiam aut sint culpa ipsum dignissimos aliquam,                soluta esse rem xercitationem possimus voluptas facere laborum                 sit repellendus eveniet! Eius sapiente aliquam, debitis               dignissimos, sed vero tempore, enim reiciendis dolores suscipit                 fugit?",
      description2:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero,                praesentium fugiat. At, itaque dolorum officia harum ex illo                 numquam, aperiam aut sint culpa ipsum dignissimos aliquam,                soluta esse rem xercitationem possimus voluptas facere laborum                 sit repellendus eveniet! Eius sapiente aliquam, debitis                 dignissimos, sed vero tempore, enim reiciendis dolores suscipit                 fugit?",
      topImg: teeth,
      sideImg: treatment,
    },
    {
      title: "Teeth Whitening",
       description1:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero,                praesentium fugiat. At, itaque dolorum officia harum ex illo                 numquam, aperiam aut sint culpa ipsum dignissimos aliquam,                soluta esse rem xercitationem possimus voluptas facere laborum                 sit repellendus eveniet! Eius sapiente aliquam, debitis               dignissimos, sed vero tempore, enim reiciendis dolores suscipit                 fugit?",
      description2:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero,                praesentium fugiat. At, itaque dolorum officia harum ex illo                 numquam, aperiam aut sint culpa ipsum dignissimos aliquam,                soluta esse rem xercitationem possimus voluptas facere laborum                 sit repellendus eveniet! Eius sapiente aliquam, debitis                 dignissimos, sed vero tempore, enim reiciendis dolores suscipit                 fugit?",
      topImg: teeth,
      sideImg: treatment,
    },
    {
      title: "Teeth Whitening",
       description1:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero,                praesentium fugiat. At, itaque dolorum officia harum ex illo                 numquam, aperiam aut sint culpa ipsum dignissimos aliquam,                soluta esse rem xercitationem possimus voluptas facere laborum                 sit repellendus eveniet! Eius sapiente aliquam, debitis               dignissimos, sed vero tempore, enim reiciendis dolores suscipit                 fugit?",
      description2:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero,                praesentium fugiat. At, itaque dolorum officia harum ex illo                 numquam, aperiam aut sint culpa ipsum dignissimos aliquam,                soluta esse rem xercitationem possimus voluptas facere laborum                 sit repellendus eveniet! Eius sapiente aliquam, debitis                 dignissimos, sed vero tempore, enim reiciendis dolores suscipit                 fugit?",
      topImg: teeth,
      sideImg: treatment,
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>
      <PageTop title="Technology" />

      {data.map((item, index) => (
        <div
          key={index}
          className={`parent technology_parent ${
            index % 2 === 0 ? "red_bg" : "blue_bg"
          }`}
        >
          <div className="cont technology_cont">
            <div className="top">
              <img src={item.topImg} alt="Teeth" />
            </div>

            <div className="middle">
              <div className="middle_left">
                <h2>{item.title}</h2>

                <p>{item.description1}</p>
                <p>{item.description2}</p>

                <div className="btn_main_grp">
                  <div
                    className="btn"
                    style={{ width: "fit-content", padding: "15px 30px" }}
                  >
                    Appointment
                  </div>

                 
                </div>
              </div>

              <div className="middle_right">
                <img src={item.sideImg} alt="Treatment" />
              </div>
            </div>

            <div className="bottom">
              <div className="faq_container">
                <div className="accordion">
                  {faqItems.map((item, index) => (
                    <div
                      key={index}
                      className={`accordion_item ${index % 2 === 0 ? "red" : "blue"}`}
                    >
                      <div
                        className={`accordion_header ${openIndex === index ? "active" : ""}`}
                        onClick={() => toggleAccordion(index)}
                      >
                        <span className="accordion_question">
                          {item.question}
                        </span>
                        <span className="accordion_toggle">
                          {openIndex === index ? "−" : "+"}
                        </span>
                      </div>
                      {openIndex === index && (
                        <div className="accordion_body">
                          <p>{item.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Technology;
