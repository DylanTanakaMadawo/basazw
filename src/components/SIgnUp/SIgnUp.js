import React from "react";

import "../LoginPage/LoginPage.css";
import "./SIgnUp.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import { toast } from "react-hot-toast";

import { useNavigate } from "react-router-dom";

export const SignUp = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    userName: "",
    password: "",
  });
  const registerUser = async (e) => {
    e.preventDefault();
    const { userName, password } = data;
    try {
      console.log("from try without waiting post request");
      const { data } = await axios.post("/signup", {
        userName,
        password,
      });
      if (data.error) {
        toast.error(data.error);
        // console.log("error from the toast items");
      } else {
        setData({});
        toast.success("Sign up successful. Welcome!");
        navigate("/login");
      }
    } catch (error) {
      console.log("error from signup frontend");
    }
  };
  return (
    <div className="login-container">
      <div className="form-container">
        <form onSubmit={registerUser}>
          <h2>Fill form below to CREATE AN ACCOUNT.</h2>
          <input
            style={{
              marginBottom: "20px",
            }}
            type="text"
            placeholder="UserName"
            value={data.userName}
            onChange={(e) => setData({ ...data, userName: e.target.value })}
          />
          <input
            style={{
              marginBottom: "30px",
            }}
            type="password"
            placeholder="Password"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
          <button className="login-btn-btn">create</button>
        </form>
        <div className="signup-container">
          <Link className="sign-up" to="/login">
            <p>Already have an account? Log In.</p>
          </Link>
        </div>
      </div>
    </div>
  );
};
