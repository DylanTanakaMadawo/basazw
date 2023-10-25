import React, { useEffect } from "react";
import { Cards } from "../Cards";
import { Banner } from "../Banner/Banner";
import { Info } from "../Info/Info";
import { Divider } from "@mui/material";
import { Featured } from "../Featured/Featured";

export const Homepage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
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
