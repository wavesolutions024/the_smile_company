import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./OrthodonticTreatments.scss";
import img1 from "../../../assets/general_service/img.webp";
import gallery1 from "../../../assets/about_page/after1.webp";
import metalBrace from "../../../assets/about_page/woman_dr.jpg";
import PageTop from "../../../comp/page_top/PageTop";
import { Helmet } from "react-helmet";

const services = [
  {
    title: "Initial Consultation",
    description:
      "We evaluate your teeth, discuss your concerns, and recommend the best braces option for your needs. ",
  },
  {
    title: " Customized Treatment Plan ",
    description:
      "Digital X-rays and 3D scans are used to design a precise plan for aligning your teeth.",
  },
  {
    title: "Braces Placement ",
    description:
      "Brackets and wires are carefully placed on your teeth, or custom clear aligners are provided. ",
  },
  {
    title: " Regular Adjustments ",
    description:
      "Periodic visits ensure your teeth are moving correctly and adjustments are made as needed. ",
  },
  {
    title: "Braces Removal",
    description:
      "Once alignment is achieved, the braces are safely removed, revealing your new smile.",
  },
  {
    title: "Retainer Support",
    description:
      "A retainer is provided to maintain your results and prevent teeth from shifting back. ",
  },
];

const faqs = [
  {
    question: "Is orthodontic treatment only for children? ",
    answer:
      "No, braces and aligners work effectively for both teens and adults. Many adult patients choose treatment for improved smile and bite correction.",
  },
  {
    question: "How do I know if I need braces?",
    answer:
      "If you have crooked teeth, gaps, bite issues, or difficulty cleaning teeth properly, an orthodontic consultation is recommended.  ",
  },
  {
    question: "How long does braces treatment usually take?",
    answer:
      "Most orthodontic treatments take 12 to 24 months, depending on the complexity of tooth movement required. ",
  },
  {
    question: "Do I Need a Check-up at Denza Dental If I Have No Pain?",
    answer:
      "Absolutely. At Denza Dental, we emphasize preventive care since many dental issues develop without pain. Regular visits help catch problems early. ",
  },
  {
    question: "Do braces change facial appearance?",
    answer:
      "Yes, es, in a positive way. Proper alignment can improve smile symmetry and overall facial balance.",
  },
];

const OrthodonticTreatments = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      <Helmet>
        <title>
          Orthodontic Treatment in Kharadi, Pune |
          Braces & Clear Aligners
        </title>
        <meta
          name="description"
          content="Orthodontic treatment in Kharadi, 
Pune at Denza Dental Center. Explore metal, 
ceramic and lingual braces and clear aligners for 
teeth alignment, bite correction and personalized 
orthodontic care."
        />

        <link
          rel="canonical"
          href="https://denzadental.com/orthodontic-treatme
nts"
        />

        <meta
          name="keywords"
          content=" 
orthodontic treatment Kharadi, 
orthodontic treatment Pune, 
orthodontist Kharadi, 
orthodontist Pune, 
braces treatment Kharadi, 
braces treatment Pune, 
braces dentist Kharadi, 
braces clinic Kharadi, 
braces near Kharadi, 
braces near me Kharadi, 
teeth straightening Kharadi, 
teeth straightening Pune, 
dental braces Kharadi, 
dental braces Pune, 
metal braces Kharadi, 
metal braces Pune, 
ceramic braces Kharadi, 
ceramic braces Pune, 
lingual braces Kharadi, 
lingual braces Pune, 
clear aligners Kharadi, 
clear aligners Pune, 
Invisalign Kharadi, 
Invisalign Pune, 
invisible braces Kharadi, 
invisible braces Pune, 
crowded teeth treatment Kharadi, 
crooked teeth treatment Pune, 
teeth gap treatment Kharadi, 
overbite treatment Pune, 
underbite treatment Kharadi, 
crossbite treatment Pune, 
open bite treatment Kharadi, 
orthodontic consultation Kharadi, 
orthodontic consultation Pune, 
braces cost Kharadi, 
braces cost Pune, 
clear aligners cost Pune, 
orthodontic treatment cost Kharadi, 
retainer after braces Pune, 
dentist Kharadi Pune, 
dental clinic Kharadi Pune, 
Denza Dental Center, 
Denza Dental, 
Denza Dental Kharadi, 
Denza Dental Pune 
"
        />

        <meta
          name="geo.region"
          content="IN-MH"
        />
        <meta
          name="geo.placename"
          content="Kharadi, Pune, Maharashtra, India"
        />

        <meta
          property="og:type"
          content="website"
        />
        <meta
          property="og:site_name"
          content="Denza Dental Center"
        />
        <meta
          property="og:title"
          content="Orthodontic Treatment in Kharadi, 
