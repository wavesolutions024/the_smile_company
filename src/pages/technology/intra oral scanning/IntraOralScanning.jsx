import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./IntraOralScanning.scss";
import img1 from "../../../assets/general_service/img.webp";
import gallery1 from "../../../assets/about_page/after1.webp";
import img4 from "../../../assets/about_section/img5.webp";

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
