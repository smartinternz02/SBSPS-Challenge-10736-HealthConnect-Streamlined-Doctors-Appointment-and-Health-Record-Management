import express, { Request, Response } from "express";
import { body, validationResult } from "express-validator";
import { generateJWT } from "../../services/generatejwt";
import { User } from "../../models/user";
import { RequestValidationErrors } from "../../errors/request-validation-error";
import { Password } from "../../services/password-validation";
import { BadRequestError } from "../../errors/bad-request-erro";

const router = express.Router();

router.post(
  "/api/users/signin",
  [
    body("email").isEmail().withMessage("Please enter Valid email"),
    body("password")
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage("Please enter the password"),
  ],
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(errors);
      throw new RequestValidationErrors(errors.array());
    }
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      throw new BadRequestError("User is not available");
    }
    const isValidPassword = await Password.compare(user.password, password);
    if (!isValidPassword) {
      throw new BadRequestError("Bad password");
    }

    const token = generateJWT(user._id);
    return res.status(200).json({ user, token });
  }
);
export { router as signInRouter };
