import React from "react";
import "./Services.scss";
import service1 from "../../assets/service/service1.webp";
import service2 from "../../assets/service/seervice2.webp";
import service3 from "../../assets/service/service3.webp";
import PageTop from "../../comp/page_top/PageTop";

const Services = () => {
  const data = [
    {
      img: service1,
      title: "Dental Implant Restorations",
      no: "01",
      description1:
        " At The Smile Company, we offer a comprehensive range of dental services to meet all your oral health needs. Our experienced team           is dedicated to providing personalized care in a comfortable and  welcoming environment. Whether you need routine check-ups,              cosmetic dentistry, or restorative treatments, we are here to help you achieve a healthy and eautiful smile. Explore our services and discover how we can enhance your dental health and confidence.",
      description2:
        " At The Smile Company, we offer a comprehensive range of dental              services to meet all your oral health needs. Our experienced team       is dedicated to providing personalized care in a comfortable and             welcoming environment. Whether you eed routine check-ups,   cosmetic dentistry, or restorative treatments.",
    },
    {
      img: service2,
      title: "Dental Implant Restorations",
      no: "02",
      description1:
        " At The Smile Company, we offer a comprehensive range of dental services to meet all your oral health needs. Our experienced team           is dedicated to providing personalized care in a comfortable and  welcoming environment. Whether you need routine check-ups,              cosmetic dentistry, or restorative treatments, we are here to help you achieve a healthy and eautiful smile. Explore our services and discover how we can enhance your dental health and confidence.",
      description2:
        " At The Smile Company, we offer a comprehensive range of dental              services to meet all your oral health needs. Our experienced team       is dedicated to providing personalized care in a comfortable and             welcoming environment. Whether you eed routine check-ups,   cosmetic dentistry, or restorative treatments.",
    },
    {
      img: service3,
      title: "Dental Implant Restorations",
      no: "03",
      description1:
        " At The Smile Company, we offer a comprehensive range of dental services to meet all your oral health needs. Our experienced team           is dedicated to providing personalized care in a comfortable and  welcoming environment. Whether you need routine check-ups,              cosmetic dentistry, or restorative treatments, we are here to help you achieve a healthy and eautiful smile. Explore our services and discover how we can enhance your dental health and confidence.",
      description2:
        " At The Smile Company, we offer a comprehensive range of dental              services to meet all your oral health needs. Our experienced team       is dedicated to providing personalized care in a comfortable and             welcoming environment. Whether you eed routine check-ups,   cosmetic dentistry, or restorative treatments.",
    },
  ];

  return (
    <>


<PageTop title="Our Services" />

      <div className="parent services_parent">
        <div className="cont services_cont ">
          {data.map((item, index) => (
            <div class="right_left_main">
              <div className="service_left">
                <img src={item.img} alt={item.title} />
              </div>
              <div className="service_right">
                <div className="num">{item.no}</div>
                <h1>{item.title}</h1>
                <p>{item.description1}</p>
                <p>{item.description2}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
