import React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import "../App.css";
import axios from "axios";
import user from "../assets/user.svg";
import mobile from "../assets/mobile.svg";
import email from "../assets/email.svg";

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    mobile: "",
    meta: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });


  
  };


  const handleSubmit = async (event) => {
    event.preventDefault();

     // Send data to Google Sheets
    try {
      await axios.post('https://sheet.best/api/sheets/3f70db2b-302b-4c4e-91aa-56b4c3cef52c', data);
      console.log("Data saved successfully");
    } catch (error) {
      console.error("Error saving data:", error);
    }


     // Send data to the API
    try {
      await axios.post('https://api.propacity.in/api/v1/webhooks/integration/61cf0d44-1ede-4dfa-b3ce-930072581261/insertLead', data);
      console.log("Data saved successfully");
    } catch (error) {
      console.error("Error saving data:", error);
    }

  };
 
  console.log(data);
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "110vh",
          background: "#1A2440",
          display: "flex",
          alignItems: "center",
          position: "relative",
        }}
      >
        {/* contact form section */}
        <div
          style={{
            width: "40%",
            padding: "2rem 2rem 2rem 10rem",
            position: "absolute",
          }}
        >
          <h3
            style={{
              margin: "2rem 2rem 2rem 0",
              color: "#FFF",
              fontFamily: "Gabriela",
              fontSize: "50px",
              fontStyle: "normal",
              fontWeight: 500,
            }}
          >
            CONTACT US
          </h3>

          <p
            style={{
              color: "#A5A5A5",
              fontFamily: "Poppins",
              fontSize: "12px",
              fontStyle: "normal",
              fontWeight: 400,
              margin: "0 2rem 2rem 0",
            }}
          >
            Please enter details below and we shall get in touch with you
            shortly
          </p>

          <div className="contact-form">
            <img src={user} />
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div className="contact-form">
            <img src={mobile} />
            <input
              type="number"
              name="mobile"
              placeholder="Mobile"
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div className="contact-form">
            <img src={email} />
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div className="contact-form" style={{ height: "6rem" }}>
            <textarea
              placeholder="Enter message"
              name="meta"
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div style={{ width: "351px", textAlign: "center" }}>
            <Button
              onClick={handleSubmit}
              variant="contained"
              sx={{
                margin: "auto",
                borderRadius: "0",
                background: "#00E5A1",
                "&:hover": {
                  background: "#00E5A1",
                },
              }}
            >
              SUBMIT
            </Button>
          </div>
        </div>
        {/* contact form section ends */}

        {/* map section */}
        <div className="map-section">{/* <img src={map} /> */}</div>

        {/* map section ends */}
      </div>
    </>
  );
};

export default Contact;
