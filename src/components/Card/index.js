import React from "react";
import { LocationCity, Phone } from "@mui/icons-material";

import "./index.css";

export const Card = ({ image }) => {
  return (
    <div className="card-container">
      <div className="location-contact">
        <div className="location">
          <LocationCity sx={{ color: "#343434", marginTop: "20px" }} />
          <h3>Grendaler, Hre</h3>
        </div>
        <div className="contact">
          <Phone sx={{ color: "#343434", marginTop: "22px" }} />
          <h3>0771234567</h3>
        </div>
      </div>
      <div className="img-container">
        <img src={image} alt="" />
      </div>
      <div className="card-info">
        <div className="description">
          <h3>description</h3>
          <p>
            This is a brief description about the job to be done.This is a brief
            description about the job to be done.This is a brief description
            about the job to be done
          </p>
        </div>
        <div className="status">
          <h3>Status</h3>
          <p>Active/Done</p>
        </div>
      </div>
      <div className="card-btn-container">
        <button className="card-btn">Take Job</button>
      </div>
    </div>
  );
};
