import { Gender } from "../types.ts";

const isString = (text: unknown): text is string => {
  return typeof text === "string" || text instanceof String;
};
//? for name
const parseName = (name: unknown): string => {
  if (!name || !isString(name)) {
    throw new Error("Invalid request: field name is missing or name must be of type string");
  }
  return name;
};

//? for date of birth
const isDate = (text: string): boolean => {
  return Boolean(Date.parse(text));
};

const parseDateOfBirth = (dateOfBirth: unknown): string => {
  if (!isString(dateOfBirth) || !isDate(dateOfBirth)) {
    throw new Error("Invalid request: field date of Birth must of type string and in year-month-date time format");
  }
  return dateOfBirth;
};

const isGender = (text: string): text is Gender => {
  return (Object.values(Gender) as string[]).includes(text);
};
const parseGender = (gender: unknown): Gender => {
  if (!isString(gender) || !isGender(gender)) {
    throw new Error("Invalid request: field gender must be of value \"male\" \"female\" \"other\" ");
  }
  return gender;
};

const parseOccupation = (occupation: unknown): string => {
  if (!occupation || !isString(occupation)) {
    throw new Error("Invalid request: field occupation must be of type string");
  }
  return occupation;
};
const parseSsn = (ssn: unknown): string => {
  if (!ssn || !isString(ssn)) {
    throw new Error("Invalid request: field ssn must be of type string");
  }
  return ssn;
};
export default {
  parseName,
  parseDateOfBirth,
  parseGender,
  parseOccupation,
  parseSsn
};