import React from "react";

import "./Banner.css";

export const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner-form-container">
        <h1 className="banner-center">Need Tasks Around you?We got you</h1>
        <p className="banner-center">Filter Jobs based on location</p>
        <form>
          <input
            placeholder="Enter location"
            type="text"
            style={{ fontFamily: "inherit" }}
          />
          <button>Filter</button>
        </form>
      </div>
    </div>
  );
};
