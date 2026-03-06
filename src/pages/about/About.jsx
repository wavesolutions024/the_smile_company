import React, { useRef, useState } from "react";
import PageTop from "../../comp/page_top/PageTop";
import beforeImg from "../../assets/about_page/before1.webp";
import afterImg from "../../assets/about_page/after1.webp";
import "./About.scss";

const About = () => {
  const containerRef = useRef(null);
  const [position, setPosition] = useState(50);

  const handleMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percent = (x / rect.width) * 100;

    if (percent >= 0 && percent <= 100) {
      setPosition(percent);
    }
  };

  return (
    <>
      <PageTop title="About Us" />

      <div class="parent before_after_parent">
        <div class="cont before_after_cont">
          <div
            className="beforeAfter"
            ref={containerRef}
            onMouseMove={(e) => e.buttons === 1 && handleMove(e)}
            onMouseDown={handleMove}
          >
            <img src={beforeImg} className="beforeImage" />

            <div className="afterWrapper" style={{ width: `${position}%` }}>
              <img src={afterImg} />
            </div>

            <div className="sliderLine" style={{ left: `${position}%` }}>
              <div className="sliderButton">
                <span>◀</span>
                <span>▶</span>
              </div>
            </div>

            <div className="label before">AFTER</div>
            <div className="label after">BEFORE</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
