import React from "react";
import { Navbar } from "../Navbar";
import { Cards } from "../Cards";
import { Banner } from "../Banner/Banner";
import { Info } from "../Info/Info";
import { Divider } from "@mui/material";

export const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Divider sx={{ margin: "0 10%" }} />
      <Cards />
      <Divider sx={{ margin: "0 10%" }} />
      <Info />
    </div>
  );
};
