import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./Cbct.scss";
import img1 from "../../../assets/general_service/img.webp";
import gallery1 from "../../../assets/about_page/after1.webp";
import img4 from "../../../assets/about_section/img5.webp";
import PageTop from "../../../comp/page_top/PageTop";
import { Helmet } from "react-helmet";

const Cbct = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const services = [
    {
      title: "Clear, Detailed Views ",
      description:
        "Get a complete 3D view of your teeth, jaw, and surrounding structures—far beyond what traditional X-rays can show. ",
    },
    {
      title: "Accurate Detection ",
      description:
        "Identify dental concerns early and precisely, helping avoid guesswork and improving treatment outcomes. ",
    },
    {
      title: "Personalized Care ",
      description:
        "Every scan helps us design treatments tailored specifically to your dental structure and needs. ",
    },
    {
      title: " Better Understanding ",
      description:
        "We walk you through your scan, so you can clearly see and understand your dental condition. ",
    },
    {
      title: "Safe & Efficient ",
      description:
        "Advanced imaging with minimal radiation exposure, ensuring both safety and comfort during the process.",
    },
  ];

  const clinicImages = [img4, img4, img4, img4, img4, img4, img4, img4];

  return (
    <>
      <Helmet>
        <title>
          CBCT Scan in Kharadi, Pune | 3D Dental
          Imaging | Denza Dental
        </title>
        <meta
          name="description"
          content="Get a CBCT scan in Kharadi, Pune 
at Denza Dental Center. Advanced 3D dental 
imaging provides detailed views of teeth, jaws and 
surrounding structures for diagnosis and 
treatment planning."
        />

        <link
          rel="canonical"
          href="https://denzadental.com/cbct"
        />
        <meta
          name="keywords"
          content=" 
CBCT scan Kharadi, 
CBCT scan Pune, 
CBCT Kharadi, 
CBCT Pune, 
dental CBCT Kharadi, 
dental CBCT Pune, 
CBCT 3D imaging Kharadi, 
CBCT 3D imaging Pune, 
3D dental imaging Kharadi, 
3D dental imaging Pune, 
cone beam CT Kharadi, 
cone beam CT Pune, 
cone beam computed tomography Kharadi, 
dental CT scan Kharadi, 
dental CT scan Pune, 
3D teeth scan Kharadi, 
3D jaw scan Pune, 
dental imaging Kharadi, 
dental imaging Pune, 
advanced dental imaging Kharadi, 
CBCT scan near Kharadi, 
CBCT scan near me, 
dental CBCT near Kharadi, 
CBCT for dental implants Pune, 
CBCT for root canal treatment Pune, 
CBCT for wisdom teeth Kharadi, 
CBCT for impacted teeth Pune, 
CBCT for orthodontic treatment Pune, 
CBCT for oral surgery Pune, 
CBCT treatment planning Kharadi, 
dental diagnostic imaging Pune, 
CBCT scan cost Pune, 
CBCT scan price Kharadi, 
3D dental scan Kharadi, 
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
          content="CBCT Scan in Kharadi, Pune | 3D 
Dental Imaging | Denza Dental"
        />
        <meta
          property="og:description"
          content="CBCT scan and 3D dental imaging 
at Denza Dental Center in Kharadi, Pune for 
detailed imaging of teeth, jaws and surrounding 
structures to support dental diagnosis and 
treatment planning."
        />
        <meta
          property="og:url"
          content="https://denzadental.com/cbct"
        />
        <meta
          property="og:image"
          content="https://denzadental.com/og-image.jpg"
        />
        <meta
          property="og:image:alt"
          content="CBCT 3D dental imaging at Denza 
Dental Center in Kharadi, Pune"
        />
        <meta
          property="og:locale"
          content="en_IN"
        />
      </Helmet>
      <PageTop title="CBCT 3D IMAGING Technology" />

      <div className="parent second_parent">
        <div className="cont second_cont">
          <div className="general_left">
            <img src={img1} alt="General Dental Service" />
          </div>
          <div className="general_right">
            <h2>Precision Dental Imaging</h2>
            <p>
              We use advanced CBCT technology to create detailed 3D scans of
              your teeth and jaw, enabling accurate diagnosis and efficient
              treatment with enhanced safety.
            </p>
          </div>
        </div>
      </div>

      <div className="third_section">
        <div className="third_header">
          <h2>Next-Generation Dental Insights</h2>
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

export default Cbct;
