import React, { useEffect } from "react";
import "./Blogs.scss";
import PageTop from "../../comp/page_top/PageTop";
import AOS from "aos";
import "aos/dist/aos.css";
import Button from "../../comp/button/Button";
import { Link } from "react-router-dom";
import { IoArrowForwardOutline } from "react-icons/io5";

const Blogs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      offset: 120,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <PageTop title="Blogs" />

      <div
        className="blog_parent parent"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <div className="overlay bg-img-cover"></div>
        <div className="blog_cont cont">
          <div className="top_bar" style={{ justifyContent: "center" }}>
            <h1>Blog And News</h1>
          </div>

          <div className="blog_cards">
            <div className="card">
              <div className="image bg-img-cover">
                <p className="date">25 July 2026</p>
              </div>
              <h1 className="blog_heading">
                Smile Designing at Denza Dental: Your Path to a Confident,
                Natural-Looking Smile
              </h1>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content.
              </p>
              <Link to="/blog-details" className="arrow">
                <IoArrowForwardOutline />
              </Link>
            </div>
            <div className="card">
              <div className="image bg-img-cover">
                <p className="date">01 August 2026</p>
              </div>
              <h1 className="blog_heading">
                The Art of Managing Business and Patient Care
              </h1>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content.
              </p>
              <Link to="/blog-details" className="arrow">
                <IoArrowForwardOutline />
              </Link>
            </div>
            <div className="card">
              <div className="image bg-img-cover">
                <p className="date">07 August 2026</p>
              </div>
              <h1 className="blog_heading">
                The Art of Managing Business and Patient Care
              </h1>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content.{" "}
              </p>
              <Link to="/blog-details" className="arrow">
                <IoArrowForwardOutline />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
