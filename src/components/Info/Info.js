import React from "react";

import "./Info.css";

import { Check } from "@mui/icons-material";

export const Info = () => {
  return (
    <div className="info-container">
      <div className="info-right">
        <div className="info-image-container">
          <img src="./images/3.jpg" alt="task" />
        </div>
      </div>
      <div className="info-left">
        <h2>Everything made easier</h2>
        <p>
          You don't have to do Everything alone. At very low costs, get reliable
          help for anything.
        </p>
        <p>
          <Check />
          <b>Choose Tasker</b>
        </p>
        <p>
          <Check />
          <b>Schedule date, time and place</b>
        </p>
        <p>
          <Check />
          <b>Pay and review</b>
        </p>
      </div>
    </div>
  );
};
