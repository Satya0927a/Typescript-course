import data from "../../data/patients.ts";
import { v1 as uuid } from "uuid";
import type { newPatientEntry, Patients } from "../utils/types.ts";

const fetchAllPatients = (): Omit<Patients, "ssn">[] => {
  return data.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation
  }));
};

const addPatient = (newEntry: newPatientEntry): Omit<Patients, "ssn"> => {
  const newId = uuid();
  const modData = {
    id: newId,
    ...newEntry
  };
  data.push(modData);
  return modData;
};
export default {
  fetchAllPatients,
  addPatient
};