import React from "react";

import "./NewCard.css";
import { Divider } from "@mui/material";
import { Delete, Favorite, LocationOn } from "@mui/icons-material";
import { Link } from "react-router-dom";

export const NewCard = (props) => {
  const { id, location, contact, myImage, description, fee } = props.data;
  return (
    <div className="new-main-card-container">
      <div className="new-card">
        <div className="new-card-top">
          <p>
            <LocationOn />
            {location}
          </p>
          <p>{contact}</p>
        </div>
        <div className="new-card-image">
          <img src={myImage} alt="job post" />
        </div>
        <div className="new-card-bottom">
          <p>{description}</p>
          <Divider
            sx={{
              margin: "0 20px",
            }}
          />
          <p
            style={{
              textAlign: "right",
              fontWeight: "bold",
            }}
          >
            ${fee}/hr
          </p>
          <div className="newcard-actions">
            <Link style={{ textDecoration: "none", color: "black" }}>
              <Delete sx={{ color: "#343434" }} />
            </Link>
            <Link style={{ textDecoration: "none", color: "black" }}>
              <Favorite sx={{ color: "#343434" }} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
