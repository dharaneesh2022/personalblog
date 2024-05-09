// Contact.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Contact.css";
import axios from "axios";
const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          alert("Submitted Successfully");
          return;
        } else {
          alert("Error occured while submitting the form");
          return;
        }
      })
      .catch((err) => console.error(err));
  };
  return (
    <>
      <div className="contact">
        <h1 className="con1_1">Contact </h1>
        <div className="cont">
          <form className="form" onSubmit={handleSubmit}>
            <label className="label" htmlFor="fname">
              First name:
            </label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
            <br />
            <label className="label" htmlFor="lname">
              Last name:
            </label>
            <br />
            <input
              className="input"
              type="text"
              id="lame"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
            <br />
            <label className="label" htmlFor="Email">
              {" "}
              Email:
            </label>
            <br />
            <input
              className="input"
              type="mail"
              id="mail"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <br />
            <label className="label" htmlFor="message">
              {" "}
              Message:
            </label>
            <br />
            <input
              className="input"
              type="text"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
            <br />
            <br />
            <input className="input_1" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </>
  );
};
export default Contact;
