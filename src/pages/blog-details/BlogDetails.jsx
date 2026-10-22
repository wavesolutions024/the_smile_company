import React, { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import "./BlogDetails.scss";
import blogs from "../../data/blogs";
import axios from "axios";

const BlogDetails = () => {
  const { blogId } = useParams();

  const [blogdata,setBlogData] = useState()


    const fetchBlogDataById = async (id) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_APP_URL}/posts?slug=${id}&_embed` // Fetch single post by ID
      );

      const post = response?.data[0];
      const featuredMedia = post._embedded["wp:featuredmedia"]?.[0] || {};

      const postData = {
        id: post.id,
        title: post.title.rendered,
        description: post.content.rendered,
        uploadDate: post.date,
        imageUrl: featuredMedia.source_url || "",
        imageId: featuredMedia.id || null,
        category: "Blog",
      };

      console.log(postData)

      setBlogData(postData); // Set the blog data based on the single post

    
    } catch (error) {
      console.log(error);
    }
  };

  
  useEffect(() => {
    if (blogId) {
      fetchBlogDataById(blogId); // Fetch the blog post data based on the id from URL
    }
  }, [blogId]);

  return (
    <div>
      <div className="parent blog_details_parent">
        <div className="cont blog_details_cont">
          <img src={blogdata?.imageUrl} alt={blogdata?.title} />
          <div className="blog_details_content">
            {/* <span className="date">Date : {blogdata?.date}</span> */}
            {/* <span className="category">Category: {blogdata?.category}</span> */}
          </div>
          <h1>{blogdata?.title}</h1>
          <div>
          <div
          dangerouslySetInnerHTML={{
            __html:blogdata?.description
          }}
          />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
