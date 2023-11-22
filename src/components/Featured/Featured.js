import React from "react";
import "./Featured.css";
import { FeaturedCard } from "./FeaturedCard/FeaturedCard";
import { TASKERDATA } from "../../Data";

export const Featured = () => {
  return (
    <div className="featured-container">
      <h1>Top Helpers</h1>
      <div className="featured-cards">
        {/* <FeaturedCard /> */}
        {TASKERDATA.map((data) => (
          <FeaturedCard data={data} />
        ))}
      </div>
    </div>
  );
};
