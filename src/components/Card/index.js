import React from "react";
import { LocationCity, Phone } from "@mui/icons-material";

import "./index.css";

export const Card = (props) => {
  const { id, location, contact, myImage, description, fee } = props.data;

  return (
    <div className="card-container">
      <div className="location-contact">
        <div className="location">
          <LocationCity sx={{ color: "#343434", marginTop: "20px" }} />
          <h3>{location}</h3>
        </div>
        <div className="contact">
          <Phone sx={{ color: "#343434", marginTop: "22px" }} />
          <h3>{contact}</h3>
        </div>
      </div>
      <div className="img-container">
        <img src={myImage} alt="job-post" />
      </div>
      <div className="card-info">
        <div className="description">
          <h3>description</h3>
          <p>{description}</p>
        </div>
        <div className="status">
          <h3>Fee</h3>
          <p>Average Project Price : ${fee}/hr</p>
        </div>
      </div>
      <div className="card-btn-container">
        {/* <button className="card-btn">Take Job</button> */}
      </div>
    </div>
  );
};
