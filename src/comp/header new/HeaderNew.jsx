import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./HeaderNew.scss";
import logo from "../../assets/header/denza_logo.jpeg";
import { RxCross2 } from "react-icons/rx";
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
      className={visible ? "header_new parent active" : "header_new parent"}
    >
      <div className="header_inner cont">
        <Link to="/" onClick={closeAll} className="logo_link">
          <img src={logo} alt="AO Dentistry" />
        </Link>

        <div className="main_nav">
          <div
            className={`nav_item dropdown ${activeDropdown === "dental" ? "open" : ""}`}
          >
            <Link type="button" onMouseEnter={() => toggleDropdown("dental")}>
              DENTAL SERVICES <span className="caret">▾</span>
            </Link>
            <div className="dropdown_panel" onMouseLeave={closeAll}>
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
                <Link
                  type="button"
                  className="submenu_toggle"
                  onClick={() => toggleSubmenu("tooth")}
                >
                  TOOTH FILLING <span className="caret">▸</span>
                </Link>
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
            <Link
              type="button"
              onMouseEnter={() => toggleDropdown("technology")}
            >
              TECHNOLOGY <span className="caret">▾</span>
            </Link>
            <div className="dropdown_panel small" onMouseLeave={closeAll}>
              <Link to="/cbct" onClick={closeAll}>
                CBCT 3D IMAGING
              </Link>
              <Link to="/intra-oral-scanning" onClick={closeAll}>
                3D Intra Oral Scanning
              </Link>
              <Link to="/dental-lasers" onClick={closeAll}>
                Dental Lasers
              </Link>
              <Link to="/gbt-cleaning" onClick={closeAll}>
                GBT Cleaning
              </Link>
              <Link to="/gbt-machine" onClick={closeAll}>
                GBT Machine
              </Link>
              <Link to="/dental-loupes" onClick={closeAll}>
                Dental Loupes
              </Link>
              <Link to="/laughing-gas" onClick={closeAll}>
                Conscious Sedation (Laughing Gas)
              </Link>
            </div>
          </div>

           <Link to="/about" className="nav_link" onClick={closeAll}>
            ABOUT US
          </Link>
          <Link to="/our-work" className="nav_link" onClick={closeAll}>
            OUR WORK
          </Link>
          <Link to="/dental-tourism" className="nav_link" onClick={closeAll}>
            DENTAL TOURISM
          </Link>
          <Link to="/blogs" className="nav_link" onClick={closeAll}>
            BLOGS
          </Link>
        </div>

        <div className="header_actions">
          <div class="hamburger" onClick={() => setMobileOpen(!mobileOpen)}>
            {!mobileOpen ? (
              <>
                <span></span>
                <span></span>
                <span></span>
              </>
            ) : (
              <>
                <div className="cross"><RxCross2 /></div>
                
              </>
            )}
          </div>
          <a href="tel:+919175210123" className="phone_link">
            +91 91752 10123
          </a>
          <Link to="/contact" className="book_btn" onClick={closeAll}>
            Book Appointment
          </Link>
        </div>
      </div>

      {mobileOpen && (
        <>
        
         <div class="mobile_header">
         
          <Link onClick={() => toggleDropdown("dental")}>
            DENTAL SERVICES <span className="caret">▾</span>
          </Link>
          {activeDropdown === "dental" && (
            <div className="dropdown_panel">
              <div className="dropdown_column">
                <Link to="/general-dental" onClick={closeAll}>GENERAL DENTAL SERVICES</Link>
                <Link to="/restorative-dentistry" onClick={closeAll}>RESTORATIVE DENTISTRY</Link>
                <Link to="/cosmetic-dentistry" onClick={closeAll}>COSMETIC DENTISTRY</Link>
                <Link to="/orthodontic-treatments" onClick={closeAll}>ORTHODONTIC TREATMENTS</Link>
                <Link to="/dental-check-ups" onClick={closeAll}>DENTAL CHECK-UPS</Link>
                <Link to="/full-mouth-rehabilitation" onClick={closeAll}>
                  FULL MOUTH REHABILITATION
                </Link>

                <Link to="/pediatric-dentistry">PEDIATRIC DENTISTRY</Link>
                <Link
                  type="button"
                  className="submenu_toggle"
                  onClick={() => toggleSubmenu("tooth")}
                >
                  TOOTH FILLING <span className="caret">▾</span>
                </Link>
              </div>
              {activeSubmenu === "tooth" && (
                <div className={`submenu `}>
                  <div className="submenu_panel">
                    <Link to="/dental-crowns" onClick={closeAll}>DENTAL CROWNS</Link>
                    <Link to="/crowns-bridges" onClick={closeAll}>CROWNS AND BRIDGES</Link>
                    <Link to="/inlays-onlays" onClick={closeAll}>INLAYS AND ONLAYS</Link>
                  </div>
                </div>
              )}
            </div>
          )}
          <div className={`nav_item dropdown`}>
            <Link type="button" onClick={() => toggleDropdown("technology")}>
              TECHNOLOGY <span className="caret">▾</span>
            </Link>
            {activeDropdown === "technology" && (
              <div className="dropdown_panel small" onMouseLeave={closeAll}>
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
            )}
          </div>

          <Link to="/about" className="nav_link" onClick={closeAll}>
            ABOUT US
          </Link>
          <Link to="/awards" className="nav_link" onClick={closeAll}>
            OUR WORK
          </Link>
          <Link to="/dental-tourism" className="nav_link" onClick={closeAll}>
            DENTAL TOURISM
          </Link>
          <Link to="/blogs" className="nav_link" onClick={closeAll}>
            BLOGS
          </Link>
        </div>
        </>
       
      )}
    </header>
  );
};

export default HeaderNew;