Pune | Braces & Clear Aligners"
        />
        <meta
          property="og:description"
          content="Orthodontic treatment at Denza 
Dental Center in Kharadi, Pune, including metal, 
ceramic and lingual braces and clear aligners for 
teeth alignment and bite correction."
        />
        <meta
          property="og:url"
          content="https://denzadental.com/orthodontic-trea
tments"
        />
        <meta
          property="og:image"
          content="https://denzadental.com/og-image.jpg"
        />
        <meta
          property="og:image:alt"
          content="Orthodontic treatment and braces 
at Denza Dental Center in Kharadi, Pune"
        />
        <meta
          property="og:locale"
          content="en_IN"
        />
      </Helmet>
      <PageTop title="Orthodontic Treatments Services" />

      <div className="brace_treat_parent parent">
        <div className="brace_treat_cont cont">
          <h2>Braces Treatment in Kharadi, Pune | Denza Dental </h2>
          <div>
            <p>
              At Denza Dental, we believe a confident smile begins with
              well-aligned teeth. If you’re searching for the best orthodontic
              treatment in Kharadi, Pune or looking for braces near you, our
              expert team is here to help.
            </p>

            <p>
              Many people experience dental concerns like crooked teeth,
              crowding, gaps, or bite issues. Our braces treatment is designed
              to gradually straighten and align your teeth, improving both the
              appearance and function of your smile.
            </p>

            <p>
              With personalized orthodontic care, we ensure your treatment
              journey is comfortable, effective, and tailored to your needs,
              helping you achieve a healthy, confident smile.
            </p>
          </div>
        </div>
      </div>

      <div
        className="parent second_parent_gbt"
        style={{ background: "var(--background)" }}
      >
        <div className="cont second_cont_gbt why_choose_denza">
          <div className="why_header">
            <h2>
              Why Choose Denza Dental for Braces Treatment in Kharadi, Pune?
            </h2>
          </div>

          <div className="why_cards">
            {[
              {
                title: " Experienced Orthodontic Experts  ",
                description:
                  "Our skilled orthodontists provide precise and effective braces treatment tailored to your dental needs. ",
              },
              {
                title: "Personalized Treatment Plans ",
                description:
                  "We begin with a detailed evaluation using advanced technology to create a customized plan that aligns with your smile goals. ",
              },
              {
                title: "Multiple Braces Options ",
                description:
                  "Choose from metal braces, ceramic braces, lingual braces, and clear aligners (Invisalign)—we help you pick what suits you best.  ",
              },
              {
                title: "Advanced Technology ",
                description:
                  "We use modern tools like digital X-rays and 3D scanning for accurate diagnosis and efficient treatment. ",
              },
              {
                title: " Comfort-Focused Care ",
                description:
                  "Our friendly team ensures a smooth, comfortable, and stress-free orthodontic experience. ",
              },
              {
                title: "Affordable & Flexible Plans ",
                description:
                  "We offer transparent pricing and flexible payment options to make braces treatment accessible. ",
              },
              {
                title: "Patient Guidance ",
                description:
                  "You’ll be guided at every step—from treatment planning to maintaining oral hygiene during braces. ",
              },
              {
                title: "Post-Treatment Support  ",
                description:
                  "We provide retainers and follow-up care to maintain your results long-term. ",
              },
              {
                title: "Proven Results ",
                description:
                  "Our successful cases reflect our commitment to delivering well-aligned, confident smiles. ",
              },
              {
                title:
                  "Convenient Location & Flexible Timings at Denza Dental  ",
                description:
                  "Denza Dental is conveniently located in Kharadi, Pune, making it easily accessible for patients from nearby areas. We offer flexible appointment slots to fit your busy schedule, ensuring you receive quality dental care at your convenience.  ",
              },
            ].map((item, index) => (
              <div key={index} className="why_card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>



      <div className="parent second_parent">
        <div className="cont second_cont">
          <div className="general_left">
            <img src={img1} alt="General Dental Service" />
          </div>
          <div className="general_right">
            <h2>Why You May Need Braces Treatment </h2>
            <p>
              Braces are not just for improving appearance—they also correct
              important dental issues that affect oral health and function.
            </p>

            <p style={{ fontWeight: "bold", color: "var(--accent" }}>
              Common Reasons for Braces{" "}
            </p>

            <ul style={{ paddingLeft: "20px" }}>
              <li>
                <b>Crowded Teeth </b> : Lack of space causes teeth to
                overlap{" "}
              </li>
              <li>
                <b>Gaps Between Teeth </b> : Can impact appearance and oral
                hygiene
              </li>
              <li>
                <b>Overbite / Underbite </b> : Affects jaw alignment and
                function
              </li>
              <li>
                <b>Crossbite </b> : Misaligned bite that impacts chewing
              </li>
              <li>
                <b>Open Bite </b> : Front teeth don’t meet properly, affecting
                speech and eating
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="parent braces_treat_parent">
        <div className="cont braces_treat_cont">
          <div className="braces_treat_right">
            <h2>Duration of Braces Treatment: What to Expect </h2>
            <p>
              The time required for orthodontic treatment varies depending on
              individual dental needs.
            </p>

            <p style={{ fontWeight: "bold", color: "var(--accent" }}>
              Typical Duration
            </p>

            <p>
              Most braces treatments take around 18 to 24 months, though this
              can differ based on the case.{" "}
            </p>

            <p style={{ fontWeight: "bold", color: "var(--accent" }}>
              Factors That Affect Treatment Time
            </p>

            <ul>
              <li>
                <b>Severity of the Issue </b> : Complex alignment problems may
                take longer
              </li>
              <li>
                <b>Type of Braces </b> :– Metal, ceramic, or clear aligners can
                influence duration
              </li>
              <li>
                <b>Patient Cooperation </b> : Regular visits and following
                instructions help speed up results
              </li>
            </ul>
          </div>

          <div className="braces_treat_left">
            <img src={img1} alt="General Dental Service" />
          </div>
        </div>
      </div>

      <div className="third_section">
        <div className="third_header">
          <h2
            style={{
              fontSize: "36px",
              fontWeight: "600",
              color: "var(--accent)",
            }}
          >
            Braces Treatment Procedure at Denza Dental: Step-by-Step{" "}
          </h2>
        </div>

        <div className="service_cards">
          {services.map((service, index) => (
            <div key={index} className="service_card">
              <p className="service_card_index">{index + 1}.</p>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>


      <div className="side_side_parent parent">
        <div className="side_side_cont cont">
          <div className="left_side_side">
            <h3>Benefits of Orthodontic Treatment </h3>
            <ul>
              <li>
                <b> Improved Oral Health</b> – Straight teeth are easier to
                clean and maintain
              </li>
              <li>
                <b> Enhanced Smile Aesthetics</b> – Boosts confidence and
                overall appearance
              </li>

              <li>
                <b>Better Function</b> – Improves chewing, speaking, and bite
                alignment
              </li>
              <li>
                <b> Prevents Future Issues</b> – Reduces risk of cavities, gum
                problems, and wear
              </li>
            </ul>
          </div>

          <div className="right_side_side">
            <h3>Precautions During Braces Treatment</h3>
            <ul>
              <li>
                <b>Maintain Oral Hygiene </b> – Brush and floss regularly to
                keep teeth and braces clean
              </li>
              <li>
                <b>Avoid Hard & Sticky Foods</b> – Prevent damage to brackets
                and wires
              </li>

              <li>
                <b>Attend Regular Check-ups </b> – Ensure smooth progress and
                timely adjustments
              </li>
              <li>
                <b>Use a Mouthguard</b> – Protect your braces during sports or
                physical activities
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="after_care_parent parent">
        <div className="after_care_cont cont">
          <h2>After Care of Braces Treatment </h2>

          <ul>
            <li>
              <b> Retainer Use</b> – Wear as prescribed to prevent teeth
              shifting
            </li>
            <li>
              <b> Continued Oral Hygiene</b> – Maintain excellent brushing and
              flossing.
            </li>

            <li>
              <b>Regular Check-ups</b> – Follow-up visits to ensure teeth stay
              in place.
            </li>
            <li>
              <b>Monitor Changes</b> – Contact us if issues arise.
            </li>
          </ul>
        </div>
      </div>


      <div className="braces_type_parent parent">
        <div className="braces_type_cont cont">
          <h2>Types of Braces Available at Denza Dental</h2>
          <p>
            We offer a range of orthodontic options to suit different needs and
            preferences:
          </p>

          <div className="braces_cards">
            <div className="braces_card">
              <img src={metalBrace} alt="Metal Braces" />
              <h3>Metal Braces</h3>
              <p>
                Strong and reliable, these are the most traditional braces and
                work effectively for all types of alignment issues.
              </p>
            </div>

            <div className="braces_card">
              <img src={metalBrace} alt="Ceramic Braces" />
              <h3>Ceramic Braces</h3>
              <p>
                Tooth-colored braces that blend with your teeth, offering a less
                noticeable yet effective solution.
              </p>
            </div>

            <div className="braces_card">
              <img src={metalBrace} alt="Lingual Braces" />
              <h3>Lingual Braces</h3>
              <p>
                Placed behind the teeth, these braces are completely hidden and
                ideal for those seeking a discreet option.
              </p>
            </div>

            <div className="braces_card">
              <img src={metalBrace} alt="Clear Aligners" />
              <h3>Clear Aligners</h3>
              <p>
                Removable and nearly invisible, aligners are comfortable and
                best suited for mild to moderate alignment issues.
              </p>
            </div>
          </div>
        </div>
      </div>


      <div className="parent second_parent">
        <div className="cont second_cont">
          <div className="general_left">
            <img src={img1} alt="General Dental Service" />
          </div>
          <div className="general_right">
            <h2>Role of X-rays & Scans in Orthodontic Treatment </h2>
            <ul style={{ paddingLeft: "20px" }}>
              <li>
                <b>Accurate Diagnosis</b> : Detects hidden issues like impacted
                teeth or jaw problems
              </li>
              <li>
                <b>Treatment Planning </b> : Helps create a precise,
                personalized braces plan
              </li>
              <li>
                <b>Progress Monitoring </b> : Tracks tooth movement and guides
                adjustments
              </li>
              <li>
                <b>Better Precision </b> : Ensures proper alignment for optimal
                results
              </li>
            </ul>
          </div>
        </div>
      </div>


      <div className="faq_section">
        <div className="faq_header">
          <h2>FAQs</h2>
          <p>
            Answers to the most common questions about our general dental care.
          </p>
        </div>

        <div className="faq_list">
          {faqs.map((item, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={index}
                className={`faq_item ${isOpen ? "open" : ""}`}
                onClick={() => toggleFaq(index)}
              >
                <button className="faq_question" type="button">
                  <span>{item.question}</span>
                  <span className="faq_toggle">{isOpen ? "▲" : "▼"}</span>
                </button>
                <div className="faq_answer">
                  <p>{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>






      <div className="parent gallery_parent" style={{ background: "var(--white)" }}>
        <div className="cont gallery_cont">
          <div className="gallery_header">
            <h2>Clinic Gallery</h2>
          </div>
          <div className="gallery_slider">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={24}
              slidesPerView={4}
              navigation={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                0: { slidesPerView: 1, spaceBetween: 16 },
                600: { slidesPerView: 2, spaceBetween: 18 },
                900: { slidesPerView: 3, spaceBetween: 20 },
                1200: { slidesPerView: 4, spaceBetween: 24 },
              }}
            >
              {[gallery1, gallery1, gallery1, gallery1].map((src, index) => (
                <SwiperSlide key={index}>
                  <div className="gallery_card">
                    <img src={src} alt={`Clinic slide ${index + 1}`} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrthodonticTreatments;
