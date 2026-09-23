import type { NextFunction, Request, Response } from "express";
import { NewPatientSchema } from "../utils/types.ts";

const NewPatientEntryParser = (req: Request, _res: Response, next: NextFunction) => {
  try {
    NewPatientSchema.parse(req.body);
    next();
  } catch (error) {
    next(error);
  }
};
export default {
  NewPatientEntryParser
};