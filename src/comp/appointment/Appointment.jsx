import React, { useState } from "react";
import "./Appointment.scss";
import { IoArrowForward } from "react-icons/io5";
import dr_appoint from "../../assets/appointment/doctors.webp";
import { FaUser, FaEnvelope, FaCalendarAlt } from "react-icons/fa";

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    datetime: "",
    department: "",
    doctor: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Appointment booked:", formData);
  };

  const doctors = ["Dr. Sarah", "Dr. Michael", "Dr. Emily"];
  const departments = [
    "General Dentistry",
    "Orthodontics",
    "Periodontics",
    "Prosthodontics",
    "Cosmetic Dentistry",
  ];

  return (
    <div className="appointment_section parent">
      <div className="appointment_container cont">
        <div className="appointment_form_wrapper">
          <h1 className="appointment_title">Make An Appointment</h1>

          <form className="appointment_form" onSubmit={handleSubmit}>
            <div className="form_row">
              <div className="form_group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
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
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
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
                  name="datetime"
                  value={formData.datetime}
                  onChange={handleChange}
                  required
                  className="form_input"
                />
                <span className="form_icon">
                  <FaCalendarAlt />
                </span>
              </div>
            </div>

            <div className="form_row">
              <div className="form_group">
                <select
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  required
                  className="form_input form_select"
                >
                  <option value="">Department</option>
                  {departments.map((dept, index) => (
                    <option key={index} value={dept}>
                      {dept}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form_group">
                <select
                  name="doctor"
                  value={formData.doctor}
                  onChange={handleChange}
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

              <button type="submit" className="appointment_btn">
                <span>Appointment</span>
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
