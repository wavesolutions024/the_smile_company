import React, { useState, useRef } from "react";
import "./Home.scss";
import HeroSection from "../../comp/Hero_section/HeroSection";
import Button from "../../comp/button/Button";
import Appointment from "../../comp/appointment/Appointment";
import abt_img from "../../assets/about_section/img5.webp";
import img5 from "../../assets/about_section/img4.webp";
import img4 from "../../assets/about_section/img5.webp";
import icon1 from "../../assets/about_section/medical-symbol.png";
import icon2 from "../../assets/about_section/medicine.png";
import icon3 from "../../assets/about_section/doctor.png";
import doctorImg from "../../assets/about_page/woman_dr.jpg";
import { Link } from "react-router-dom";
import { IoArrowForwardOutline } from "react-icons/io5";
import {
  FaLaptopMedical,
  FaUserMd,
  FaSmileBeam,
  FaShieldAlt,
  FaHandsHelping,
  FaStar,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../assets/before_after/img1.jpg";
import img2 from "../../assets/before_after/img2.jpg";
import img3 from "../../assets/before_after/img3.jpg";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

import { Navigation, Autoplay } from "swiper/modules";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import "swiper/css";
import "swiper/css/navigation";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import Testimonials from "../../comp/testimonials/Testimonials";
import { Helmet } from "react-helmet";

const Home = () => {
  // const [accordian, setLeftAccordion] = useState(0);
  const [leftAccordion, setLeftAccordion] = useState(0);
  const [rightAccordion, setRightAccordion] = useState(0);
  const [sliderPositions, setSliderPositions] = useState({});
  const sliderRefs = useRef({});

  const handleSliderMove = (e, index) => {
    e.stopPropagation();
    if (!sliderRefs.current[index]) return;

    const rect = sliderRefs.current[index].getBoundingClientRect();
    let x;

    // Handle both mouse and touch events
    if (e.clientX !== undefined) {
      x = e.clientX - rect.left;
    } else if (e.touches && e.touches[0]) {
      x = e.touches[0].clientX - rect.left;
    } else {
      return;
    }

    const percent = (x / rect.width) * 100;

    if (percent >= 0 && percent <= 100) {
      setSliderPositions((prev) => ({
        ...prev,
        [index]: percent,
      }));
    }
  };

  const accordianContent = [
    {
      title: "Internationally Experienced Dental Specialists",
      description:
        "Our team of highly qualified dentists brings international expertise and advanced clinical knowledge to every treatment. We stay updated with the latest global dental practices to ensure you receive world-class care with precision and excellence.",
    },
    {
      title: "Advanced Technology",
      description:
        "We use state-of-the-art dental equipment and digital technology to deliver accurate diagnoses, minimally invasive procedures, and faster recovery. Our modern approach ensures safe, efficient, and comfortable treatments for every patient.",
    },
    {
      title: "Patient Comfort",
      description:
        "Your comfort is at the heart of everything we do. From a welcoming environment to gentle treatment techniques, we strive to make every visit relaxing, pain-free, and stress-free for patients of all ages.",
    },
    {
      title: "Safe & Hygienic",
      description:
        "We maintain the highest standards of sterilization and infection control, following strict international safety protocols. Every instrument and treatment area is thoroughly sanitized to ensure a clean and safe environment.",
    },
    {
      title: "Transparent & Ethical Care",
      description:
        "We believe in honesty, integrity, and clear communication. You'll receive detailed treatment explanations, transparent pricing, and personalized care recommendations—without unnecessary procedures or hidden costs.",
    },
  ];

  const data = [img1, img2, img3, img1, img2, img3, img1, img2, img3];

  const counter = [
    {
      title: "Happy Patients",
      count: 450,
      suffix: "K",
      icon: icon1,
    },
    {
      title: "Specialists",
      count: 200,
      suffix: "K",
      icon: icon2,
    },
    {
      title: "Winning Awards",
      count: 150,
      icon: icon3,
    },
  ];

  const doctors = [
    {
      name: "Dr. Aneesha Sharma",
      title: "Cosmetic Dentist",
      image: doctorImg,
      description:
        "Expert in smile design and minimal invasive cosmetic dental care.",
    },
    {
      name: "Dr. Onkar Patel",
      title: "Implant Specialist",
      image: doctorImg,
      description:
        "Experienced implant surgeon focused on comfortable patient outcomes.",
    },
    {
      name: "Dr. Riya Mehra",
      title: "Laser Dentistry",
      image: doctorImg,
      description:
        "Provides advanced laser dentistry and pain-free treatments.",
    },
  ];

  const clinicImages = [img4, img4, img4, img4, img4, img4, img4, img4];

  const featureCards = [
    {
      title: "Smile Makeover Center",
      icon: <FaSmileBeam />,
    },
    {
      title: "Specialist Implant Center",
      icon: <FaUserMd />,
    },
    {
      title: "Painless Root Canal Center",
      icon: <FaHandsHelping />,
    },
    {
      title: "Advanced Technology",
      icon: <FaLaptopMedical />,
    },
    {
      title: "Expert Dentists",
      icon: <FaUserMd />,
    },
    // {
    //   title: "Painless Treatment",
    //   icon: <FaSmileBeam />,
    // },
    {
      title: "High Hygiene Standards",
      icon: <FaShieldAlt />,
    },
    {
      title: "Personalized Care",
      icon: <FaHandsHelping />,
    },
    {
      title: "Trusted by Patients",
      icon: <FaStar />,
    },
    {
      title: "World-Class Dentistry",
      icon: <FaLaptopMedical />,
    },
    {
      title: "International Expertise",
      icon: <FaUserMd />,
    },
    {
      title: "Global Sterilization Standards",
      icon: <FaShieldAlt />,
    },
    {
      title: "Comfort-First Care",
      icon: <FaSmileBeam />,
    },
    {
      title: "Safe & Gentle Procedures",
      icon: <FaShieldAlt />,
    },
    {
      title: "Excellence in Every Smile",
      icon: <FaStar />,
    },
    {
      title: "Child-Friendly Dental Care",
      icon: <FaSmileBeam />,
    },
  ];

  const textTestimonials = [
    {
      id: 1,
      name: "Sarah Jones",
      title: "Marketing Director",
      quote:
        "This product has significantly improved our team’s productivity. Highly recommended!",
      image: img4,
    },
    {
      id: 2,
      name: "David Smith",
      title: "Project Manager",
      quote:
        "Exceptional service and support. The results have exceeded our expectations.",
      image: img4,
    },
    {
      id: 3,
      name: "Emily White",
      title: "Business Owner",
      quote:
        "A fantastic experience from start to finish. We couldn't be happier with the outcome.",
      image: img4,
    },
    {
      id: 4,
      name: "Michael Brown",
      title: "Operations Lead",
      quote:
        "Professional, friendly, and attentive throughout the whole process.",
      image: img4,
    },
  ];

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      offset: 120,
    });
    AOS.refresh();
  }, []);

 const schema = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  "@id": "https://www.denzadental.com/#dentist",

  name: "Denza Dental Center",

  description:
    "Denza Dental Center is a multispecialty dental clinic in Kharadi, Pune offering dental implants, smile makeovers, root canal treatment, full mouth rehabilitation, cosmetic dentistry, orthodontics, pediatric dentistry and advanced dental care.",

  url: "https://www.denzadental.com/",
  telephone: "+91-7028131132",

  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Office No. 111, First Floor, Zen Square, Opp. Marvel Enigma, Kharadi",
    addressLocality: "Pune",
    addressRegion: "Maharashtra",
    postalCode: "411014",
    addressCountry: "IN",
  },

  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "09:00",
    closes: "21:00",
  },

  sameAs: [
    "https://www.facebook.com/people/Denza-Dental-Center/61575538874507/",
    "https://www.instagram.com/denzadentalcenter/",
    "https://www.youtube.com/@DenzaDentalCenter",
  ],

  image: "https://www.denzadental.com/og-image.jpg",

  logo: {
    "@type": "ImageObject",
    url: "https://www.denzadental.com/og-image.jpg",
  },

  hasMap: "https://maps.app.goo.gl/MgrEKEfafiLS9KiN9",

  employee: [
    {
      "@type": "Person",
      name: "Dr. Hemant Suresh Thodsare",
      jobTitle: "Co-founder, Prosthodontist & Implantologist",
      worksFor: {
        "@id": "https://www.denzadental.com/#dentist",
      },
    },
    {
      "@type": "Person",
      name: "Dr. Devika Kalaskar-Thodsare",
      jobTitle: "Co-founder, Endodontist & Esthetic Dentist",
      worksFor: {
        "@id": "https://www.denzadental.com/#dentist",
      },
    },
  ],

  areaServed: {
    "@type": "City",
    name: "Pune",
  },
};

  return (
    <>
      <Helmet>
        <title>
          Denza Dental Center | Dental Implants & Smile Makeover in Kharadi,
          Pune
        </title>

        <meta
          name="description"
          content="Denza Dental Center is a multispecialty dental clinic in Kharadi, Pune offering dental implants, smile makeovers, root canal treatment, full mouth rehabilitation, cosmetic dentistry, orthodontics, pediatric dentistry and advanced dental care."
        />

        <meta
          name="keywords"
          content="Denza Dental Center, Denza Dental, Denza Dentistry, Denza Dental Center Kharadi, Denza Dental Center Pune, dental clinic in Kharadi Pune, dentist in Kharadi Pune, best dental clinic in Kharadi, dentist near Marvel Enigma Kharadi, dental clinic near Marvel Enigma, multispecialty dental clinic Kharadi, dental implants Kharadi Pune, dental implant centre Kharadi, dental implants Pune, smile makeover Kharadi Pune, smile makeover Pune, smile designing Kharadi, cosmetic dentistry Kharadi Pune, cosmetic dentist Kharadi, root canal treatment Kharadi Pune, root canal dentist Kharadi, full mouth rehabilitation Kharadi, full mouth rehabilitation Pune, restorative dentistry Kharadi, restorative dentistry Pune, orthodontist Kharadi Pune, orthodontic treatment Kharadi, pediatric dentist Kharadi Pune, pediatric dentistry Punei, dental checkup Kharadi, preventive dentistry Kharadi, teeth cleaning Kharadi Pune, GBT cleaning Pune, dental laser treatment Kharadi, CBCT dental scan Pune, intraoral scanning Pune, digital dentistry Kharadi, advanced dental clinic Pune, sedation dentistry Pune, international smile makeover centre Pune, international dental centre Pune, dental care Kharadi Pune, "
        />

        <script type="application/ld+json">{JSON.stringify(schema)}</script>

        <link rel="canonical" href="https://www.denzadental.com/" />

        <meta property="og:type" content="website" />

        <meta property="og:site_name" content="Denza Dental Center" />

        <meta
          property="og:title"
          content="Denza Dental Center | Dental Implants & Smile Makeover in Kharadi, Pune"
        />

        <meta
          property="og:description"
          content="Comprehensive dental care in Kharadi, Pune including dental implants, smile makeovers, root canal treatment, full mouth rehabilitation, cosmetic dentistry, orthodontics, pediatric dentistry and advanced dental technology."
        />

        <meta property="og:url" content="https://www.denzadental.com/" />

        <meta
          property="og:image"
          content="https://www.denzadental.com/og-image.jpg"
        />

        <meta
          property="og:image:alt"
          content="Denza Dental Center - Dental Clinic in Kharadi, Pune"
        />

        <meta property="og:locale" content="en_IN" />
      </Helmet>

      <HeroSection />

      <div
        className="about_section_parent bg-img-cover parent"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="about_section_cont cont">
          <div className="abt_top_sec">
            <div className="ab_left">
              <div className="image">
                <img src={abt_img} alt="" />

                <div className="round_image">
                  <img src={img5} alt="" />
                </div>
              </div>
            </div>
            <div className="ab_right">
              <h1>
                Creating Beautiful Smiles Through Excellence, Innovation & Care
              </h1>
              <p>
                At <b>Denza Dental Center</b>, we believe every smile deserves
                exceptional care. Guided by excellence, driven by innovation,
                and delivered with compassion, we provide personalized dental
                treatments tailored to every patient's needs. From preventive
                care and cosmetic dentistry to advanced restorative procedures,
                our experienced team is committed to helping you achieve a
                healthy, confident smile in a comfortable and welcoming
                environment.
              </p>
              <Button text="Book an Appointment" />
            </div>
          </div>

          <div className="abt_bottom_sec">
            <div className="count_main" ref={ref}>
              {counter.map((item, index) => (
                <div className="abt_sec sec1" key={index}>
                  <div className="left">
                    <div className="icon">
                      <img src={item.icon} alt="" />
                    </div>
                  </div>

                  <div className="right">
                    <h1>
                      {inView && (
                        <CountUp start={0} end={item.count} duration={2} />
                      )}
                      {item.suffix || ""}+
                    </h1>

                    <span className="service_name">{item.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* meet our doctors */}
      <section className="top_dentists">
        <div className="container">
          <div className="top_dentists_wrapper">
            {/* Left Images */}
            <div className="dentists_images">
              <div className="img_box">
                <img src={img4} alt="Doctor" />
              </div>

              <div className="img_box">
                <img src={img4} alt="Doctor" />
              </div>
            </div>

            {/* Right Content */}
            <div className="dentists_content">
              <h2>Meet Our Expert Dentists</h2>

              <p
                style={{
                  color: "var(--accent)",
                  fontSize: "20px",
                  fontWeight: "600",
                }}
              >
                Trusted Dental Experts Dedicated to Your Smile
              </p>

              <p>
                At <b style={{ color: "var(--bg_color)" }}>Denza Dental</b>,
                exceptional care begins with experienced hands.
                <b style={{ color: "var(--bg_color)" }}>
                  Dr. Hemant Thodsare
                </b>{" "}
                and{" "}
                <b style={{ color: "var(--bg_color)" }}>
                  Dr. Devika Kalaskar- Thodsare
                </b>{" "}
                are committed to providing personalized, ethical, and
                evidence-based dental care for patients of all ages. With a
                patient-first approach and a passion for clinical excellence,
                they combine advanced dental techniques with compassionate care
                to deliver comfortable, precise, and long-lasting treatment
                outcomes. Whether it's preventive care, cosmetic smile
                enhancements, restorative procedures, or comprehensive dental
                treatments, their focus is on helping every patient achieve a
                healthy, confident smile in a welcoming and stress-free
                environment.
              </p>

              <Button
                text="About Us"
                path="/about-us"
                style={{ width: "100%" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* blog and news */}

      <div
        className="blog_parent parent"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <div className="overlay bg-img-cover"></div>
        <div className="blog_cont cont">
          <div className="top_bar">
            <h1>Blog And News</h1>
            <Button text="Read More" path="/blog" />
          </div>

          <div className="blog_cards">
            <div className="card">
              <div className="image bg-img-cover">
                <p className="date">25 July 2026</p>
              </div>
              <h1 className="blog_heading">
                Smile Designing at Denza Dental: Your Path to a Confident,
                Natural-Looking Smile
              </h1>
              <p>
                Your smile is often the first thing people notice about you. If
                you've ever felt self-conscious about gaps, discoloration,
                chipped teeth, or an uneven smile line, smile designing could be
                the solution you've been looking for.
              </p>
              <Link to="/blog-details" className="arrow">
                <IoArrowForwardOutline />
              </Link>
            </div>
            <div className="card">
              <div className="image bg-img-cover">
                <p className="date">01 August 2026</p>
              </div>
              <h1 className="blog_heading">
                Full Mouth Rehabilitation at Denza Dental: Rebuilding Function,
                Health, and Confidence
              </h1>
              <p>
                When multiple teeth are damaged, missing, or affected by
                long-term wear, a single procedure often isn't enough to restore
                your oral health. That's where full mouth rehabilitation comes
                in.
              </p>
              <Link to="/blog-details" className="arrow">
                <IoArrowForwardOutline />
              </Link>
            </div>
            <div className="card">
              <div className="image bg-img-cover">
                <p className="date">07 August 2026</p>
              </div>
              <h1 className="blog_heading">
                Painless Root Canals Using Conscious Sedation at Denza Dental
              </h1>
              <p>
                For many people, the phrase "root canal" brings up images of
                pain and anxiety — but modern dentistry has changed that reality
                completely. At Denza Dental, we offer painless root canal
                treatment using conscious sedation, allowing even the most
                anxious patients to undergo treatment comfortably.
              </p>
              <Link to="/blog-details" className="arrow">
                <IoArrowForwardOutline />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* video testimonials */}
      <div data-aos="fade-up" data-aos-delay="400">
        <Testimonials />
      </div>

      {/* appointment page */}
      <Appointment data-aos="fade-up" data-aos-delay="500" />

      {/* text testimonial */}
      <div
        className="text_testimonial_parent parent"
        data-aos="fade-up"
        data-aos-delay="450"
      >
        <div className="text_testimonial_cont cont">
          <div className="section_header">
            <h1>Testimonials</h1>
            <p>What our clients say about us</p>
          </div>

          <div className="testimoneal_listing">
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={24}
              slidesPerView={3}
              pagination={{ clickable: true }}
              autoplay={{ delay: 350000, disableOnInteraction: false }}
              breakpoints={{
                0: { slidesPerView: 1, spaceBetween: 16 },
                768: { slidesPerView: 2, spaceBetween: 20 },
                1200: { slidesPerView: 3, spaceBetween: 24 },
              }}
            >
              {textTestimonials.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="testimonial_card">
                    <div className="testimonial_avatar">
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div className="testimonial_body">
                      <p className="testimonial_quote">{item.quote}</p>
                      <h3>{item.name}</h3>
                      <span>{item.title}</span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      {/* fetures */}
      <div
        className="feature_cards_parent parent"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div className="feature_cards_cont cont">
          <div className="section_header">
            <h1>Exceptional Dental Care With Every Visit</h1>
            <p>
              Our promise: modern treatments, expert teams, and comfort-centered
              care for every patient.
            </p>
          </div>

          <div className="feature_cards">
            {featureCards.map((item, index) => (
              <div className="feature_card" key={index}>
                <div className="icon">{item.icon}</div>
                <span>{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* why choose us */}
      <div
        class="why_choose_parent bg-img-cover parent"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div class="why_choose_cont cont">
          <h1>Why Choose Denza Dental Care</h1>
          <p>Because every smile deserves exceptional care.</p>
          <div className="wc_left_right">
            <div class="wc_left">
              <div class="accordian">
                {accordianContent?.map((item, index) => (
                  <div class="accordian_item">
                    <div
                      class="accordian_title"
                      onClick={() => setLeftAccordion(index)}
                    >
                      <h1> {item.title} </h1>
                      <div class="count"> {index + 1} </div>
                    </div>
                    {leftAccordion === index && (
                      <div
                        class={
                          leftAccordion === index
                            ? "accordian_desc active"
                            : "accordian_desc"
                        }
                      >
                        <div class="left">
                          <h1> {item.title} </h1> <p>{item.description}</p>
                        </div>
                        <div class="rg_image">
                          <img src={img4} alt="" />
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="parent before_after_gallery_parent"
        data-aos="fade-up"
        data-aos-delay="600 "
        style={{ background: "var(--background)" }}
      >
        <div class="cont before_after_gallery_cont">
          <div className="results-section">
            <div className="header">
              <h1>Real People Real Results.</h1>
              <div className="nav-buttons">
                <button className="prev">←</button>
                <button className="next">→</button>
              </div>
            </div>

            <Swiper
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView={4}
              navigation={{
                nextEl: ".next",
                prevEl: ".prev",
              }}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                0: { slidesPerView: 1 },
                600: { slidesPerView: 2 },
                900: { slidesPerView: 3 },
                1200: { slidesPerView: 4 },
              }}
            >
              {data.map((item, index) => {
                const position =
                  sliderPositions[index] !== undefined
                    ? sliderPositions[index]
                    : 50;
                return (
                  <SwiperSlide key={index}>
                    <div className="card">
                      <div
                        className="image-wrapper"
                        ref={(el) => (sliderRefs.current[index] = el)}
                        onMouseMove={(e) =>
                          e.buttons === 1 && handleSliderMove(e, index)
                        }
                        onMouseDown={(e) => handleSliderMove(e, index)}
                        onTouchMove={(e) => handleSliderMove(e, index)}
                        onTouchStart={(e) => handleSliderMove(e, index)}
                      >
                        <img src={item} alt="after" className="after-image" />

                        <div
                          className="before-wrapper"
                          style={{ width: `${100 - position}%` }}
                        >
                          <img
                            src={item}
                            alt="before"
                            className="before-image"
                          />
                        </div>

                        <div
                          className="slider-line"
                          style={{ left: `${position}%` }}
                        >
                          <div className="slider-icon">
                            <span>◀</span>
                            <span>▶</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>

      {/* clinic images */}

      <div className="parent clinic_images_parent">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={4.5}
          spaceBetween={30}
          loop={true}
          speed={10000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1.2,
              spaceBetween: 16,
            },

            576: {
              slidesPerView: 2,
              spaceBetween: 20,
            },

            768: {
              slidesPerView: 2.5,
              spaceBetween: 24,
            },

            1200: {
              slidesPerView: 4.5,
              spaceBetween: 30,
            },
          }}
          className="gallery_swiper"
        >
          {clinicImages.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="gallery_card">
                <img src={img} alt="" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Home;
