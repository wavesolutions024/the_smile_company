import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./HeaderNew.scss";
import logo from "../../assets/header/new_logo.png";
import { RxCross2 } from "react-icons/rx";

const HeaderNew = () => {
  const location = useLocation();
  const [visible, setVisible] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  // activePath[depth] = key of the open item at that depth.
  // Replaces activeDropdown/activeSubmenu so nesting isn't capped at 2 levels.
  const [activePath, setActivePath] = useState([]);

  const navItems = [
    {
      id: "dental",
      label: "DENTAL SERVICES",
      children: [
        {
          label: "GENERAL DENTAL SERVICES",
          to: "/general-dental",
          children: [
            { label: "DENTAL CHECK-UPS  ", to: "/dental-check-ups" },
            { label: "DENTAL X-RAY   ", to: "/dental-x-ray" },
            { label: "TEETH CLEANING    ", to: "/teeth-cleaning" },
            { label: "ROOT CANAL TREATMENT     ", to: "/root-canal-treatment" },
            {
              label: "ROOT CANAL RE-TREATMENT      ",
              to: "/root-canal-retreatment ",
            },
            { label: "TOOTH EXTRACTION", to: "/tooth-extraction " },
            {
              label: " WISDOM TOOTH EXTRACTION",
              to: "/wisdom-tooth-extraction",
            },
            { label: "MINOR ORAL SURGERIES ", to: "/minor-oral-surgeries" },
          ],
        },
        {
          label: "RESTORATIVE DENTISTRY",
          to: "/restorative-dentistry",
          children: [
            {
              label: "TOOTH COLORED FILLINGS  ",
              to: "/tooth-coloured-feeling",
            },
            {
              label: "DENTAL CROWNS",
              to: "/dental-crowns",
              // 3rd level nav — now rendered correctly by the recursive renderer below
              children: [{ label: "ZIRCONIA CROWNS", to: "/zirconia-crowns" }],
            },
            { label: " CROWNS AND BRIDGES ", to: "/crowns-bridges" },
            { label: " INLAYS AND ONLAYS ", to: "/inlays-onlays" },
          ],
        },
        {
          label: "COSMETIC DENTISTRY",
          to: "/cosmetic-dentistry",
          children: [
            {
              label: "SMILE ANALYSIS AND CONSULTATION ",
              to: "/smile-analysis-consultation",
            },
            { label: " SMILE DESIGNING", to: "/smile-designing" },
            {
              label: " TEETH WHITENING TREATMENT",
              to: "/teeth-whitening-treatment",
            },
            {
              label: " PORCELAIN VENEERS TREATMENT ",
              to: "/porcelain-veneers-treatment",
            },
            { label: "TOOTH RESHAPING", to: "/tooth-reshaping" },
            { label: "  COMPOSITE VENEERS ", to: "/composite-veneers" },
            { label: "COMPOSITE BONDING  ", to: "/composite-bonding" },
            { label: "GUM CONTOURING ", to: "/gum-countouring" },
            { label: " GUM DEPIGMENTATION  ", to: "/gum-depizmentation" },
          ],
        },
        {
          label: "ORTHODONTIC TREATMENTS",
          to: "/orthodontic-treatments",
          children: [
            { label: "CLEAR ALIGNERS  ", to: "/clear-aligners" },
            { label: "CERAMIC BRACES  ", to: "/ceramic-braces" },
            { label: "METAL BRACES ", to: "/metal-braces" },
            { label: "LINGUAL BRACES ", to: "/lingual-braces" },
          ],
        },
        {
          label: "DENTAL IMPLANTS TREATMENT",
          to: "/dental-implants-treatment",
          children: [
            {
              label: "ALL-ON-4 AND ALL-ON-6 DENTAL IMPLANTS  ",
              to: "/all-on-four",
            },
            {
              label: " IMPLANT SUPPORTED OVERDENTURE ",
              to: "/implant-supported",
            },
          ],
        },
        {
          label: "FULL MOUTH REHABILITATION",
          to: "/full-mouth-rehabilitation",
        },
        { label: "DENTURE TREATMENT", to: "/denture-treatment" },
        { label: "PEDIATRIC DENTISTRY", to: "/pediatric-dentistry" },
        { label: " DENTAL LASERS", to: "/dental-lasers-services" },
      ],
    },
    {
      id: "technology",
      label: "TECHNOLOGY",
      children: [
        {
          label: "CBCT 3D IMAGING",
          to: "/cbct",
        },
        {
          label: "3D Intra Oral Scanning",
          to: "/intra-oral-scanning",
        },
        {
          label: "Dental Lasers",
          to: "/dental-lasers"
        },
        {
          label: "GBT Cleaning",
          to: "/gbt-cleaning"
        },
        {
          label: "GBT Machine",
          to: "/gbt-machine"
        },
        {
          label: "Dental Loupes",
          to: "/dental-loupes"
        },
        {
          label: "Conscious Sedation (Laughing Gas)",
          to: "/laughing-gas"
        },
      ],
    },
    { label: "OUR WORK", to: "/our-work" },
    { label: "BLOGS", to: "/blogs" },
    { label: "ABOUT US", to: "/about" },
    { label: "DENTAL TOURISM", to: "/dental-tourism" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const shouldShow = window.scrollY > 80;
      setVisible(shouldShow);
      if (window.scrollY <= 80 && location.pathname === "/") {
        setMobileOpen(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const closeAll = () => {
    setMobileOpen(false);
    setActivePath([]);
  };

  // Is the item with this key open at this depth?
  // Since we only render a level's items while its parent is already open,
  // activePath's prefix is guaranteed to match — no extra bookkeeping needed.
  const isOpenAt = (depth, key) => activePath[depth] === key;

  // Open/close the item at `depth`. Opening truncates any deeper stale path
  // and replaces it with the new branch; re-clicking the same item closes it.
  const toggleAt = (depth, key) => {
    console.log(depth,key)
    setActivePath((prev) =>
      prev[depth] === key
        ? prev.slice(0, depth)
        : [...prev.slice(0, depth), key],
    );
  };
 
  

  // Recursively renders any depth of nested children as submenu panels.
  // depth 0 = top-level nav items (handled by renderTopLevel below),
  // depth >= 1 = everything inside a dropdown, however deeply nested.
  const renderSubmenu = (items, depth) =>
    items.map((item) => {
      const hasChildren =
        Array.isArray(item.children) && item.children.length > 0;
      const key = item.id || item.label;

      if (!hasChildren) {
        return (
          <Link key={key} to={item.to} onClick={closeAll}>
            {item.label}
          </Link>
        );
      }

      const open = isOpenAt(depth, key);

      return (
        <div key={key} className="submenu_item">
          <Link
            type="button"
            to={item.to}
            className="submenu_toggle"
            onMouseEnter={(event) => {
              // event.preventDefault();
              // event.stopPropagation();
              toggleAt(depth, key);
            }}
          >
            {item.label} <span className="caret">▸</span>
            {open && (
              <div className="submenu open">
                <div className="submenu_panel">
                  {renderSubmenu(item.children, depth + 1)}
                </div>
              </div>
            )}
          </Link>
        </div>
      );
    });

  const renderTopLevel = (item, isMobile = false) => {
    const hasChildren =
      Array.isArray(item.children) && item.children.length > 0;
    const isOpen = isOpenAt(0, item.id);

    if (!hasChildren) {
      return (
        <Link
          key={item.label}
          to={item.to}
          className="nav_link"
          onClick={closeAll}
        >
          {item.label}
        </Link>
      );
    }

    if (isMobile) {
      return (
        <div key={item.id} className="nav_item dropdown">
          <Link type="button" onClick={() => toggleAt(0, item.id)}>
            {item.label} <span className="caret">▾</span>
          </Link>
          {isOpen && (
            <div
              className={
                item.id === "technology"
                  ? "dropdown_panel small"
                  : "dropdown_panel"
              }
            >
              <div className="dropdown_column">
                {renderSubmenu(item.children, 1)}
              </div>
            </div>
          )}
        </div>
      );
    }

    return (
      <div
        key={item.id}
        className={`nav_item dropdown ${isOpen ? "open" : ""}`}
      >
        <Link
          type="button"
          onMouseEnter={() => toggleAt(0, item.id)}
          onClick={() => toggleAt(0, item.id)}
        >
          {item.label} <span className="caret">▾</span>
        </Link>
        <div className="dropdown_panel" onMouseLeave={closeAll}>
          <div className="dropdown_column">
            {renderSubmenu(item.children, 1)}
          </div>
        </div>
      </div>
    );
  };

  return (
    <header
      className={visible ? "header_new parent active" : "header_new parent"}
    >
      <div className="header_inner cont">
        <Link to="/" onClick={closeAll} className="logo_link">
          <img src={logo} alt="Denza Dental" />
        </Link>

        <div className="main_nav">
          {navItems.map((item) => renderTopLevel(item))}
        </div>

        <div className="header_actions">
          <div
            className="hamburger"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {!mobileOpen ? (
              <>
                <span></span>
                <span></span>
                <span></span>
              </>
            ) : (
              <div className="cross">
                <RxCross2 />
              </div>
            )}
          </div>
          <a href="tel:+917028131132 " className="phone_link">
            +91 7028 131 132
          </a>
          <Link to="/contact" className="book_btn" onClick={closeAll}>
            Book Appointment
          </Link>
        </div>
      </div>

      {mobileOpen && (
        <div className="mobile_header">
          {navItems.map((item) => renderTopLevel(item, true))}
        </div>
      )}
    </header>
  );
};

export default HeaderNew;
