import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./GbtCleaning.scss";
import img1 from "../../../assets/general_service/img.webp";
import gallery1 from "../../../assets/about_page/after1.webp";
import img4 from "../../../assets/about_section/img5.webp";

const GbtCleaning = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const services = [
    {
      title: "Biofilm Mapping  ",
      description:
        "A harmless dye highlights biofilm on the teeth, making it clearly visible and easy to target during treatment.  ",
    },
    {
      title: "Personalized Guidance ",
      description:
        "Using these insights, we help you understand your oral hygiene habits and provide tailored recommendations for improvement.",
    },
    {
      title: "Gentle Airflow Cleaning ",
      description:
        "A fine stream of air, water, and powder removes biofilm efficiently from all tooth surfaces, even in hard-to-reach areas. ",
    },
    {
      title: "Deep Gum Care ",
      description:
        "Specialized tools clean below the gumline, targeting areas affected by gum concerns with precision and care. ",
    },
    {
      title: "Advanced Deposit Removal ",
      description:
        "Any remaining hardened deposits are gently removed using modern ultrasonic technology.",
    },
    {
      title: "Precision Check",
      description:
        "Every tooth is carefully reviewed to ensure a complete and thorough clean. ",
    },

    {
      title: "Enamel Protection  ",
      description:
        "A fluoride treatment strengthens your enamel and helps protect against future decay. ",
    },
    {
      title: "Tailored Maintenance Plan ",
      description:
        "At Denza Dental Center,  we recommend a personalized follow-up schedule to help maintain your oral health long-term. ",
    },
  ];

  const clinicImages = [img4, img4, img4, img4, img4, img4, img4, img4];

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

      <div className="parent second_parent_gbt">
        <div className="cont second_cont_gbt">
          <h2>What is GBT Cleaning ?</h2>
          <div className="text_gbt">
            <p>
              Every time you eat—or skip brushing before bed—bacteria begin to
              gather on your teeth in a sticky film called biofilm.{" "}
            </p>
            <p>
              These bacteria are highly active, producing acids that gradually
              wear down enamel and lead to cavities. At the same time, they
              irritate the gums, causing inflammation and bleeding. Over time,
              this soft biofilm hardens into tartar deposits that cannot be
              removed with regular brushing.
            </p>
            <p>
              At Denza Dental, GBT cleaning takes a completely different
              approach from traditional methods. Using the EMS Airflow system, a
              controlled stream of fine powder, warm water, and air is directed
              onto the teeth, gently removing biofilm without the need for metal
              instruments. The powder, typically erythritol, is safe,
              non-abrasive, and even offers antibacterial benefits.
            </p>
            <p>
              The “guided” aspect comes from its structured protocol. Eight
              scientifically proven steps are followed in a precise
              sequence—starting with making biofilm visible, then removing it
              systematically, and finishing with protective treatments like
              fluoride. This evidence-based approach ensures consistency,
              thoroughness, and a significantly more advanced cleaning
              experience.
            </p>
          </div>
        </div>
      </div>

      <div className="third_section">
        <div className="third_header">
          <h2>The GBT Cleaning Process, Step by Step </h2>
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

        {/* <div className="parent gallery_parent">
          <div className="cont gallery_cont">
            <div className="gallery_header">
              <h2>Clinic Gallery</h2>
              <p>
                Explore our clinic spaces and patient-friendly treatment rooms.
              </p>
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
        </div> */}
      </div>

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

export default GbtCleaning;
