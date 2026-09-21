import React, { useState, useRef } from "react";
import "./Appointment.scss";
import { IoArrowForward } from "react-icons/io5";
import dr_appoint from "../../assets/appointment/doctors.webp";
import { FaUser, FaEnvelope, FaCalendarAlt } from "react-icons/fa";
import { BsFillCalendarDateFill } from "react-icons/bs";

const Appointment = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [appointmentDate, setAppointmentDate] = useState("");
  const dateInputRef = useRef(null);
  const datePickerRef = useRef(null);
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
    formDatab.append("type", "Appointment");

    fetch(
      "https://script.google.com/macros/s/AKfycbyR-drlnKnz_7saPjdbKKL430xYpDcrTohd_jKzUjtoiUE8wWywUG4a-dQrqgEbvSDL/exec",
      {
        method: "POST",
        body: formDatab,
      },
    )
      .then((res) => res.text())
      .then((data) => {
        setIsSubmitting(false); // Reset submitting state
        alert("Form submitted successfully!");
        formEle.reset(); // Reset the formx 
        setAppointmentDate("");
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
                  id="appointment-date"
                  ref={dateInputRef}
                  name="Date"
                  type="text"
                  inputMode="numeric"
                  required
                  className="form_input date_input"
                  placeholder="dd-mm-yyyy"
                  value={appointmentDate}
                  onChange={(event) => {
                    const digits = event.target.value.replace(/\D/g, "").slice(0, 8);
                    const formattedDate = digits.replace(
                      /^(\d{2})(\d{0,2})(\d{0,4})$/,
                      (_, day, month, year) =>
                        [day, month, year].filter(Boolean).join("-"),
                    );
                    setAppointmentDate(formattedDate);
                  }}
                  pattern="\d{2}-\d{2}-\d{4}"
                  title="Enter a date in dd-mm-yyyy format"
                />
                <input
                  ref={datePickerRef}
                  type="date"
                  tabIndex="-1"
                  aria-hidden="true"
                  className="form_input date_picker_input"
                  onChange={(event) => {
                    const [year, month, day] = event.target.value.split("-");
                    if (year && month && day) {
                      setAppointmentDate(`${day}-${month}-${year}`);
                    }
                  }}
                />


                <label
                  htmlFor="appointment-date"
                  className="form_icon date_iconn"
                  onClick={() => {
                    if (dateInputRef.current) {
                      dateInputRef.current.focus();
                    }
                    if (datePickerRef.current?.showPicker) {
                      datePickerRef.current.showPicker();
                    }
                  }}
                >
                  <BsFillCalendarDateFill />
                </label>
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
                  <option value="">Doctor's Name</option>
                  {doctors.map((doc, index) => (
                    <option key={index} value={doc}>
                      {doc}
                    </option>
                  ))}
                </select>
              </div>

              <button
                disabled={isSubmitting}
                type="submit"
                className="appointment_btn"
              >
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
