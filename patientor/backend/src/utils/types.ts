import { z } from "zod";
export interface Diagnoses {
  code: string,
  name: string,
  latin?: string
}

export const Gender = {
  Male: "male",
  Female: "female",
  Other: "other"
} as const;
export type Gender = typeof Gender[keyof typeof Gender];


export const NewPatientSchema = z.object({
  name: z.string(),
  dateOfBirth: z.iso.date(),
  gender: z.enum(Gender),
  ssn: z.string(),
  occupation: z.string()
});
export type newPatientEntry = z.infer<typeof NewPatientSchema>;
export interface Patients extends newPatientEntry {
  id: string
}