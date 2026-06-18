import React, { useRef, useState } from "react";
import PageTop from "../../comp/page_top/PageTop";
import beforeImg from "../../assets/about_page/before1.webp";
import afterImg from "../../assets/about_page/after1.webp";
import "./About.scss";
import { FaArrowRight } from "react-icons/fa6";
import { BiLogoFacebook } from "react-icons/bi";
import { BiLogoLinkedin } from "react-icons/bi";
import { RiTwitterXLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import Button from "../../comp/button/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import img from "../../assets/about_page/woman_dr.jpg";

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

  const doctors = [
    {
      id: 1,
      name: " Dr. Hemant Suresh Thodsare ",
      title: "Co-founder | Prosthodontist & Implantologist",
      description: (
        <>
          "Dr. Hemant is an internationally experienced Prosthodontist and
          Cosmetic specialist, specializing in minimally invasive cosmetic
          dentistry, smile makeovers, dental implants, and complex full mouth
          rehabilitation. With over{" "}
          <strong>15 years of clinical expertise</strong>, he is known for
          delivering precise, functionally sound, and aesthetically refined
          outcomes. \n\nHe holds an MDS in Prosthodontics and Implantology and
          brings advanced expertise in Crown & Bridge and comprehensive
          restorative dentistry. He also has valuable international clinical
          experience as a licensed dentist under the Ministry of Health, Kuwait.
          "
        </>
      ),
      image: img,
      expertise: [
        { icon: "🦷", label: "Cosmetic Dentistry" },
        { icon: "😁", label: "Full Mouth Reconstruction" },
        { icon: "✨", label: "Smile Design" },
        { icon: "🎨", label: "Veneers" },
      ],
    },
    {
      id: 2,
      name: "Dr. Devika M. Kalaskar",
      title: "Co-founder | Endodontist & Esthetic Dentist",
      description:
        "Dr. Devika is a skilled and patient-focused endodontist and esthetic dentist, known for her precision and calm, reassuring approach to care. She specializes in minimally invasive dentistry, root canal treatments, and aesthetic smile enhancement procedures.\nShe completed her BDS from Sinhgad Dental College, Pune, and her MDS in Conservative Dentistry & Endodontics from Government Dental College, one of India’s premier institutions.\nA former Assistant Professor, she combines academic excellence with strong clinical expertise.\nShe also brings valuable international clinical experience from Kuwait, along with active participation in conferences, workshops, and research, with multiple publications in national and international journals.\She is a member of the Indian Association of Conservative Dentistry and Endodontics (IACDE) and has received several academic recognitions. ",
      image: img,
      expertise: [
        { icon: "🔧", label: "Same Day Crowns" },
        { icon: "🪥", label: "Dental Implants" },
        { icon: "⚡", label: "Laser Treatment" },
        { icon: "🧬", label: "Root Canal Therapy" },
      ],
    },
  ];

  return (
    <>
      {/* <PageTop title="About Us" /> */}

      <div className="parent dental_tourish_parent">
        <div className="overlay"></div>

        <div className="cont dental_tourish_cont">
          <div className="hero_content">
            <h1>Precision. Ethics. Comfort. Dentistry designed around you.</h1>
            <p>Specialist-led dental care in Kharadi, Pune </p>
          </div>
        </div>
      </div>

      <div className="parent about_dr_parent">
        <div className="cont about_dr_cont">
          <div className="right-section">
            <div className="image-frame">
              <img src={afterImg} alt="Dr. Nashid" className="doctor-img" />
            </div>
          </div>

          <div className="left-section">
            <h1>About Denza Dental</h1>
            <p>
              Denza Dental is a premium dental clinic located in Kharadi, Pune,
              offering a refined approach to modern dentistry. Built on the
              principles of precision, ethics, and patient comfort, our clinic
              is designed to deliver a seamless and stress-free dental
              experience.
            </p>
            <p>
              We combine clinical expertise with a calm and thoughtfully
              designed environment, ensuring that every patient feels at ease
              from the moment they walk in.{" "}
            </p>
            {/* <h3>About Skills</h3>
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
            </div> */}
            <div className="bottom-row">
              <Button />
            </div>
          </div>
        </div>
      </div>

      <div className="parent founder_note_parent">
        <div className="cont founder_note_cont">
          <div className="founder_left_section">
            <h1>A Note from Our Specialists</h1>
            <p>
              Denza Dental is a premium dental clinic located in Kharadi, Pune,
              dedicated to delivering precise, ethical, and patient-centered
              dental care in a calm and refined environment.
            </p>

            <p>
              We are a specialist-led dental practice, led by MDS specialists
              with global clinical exposure, focused on delivering high-quality,
              evidence-based care in a calm and refined environment. This global
              perspective allows us to integrate contemporary techniques, modern
              protocols, and a higher standard of clinical precision into
              everyday dentistry.{" "}
            </p>

            <p>
              Every treatment is approached with careful diagnosis, detailed
              planning, and a commitment to long-term results. From routine care
              to complex procedures, our goal is to ensure that each patient
              receives dentistry that is transparent, comfortable, and tailored
              to their individual needs.
            </p>

            <p>
              We offer comprehensive dental treatments including root canal
              therapy, cosmetic dentistry, smile designing, restorative
              procedures, and preventive dental care. Each treatment is carried
              out using modern technology and high standards of sterilization,
              ensuring safety, accuracy, and comfort.{" "}
            </p>

            <p>
              At Denza Dental, it’s not just about treating teeth—it’s about
              delivering care that feels considered, confident, and truly
              patient-focused in a stress-free environment.{" "}
            </p>

            <div className="bottom-row">
              <Button style={{ width: "fit-content" }} />
            </div>
          </div>

          <div className="founder_right_section">
            <div className="image-frame">
              <img src={afterImg} alt="Dr. Nashid" className="doctor-img" />
            </div>
          </div>
        </div>
      </div>

      {/* vission mission */}

      {/* <div className="vision_parent parent">
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
              <h3> Our Vision </h3>
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
      </div> */}

      {/* doctors */}
      <section className="doctors_section1">
        <div className="cont doctors_cont">
          <h2
            style={{
              textAlign: "center",
              color: "white",
              marginBottom: "50px",
              fontSize: "40px",
              fontWeight: "700",
            }}
          >
            Meet Our Specialists
          </h2>
          {doctors.map((doctor, index) => (
            <div
              key={doctor.id}
              className={`doctor_profile ${index % 2 === 0 ? "even" : "odd"}`}
            >
              <div className="doctor_image_wrapper">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="doctor_image"
                />
              </div>
              <div className="doctor_content">
                <h3 className="doctor_name">{doctor.name}</h3>
                <p className="doctor_title">{doctor.title}</p>
                <p className="doctor_description">{doctor.description}</p>

                <div className="doctor_expertise_section">
                  <h4>Areas of Expertise:</h4>
                  <Swiper
                    modules={[Navigation]}
                    spaceBetween={12}
                    slidesPerView="auto"
                    navigation
                    className="expertise_swiper"
                  >
                    {doctor.expertise.map((exp, idx) => (
                      <SwiperSlide key={idx} className="expertise_slide">
                        <div className="expertise_badge">
                          <span className="expertise_icon">{exp.icon}</span>
                          <span className="expertise_label">{exp.label}</span>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* before-after */}

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
    </>
  );
};

export default About;
