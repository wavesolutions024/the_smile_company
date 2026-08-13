import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./IntraOralScanning.scss";
import img1 from "../../../assets/general_service/img.webp";
import gallery1 from "../../../assets/about_page/after1.webp";
import img4 from "../../../assets/about_section/img5.webp";
import PageTop from "../../../comp/page_top/PageTop";
import { Helmet } from "react-helmet";


const IntraOralScanning = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const services = [
    {
      title: " Effortless Comfort ",
      description:
        "Leave behind the discomfort of traditional impressions. Our intra-oral scanning technology offers a smooth, clean, and relaxing experience from start to finish.  ",
    },
    {
      title: "Unmatched Accuracy  ",
      description:
        "Powered by advanced digital technology, every scan captures precise details—ensuring exceptional accuracy for personalized treatment planning. ",
    },
    {
      title: "Visualize Your Smile",
      description:
        "See your smile come to life in real time. A seamless, interactive experience that brings clarity and confidence to your dental journey. ",
    },
  ];

  const clinicImages = [img4, img4, img4, img4, img4, img4, img4, img4];

  return (
    <>
      <Helmet>
        <title>
          Intraoral Scanning in Kharadi, Pune | Digital
          Dental Scanning
        </title>
        <meta
          name="description"
          content="Get digital intraoral scanning in 
Kharadi, Pune at Denza Dental Center. 3D digital 
impressions support accurate diagnosis, 
treatment planning and dental restorations."
        />

        <link
          rel="canonical"
          href="https://denzadental.com/intra-oral-scanning"
        />
        <meta
          name="keywords"
          content=" 
intraoral scanning Kharadi, 
intraoral scanning Pune, 
intra oral scanning Kharadi, 
intra oral scanning Pune, 
intraoral scanner Kharadi, 
intraoral scanner Pune, 
digital dental scanning Kharadi, 
digital dental scanning Pune, 
digital dental impressions Kharadi, 
digital dental impressions Pune, 
3D intraoral scanning Kharadi, 
3D intraoral scanning Pune, 
digital impressions dentist Kharadi, 
digital impressions dentist Pune, 
intraoral scan near Kharadi, 
intraoral scanning near me, 
dental 3D scanning Kharadi, 
dental 3D scanning Pune, 
digital dentistry Kharadi, 
digital dentistry Pune, 
digital smile design Kharadi, 
digital smile design Pune, 
digital impressions for crowns Pune, 
digital impressions for aligners Pune, 
digital impressions for implants Pune, 
intraoral scanning for orthodontics Pune, 
intraoral scanning for restorative dentistry 
Kharadi, 
advanced dental technology Pune, 
dental technology Kharadi, 
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
          content="Intraoral Scanning in Kharadi, Pune 
| Digital Dental Scanning"
        />
        <meta
          property="og:description"
          content="Digital intraoral scanning at Denza 
Dental Center in Kharadi, Pune for accurate 3D 
dental impressions, treatment planning and 
restorative dental workflows."
        />
        <meta
          property="og:url"
          content="https://denzadental.com/intra-oral-scanni
ng"
        />
        <meta
          property="og:image"
          content="https://denzadental.com/og-image.jpg"
        />
        <meta
          property="og:image:alt"
          content="Intraoral scanning at Denza Dental 
Center in Kharadi, Pune"
        />
        <meta
          property="og:locale"
          content="en_IN"
        />
      </Helmet>
      <PageTop title=" 3D intra oral scanning Technology" />

      <div className="parent second_parent">
        <div className="cont second_cont">
          <div className="general_left">
            <img src={img1} alt="General Dental Service" />
          </div>
          <div className="general_right">
            <h2>Advanced 3D Intra-Oral Scanning</h2>
            <p>
              This technology not only eliminates the discomfort of traditional
              impressions but also provides incredibly accurate results for
              treatment planning. In addition, you get to see your digital
              impression on the screen, giving you a firsthand look at your
              dental health.
            </p>
          </div>
        </div>
      </div>

      <div className="third_section">
        <div className="third_header">
          <h2> Elevate Your Dental Experience with 3D Intra-Oral Scanning </h2>
        </div>

        <div className="service_cards" >
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

export default IntraOralScanning;
