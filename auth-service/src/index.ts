import express from "express";
import { json } from "body-parser";
import { signUpRouter } from "./routes/auth/signup";
import mongoose from "mongoose";
import { NotFoundError } from "./errors/not-found-error";
import { errorHandler } from "./middleware/error-handler";
import "express-async-errors";
import { signInRouter } from "./routes/auth/signin";
import cookieSession from "cookie-session";
import { SignOutRouter } from "./routes/auth/signout";
import { CurrentUserRouter } from "./routes/auth/current-user";

const app = express();

app.set("trust proxy", true);
app.use(json());
app.use(
  cookieSession({
    signed: false,
    secure: true,
  })
);
app.use(signUpRouter);
app.use(signInRouter);
app.use(SignOutRouter);
app.use(CurrentUserRouter);

app.get("/api/users", (req, res) => {
  res.send("Hello");
});

app.all("*", async (req, res, next) => {
  throw new NotFoundError();
});

app.use(errorHandler);

const startDB = async () => {
  if (!process.env.JWT_KEY) {
    throw new Error("JWT_KEY is not specified");
  }
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
