import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./CompositeVeeners.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import img1 from "../../../assets/general_service/img.webp";
import gallery1 from "../../../assets/about_page/after1.webp";
import apointment from "../../../assets/aapointment.webp";

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
    title: "Quick Discussion",
    description:
      "The dentist talks with you about any pain, concerns, or changes you’ve noticed. This helps focus on what matters most to you. ",
  },
  {
    title: "Mouth Check ",
    description:
      "Your teeth, gums, and overall oral health are carefully checked to spot cavities, gum issues, or other problems early. ",
  },
  {
    title: "X-rays (Only if Needed)",
    description:
      "If required, X-rays are taken to see what’s happening beneath the surface, like hidden decay or jaw issues.",
  },
  {
    title: " Deep Cleaning ",
    description:
      "Plaque and tartar are removed, and your teeth are polished to make them feel clean and smooth.",
  },
  {
    title: "Next Steps & Advice ",
    description:
      "You’ll get clear guidance on your dental health, tips to improve your routine, and recommendations if any treatment is needed. ",
  },
];

const faqs = [
  {
    question: "Do Dental Check-ups at Denza Dental Hurt? ",
    answer:
      "No, dental check-ups at Denza Dental are gentle and comfortable. You may feel slight sensitivity during cleaning, but the process is quick and handled with care. ",
  },
  {
    question: "How Long Does a Check-up at Denza Dental Take?",
    answer:
      "A routine dental check-up at Denza Dental usually takes about 30 to 45 minutes, depending on your oral health and any additional care required. ",
  },
  {
    question: "Can I Eat Before Visiting Denza Dental? ",
    answer:
      "Yes, you can eat before your appointment at Denza Dental. However, brushing your teeth beforehand is recommended for a smoother examination.",
  },
  {
    question: "Do I Need a Check-up at Denza Dental If I Have No Pain?",
    answer:
      "Absolutely. At Denza Dental, we emphasize preventive care since many dental issues develop without pain. Regular visits help catch problems early. ",
  },
  {
    question: "Are X-rays at Denza Dental Safe?",
    answer:
      "Yes, Denza Dental uses modern digital X-ray technology with minimal radiation, ensuring safe and accurate diagnosis when needed.",
  },
  {
    question: "How Often Should I Visit Denza Dental for Cleaning?",
    answer:
      "Denza Dental recommends professional teeth cleaning every 6 months, though it may vary based on your individual dental needs.",
  },
];

const  CompositeVeeners  = () => {
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
      <div className="parent general_dental_parent bg-img-cover">
        <marquee behavior="scroll" direction="left" scrollamount="20">
          Welcome to our General Dental Services!
        </marquee>
        <div className="cont general_dental_cont">
          <div className="bts_grp">
            <div className="service1_btn ">Book Consultant</div>
            <div className="service1_btn call_btn">Call +9865213025</div>
            <div className="service1_btn">Get Directions</div>
          </div>
        </div>
      </div>

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
          <h2> What Happens During a Dental Check-up? </h2>
          <p>
            We offer a wide range of general dental services to meet all your
            oral health needs. Our team of experienced dentists is dedicated to
            providing you with the best possible care.
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

      <div className="book_appoint">
          <div className="book_appoint_container" data-aos="fade-up">
          <div className="book_appoint_text">
            <h2>How to Book Your Dental Check-up at AO Dentistry</h2>
            <p>
              Booking your dental check-up at AO Dentistry is quick and easy. We
              offer several options to accommodate your schedule and
              preferences:
            </p>

            <ol>
              <li>
                <strong>Online Booking:</strong> Schedule your appointment
                <span> www.denza.com</span> through our website. Pick a date and
                time that suits you, and we’ll confirm your booking quickly.
              </li>
              <li>
                <strong>Call Us Directly :</strong> Prefer to speak with
                someone? Give us a call and our team will help you find the best
                available time for your visit.
              </li>
              <li>
                <strong>Walk-in Visits :</strong> Need urgent care or nearby?
                You’re welcome to walk in. We do our best to accommodate you as
                quickly as possible.
              </li>
              <li>
                <strong>Visit Our Clinic :</strong>Denza Dental is conveniently
                located in Pune, making it easy for you to access quality dental
                care. Our clinic is Open all <strong>7 days</strong> ,
                <strong> 9:00 AM – 9:00 PM</strong>.
              </li>

              <li>
                <strong>Get in Touch :</strong>Have questions or need help
                booking? Reach out to us via call, WhatsApp, or email—we’re here
                to assist you every step of the way.
              </li>
            </ol>
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
                data-aos="fade-up"
                data-aos-delay={index * 50}
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

export default  CompositeVeeners ;
