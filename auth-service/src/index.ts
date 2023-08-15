import express from "express";
import { json } from "body-parser";
import { signUpRouter } from "./routes/auth/signup";
import mongoose from "mongoose";
import { NotFoundError } from "./errors/not-found-error";
import { errorHandler } from "./middleware/error-handler";
import "express-async-errors";
import { signInRouter } from "./routes/auth/signin";

const app = express();

app.use(json());
app.use(signUpRouter);
app.use(signInRouter);

app.get("/api/users", (req, res) => {
  res.send("Hello");
});

app.all("*", async (req, res, next) => {
  throw new NotFoundError();
});

app.use(errorHandler);

const startDB = async () => {
  try {
    await mongoose.connect("mongodb://auth-service-mongo-srv:27017/auth");
    console.log("Connected to mongodb");
  } catch (err) {
    console.log(err);
  }

  app.listen(3000, () => {
    console.log("Listening on port 3000");
  });
};

startDB();
