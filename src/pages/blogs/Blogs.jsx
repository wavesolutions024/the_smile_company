import React, { useEffect, useState } from "react";
import "./Blogs.scss";
import PageTop from "../../comp/page_top/PageTop";
import AOS from "aos";
import "aos/dist/aos.css";
import Button from "../../comp/button/Button";
import { Link, useSearchParams } from "react-router-dom";
import { IoArrowForwardOutline } from "react-icons/io5";
import { Helmet } from "react-helmet";
import blogs from "../../data/blogs";
import axios from "axios";

const Blogs = () => {
  const [blogData, setBlogData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [loader, setLoader] = useState(false);

  const itemsPerPage = 6;

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      offset: 120,
    });
    AOS.refresh();
  }, []);

  const [searchParams] = useSearchParams();
  const blogid = searchParams.get("id");

  useEffect(() => {
    if (blogid) {
      console.log("Setting blogview state with id:", blogid);
      setBlogView(blogid);
    }
  }, [blogid]);

  const blogsData = async () => {
    try {
      setLoader(true);
      const response = await axios.get(
        `${import.meta.env.VITE_APP_URL}/posts?_embed`,
        {
          params: {
            per_page: 100,
          },
        },
      );

      const data = response.data;


      const blogPosts = data
        .filter((post) => {
          // Check if the post belongs to the 'Blog' category
          return (
            post._embedded &&
            post._embedded["wp:term"] &&
            post._embedded["wp:term"][0].some(
              (category) => category.name === "Blog",
            )
          );
        })
        .map((post) => {
          const featuredMedia = post._embedded["wp:featuredmedia"]?.[0] || {};
          return {
            id: post.id,
            slug: post.slug,
            title: post.title.rendered,
            description: post.excerpt.rendered,
            uploadDate: post.date,
            imageUrl: featuredMedia.source_url || "",
            imageId: featuredMedia.id || null,
            category: "Blog",
          };
        });

      setBlogData(blogPosts);
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    blogsData();
  }, []);

  const startOffset = currentPage * itemsPerPage;
  const paginatedBlogs = blogData.slice(
    startOffset,
    startOffset + itemsPerPage,
  );

  const handleNextPage = () => {
    if (startOffset + itemsPerPage < blogData.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };


  return (
    <>
      <Helmet>
        <title>Dental Blog & Expert Insights | Denza Dental Center Pune</title>

        <meta
          name="description"
          content="Read dental health articles and expert insights from Denza Dental Center in Kharadi, Pune. Explore smile designing, cosmetic dentistry, dental implants, root canal treatment, oral health, preventive dentistry and modern dental care."
        />

        <meta
          name="keywords"
          content="
          Denza Dental Center,
          Denza Dental,
          Denza Dentistry,
          Denza Dental blogs,
          Denza Dental blog,
          dental blog Pune,
          dental blogs Kharadi,
          dentist blog Pune,
          dental health blog Pune,
          dental information Pune,
          dental advice Pune,
          dental care tips Pune,
          oral health blog Pune,
          oral health tips,
          dental health information,
          dental education Pune,
          dental articles Pune,
          dental expert insights Pune,
          dentist advice Kharadi,
          dental clinic blog Kharadi,
          smile designing Pune,
          smile makeover Pune,
          cosmetic dentistry Pune,
          dental implants Pune,
          dental implant information,
          root canal treatment Pune,
          root canal information,
          full mouth rehabilitation Pune,
          restorative dentistry Pune,
          orthodontic treatment Pune,
          pediatric dentistry Pune,
          preventive dentistry Pune,
          modern dentistry Pune,
          dental technology Pune,
          dental care Kharadi,
          dentist Kharadi Pune,
          dental clinic Kharadi Pune
        "
        />

        <link rel="canonical" href="https://denzadental.com/blogs" />

        <meta name="geo.region" content="IN-MH" />

        <meta
          name="geo.placename"
          content="Kharadi, Pune, Maharashtra, India"
        />

        <meta name="geo.position" content="18.5515;73.9430" />

        <meta name="ICBM" content="18.5515, 73.9430" />

        <meta property="og:type" content="website" />

        <meta property="og:site_name" content="Denza Dental Center" />

        <meta
          property="og:title"
          content="Dental Blog & Expert Insights | Denza Dental Center Pune"
        />

        <meta
          property="og:description"
          content="Explore dental health articles and expert insights from Denza Dental Center in Kharadi, Pune, covering smile designing, cosmetic dentistry, dental implants, root canal treatment, oral health and modern dental care."
        />

        <meta property="og:url" content="https://denzadental.com/blogs" />

        <meta
          property="og:image"
          content="https://denzadental.com/og-image.jpg"
        />

        <meta
          property="og:image:alt"
          content="Denza Dental Center dental blog and expert insights"
        />

        <meta property="og:locale" content="en_IN" />
      </Helmet>

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
            {blogData.map((blog) => (
              <div className="card" key={blog.slug}>
                <div
                  className="image bg-img-cover"
                  style={{ backgroundImage: `url(${blog.imageUrl})` }}
                >
                  {/* <p className="date">{blog.date}</p> */}
                </div>
                <h1 className="blog_heading">{`Read ${blog.title.slice(0,50)}...`}</h1>
                <p
                dangerouslySetInnerHTML={{
                  __html:blog.description.slice(0,200)

                }}
                />
               
                <Link to={`/blog-details/${blog.slug}`} className="arrow">
                  <IoArrowForwardOutline />
                </Link>{" "}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
