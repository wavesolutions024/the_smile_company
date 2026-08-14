import React, { useState } from "react";
import "./Appointment.scss";
import { IoArrowForward } from "react-icons/io5";
import dr_appoint from "../../assets/appointment/doctors.webp";
import { FaUser, FaEnvelope, FaCalendarAlt } from "react-icons/fa";

const Appointment = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const doctors = [
    "Dr. Hemant Suresh Thodsare",
    "Dr. Devika Kalaskar- Thodsare",
  ];
  const departments = [
    "General Dentistry",
    "Orthodontics",
    "Periodontics",
    "Prosthodontics",
    "Cosmetic Dentistry",
  ];

  function Submit(e) {
    e.preventDefault();

    setIsSubmitting(true); // Set submitting state to true

    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);
    const getDate = new Date();

    const date = getDate.toDateString();

    formDatab.append("Date", date);
    formDatab.append("type", "Appointment");

    fetch(
      "https://script.google.com/macros/s/AKfycbwaXC7KqjOPZ3a9mYEQS0oDzXnFyJZaCSHp9pGs_GiJZlxk_gQOLnZdmhuvgoaEolMl/exec",
      {
        method: "POST",
        body: formDatab,
      },
    )
      .then((res) => res.text())
      .then((data) => {
        setIsSubmitting(false); // Reset submitting state
        alert("Form submitted successfully!");
        formEle.reset(); // Reset the form
      })
      .catch((error) => {
        console.error("Error:", error);
        setIsSubmitting(false); // Reset submitting state even on error
        alert("Something went wrong. Please try again.");
      });
  }

  return (
    <div className="appointment_section parent">
      <div className="appointment_container cont">
        <div className="appointment_form_wrapper">
          <h1 className="appointment_title">Make An Appointment</h1>

          <form className="appointment_form" onSubmit={Submit}>
            <div className="form_row">
              <div className="form_group">
                <input
                  type="text"
                  name="Name"
                  placeholder="Your Name"
                  required
                  className="form_input"
                />
                <span className="form_icon">
                  <FaUser />
                </span>
              </div>

              <div className="form_group">
                <input
                  type="email"
                  name="Email"
                  placeholder="Your Email"
                  required
                  className="form_input"
                />
                <span className="form_icon">
                  <FaEnvelope />
                </span>
              </div>

              <div className="form_group">
                <input
                  placeholder="Date"
                  name="Date"
                  type="date"
                  required
                  className="form_input date_input"
                />
                
              </div>
            </div>

            <div className="form_row">
              <div className="form_group">
                <select
                  name="Dental_Concern"
                  required
                  className="form_input form_select"
                >
                  <option value="">Dental Concern</option>
                  {departments.map((dept, index) => (
                    <option className="opt" key={index} value={dept}>
                      {dept}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form_group">
                <select
                  name="Dr_Name"
                  required
                  className="form_input form_select"
                >
                  <option value="">Doctor Name</option>
                  {doctors.map((doc, index) => (
                    <option key={index} value={doc}>
                      {doc}
                    </option>
                  ))}
                </select>
              </div>

              <button disabled={isSubmitting} type="submit" className="appointment_btn">
                <span>{isSubmitting ? "Submitting..." : "Appointment"}</span>
                <IoArrowForward className="btn_arrow" />
              </button>
            </div>
          </form>
        </div>

        <div className="appointment_image_box">
          <img src={dr_appoint} alt="Doctor" />
        </div>
      </div>
    </div>
  );
};

export default Appointment;
