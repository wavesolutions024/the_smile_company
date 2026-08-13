import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./ToothColoredFilling.scss";
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
    title: "Experienced Team",
    description:
      "AO Dentistry boasts a team of skilled and experienced dentists who specialize in various fields of dentistry. From general dental check-ups in Pune to more complex treatments, you can be sure you're in good hands.",
  },
  {
    icon: "🦷",
    title: "Advanced Technology",
    description:
      "The clinic is equipped with the latest dental technologies to ensure that every dental check-up is thorough and accurate. Digital X-rays, intraoral cameras, and advanced diagnostic tools help in identifying even the smallest issues during the dental examination.",
  },
  {
    icon: "💰",
    title: "Affordable Packages",
    description:
      "AO Dentistry offers a range of affordable packages for dental check-ups in Pune. The clinic understands that dental care should be accessible to everyone and provides flexible payment options to make it easier for patients.",
  },
  {
    icon: "😊",
    title: "Patient-Centric Approach",
    description:
      "What truly sets AO Dentistry apart is its patient-centric approach. Every patient receives personalized care based on their specific needs. Our dentists take the time to understand your concerns, explain procedures, and ensure you're comfortable throughout.",
  },
];

const services = [
  {
    title: " Composite Resin Fillings",
    description:
      "These are the most commonly used tooth-colored fillings. They blend naturally with your teeth, making them ideal for visible areas like front teeth. They also bond directly to the tooth, providing good strength and support.",
  },
  {
    title: "Ceramic Fillings",
    description:
      "Ceramic fillings are made from porcelain and offer excellent durability and stain resistance. They closely match the natural tooth color and are a great option for patients looking for long-lasting and aesthetic results.  ",
  },
  {
    title: "Glass Ionomer Fillings",
    description:
      "These fillings release fluoride, which helps protect the tooth from further decay. They are usually recommended for areas that are not under heavy chewing pressure and are often used for children or near the gum line. ",
  },
  {
    title: " Compomer Fillings ",
    description:
      "A combination of composite resin and glass ionomer, compomer fillings provide both aesthetics and some fluoride release. They are a good option for moderate restorations where both strength and appearance matter.",
  },

];

const faqs = [
  {
    question: " What are tooth-colored fillings?  ",
    answer:
      " Tooth-colored fillings at Denza Dental are made from composite resin that matches your natural tooth shade, providing a seamless and aesthetic restoration for cavities or minor damage.  ",
  },
  {
    question: "How long does a tooth-colored filling procedure take?",
    answer:
      " At Denza Dental, a tooth-colored filling usually takes about 30 to 60 minutes, depending on the size of the cavity and the condition of the tooth.  ",
  },
  {
    question: "Are tooth-colored fillings better than metal fillings?",
    answer:
      " Yes, tooth-colored fillings are preferred for their natural appearance, strong bonding to the tooth, and mercury-free composition, making them a safer and more aesthetic option.",
  },
  {
    question: "Can tooth-colored fillings break or wear out? ",
    answer:
      " Like any dental restoration, tooth-colored fillings can wear over time. However, with proper care and regular check-ups at Denza Dental, they can last for many years.  ",
  },
  {
    question: " Can I eat immediately after getting a tooth-colored filling?",
    answer:
      "You can usually eat soon after the procedure, but it’s best to avoid hard or sticky foods for a few hours to allow the filling to settle properly.",
  },

];

