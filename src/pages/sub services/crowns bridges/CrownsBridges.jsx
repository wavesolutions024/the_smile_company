import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./CrownsBridges.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import img1 from "../../../assets/general_service/img.webp";
import gallery1 from "../../../assets/about_page/after1.webp";
import apointment from "../../../assets/aapointment.webp";
import PageTop from "../../../comp/page_top/PageTop";
import { Helmet } from "react-helmet";

const whyChooseData = [
  {
    icon: "👨‍⚕️",
    title: "Expert Care with Global Exposure ",
    description:
      "Our skilled dentists bring international exposure and extensive experience, ensuring precise and high-quality results in every crowns and bridges procedure. ",
  },
  {
    icon: "🦷",
    title: "Advanced Digital Technology ",
    description:
      "We use modern digital tools and advanced scanning technology to design and create accurate, well-fitting crowns and bridges with enhanced efficiency and comfort. ",
  },
  {
    icon: "💰",
    title: "Use of High-Quality Materials ",
    description:
      "We prioritize premium dental materials that ensure durability, strength, and a natural-looking finish that blends seamlessly with your teeth.",
  },
  {
    icon: "😊",
    title: "Personalized Treatment Plans",
    description:
      "Every crowns and bridges procedure is customized to suit your specific dental needs, ensuring optimal comfort, function, and long-term success. ",
  },
  {
    icon: "😊",
    title: "Comprehensive Dental Care",
    description:
      "From consultation to final placement and follow-ups, we provide complete care to ensure the best possible treatment outcomes.",
  },
  {
    icon: "😊",
    title: "Patient-Centric Approach",
    description:
      "Your comfort is our priority. We guide you through every step with clear communication, helping you make confident and informed decisions.",
  },
  {
    icon: "😊",
    title: "Affordable and Transparent Pricing ",
    description:
      " We offer competitive pricing with clear cost breakdowns, making high-quality dental care accessible without compromising on standards.",
  },
];

const services = [
  {
    title: " Initial Consultation ",
    description:
      "We begin with a comprehensive dental evaluation, including X-rays and advanced digital scans, to assess your oral health. Our team discusses your concerns and explains suitable crown and bridge treatment options to help you make an informed decision.",
  },
  {
    title: "  Personalized Treatment Planning ",
    description:
      "Using digital technology, we create a customized treatment plan tailored to your dental needs. This ensures precision, efficiency, and predictable results. ",
  },
  {
    title: "Tooth Preparation & Digital Impressions ",
    description:
      "For crowns, the affected tooth is reshaped, while for bridges, adjacent teeth or implants are prepared. We then take accurate digital impressions using intra-oral scanning for a precise fit. ",
  },
  {
    title: " Temporary Restoration (If Required) ",
    description:
      "If needed, temporary crowns or bridges are placed to protect your teeth while your permanent restoration is being prepared.",
  },
  {
    title: "Advanced Fabrication  ",
    description:
      "Your custom crown or bridge is designed using modern CAD/CAM technology, allowing for quick, precise, and high-quality restorations using premium materials.  ",
  },
  {
    title: " Fitting & Adjustments ",
    description:
      " The final restoration is carefully placed and adjusted to ensure proper fit, bite alignment, and comfort. ",
  },
  {
    title: "Final Placement & Care Guidance  ",
    description:
      " Once perfected, the crown or bridge is securely fixed in place. We also provide detailed aftercare instructions to maintain longevity and oral health.",
  },
  {
    title: " Follow-Up Care ",
    description:
      "Regular follow-ups are scheduled to monitor your progress and ensure long-term success of your dental crowns or bridges.  ",
  },
];

const faqs = [
  {
    question: " Will getting a crown or bridge hurt?",
    answer:
      "The procedure is carried out under anesthesia, so you won’t feel pain during treatment. Mild sensitivity afterward is normal and settles quickly..  ",
  },
  {
    question: "How durable are dental crowns and bridges? ",
    answer:
      " They are designed to be long-lasting and can serve you well for years with good oral hygiene and routine dental check-ups.",
  },
  {
    question: "Is it possible to eat normally after the treatment? ",
    answer:
      "Yes, once your crown or bridge is placed, you can return to regular eating habits, with minor precautions initially. ",
  },
  {
    question: "How are crowns different from bridges?",
    answer:
      "Crowns are used to restore and protect a single damaged tooth, whereas bridges are used to replace one or more missing teeth. ",
  },
  {
    question: "What if my crown or bridge gets damaged later?",
    answer:
      "If needed, they can be repaired or replaced to restore proper function and appearance. ",
  },

];

const CrownsBridges = () => {
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      offset: 120,
    });
    AOS.refresh();
  }, []);


  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      <Helmet>
        <title>
          Dental Crowns & Bridges in Kharadi, Pune |
          Denza Dental
        </title>
        <meta
          name="description"
          content="Get dental crowns and bridges in 
Kharadi, Pune at Denza Dental Center. Restore 
damaged teeth, replace missing teeth and 
improve function with customized restorative 
dental solutions."
        />

        <link
          rel="canonical"
          href="https://denzadental.com/crowns-bridges"
        />

        <meta
          name="keywords"
          content=" 
