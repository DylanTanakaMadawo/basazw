import React, { useEffect } from "react";

import "./LandingPage.css";
import { Link, useNavigate } from "react-router-dom";
import { Divider } from "@mui/material";
import { Info } from "../Info/Info";

import { Featured } from "../Featured/Featured";
import { Footer } from "../Footer/Footer";
import { LoginLand } from "../LoginLand/LoginLand";

export const LandingPage = () => {
  // const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const myNavigate = () => {
    navigate("/browse");
    window.location.reload();
  };
  return (
    <div className="landing-page-container">
      <div className="landing-desc-container">
        <div className="landing-desc">
          {/* <p>
            BASA.ZW operates an online marketplace that matches freelance labor
            with local demand, allowing people to find help with tasks including
            personal assistance, furniture assembly, moving, delivery, and
            handyman work. Founded in 2023 by founder an CEO Dylan Madawo, It
            looks to improve the relationship between the those who need instant
            help and those who can offer instant services to provide the help.
          </p> */}
          <LoginLand />
        </div>
      </div>

      <Divider sx={{ margin: "0 10%" }} />

      <div className="landing-main-btns">
        <div className="landing-cards">
          <div className="landing-all-card">
            <div className="landing-card-image">
              <img src="/images/jobsearch.png" alt="task" />
            </div>
            <div className="landing-card-text">
              <h2>Need Work?</h2>
              <p>Choose When and Where you want to Work</p>
              <h3>Click button below to learn more</h3>
              <button
                style={{ cursor: "pointer", fontFamily: "inherit" }}
                className="for-to-link"
                onClick={myNavigate}
              >
                {/* <p>LOOKING TO WORK?</p> */}
                LOOKING TO WORK?
              </button>
            </div>
          </div>

          <div className="landing-all-card">
            <div className="landing-card-image">
              <img src="/images/hire.png" alt="task" />
            </div>
            <div className="landing-card-text">
              <h2>Need Help?</h2>
              <p>Hire Reliable Hourly Staff With Full Predictability</p>
              <h3>Click button below to learn more</h3>
              {/* <Link className="for-to-link" to="/addjob">
                <p>LOOKING TO HIRE?</p>
              </Link> */}
              <button
                style={{ cursor: "pointer", fontFamily: "inherit" }}
                className="for-to-link"
                onClick={myNavigate}
              >
                {/* <p>LOOKING TO WORK?</p> */}
                LOOKING TO HIRE?
              </button>
            </div>
          </div>
        </div>
      </div>

      <Divider sx={{ margin: "3% 10%" }} />

      <div className="landing-how-to">
        <h2>How It Works</h2>
        <div className="landing-steps">
          <div className="landing-step">
            <h3>Step One</h3>
            <p>LogIn or Create an Account</p>
          </div>
          {/* <div className="landing-step">
            <h3>Step Two</h3>
            <p>Verify Account</p>
          </div> */}
          <div className="landing-step">
            <h3>Step Two</h3>
            <p>Browse for Job</p>
          </div>
          <div className="landing-step">
            <h3>Step Three</h3>
            <p>Contact client</p>
          </div>
          <div className="landing-step">
            <h3>Step Four</h3>
            <p>Agree on Fee</p>
          </div>
        </div>
      </div>
      <Divider sx={{ margin: "3% 10%" }} />
      <Featured />
      <Divider sx={{ margin: "0 10%" }} />
      <Info />
      <Divider sx={{ margin: "0 10%" }} />
      <Footer />
      {/* <div className="landing-testimonies-container">
        <div className="landing-testimonies"></div>
      </div> */}
    </div>
  );
};
