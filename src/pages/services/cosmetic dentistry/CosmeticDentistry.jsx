import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./CosmeticDentistry.scss";
import img1 from "../../../assets/general_service/img.webp";
import gallery1 from "../../../assets/about_page/after1.webp";
import PageTop from "../../../comp/page_top/PageTop";

const services = [
  {
    title: "Dental Checkups and Consultations",
    description:
      "A dental checkup includes an in-depth analysis of your overall dental health, helping you stay ahead of decay and gum issues.",
  },
  {
    title: "Dental X-ray",
    description:
      "Modern digital X-rays reveal what’s happening under the surface so we can catch cavities, bone loss, and impacted teeth early.",
  },
  {
    title: "Teeth Cleaning",
    description:
      "Professional teeth cleaning removes plaque and tartar from hard-to-reach areas, protecting teeth and gums from disease.",
  },
  {
    title: "Cavity Detection and Fillings",
    description:
      "Using modern diagnostics, we locate early cavities and restore damaged teeth with tooth-colored fillings.",
  },
  {
    title: "Root Canal Treatment",
    description:
      "Gentle root canal therapy relieves pain and saves a damaged tooth while preserving your natural smile.",
  },
  {
    title: "Tooth Extractions",
    description:
      "When a tooth cannot be saved, our team performs safe extractions with comfort and careful aftercare.",
  },
  {
    title: "Wisdom Tooth Extraction",
    description:
      "We remove impacted wisdom teeth cleanly and gently, minimizing discomfort and accelerating recovery.",
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

const CosmeticDentistry = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      <PageTop title="Cosmetic Dentistry Services" />

      <div className="parent second_parent">
        <div className="cont second_cont">
          <div className="general_left">
            <img src={img1} alt="General Dental Service" />
          </div>
          <div className="general_right">
            <h2>Cosmetic Dentistry</h2>
            <p>
              Cosmetic dentistry focuses on improving the appearance of your
              teeth based on your facial features and dental structure for
              balanced, natural results.
            </p>
            <p>
              <b>Customized Smile Makeovers</b> : We design personalized smile
              makeovers by combining treatments to suit your unique needs and
              aesthetic goals.
            </p>

            <p>
              <b>Treatments Offered </b> : Our services include veneers,
              bonding, crowns, tooth-colored fillings, gum contouring, and full
              mouth rehabilitation.
            </p>
          </div>
        </div>
      </div>

      <div className="parent thir_parent">
        <div className="cont thir_cont">
          <div className="thir_right">
            <h2>Our Cosmetic Dental Treatments </h2>
            <p>
              At Denza Dental, we offer a wide range of cosmetic dentistry
              treatments designed to enhance your smile and improve overall oral
              health. Professional cleaning and teeth whitening help remove
              plaque and stains for a brighter smile. Dental bonding is used to
              repair minor chips, close gaps, and protect exposed areas.
              Porcelain veneers provide a natural-looking cover for front teeth,
              improving shape and color. Cosmetic recontouring helps reshape
              uneven or slightly damaged teeth, creating a more balanced and
              harmonious smile.
            </p>
          </div>

          <div className="thir_left">
            <img src={img1} alt="Cosmetic Dental Service" />
          </div>
        </div>
      </div>

      <div className="parent gallery_parent" style={{ backgroundColor: "white" }} >
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

export default CosmeticDentistry;
