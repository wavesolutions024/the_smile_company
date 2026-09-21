import React from "react";
import { Navigate, useParams } from "react-router-dom";
import "./BlogDetails.scss";
import blogs from "../../data/blogs";

const BlogDetails = () => {
  const { blogId } = useParams();
  const blog = blogs.find((item) => item.id === blogId);

  if (!blog) return <Navigate to="/blogs" replace />;

  return (
    <div>
      <div className="parent blog_details_parent">
        <div className="cont blog_details_cont">
          <img src={blog.image} alt={blog.title} />
          <div className="blog_details_content">
            <span className="date">Date : {blog.date}</span>
            <span className="category">Category: {blog.category}</span>
          </div>
          <h1>{blog.title}</h1>
          <div>
            {blog.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
