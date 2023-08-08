import React from "react";

import { Favorite, Phone, Home, Add } from "@mui/icons-material";

import "./index.css";
import { ListItemButton, List } from "@mui/material";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="outer-container">
      <div className="navbar-container">
        <div className="logo-container">
          <h1>BASA.zw</h1>
        </div>
        <div className="right-side-nav">
          <List className="actions">
            <ListItemButton>
              <Home sx={{ color: "#343434", fontSize: "30px" }} />
            </ListItemButton>
            <ListItemButton>
              <Favorite sx={{ color: "#343434", fontSize: "30px" }} />
            </ListItemButton>
            <ListItemButton>
              <Phone sx={{ color: "#343434", fontSize: "30px" }} />
            </ListItemButton>
          </List>

          <div className="add-job">
            <Link
              to="addjob"
              style={{
                textDecoration: "none",
                color: "black",
                display: "flex",
              }}
              className="addjob-link"
            >
              <h3>Add Job</h3>
              <Add sx={{ marginTop: "19px", marginLeft: "5px" }} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
