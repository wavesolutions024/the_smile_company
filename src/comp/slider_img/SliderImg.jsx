import React from "react";
import "./SliderImg.scss";
import slide_img1 from "../../assets/home/slider_img/slider_img1.jpg";
import slide_img2 from "../../assets/home/slider_img/slider_img2.jpeg";
import slide_img3 from "../../assets/home/slider_img/slider_img3.jpeg";
import slide_img4 from "../../assets/home/slider_img/slider_img4.jpeg";
import slide_img5 from "../../assets/home/slider_img/slider_img5.jpeg";
import slide_img6 from "../../assets/home/slider_img/slider_img6.jpeg";
import slide_img7 from "../../assets/home/slider_img/slider_img7.jpeg";
import slide_img8 from "../../assets/home/slider_img/slider_img8.jpeg";
import slide_img9 from "../../assets/home/slider_img/slider_img9.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const SliderImg = () => {
  const clinicImages = [
    slide_img1,
    slide_img2,
    slide_img3,
    slide_img4,
    slide_img5,
    slide_img6,
    slide_img7,
    slide_img8,
    slide_img9,
  ];

  return (
    <>
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

export default SliderImg;
