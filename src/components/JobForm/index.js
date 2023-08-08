import React from "react";

import { Link, useNavigate } from "react-router-dom";

import "./index.css";
import { ArrowBack, AddAPhoto } from "@mui/icons-material";

export const JobForm = () => {
  const navigate = useNavigate();
  return (
    <div className="form-pager">
      <div className="home-link-container">
        <Link
          to="/"
          style={{ textDecoration: "none", color: "black", display: "flex" }}
        >
          <ArrowBack sx={{ marginTop: "27px", marginRight: "10px" }} />
          <h2>Home</h2>
        </Link>
      </div>
      <div className="form-container">
        <h1>Fill The form</h1>
        <form className="form">
          <div className="location-div input-grp">
            <div className="locations-div">
              <div className="city">
                <span>Job City</span>
                <input
                  type="text"
                  placeholder="City"
                  className="location-input"
                  maxLength="20"
                />
              </div>
              <div className="town">
                <span>Job Town</span>
                <input
                  type="text"
                  placeholder="Town"
                  className="location-input"
                  maxLength="20"
                />
              </div>
            </div>
          </div>
          <div className="contact-div input-grp">
            <span>Contact Info</span>
            <input
              type="text"
              placeholder="Contact"
              className="contact-input"
              maxLength="20"
            />
          </div>
          <div className="description-div input-grp">
            <span>Brief Job Description(max 100 characters)</span>
            <textarea
              placeholder="Description"
              className="desc-textarea"
              maxLength="100"
            />
          </div>
          <div className="add-photo">
            <div className="photo-icon">
              <AddAPhoto />
            </div>
            <p>Add A Photo</p>
            <input className="file-upload-input" type="file" />
          </div>
          <div className="submit-btn-container">
            <button className="submit-btn" onClick={() => navigate("/")}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
