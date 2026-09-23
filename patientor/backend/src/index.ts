import express, { type NextFunction, type Request, type Response } from 'express';
import cors from "cors";
import diagnosesService from './services/diagnosesService.ts';
import patientsService from './services/patientsService.ts';
import type { Diagnoses, newPatientEntry, Patients } from './utils/types.ts';
import parserMiddleware from './middlewares/parser.middleware.ts';
import ErrorHandler from './middlewares/errorHandler.ts';
const app = express();
app.use(cors());
app.use(express.json());
app.get("/api/ping", (_req, res: Response<string>) => {
  res.send("pong");
});

app.get("/api/diagnoses", (_req, res: Response<Diagnoses[]>) => {
  const data = diagnosesService.fetchDiagnoses();
  res.send(data);
});

app.get("/api/patients", (_req, res: Response<Omit<Patients, "ssn">[]>) => {
  const data = patientsService.fetchAllPatients();
  res.send(data);
});
app.post("/api/patients", parserMiddleware.NewPatientEntryParser, (req: Request<unknown, unknown, newPatientEntry>, res: Response<Omit<Patients, "ssn">>, next: NextFunction) => {
  try {
    const dataAdded = patientsService.addPatient(req.body);
    res.send(dataAdded);
  } catch (error) {
    next(error);
  }
});
app.use(ErrorHandler);

const port: number = 3001;
app.listen(port, () => {
  console.log(`the app is listening on port ${port}`);
});