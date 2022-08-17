import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotEnv from "dotenv";
import AuthRoute from "./Routes/AuthRoute.js";

// Routes

// Middleware

const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

dotEnv.config();

mongoose
  .connect(process.env.MONGO_DB)
  .then(() =>
    app.listen(process.env.PORT, () =>
      console.log(`Listening at ${process.env.PORT}`)
    )
  )
  .catch((error) => console.log(error));

app.use("/auth", AuthRoute);
