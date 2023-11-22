import React, { useEffect, useContext } from "react";
import { Cards } from "../Cards";
import { Banner } from "../Banner/Banner";
import { Info } from "../Info/Info";
import { Divider } from "@mui/material";
import { Featured } from "../Featured/Featured";
import { UserContext } from "../../context/userContext";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer/Footer";
import { LowerNav } from "../LowerNav/LowerNav";
// import { useLocation, useNavigate } from "react-router-dom";

export const Homepage = () => {
  // const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
    // navigate(1);
  }, []);

  // const location = useLocation()

  const { user } = useContext(UserContext);

  return (
    <div>
      <Navbar />

      {!!user && <h1>Welcome {user.userName}!</h1>}
      <Banner />
      <Divider sx={{ margin: "0 10%" }} />
      <Cards />
      <Divider sx={{ margin: "0 10%" }} />
      <Info />
      <Divider sx={{ margin: "0 10%" }} />
      <Featured />
      <Divider sx={{ margin: "0 10%" }} />
      <Footer />
      <LowerNav />
    </div>
  );
};
