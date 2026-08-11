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
            Full Mouth Rehabilitation at Denza Dental: Rebuilding Function,
            Health, and Confidence
          </h1>
          <div>
            <p>
              When multiple teeth are damaged, missing, or affected by long-term
              wear, a single procedure often isn't enough to restore your oral
              health. That's where full mouth rehabilitation comes in — a
              comprehensive, personalized approach to reconstructing your entire
              smile from the ground up. At Denza Dental, we help patients regain
              both the function and appearance of a healthy mouth through
              carefully planned, multi-step treatment.
            </p>
            <p>What Is Full Mouth Rehabilitation?</p>
            <p>
              Full mouth rehabilitation (also called full mouth reconstruction)
              is a customized combination of dental procedures designed to
              restore all the teeth in both the upper and lower jaws. Unlike
              cosmetic treatments that focus purely on appearance, full mouth
              rehabilitation addresses function, structure, and health —
              correcting bite issues, restoring damaged teeth, and replacing
              missing ones — while also improving aesthetics. This treatment is
              typically recommended for patients dealing with a combination of
              dental problems rather than a single isolated issue. Who Needs
              Full Mouth Rehabilitation? You may benefit from full mouth
              rehabilitation if you experience: Multiple missing teeth Severe
              tooth decay or damage across several teeth Chronic teeth grinding
              (bruxism) causing significant wear Jaw pain or bite misalignment
              (TMJ-related issues) Teeth that have shifted due to long-term
              tooth loss A combination of broken, cracked, or heavily filled
              teeth Previous dental work that has failed or deteriorated
              Treatments Included in Full Mouth Rehabilitation Because every
              case is different, treatment plans are built around each patient's
              specific needs. Common procedures include: <br /><br />
              1. Dental Implants Titanium posts that replace missing tooth
              roots, providing a stable foundation for crowns or bridges.
              <br />
              2. Crowns and Bridges Used to restore damaged teeth or replace
              missing ones while maintaining proper bite alignment.
              <br /> 3. Root Canal Therapy Addresses infected or severely
              decayed teeth to save natural tooth structure wherever possible.
              <br />
              4. Periodontal (Gum) Treatment Necessary when gum disease has
              contributed to tooth or bone loss, ensuring a healthy foundation
              for restorative work.
              <br />
              5. Orthodontic Correction Occasionally used to reposition teeth
              for proper bite function before restorative work begins.
              <br />
              6. Bite Correction & TMJ Therapy Addresses jaw joint issues and
              uneven bite forces that can cause pain and further dental damage.
              <br />
              7. Dentures or Implant-Supported Overdentures
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
