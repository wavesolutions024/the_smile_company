import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./ZirconiaCrowns.scss";
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

const ZirconiaCrowns = () => {
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
          Zirconia Crowns in Kharadi, Pune | Zirconia
          Tooth Caps
        </title>
        <meta
          name="description"
          content="Get zirconia dental crowns in 
Kharadi, Pune at Denza Dental Center. Learn 
about zirconia crowns, benefits, durability, 
appearance, suitability and zirconia tooth cap 
cost."
        />

        <link
          rel="canonical"
          href="https://denzadental.com/zirconia-crowns"
        />

        <meta
          name="keywords"
          content=" 
zirconia crowns Kharadi, 
zirconia crowns Pune, 
zirconia dental crowns Kharadi, 
zirconia dental crowns Pune, 
zirconia tooth cap Kharadi, 
zirconia tooth cap Pune, 
zirconia dental cap Kharadi, 
zirconia dental cap Pune, 
zirconia crown dentist Kharadi, 
zirconia crown clinic Kharadi, 
zirconia crown treatment Pune, 
zirconia crown near Kharadi, 
zirconia crown near me Kharadi, 
zirconia crown cost Kharadi, 
zirconia crown cost Pune, 
zirconia tooth cap cost Pune, 
zirconia crown price Kharadi, 
zirconia crown price Pune, 
best zirconia crowns Kharadi, 
aesthetic dental crowns Pune, 
tooth colored crowns Kharadi, 
ceramic dental crowns Pune, 
dental crowns after root canal Kharadi, 
dental crown replacement Pune, 
dental crowns Kharadi Pune, 
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
          content="Zirconia Crowns in Kharadi, Pune | 
Zirconia Tooth Caps"
        />
        <meta
          property="og:description"
          content="Zirconia dental crowns in Kharadi, 
Pune at Denza Dental Center. Explore zirconia 
crown benefits, durability, appearance, suitability 
and cost."
        />
        <meta
          property="og:url"
          content="https://denzadental.com/zirconia-crowns
"
        />
        <meta
          property="og:image"
          content="https://denzadental.com/og-image.jpg"
        />
        <meta
          property="og:image:alt"
          content="Zirconia dental crowns at Denza 
Dental Center in Kharadi, Pune"
        />
        <meta
          property="og:locale"
          content="en_IN"
        />
      </Helmet>
      <PageTop title="Zirconia Crowns Services" />

      <div className="after_care_parent parent">
        <div className="after_care_cont cont">
          <h2>Advantages of Zirconia Dental Crowns</h2>

          <p>
            Zirconia crowns resemble your teeth in most instances. Though they cannot be bleached or whitened
            after fitting, the crowns don’t lose their original color due to staining.
          </p>

          <ul>
            <li>Durability </li>
            <li>Strength</li>
            <li>Comfort </li>
            <li>Color</li>
            <li>Biocompatibility</li>
            <li>Aesthetic</li>
          </ul>

          <p>
            The ceramic crown can cause additional wear and tear in the teeth surrounding it. However, we know how
            to minimize this impact and ensure that all your teeth will be healthy and strong. The Zirconia tooth cap
            cost in Pune is affordable (and depends on the patient’s dental condition).
          </p>
          <p>
            Call us to book an appointment and get Zirconia dental crowns fitted in a single visit.
          </p>

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

export default ZirconiaCrowns;
