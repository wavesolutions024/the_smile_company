import React, { useState, useRef, useEffect } from "react";
import "./OurWork.scss";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import icon1 from "../../assets/about_section/medical-symbol.png";
import icon2 from "../../assets/about_section/medicine.png";
import icon3 from "../../assets/about_section/doctor.png";
import before1 from "../../assets/before_after/img1.jpg";
import before2 from "../../assets/before_after/img2.jpg";
import before3 from "../../assets/before_after/img3.jpg";
import { useInView } from "react-intersection-observer";
import { Helmet } from "react-helmet";

const OurWork = () => {
  const [activeFilter, setActiveFilter] = useState("All cases");

  const filters = [
    "All cases",
    "Smile makeover",
    "Dental implants",
    "Root canal",
    "Full mouth rehab",
    "Esthetic dentistry",
    "Orthodontics",
  ];

  const workCases = [
    {
      id: "case-1",
      category: "Smile makeover",
      tags: ["All cases", "Smile makeover", "Esthetic dentistry"],
      badge: "SMILE MAKEOVER",
      title: "Porcelain veneers — 10 teeth",
      description:
        "Discoloured, chipped, and misaligned teeth transformed with ultra-thin porcelain veneers. Minimal tooth preparation.",
      doctor: "Dr. Hemant",
      duration: "3 weeks",
      before: before1,
      after: before2,
    },
    {
      id: "case-2",
      category: "Root canal",
      tags: ["All cases", "Root canal", "Esthetic dentistry"],
      badge: "ROOT CANAL",
      title: "Root canal + zirconia crown",
      description:
        "Severely infected molar with periapical abscess. Single-visit RCT under magnification, followed by full zirconia crown.",
      doctor: "Dr. Devika",
      duration: "2 visits",
      before: before3,
      after: before1,
    },
    {
      id: "case-3",
      category: "Dental implants",
      tags: ["All cases", "Dental implants", "Full mouth rehab"],
      badge: "DENTAL IMPLANTS",
      title: "Single-visit implant restoration",
      description:
        "A missing molar replaced with an immediate-load implant and an aesthetic zirconia crown for a stable, natural result.",
      doctor: "Dr. Meera",
      duration: "4 visits",
      before: before2,
      after: before3,
    },
  ];

  const cardRefs = useRef({});
  const [sliderValues, setSliderValues] = useState(() =>
    workCases.reduce((map, item) => {
      map[item.id] = 50;
      return map;
    }, {}),
  );
  const [activeSlider, setActiveSlider] = useState(null);

  const updateSliderValue = (caseId, clientX) => {
    const card = cardRefs.current[caseId];
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const percent = Math.min(
      100,
      Math.max(0, ((clientX - rect.left) / rect.width) * 100),
    );
    setSliderValues((prev) => ({ ...prev, [caseId]: percent }));
  };

  useEffect(() => {
    if (!activeSlider) return;

    const handleMove = (event) => {
      if (event.type === "touchmove") {
        event.preventDefault();
      }

      const clientX = event.touches ? event.touches[0].clientX : event.clientX;
      updateSliderValue(activeSlider, clientX);
    };

    const stopDrag = () => {
      setActiveSlider(null);
    };

    document.addEventListener("mousemove", handleMove);
    document.addEventListener("touchmove", handleMove, { passive: false });
    document.addEventListener("mouseup", stopDrag);
    document.addEventListener("touchend", stopDrag);

    return () => {
      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener("touchmove", handleMove);
      document.removeEventListener("mouseup", stopDrag);
      document.removeEventListener("touchend", stopDrag);
    };
  }, [activeSlider]);

  const startDrag = (caseId, event) => {
    event.preventDefault();
    const clientX = event.touches ? event.touches[0].clientX : event.clientX;
    setActiveSlider(caseId);
    updateSliderValue(caseId, clientX);
  };

  const filteredCases =
    activeFilter === "All cases"
      ? workCases
      : workCases.filter((item) => item.tags.includes(activeFilter));

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

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  return (
    <>
      <Helmet>
        <title>
          Dental Treatment Results & Case Gallery | Denza Dental Center Pune
        </title>

        <meta
          name="description"
          content="Explore real dental treatment cases from Denza Dental Center in Kharadi, Pune, including smile makeovers, dental implants, root canal treatments, full mouth rehabilitation, esthetic dentistry and orthodontic cases."
        />

        <meta
          name="keywords"
          content="
          Denza Dental Center,
          Denza Dental,
          Denza Dentistry,
          Denza Dental Center Kharadi,
          Denza Dental Center Pune,
          Denza Dental Kharadi,
          dental clinic Kharadi Pune,
          dental treatment results Pune,
          dental case gallery Pune,
          dental before and after Pune,
          dental before after Kharadi,
          real dental cases Pune,
          dental transformation Pune,
          smile makeover results Pune,
          smile makeover before after Pune,
          smile makeover Kharadi,
          cosmetic dentistry results Pune,
          cosmetic dentistry Kharadi,
          dental implants results Pune,
          dental implant cases Pune,
          dental implant before after Pune,
          dental implants Kharadi,
          root canal treatment cases Pune,
          root canal results Pune,
          root canal Kharadi,
          full mouth rehabilitation cases Pune,
          full mouth rehabilitation Kharadi,
          esthetic dentistry Pune,
          esthetic dentistry Kharadi,
          orthodontic cases Pune,
          orthodontic treatment Kharadi,
          porcelain veneers Pune,
          porcelain veneers Kharadi,
          zirconia crown Pune,
          zirconia crown Kharadi,
          smile transformation Pune,
          dental treatment outcomes Pune
        "
        />

        <link
          rel="canonical"
          href="https://denzadental.com/our-work"
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
          name="geo.position"
          content="18.5515;73.9430"
        />

        <meta
          name="ICBM"
          content="18.5515, 73.9430"
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
          content="Dental Treatment Results & Case Gallery | Denza Dental Center Pune"
        />

        <meta
          property="og:description"
          content="Explore real dental cases and treatment outcomes from Denza Dental Center in Kharadi, Pune, including smile makeovers, dental implants, root canal treatments, full mouth rehabilitation and esthetic dentistry."
        />

        <meta
          property="og:url"
          content="https://denzadental.com/our-work"
        />

        <meta
          property="og:image"
          content="https://denzadental.com/og-image.jpg"
        />

        <meta
          property="og:image:alt"
          content="Denza Dental Center dental treatment case gallery in Kharadi, Pune"
        />

        <meta
          property="og:locale"
          content="en_IN"
        />

      </Helmet>

      <div>
        <div className="parent dental_tourish_parent">
          <div className="overlay"></div>

          <div className="cont dental_tourish_cont">
            <div className="hero_content">
              <h1>Real cases. Real transformations. </h1>
              <p>
                A selection of patient outcomes from our clinic in Kharadi, Pune —
                from smile makeovers to full mouth rehabilitation. Drag the slider
                on any case to reveal the before & after.
              </p>

            </div>
          </div>
        </div>

        {/* counter */}

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

        {/* images real case  */}

        <div className="case_gallery">
          <div className="gallery_header">
            <span>CASE GALLERY</span>
            <h2>Browse by treatment</h2>
            <div className="filter_buttons">
              {filters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  className={`filter_button ${activeFilter === filter ? "active" : ""
                    }`}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="cases_grid">
            {filteredCases.map((item) => (
              <div className="case_card" key={item.id}>
                <div
                  className="case_media"
                  ref={(el) => {
                    if (el) cardRefs.current[item.id] = el;
                  }}
                >
                  <div
                    className="case_image case_before"
                    style={{ backgroundImage: `url(${item.before})` }}
                  />
                  <div
                    className="case_image case_after"
                    style={{
                      backgroundImage: `url(${item.after})`,
                      width: `${sliderValues[item.id]}%`,
                    }}
                  />
                  <div
                    className="divider"
                    style={{ left: `${sliderValues[item.id]}%` }}
                  >
                    <button
                      type="button"
                      className="slider_handle"
                      onMouseDown={(e) => startDrag(item.id, e)}
                      onTouchStart={(e) => startDrag(item.id, e)}
                    >
                      <span>&lsaquo;&rsaquo;</span>
                    </button>
                  </div>
                  <div className="card_labels">
                    <span className="case_tag">Before</span>
                    <span className="case_tag case_tag_after">After</span>
                  </div>
                </div>

                <div className="case_body">
                  <span className="case_label">{item.badge}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="case_meta">
                    <span>{item.doctor}</span>
                    <span>{item.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* befor footer */}

        <div className="transformation_cta">
          <div className="transformation_cta_inner">
            <h2>Your transformation starts here</h2>
            <div className="cta_buttons">
              <Link to="/contact" className="cta_primary">
                Book a consultation
              </Link>
              <a
                href="https://wa.me/7028131132"
                target="_blank"
                rel="noreferrer"
                className="cta_secondary"
              >
                WhatsApp us
              </a>
            </div>
          </div>
        </div>
      </div>
    </>

  );
};

export default OurWork;
