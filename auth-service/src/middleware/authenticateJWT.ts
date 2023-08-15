import express, { Request, Response, NextFunction } from "express";
import { validateJWT } from "../services/validateJWT";
export const authenticateJWT = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (token) {
    const decoded = validateJWT(token);
    if (decoded) {
      req.user_id = decoded.user_id;
      next();
    } else {
      res.status(401).json({ message: "Invalid token" });
    }
  } else {
    res.status(401).json({ message: "Token not provided" });
  }
};
