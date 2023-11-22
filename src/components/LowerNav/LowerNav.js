import React from "react";

import "./LowerNav.css";
import { List } from "@mui/material";
import { Link } from "react-router-dom";
import { Favorite, Home, Phone } from "@mui/icons-material";

export const LowerNav = () => {
  return (
    <div className="lower-nav-container">
      <div className="lower-actions">
        <List className="new-actions">
          <Link style={{ textDecoration: "none", color: "black" }} to="/home">
            <Home sx={{ color: "white", fontSize: "30px" }} />
          </Link>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/wishlist"
          >
            <Favorite sx={{ color: "white", fontSize: "30px" }} />
          </Link>
          <Link style={{ textDecoration: "none", color: "black" }} to="/">
            <Phone sx={{ color: "white", fontSize: "30px" }} />
          </Link>
        </List>
        {/* <h1>Ablaze</h1> */}
      </div>
      <div className="lower-logs">
        <Link
          style={{
            textDecoration: "none",
            color: "white",
            // display: "flex",
          }}
          to="/"
        >
          <p>Log Out</p>
        </Link>
      </div>
    </div>
  );
};
