import React, { useEffect } from "react";

import "./LandingPage.css";
import { Link } from "react-router-dom";
import { Divider } from "@mui/material";
import { Info } from "../Info/Info";

export const LandingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="landing-page-container">
      <div className="landing-desc-container">
        <div className="landing-desc">
          <p>
            BASA.ZW operates an online marketplace that matches freelance labor
            with local demand, allowing people to find help with tasks including
            personal assistance, furniture assembly, moving, delivery, and
            handyman work. Founded in 2023 by founder an CEO Dylan Madawo, It
            looks to improve the relationship between the those who need instant
            help and those who can offer instant services to provide the help.
          </p>
          <p>
            BASA.ZW is a job service that operates in Zimbabwe and connects
            users, called Helpers, to paying gigs. Helpers set their own rates
            and may get tips. Popular jobs with higher earning potential include
            handyman-type tasks, moving and cleaning, according to the company
          </p>
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
              <Link className="for-to-link" to="/browse">
                <p>LOOKING TO WORK?</p>
              </Link>
            </div>
          </div>

          <div className="landing-all-card">
            <div className="landing-card-image">
              <img src="/images/hire.png" alt="task" />
            </div>
            <div className="landing-card-text">
              <h2>Need Help?</h2>
              <p>Hire Reliable Hourly Staff With Full Predictability</p>
              <Link className="for-to-link" to="/addjob">
                <p>LOOKING TO HIRE?</p>
              </Link>
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
      <Divider sx={{ margin: "0 10%" }} />
      <Info />
      <Divider sx={{ margin: "0 10%" }} />
      {/* <div className="landing-testimonies-container">
        <div className="landing-testimonies"></div>
      </div> */}
    </div>
  );
};
