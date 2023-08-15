import express, { Request, Response } from "express";
import { body, validationResult } from "express-validator";
import { RequestValidationErrors } from "../../errors/request-validation-error";
import { User, buildUser } from "../../models/user";
import { BadRequestError } from "../../errors/bad-request-erro";
import { Address } from "../../models/address";
import { Token } from "../../models/token";
import { generateJWT } from "../../services/generatejwt";
// import jwt from "jsonwebtoken";

const router = express.Router();

router.post(
  "/api/users/signup",
  [
    body("email").isEmail().withMessage("Email must be Valid"),
    body("username").isString().withMessage("Username must be string"),
    body("password")
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage("Password must be between 4 and 20 characters"),
    body("phone")
      .trim()
      .isLength({ min: 5, max: 20 })
      .withMessage("Enter the valid Phone Number"),
    body("address").isString().withMessage("Address must be string"),
    body("area").isString().withMessage("Area must be string"),
    body("city").isString().withMessage("City must be string"),
    body("state").isString().withMessage("State must be string"),
    body("country").isString().withMessage("Country must be string"),
    body("pincode").isNumeric().withMessage("pincode must be Number"),
  ],
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(errors);
      throw new RequestValidationErrors(errors.array());
    }

    const {
      username,
      email,
      password,
      phone,
      address,
      area,
      city,
      state,
      country,
      pincode,
    } = req.body;
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      throw new BadRequestError("Email in Use");
    }
    const newAddress = new Address({
      address,
      area,
      city,
      state,
      country,
      pincode,
    });
    await newAddress.save();

    const user = buildUser({
      email,
      password,
      username,
      phoneNumber: phone,
      address: newAddress._id,
    });
    await user.save();
    const token = new Token({
      user_id: user._id,
      token_type: "registration",
      token_value: generateJWT(user._id),
      expiration: new Date(Date.now() + 24 * 60 * 60 * 1000),
    });
    await token.save();
    console.log("User Created");
    return res.status(201).send(user);
  }
);

export { router as signUpRouter };
