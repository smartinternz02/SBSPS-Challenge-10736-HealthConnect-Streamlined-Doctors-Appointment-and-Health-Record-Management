import express from "express";
import { json } from "body-parser";
import mongoose from "mongoose";
import { NotFoundError } from "./errors/not-found-error";
import { errorHandler } from "./middleware/error-handler";
import "express-async-errors";

const app = express();

app.set("trust proxy", true);
app.use(json());
app.get("/api/appointments", (req, res) => {
  res.send("Hello");
});
app.all("*", async (req, res, next) => {
  throw new NotFoundError();
});

app.use(errorHandler);

app.listen(3001, () => {
  console.log("Listening on port 3001");
});
