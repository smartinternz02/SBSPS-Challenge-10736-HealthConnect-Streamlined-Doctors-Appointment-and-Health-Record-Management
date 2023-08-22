import { Request, Response, NextFunction } from "express";
import { NotAuthorizedError } from "../errors/not-authorized-err0r";

export const requireAuth = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.currentUser) {
    throw new NotAuthorizedError();
  }
  next();
};
