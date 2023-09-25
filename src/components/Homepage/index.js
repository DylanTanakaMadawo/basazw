import React from "react";
import { Navbar } from "../Navbar";
import { Cards } from "../Cards";
import { Banner } from "../Banner/Banner";
import { Info } from "../Info/Info";
import { Divider } from "@mui/material";
import { Featured } from "../Featured/Featured";

export const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Divider sx={{ margin: "0 10%" }} />
      <Cards />
      <Divider sx={{ margin: "0 10%" }} />
      <Info />
      <Divider sx={{ margin: "0 10%" }} />
      <Featured />
    </div>
  );
};
