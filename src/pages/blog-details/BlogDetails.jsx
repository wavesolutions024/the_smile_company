import React from "react";
import "./BlogDetails.scss";
import img1 from "../../assets/about_page/v_m_bg_img.webp";

const BlogDetails = () => {
  return (
    <div>
      <div className="parent blog_details_parent">
        <div className="cont blog_details_cont">
          <img src={img1} alt="Blog Image" />
          <div className="blog_details_content">
            <span className="date">Date : 28/04/2026</span>
            <span className="category">Category: Health</span>
          </div>
          <h1>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, vitae?
          </h1>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Molestias deleniti quia quos excepturi veniam et repudiandae quod
              non? Deserunt impedit dolor molestias labore! Similique distinctio
              consequuntur illo repellendus, dolorem totam?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              vero molestias voluptatum exercitationem quas, architecto
              consequatur voluptatem cupiditate pariatur! Omnis.
            </p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At atque suscipit vel velit ducimus doloremque inventore ipsam quam ipsum possimus aliquam nisi accusantium odio labore ad quidem placeat, sunt dignissimos? Tempora aliquam iste voluptate explicabo consectetur esse incidunt molestiae maxime molestias eveniet est atque fugiat ut cumque libero, officia fuga. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis modi repudiandae esse mollitia reprehenderit omnis, eum inventore alias commodi quam dolor tenetur, fugiat quod reiciendis magnam odio voluptatem voluptates dolorum.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