const ToothColoredFilling = () => {
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
          Tooth-Coloured Fillings in Kharadi, Pune |
          Denza Dental
        </title>
        <meta
          name="description"
          content="Get tooth-coloured dental fillings in 
Kharadi, Pune at Denza Dental Center. Restore 
cavities and minor tooth damage with 
natural-looking filling materials designed to blend 
with your teeth."
        />

        <link
          rel="canonical"
          href="https://denzadental.com/tooth-coloured-fillin
g"
        />

        <meta
          name="keywords"
          content=" 
tooth coloured fillings Kharadi, 
tooth colored fillings Kharadi, 
tooth coloured fillings Pune, 
tooth colored fillings Pune, 
dental fillings Kharadi, 
dental fillings Pune, 
tooth filling Kharadi, 
tooth filling Pune, 
composite fillings Kharadi, 
composite fillings Pune, 
white dental fillings Kharadi, 
white fillings Pune, 
cavity filling Kharadi, 
cavity filling Pune, 
cavity treatment Kharadi, 
dental cavity treatment Pune, 
tooth decay treatment Kharadi, 
tooth decay treatment Pune, 
aesthetic dental fillings Kharadi, 
tooth restoration Kharadi, 
dental restoration Pune, 
dental filling dentist Kharadi, 
dental filling clinic Kharadi, 
dental fillings near me Kharadi, 
tooth filling near Kharadi, 
composite resin filling Pune, 
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
          content="Tooth-Coloured Fillings in Kharadi, 
Pune | Denza Dental"
        />
        <meta
          property="og:description"
          content="Tooth-coloured dental fillings at 
Denza Dental Center in Kharadi, Pune for cavities 
and minor tooth damage, using natural-looking 
restorative materials."
        />
        <meta
          property="og:url"
          content="https://denzadental.com/tooth-coloured-f
illing"
        />
        <meta
          property="og:image"
          content="https://denzadental.com/og-image.jpg"
        />
        <meta
          property="og:image:alt"
          content="Tooth-coloured dental fillings at 
Denza Dental Center in Kharadi, Pune"
        />
        <meta
          property="og:locale"
          content="en_IN"
        />
      </Helmet>
      <PageTop title="Tooth Colored Fillings Services" />

      <div className="wisdom_tooth_extract_parent parent">
        <div className="wisdom_tooth_extract_cont cont">
          <h2>Why Choose Denza Dental for Tooth-Colored Fillings in Pune?</h2>

          <div>
            <p>
              At Denza Dental, our experienced dentists provide tooth-colored
              fillings with precision and care, ensuring natural-looking and
              long-lasting results. Using advanced techniques and high-quality
              materials, we restore your teeth in a way that blends seamlessly
              with your natural smile.
            </p>

            <p>
              We focus on personalized treatment for every patient, carefully
              assessing your dental needs to deliver the best outcome. Known for
              reliable and effective dental care in Pune, Denza Dental helps you
              regain both function and confidence with comfortable, aesthetic
              fillings.
            </p>

            <p>
              Denza Dental prioritizes the use of high-quality dental materials
              to ensure durability, safety, and long-lasting results. This
              commitment enhances the effectiveness of treatments and supports
              better oral health outcomes. It also reflects the clinic’s focus
              on delivering reliable, world-class dental care.
            </p>
          </div>
        </div>
      </div>

      <div className="book_appoint">
        <div className="book_appoint_container" data-aos="fade-up">
          <div className="book_appoint_text">
            <h2> Reasons for Dental Fillings</h2>
            <p>
              Dental fillings are commonly used to treat tooth decay by restoring areas
              affected by cavities. They are also effective in repairing chipped or cracked
              teeth, helping to bring back the tooth’s strength and structure. By filling
              damaged areas, they prevent further decay or infection and stop cavities
              from spreading.
            </p>

            <p>
              In addition, dental fillings improve the overall function of your teeth, making
              chewing and biting comfortable again. They can also enhance the
              appearance of discolored teeth by blending naturally with your tooth color.
              Fillings help reduce tooth sensitivity by sealing exposed areas and
              protecting the tooth from hot and cold temperatures.
            </p>

          </div>

          <div className="book_appoint_side red_background">
            <img src={apointment} alt="Dental Appointment " />
          </div>
        </div>
      </div>

      {/*
      <div className="second_section">
        <div className="second_section_container">
          <div className="second_section_header">
            <h2> What Happens During a Dental Check-up? </h2>
            <p>
              Choosing AO Dentistry for your dental check-up in Pune means
              trusting an experienced team that is dedicated to providing the
              best care possible. AO Dentistry stands out for several reasons:
            </p>
          </div>

          <div className="why_choose_cards">
            {whyChooseData.map((item, index) => (
              <div
                key={index}
                className="why_choose_card"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="card_icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      */}


      <div className="third_section">
        <div className="third_header">
          <h2> Types Of Tooth Fillings </h2>
          <p>

          </p>
        </div>

        <div className="service_cards">
          {services.map((service, index) => (
            <div
              key={index}
              className="service_card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <p className="service_card_index">{index + 1}.</p>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="book_appoint">
        <div className="book_appoint_container" data-aos="fade-up">
          <div className="book_appoint_text">
            <h2>Dental Filling Recovery and Aftercare – Denza Dental </h2>
            <p>
              Most patients at Denza Dental experience little to no discomfort after a dental filling and can return to their
              daily routine right away. Any mild sensitivity usually settles within a few days as the tooth adjusts to the
              new filling.
            </p>

            <p>
              To ensure the best results, it is important to avoid chewing on the treated tooth for the first 24 hours so the
              filling can properly set. Maintaining good oral hygiene by brushing twice a day and flossing regularly helps
              keep the filling and surrounding teeth healthy. Regular dental check-ups at Denza Dental are also
              essential to monitor the condition of the filling and ensure long-term oral health.
            </p>

          </div>

          <div className="book_appoint_side red_background">
            <img src={apointment} alt="Dental Appointment " />
          </div>
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
                  <div
                    className="gallery_card"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
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

export default ToothColoredFilling;
