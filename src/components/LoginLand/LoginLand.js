import React from "react";
import "./LoginLand.css";

export const LoginLand = () => {
  return (
    <div className="login-land-container">
      <div className="login-land-top">
        <h1>Welcome to BASAZW!</h1>
        <p>
          Whether you are looking <b>FOR help</b> or you are looking{" "}
          <b>TO help</b>, <b>BASAZW</b> is the best place for you!{" "}
        </p>
      </div>
      <div className="login-land-bottom">
        <div className="login-land-list">
          <p>Services offered include: </p>
          <ul>
            <li>Outdoor Help</li>
            <li>Moving</li>
            <li>Furniture Assembly</li>
            <li>House Maids</li>
            <li>Errands</li>
            <li>Cleaning</li>
            <li>Painting</li>
            <p>And much more!</p>
          </ul>
        </div>
        {/* 
        <div className="login-land-image">
          <img src="./images/1.jpg" alt="welcome-pic" />
        </div> */}
      </div>
      {/* <p>
        Just Login or Sign up if you don't have an account already and explore a
        wide variety of services offered on our website.
      </p> */}
    </div>
  );
};
