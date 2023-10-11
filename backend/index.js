import express from "express";
import { PORT, MONGODB_URL } from "./config.js";
import { Post } from ".//Models/postModels.js";
import postRoutes from "./Routes/postRoutes.js";
import mongoose from "mongoose";

import cors from "cors";
import bodyParser from "body-parser";

const app = express();

// var bodyParser = require("body-parser");

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(bodyParser.json({ limit: "50mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000,
  })
);

app.use(express.json());
app.get("/", (req, res) => {
  return res.status(234).send("Helloe world from backend");
});

app.use("/posts", postRoutes);

// var cors = require("cors");
// app.use(cors());
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET,POST, PUT, DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);

mongoose
  .connect(MONGODB_URL)
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log(`App is listening on port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
