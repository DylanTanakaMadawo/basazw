import React, { useContext, useEffect, useState } from "react";

import "./NewCard.css";
import { Divider } from "@mui/material";
import { Delete, Favorite, LocationOn } from "@mui/icons-material";
import { Link, useNavigate, useParams } from "react-router-dom";
import { CartContext } from "../../WishlistContext";
import axios from "axios";
import { UserContext } from "../../context/userContext";

export const NewCard = (props) => {
  const { _id, location, contact, myImage, description, fee, author, myTime } =
    props.data;

  const { user } = useContext(UserContext);

  return (
    <div className="new-main-card-container">
      <div className="new-card">
        <div className="new-card-top">
          <p>
            <LocationOn />
            {location}
          </p>
          <p>{contact}</p>
        </div>
        <div className="new-card-image">
          <img src={myImage} alt="job post" />
        </div>
        <div className="new-card-bottom">
          <div className="description-section">
            <p>{description}</p>
          </div>
          <Divider
            sx={{
              margin: "0 20px",
            }}
          />
          <div className="card-fee-delete">
            <p
              style={{
                textAlign: "right",
                fontWeight: "bold",
              }}
            >
              ${fee}/hr
            </p>
            {user.userName === author && (
              <Link
                // onClick={handleDeleteBook}
                style={{ textDecoration: "none", color: "black" }}
                to={`/posts/delete/${_id}`}
              >
                <Delete sx={{ color: "#343434" }} />
              </Link>
            )}
          </div>
          {user ? (
            <div className="author-time">
              <p style={{ color: "#949494" }}>
                <i>~ Postby @{author}</i>
              </p>
              {/* <p className="card-time">21 Nov 2023 at 12:20pm</p> */}
              {/* <p className="card-time">{new Date().toLocaleString() + ""}</p> */}
              <p>{myTime}</p>
            </div>
          ) : (
            <p>Error browwwskie</p>
          )}
        </div>
      </div>
    </div>
  );
};
