import patientsTypeGuard from "../typeGuards/patients.typeGuard.ts";
import type { newPatientEntry } from "../types.ts";

const parseNewPatientEntry = (obj: unknown): newPatientEntry => {
  if (!obj || typeof obj !== "object") {
    throw new Error("Missing or Invalid request");
  }
  if ("name" in obj && "dateOfBirth" in obj && "gender" in obj && "occupation" in obj && "ssn" in obj) {
    const parsedEntry = {
      name: patientsTypeGuard.parseName(obj.name),
      dateOfBirth: patientsTypeGuard.parseDateOfBirth(obj.dateOfBirth),
      gender: patientsTypeGuard.parseGender(obj.gender),
      occupation: patientsTypeGuard.parseOccupation(obj.occupation),
      ssn: patientsTypeGuard.parseSsn(obj.ssn)
    };
    return parsedEntry;
  }
  throw new Error("Invalid request: missing some fields");
};
export default { parseNewPatientEntry };