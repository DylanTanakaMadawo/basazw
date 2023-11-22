import React from "react";

import "./FeaturedCard.css";
import { Divider } from "@mui/material";
export const FeaturedCard = (props) => {
  const {
    id,
    image,
    name,
    review,
    completed,
    skill1,
    skill2,
    skill3,
    description,
  } = props.data;
  return (
    <div className="featured-card-container">
      <div className="featured-card-top">
        <div className="featured-card-img-container">
          <img src={image} alt="profile icon" />
        </div>
        <div className="featured-card-info">
          <h3>{name}</h3>
          <p>{review}% positive reviews</p>
          <p>{completed} completed tasks</p>
        </div>
      </div>
      <Divider sx={{ margin: "0 30px" }} />
      <div className="featured-card-middle">
        <h3>Skills</h3>
        <p>-{skill1}</p>
        <p>-{skill2}</p>
        <p>-{skill3}</p>
      </div>
      <Divider sx={{ margin: "0 30px" }} />
      <div className="featured-card-bottom">
        <h2>Why me:</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};
