import express, { Request, Response } from "express";
import { body, validationResult } from "express-validator";
import { generateJWT } from "../../services/generatejwt";
import { User } from "../../models/user";
import { Password } from "../../services/password-validation";
import { BadRequestError } from "../../errors/bad-request-error";
import { validateRequest } from "../../middleware/validate-request";

const router = express.Router();

router.post(
  "/api/users/signin",
  [
    body("email").isEmail().withMessage("Please enter Valid email"),
    body("password").trim().notEmpty().withMessage("Please enter the password"),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      throw new BadRequestError("User is not available");
    }
    const isValidPassword = await Password.compare(user.password, password);

    if (!isValidPassword) {
      throw new BadRequestError("Bad password");
    }
    const payload = {
      id: user.id,
      email: user.email,
      username: user.username,
      phoneNumber: user.phoneNumber,
      address: user.address.toString(),
      bloodGrouup: user.bloodGroup,
      gender: user.gender,
    };
    const userJWT = generateJWT(payload);
    req.session = {
      jwt: userJWT,
    };
    return res.status(200).json(user);
  }
);
export { router as signInRouter };
