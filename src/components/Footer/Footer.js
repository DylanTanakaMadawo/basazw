import React from "react";

import "./Footer.css";
import {
  Email,
  Facebook,
  Instagram,
  Phone,
  Twitter,
} from "@mui/icons-material";

export const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-left">
          <h1>Discover</h1>
          <p>Become a Helper</p>
          <p>Services by City</p>
          <p>All services</p>
          <p>Elite Helpers</p>
          <p>Help</p>
        </div>
        <div className="footer-right">
          <h1>Company</h1>
          <p>About Us</p>
          <p>Careers</p>
          <p>Blog</p>
          <p>Terms and services</p>
        </div>
        <div className="socials">
          <h1>Follow</h1>
          <div className="social-links">
            <Instagram className="mui-icons" />
            <Facebook className="mui-icons" />
            <Twitter className="mui-icons" />
            <Email className="mui-icons" />
            <Phone className="mui-icons" />
          </div>
        </div>
      </div>
      <div className="signature">
        <p>All rights reserved | Dylan Madawo | 2023</p>
      </div>
    </>
  );
};
