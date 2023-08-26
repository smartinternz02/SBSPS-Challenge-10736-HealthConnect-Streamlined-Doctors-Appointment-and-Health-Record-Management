import jwt from "jsonwebtoken";
require("dotenv").config();

interface UserPayload {
  id: string;
  email: string;
  username: string;
  phoneNumber: string;
  address: string;
  gender: string;
  bloodGrouup: string;
}

export const generateJWT = (payload: UserPayload) => {
  const token = jwt.sign(payload, process.env.JWT_KEY!);
  return token;
};
