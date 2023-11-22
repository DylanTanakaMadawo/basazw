import React from "react";

import "./Spinner.css";

export const Spinner = ({ myLoading }) => {
  return (
    <div className="loader-container">
      <div className="spinner"></div>
      <p style={{ marginLeft: "20px" }}>Please wait while {myLoading}...</p>
    </div>
  );
};
