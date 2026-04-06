import React, { useRef, useState } from "react";
import PageTop from "../../comp/page_top/PageTop";
import beforeImg from "../../assets/about_page/before1.webp";
import afterImg from "../../assets/about_page/after1.webp";
import "./About.scss";

const About = () => {
  const containerRef = useRef(null);
  const [position, setPosition] = useState(50);
  //   const [openCard, setOpenCard] = useState(1);

  const handleMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percent = (x / rect.width) * 100;

    if (percent >= 0 && percent <= 100) {
      setPosition(percent);
    }
  };

  //   const whyChooseCards = [
  //     {
  //       id: 1,
  //       title: "Expertise in Dental Industry",
  //       description:
  //         "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a making it look like readable English.",
  //       image: afterImg,
  //     },
  //     {
  //       id: 2,
  //       title: "Patient-Centered Care",
  //       description:
  //         "We prioritize your comfort and wellbeing above all else, ensuring every visit is tailored to your unique needs.",
  //       image: afterImg,
  //     },
  //     {
  //       id: 3,
  //       title: "Flexible Appointment Scheduling",
  //       description:
  //         "We understand your busy schedule and offer flexible appointment times to fit your lifestyle.",
  //       image: afterImg,
  //     },
  //     {
  //       id: 4,
  //       title: "Flexible Appointment Scheduling",
  //       description:
  //         "We understand your busy schedule and offer flexible appointment times to fit your lifestyle.",
  //       image: afterImg,
  //     },
  //   ];

  return (
    <>
      <PageTop title="About Us" />

      <div className="parent about_dr_parent">
        <div className="cont about_dr_cont">
          <div className="left-section">
            <h1>About Dr. Hemant Sir</h1>
            <p>
              Dr. Nashid Martines has many years of dental care experience. She
              blends clinical precision with compassionate patient care and
              modern treatment techniques. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Ab rem odio itaque nemo quaerat
              voluptates laudantium veritatis corrupti accusantium vitae.
            </p>
            <h3>About Skills</h3>
            <div className="skills-grid">
              {[
                "Root Canal Therapy",
                "Endodontic Surgery",
                "Cracked Tooth Treatment",
                "Dental Examinations",
                "X-Rays and Imaging",
                "Oral Cancer Screenings",
              ].map((skill) => (
                <div key={skill} className="skill-item">
                  <span>✔</span> {skill}
                </div>
              ))}
            </div>
            <div className="bottom-row">
              <div className="btn">Appointment</div>
            </div>
          </div>

          <div className="right-section">
            <div className="image-frame">
              <img src={afterImg} alt="Dr. Nashid" className="doctor-img" />
            </div>
          </div>
        </div>
      </div>

      <div className="parent before_after_parent">
        <div className="cont before_after_cont">
          <h2>Real People. Real Results.</h2>
          <div
            className="beforeAfter"
            ref={containerRef}
            onMouseMove={(e) => e.buttons === 1 && handleMove(e)}
            onMouseDown={handleMove}
          >
            <img src={afterImg} />

            <div className="afterWrapper" style={{ width: `${position}%` }}>
              <img src={beforeImg} className="beforeImage" />
            </div>

            <div className="sliderLine" style={{ left: `${position}%` }}>
              <div className="sliderButton">
                <span>◀</span>
                <span>▶</span>
              </div>
            </div>

            <div className="label after">AFTER</div>
            <div className="label before">BEFORE</div>
          </div>
        </div>
      </div>

      {/* <div className="parent why_choose_parent">
        <div className="cont why_choose_cont">
          <h2>Why Choose Dental Care</h2>
          <p className="subtitle">
            It is a long established fact that a reader will be distraacted by
            the readable content of a page when looking at its layout. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Rem itaque optio
            consequatur unde tempore! Doloribus!
          </p>

          <div className="cards-container">
            {whyChooseCards.map((card) => (
              <div
                key={card.id}
                className={`card ${openCard === card.id ? "primary open" : ""}`}
                onClick={() => setOpenCard(card.id)}
              >
                <div className="card-content">
                  <div className="card-text">
                    <h3>{card.title}</h3>
                    <p className="card-desc">{card.description}</p>
                  </div>

                  {card.image && (
                    <img
                      src={card.image}
                      alt={card.title}
                      className="card-image"
                    />
                  )}
                </div>

                {openCard !== card.id && (
                  <span className="card-number">0{card.id}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div> */}

      {/* vission mission */}

      <div className="vision_parent parent">
        <div className="vission_cont cont">
          <h2>Our Vision & Mission</h2>
          <p className="subtitle">
            It is a long established fact that a reader will be distraacted by
            the readable content of a page when looking at its layout. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Rem itaque optio
            consequatur unde tempore! Doloribus!
          </p>

          <div class="vission_mission_card">
            <div className="v_m_left">
              <h3>Our Vision</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum
                doloribus iusto expedita, omnis qui architecto illo quasi
                facilis? Aliquam, laudantium cumque! Reprehenderit beatae ipsa
                adipisci possimus explicabo. In iure recusandae provident rem at
                debitis eligendi corporis incidunt alias temporibus enim
                veritatis eius consequatur blanditiis, non voluptate dicta amet
                laboriosam rerum?
              </p>
            </div>
            <div className="v_m_right">
              <h3>Our Mission</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum
                doloribus iusto expedita, omnis qui architecto illo quasi
                facilis? Aliquam, laudantium cumque! Reprehenderit beatae ipsa
                adipisci possimus explicabo. In iure recusandae provident rem at
                debitis eligendi corporis incidunt alias temporibus enim
                veritatis eius consequatur blanditiis, non voluptate dicta amet
                laboriosam rerum?
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