dental crowns Kharadi, 
dental crowns Pune, 
dental bridges Kharadi, 
dental bridges Pune, 
crowns and bridges Kharadi, 
crowns and bridges Pune, 
dental crown dentist Kharadi, 
dental bridge dentist Kharadi, 
dental crown clinic Kharadi, 
dental bridge clinic Kharadi, 
tooth crown Kharadi, 
tooth crown Pune, 
dental cap Kharadi, 
dental cap Pune, 
tooth cap Kharadi, 
tooth cap Pune, 
dental crown treatment Kharadi, 
dental bridge treatment Pune, 
dental crowns near Kharadi, 
dental bridges near Kharadi, 
dental crowns near me Kharadi, 
dental bridge near me Kharadi, 
dental crown cost Kharadi, 
dental crown cost Pune, 
dental bridge cost Kharadi, 
dental bridge cost Pune, 
dental crown price Pune, 
dental bridge price Pune, 
crown after root canal Kharadi, 
dental crowns after root canal Pune, 
missing tooth bridge Kharadi, 
replacement tooth bridge Pune, 
zirconia crowns Kharadi, 
ceramic crowns Pune, 
restorative dentistry Kharadi, 
restorative dentist Kharadi, 
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
          content="Dental Crowns & Bridges in 
Kharadi, Pune | Denza Dental"
        />
        <meta
          property="og:description"
          content="Dental crowns and bridges in 
Kharadi, Pune at Denza Dental Center for 
restoring damaged teeth and replacing missing 
teeth."
        />
        <meta
          property="og:url"
          content="https://denzadental.com/crowns-bridges"
        />
        <meta
          property="og:image"
          content="https://denzadental.com/og-image.jpg"
        />
        <meta
          property="og:image:alt"
          content="Dental crowns and bridges at 
Denza Dental Center in Kharadi, Pune"
        />
        <meta
          property="og:locale"
          content="en_IN"
        />
      </Helmet>
      <PageTop title="Crowns Bridges Services" />

      <div className="parent second_parent">
        <div className="cont second_cont">
          <div className="general_left">
            <img src={img1} alt="General Dental Service" />
          </div>
          <div className="general_right">
            <h2>What Are Dental Crowns?  </h2>
            <p>
              Dental crowns are custom-made caps designed to cover and protect damaged or
              weakened teeth. At Denza Dental, each crown is carefully crafted to restore the
              tooth’s shape, size, strength, and natural appearance, ensuring both function and
              aesthetics. Using advanced techniques and high-quality materials, crowns
              provide long-lasting protection while seamlessly blending with your natural teeth.
              They are an effective solution for preserving tooth structure, improving bite
              function, and enhancing overall smile confidence.
            </p>


          </div>
        </div>
      </div>

      <div className="parent braces_treat_parent">
        <div className="cont braces_treat_cont">
          <div className="braces_treat_right">
            <h2>What Are Dental Bridges?  </h2>
            <p>
              Dental bridges are a reliable solution for replacing one or more missing teeth by filling
              the gap with artificial teeth (pontics) anchored to adjacent natural teeth or dental
              implants. At Denza Dental, bridges are custom-designed to blend seamlessly with your
              natural teeth, restoring both function and aesthetics. They help improve chewing and
              speaking ability, prevent surrounding teeth from shifting out of place, and maintain facial
              structure, avoiding a sunken or aged appearance.
            </p>

          </div>

          <div className="braces_treat_left">
            <img src={img1} alt="General Dental Service" />
          </div>
        </div>
      </div>

      <div className="second_section">
        <div className="second_section_container">
          <div className="second_section_header">
            <h2>Why Choose Denza Dental for Dental Crowns and Bridges in Pune? </h2>
            <p>

            </p>
          </div>

          <div className="why_choose_cards">
            {whyChooseData.map((item, index) => (
              <div key={index} className="why_choose_card" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="card_icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>


      <div className="third_section">
        <div className="third_header">
          <h2>Treatment Process for Dental Crowns and Bridges </h2>
          <p>

          </p>
        </div>

        <div className="service_cards">
          {services.map((service, index) => (
            <div key={index} className="service_card" data-aos="fade-up" data-aos-delay={index * 100}>
              <p className="service_card_index">{index + 1}.</p>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="after_care_parent parent">
        <div className="after_care_cont cont">
          <h2>Benefits of Dental Crowns and Bridges
          </h2>

          <ul>
            <li>
              <b>Restores Tooth Function: </b>Ensures proper chewing and speaking.
            </li>

            <li>
              <b>Protects Vulnerable Teeth: </b>Prevents further damage.
            </li>

            <li>
              <b>Improves Aesthetics: </b>Enhances your smile with a natural look.
            </li>

            <li>
              <b>Durable and Long-Lasting: </b>Made from strong materials.
            </li>

            <li>
              <b>Restores Tooth Shape and Size: </b>Corrects size and shape for improved functionality.
            </li>

            <li>
              <b>Supports Large Fillings: </b>Ideal for large fillings with insufficient tooth structure.
            </li>

            <li>
              <b>Fills Gaps from Missing Teeth: </b>Restores chewing and speaking abilities.
            </li>

            <li>
              <b>Prevents Teeth Shifting: </b>Maintains proper alignment.
            </li>

            <li>
              <b>Supports Facial Structure: </b>Prevents a sunken appearance from tooth loss.
            </li>

          </ul>
        </div>
      </div>



      <div className="faq_section1">
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

      <div className="parent gallery_parent">
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
                  <div className="gallery_card" data-aos="fade-up" data-aos-delay={index * 100}>
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

export default CrownsBridges;
