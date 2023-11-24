import React, { useContext, useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import "./index.css";
import { ArrowBack, AddAPhoto } from "@mui/icons-material";

import axios from "axios";
import { UserContext } from "../../context/userContext";

import { toast } from "react-hot-toast";

import { Spinner } from "../Spinner/Spinner.js";

export const JobForm = () => {
  const [location, setLocation] = useState("");
  const [contact, setContact] = useState("");
  const [description, setDescription] = useState("");
  const [fee, setFee] = useState("");
  const [loading, setLoading] = useState(false);
  const [postImage, setPostImage] = useState({ myFile: "" });
  const [author, setAuthor] = useState("");
  const [myTime, setTime] = useState("");
  // const [myuserName, setUsername] = useState("");

  const { user } = useContext(UserContext);
  const myuserName = user.userName;

  // const myAuthor = user.userName;

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    // console.log(base64);
    // console.log(file);
    setPostImage({ ...postImage, myFile: base64 });
  };
  const handleSavePost = (e) => {
    e.preventDefault();
    console.log("image and stuff uploaded?");

    // const myImage = postImage.myFile;
    const today = Date.now();

    const data = {
      location,
      contact,
      description,
      fee,
      // myImage: postImage.myFile,
      myImage: postImage.myFile,
      author: myuserName,
      // myTime: new Date().toLocaleString() + "",
      myTime: new Intl.DateTimeFormat("en-GB", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }).format(today),
    };
    // console.log(data.myImage);
    setLoading(true);
    axios
      .post("/posts", data)
      .then(() => {
        setLoading(false);
        navigate("/browse");
        // setAuthor(user.userName);
      })
      .catch((err) => {
        setLoading(false);
        // alert("error: Check console");
        toast.error("Please make sure all fields are filled including image");
        console.log(err);
      });
  };

  const navigate = useNavigate();

  function convertToBase64(file) {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {loading ? (
        <Spinner myLoading="saving" />
      ) : (
        <div className="form-pager">
          <div className="home-link-container">
            <Link
              to="/browse"
              style={{
                textDecoration: "none",
                color: "black",
                display: "flex",
              }}
            >
              <ArrowBack sx={{ marginTop: "27px", marginRight: "10px" }} />
              <h2>Browse Jobs</h2>
            </Link>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <p style={{ color: "red", fontSize: "14px" }}>
              **please fill all fields on the form below
            </p>
          </div>
          <div className="form-form-container">
            <div className="username" style={{ display: "none" }}>
              <span>Username</span>
              <input
                type="text"
                value={author}
                // onChange={(e) => setAuthor(e.target.value)}
                placeholder="Username"
                className="location-input"
                maxLength="20"
              />
            </div>
            <div className="time" style={{ display: "none" }}>
              <span>Time</span>
              <input
                type="text"
                value={myTime}
                // onChange={(e) => setAuthor(e.target.value)}
                placeholder="Username"
                className="location-input"
                maxLength="20"
              />
            </div>
            <form className="form">
              <div className="location-div input-grp">
                <div className="locations-div">
                  <div className="city">
                    <span>Job City</span>
                    <input
                      type="text"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="City"
                      className="location-input"
                      maxLength="20"
                    />
                  </div>
                  <div className="town">
                    <span>Fee /hr</span>
                    <input
                      type="text"
                      value={fee}
                      onChange={(e) => setFee(e.target.value)}
                      placeholder="Fee"
                      className="location-input"
                      maxLength="20"
                    />
                  </div>
                </div>
              </div>
              <div className="contact-div input-grp">
                <span>Contact Info</span>
                <input
                  type="text"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  placeholder="Contact"
                  className="contact-input"
                  maxLength="20"
                />
              </div>
              <div className="description-div input-grp">
                <span>Brief Job Description(max 100 characters)</span>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Description"
                  className="desc-textarea"
                  maxLength="100"
                  style={{ fontFamily: "inherit" }}
                />
              </div>
              <div className="add-photo">
                <div className="photo-icon">
                  <AddAPhoto />
                </div>
                <p>Add A Photo</p>
                <input
                  className="file-upload-input"
                  // value={postImage.myFile}
                  type="file"
                  name="myFile"
                  id="file-upload"
                  // accept="image/jpeg image/png image/jpg image/webp image/avi"
                  accept="image/*"
                  max-size="5000"
                  onChange={(e) => handleFileUpload(e)}
                />
              </div>
              <div className="submit-btn-container">
                <button
                  type="submit"
                  className="submit-btn"
                  onClick={handleSavePost}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
