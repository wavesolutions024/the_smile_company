import React from 'react'
import "../dr-page/Female.scss";
import dr_img from "../../assets/about_page/woman_dr.jpg";
import PageTop from "../../comp/page_top/PageTop";
import certificate1 from "../../assets/354.jpg";

const Female = () => {

  const data = [
    certificate1,
    certificate1,
    certificate1,
    certificate1,
    certificate1,
    certificate1,
  ];

  return (
    <div>
       <div className="female_dr_parent parent">
              <div className="cont female_dr_cont">
                <div className="left_dr">
                  <img src={dr_img} alt="" />
                </div>
                <div className="right_dr">
                  <h1>Dr. Jane Smith</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perspiciatis quisquam vel corrupti, porro aliquam quos eius ab
                    dolor, error, dignissimos ullam veritatis aperiam ex animi. Lorem
                    ipsum dolor sit amet, consectetur adipisicing elit. Accusantium,
                    tenetur illo. Ratione nisi corrupti saepe. Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Possimus eos maxime
                    consequuntur ullam sint quas quos!
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Temporibus ratione provident facilis iste, culpa aut!
                  </p>
                </div>
              </div>
            </div>
      
            {/* photos */}
      
            <div class="parent photos_parent">
              <div class="cont photos_cont">
                {data.map((item) => (
                  <img src={item} alt="" />
                ))}
              </div>
            </div>
    </div>
  )
}

export default Female
