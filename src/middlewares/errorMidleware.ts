// funcão de validação!

import { ErrorRequestHandler, Request, Response } from "express";

import { NotFoundError } from "../models/exceptions";
//passo 4
import { ZodError } from "zod";

import { ValidationError } from "sequelize";

export const errorHandler = (
  err: ErrorRequestHandler,
  req: Request,
  res: Response,
) => {
  console.error("Got an error", err);
  if (err instanceof ZodError) {
    res.status(400).json({ massage: "Invalid data" });
  } else if (err instanceof NotFoundError) {
    res.status(404).json({ message: err.message });
  } else if (err instanceof ValidationError) {
    res.status(422).json({ message: err.message });
  } else {
    res.status(500).json({ message: err });
  }
};
