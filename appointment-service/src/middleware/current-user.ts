import express, { Request, Response, NextFunction } from "express";
import { validateJWT } from "../services/validateJWT";

interface UserPayload {
  email: string;
  username: string;
  phoneNumber: string;
  address: string;
  gender: string;
  bloodGroup: string;
}

declare global {
  namespace Express {
    interface Request {
      currentUser?: UserPayload;
    }
    interface Response {
      currentUser?: UserPayload;
    }
  }
}

export const currentuser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.session?.jwt) {
    return next();
  }
  try {
    const payload = validateJWT(req.session.jwt) as UserPayload;
    req.currentUser = payload;
  } catch (err) {}
  next();
};
