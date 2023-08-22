import express, { Request, Response } from "express";
import { requireAuth } from "../../middleware/require-auth";
import { currentuser } from "../../middleware/current-user";

const router = express.Router();

router.get(
  "/api/users/currentUser",
  currentuser,
  requireAuth,
  (req: Request, res: Response) => {
    res.send({ currentUser: req.currentUser || null });
  }
);

export { router as CurrentUserRouter };
