import express, { Request, Response } from "express";
import { body } from "express-validator";
import { User, buildUser } from "../../models/user";
import { BadRequestError } from "../../errors/bad-request-error";
import { Address } from "../../models/address";
import { Token } from "../../models/token";
import { generateJWT } from "../../services/generatejwt";
import { validateRequest } from "../../middleware/validate-request";

const router = express.Router();

router.post(
  "/api/users/signup",
  [
    body("email").isEmail().withMessage("Email must be Valid"),
    body("username").isString().withMessage("username must be Specified"),
    body("bloodGroup").isString().withMessage("BloodGroup must be Specified"),
    body("gender").isString().withMessage("Gender must be Specified"),
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
  validateRequest,
  async (req: Request, res: Response) => {
    const {
      username,
      email,
      password,
      phone,
      gender,
      bloodGroup,
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
      gender: gender,
      bloodGroup: bloodGroup,
    });
    await user.save();
    const userJWT = generateJWT({
      id: user.id,
      email: user.email,
      username: user.username,
      phoneNumber: user.phoneNumber,
      gender: user.gender,
      bloodGrouup: user.bloodGroup,
      address: user.address.toString(),
    });

    const token = new Token({
      user_id: user._id,
      token_type: "registration",
      token_value: userJWT,
      expiration: new Date(Date.now() + 24 * 60 * 60 * 1000),
    });
    await token.save();

    req.session = {
      jwt: userJWT,
    };

    console.log("User Created");
    return res.status(201).send(user);
  }
);

export { router as signUpRouter };
