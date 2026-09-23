import type { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import { z } from 'zod';
const ErrorHandler = (error: ErrorRequestHandler, _req: Request, res: Response, next: NextFunction) => {
  if (error instanceof z.ZodError) {
    res.status(400).send({
      success: false,
      error: error.issues
    });
  }
  else {
    res.status(500).send({
      success: false,
      error: "some unknown error occured"
    });
  }
  next();
};
export default ErrorHandler;