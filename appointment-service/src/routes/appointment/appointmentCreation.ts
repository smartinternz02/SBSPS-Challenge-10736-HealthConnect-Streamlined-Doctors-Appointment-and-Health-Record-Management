import express, { Request, Response } from "express";
import { body } from "express-validator";

const router = express.Router();

router.post("/api/appointment/:id", (req: Request, res: Response) => {
  const { userData, patientData } = req.body;
});
