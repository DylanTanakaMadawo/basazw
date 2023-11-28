import React, { useEffect, useContext } from "react";

import { Favorite, Phone, Home, Add } from "@mui/icons-material";

import "./index.css";
import { List } from "@mui/material";
import { Link } from "react-router-dom";

import { UserContext } from "../../context/userContext";

export const Navbar = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="outer-container">
      <div className="navbar-container">
        <div className="logo-container">
          <h1>BASA.zw</h1>
        </div>
        <div className="right-side-nav">
          <List className="actions">
            <Link style={{ textDecoration: "none", color: "black" }} to="/home">
              <Home sx={{ color: "#343434", fontSize: "30px" }} />
            </Link>
            <Link style={{ textDecoration: "none", color: "black" }} to="/">
              <Favorite sx={{ color: "#343434", fontSize: "30px" }} />
            </Link>
            <Link style={{ textDecoration: "none", color: "black" }} to="/">
              <Phone sx={{ color: "#343434", fontSize: "30px" }} />
            </Link>
          </List>

          <div className="add-job">
            <Link
              to="/addjob"
              style={{
                textDecoration: "none",
                color: "black",
                display: "flex",
              }}
              className="addjob-link"
            >
              {user ? (
                <div className="user-postjob">
                  <h3>Post Job</h3>
                  <Add sx={{ marginTop: "1px", marginLeft: "5px" }} />
                </div>
              ) : (
                <></>
              )}
            </Link>
          </div>
          <div className="login-btn">
            {/* {!!user && <h1>Hie, {user.userName}!</h1>} */}
            {!user ? (
              <Link
                style={{
                  textDecoration: "none",
                  color: "black",
                  // display: "flex",
                }}
                to="/login"
              >
                <p>Log In</p>
              </Link>
            ) : (
              <>
                <Link
                  style={{
                    textDecoration: "none",
                    color: "black",
                    // display: "flex",
                  }}
                  to="/"
                >
                  <p>Log Out</p>
                </Link>
              </>
            )}
            {/* <p>Log In</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};
