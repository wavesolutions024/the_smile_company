import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./HeaderNew.scss";
import logo from "../../assets/header/denza_logo.jpeg";

const HeaderNew = () => {
  const location = useLocation();
  const [visible, setVisible] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const shouldShow = location.pathname !== "/" || window.scrollY > 80;
      setVisible(shouldShow);
      if (window.scrollY <= 80 && location.pathname === "/") {
        setMobileOpen(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
    setActiveSubmenu(null);
  };

  const toggleSubmenu = (submenu) => {
    setActiveSubmenu(activeSubmenu === submenu ? null : submenu);
  };

  const closeAll = () => {
    setMobileOpen(false);
    setActiveDropdown(null);
    setActiveSubmenu(null);
  };

  return (
    <header
      className={`header_new ${visible ? "visible" : "hidden"} ${mobileOpen ? "mobile-open" : ""}`}
    >
      <div className="header_inner cont">
        <Link to="/" onClick={closeAll} className="logo_link">
          <img src={logo} alt="AO Dentistry" />
        </Link>

        <nav className="main_nav">
          <div
            className={`nav_item dropdown ${activeDropdown === "dental" ? "open" : ""}`}
          >
            <button type="button" onClick={() => toggleDropdown("dental")}>
              DENTAL SERVICES <span className="caret">▾</span>
            </button>
            <div className="dropdown_panel">
              <div className="dropdown_column">
                <Link to="/general-dental" onClick={closeAll}>
                  GENERAL DENTAL SERVICES
                </Link>
                <Link to="/restorative-dentistry" onClick={closeAll}>
                  RESTORATIVE DENTISTRY
                </Link>
                <Link to="/cosmetic-dentistry" onClick={closeAll}>
                  COSMETIC DENTISTRY
                </Link>
                <Link to="/orthodontic-treatments" onClick={closeAll}>
                  ORTHODONTIC TREATMENTS
                </Link>
                <Link to="/dental-check-ups" onClick={closeAll}>
                  DENTAL CHECK-UPS
                </Link>
                <Link to="/full-mouth-rehabilitation" onClick={closeAll}>
                  FULL MOUTH REHABILITATION
                </Link>

                <Link to="/pediatric-dentistry" onClick={closeAll}>
                  PEDIATRIC DENTISTRY
                </Link>
                <button
                  type="button"
                  className="submenu_toggle"
                  onClick={() => toggleSubmenu("tooth")}
                >
                  TOOTH FILLING <span className="caret">▸</span>
                </button>
              </div>

              <div
                className={`submenu ${activeSubmenu === "tooth" ? "open" : ""}`}
              >
                <div className="submenu_panel">
                  <Link to="/dental-crowns" onClick={closeAll}>
                    DENTAL CROWNS
                  </Link>
                  <Link to="/crowns-bridges" onClick={closeAll}>
                    CROWNS AND BRIDGES
                  </Link>
                  <Link to="/inlays-onlays" onClick={closeAll}>
                    INLAYS AND ONLAYS
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`nav_item dropdown ${activeDropdown === "technology" ? "open" : ""}`}
          >
            <button type="button" onClick={() => toggleDropdown("technology")}>
              TECHNOLOGY <span className="caret">▾</span>
            </button>
            <div className="dropdown_panel small">
              <Link to="/technology" onClick={closeAll}>
                OUR TECHNOLOGY
              </Link>
              <Link to="/smile-analysis-consultation" onClick={closeAll}>
                SMILE ANALYSIS
              </Link>
              <Link to="/smile-designing" onClick={closeAll}>
                SMILE DESIGNING
              </Link>
            </div>
          </div>

          <Link to="/about" className="nav_link" onClick={closeAll}>
            ABOUT US
          </Link>
          <Link to="/awards" className="nav_link" onClick={closeAll}>
            AWARDS
          </Link>
        </nav>

        <div className="header_actions">
          <a href="tel:+919175210123" className="phone_link">
            +91 91752 10123
          </a>
          <Link to="/contact" className="book_btn" onClick={closeAll}>
            Book Appointment
          </Link>
          <button
            className="mobile_toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
};

export default HeaderNew;
