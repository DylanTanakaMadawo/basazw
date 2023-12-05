import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

import "./LoginPage.css";
import { Link } from "react-router-dom";

import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { LoginLand } from "../LoginLand/LoginLand";

export const LoginPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const [data, setData] = useState({
    userName: "",
    password: "",
  });

  const loginUser = async (e) => {
    e.preventDefault();
    const { userName, password } = data;
    try {
      const { data } = await axios.post(
        "/login",
        {
          userName,
          password,
        },
        { withCredentials: true }
      );
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        navigate("/home");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="whole=login">
      {/* <LoginLand /> */}
      <div className="login-logo-container">
        <h1>BASA.zw</h1>
      </div>
      <div className="site-description">
        <p>
          Explore the best place that matches freelance labor and local demand
          with services that include,{" "}
          <i>housemaids, moving, cleaning, deliveries</i> and so much more!
        </p>
      </div>
      <div className="login-container">
        <div className="form-container">
          <form onSubmit={loginUser}>
            <h2>Fill form below to LOG IN.</h2>
            <input
              type="text"
              placeholder="UserName"
              value={data.userName}
              onChange={(e) => setData({ ...data, userName: e.target.value })}
            />
            <input
              type="password"
              placeholder="Password"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
            <button className="login-btn-btn">Login</button>
          </form>
          <div className="signup-container">
            <Link className="sign-up" to="/signup">
              <p>Don't have an account? Sign up.</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
