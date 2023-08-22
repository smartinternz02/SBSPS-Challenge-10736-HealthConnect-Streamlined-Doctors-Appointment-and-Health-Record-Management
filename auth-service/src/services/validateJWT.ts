import jwt, { JwtPayload } from "jsonwebtoken";
export const validateJWT = (token: string) => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_KEY!) as JwtPayload;
    return decoded;
  } catch (err) {
    console.log("Token error");
    console.log(err);
    return null;
  }
};
