import express from "express";
import { calculateBmi } from "./bmiCalculator.ts";
import { calculateExercises } from "./exerciseCalculator.ts";

const app = express();
app.use(express.json());
app.get('/hello', (_req,res)=>{
  res.send("Hello Full Stack!");
});


app.get('/bmi',(req,res)=>{
  const {height, weight} = req.query;
  if(isNaN(Number(height)) || isNaN(Number(weight))){
    return res.status(400).send({
      error: "malformatted parameters",
    });
  }
  const bmi:string =  calculateBmi(Number(height), Number(weight));
  return res.send({
    weight: Number(weight),
    height: Number(height),
    bmi: bmi
  });
});

app.post('/exercises',(req,res)=>{
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const {daily_exercises, target}:{daily_exercises:number[],target:number} = req.body;
  if(!daily_exercises || !target){
    return res.status(400).send({
      error: "parameters missing"
    })
  }
  const isNumberArray = (value: any):value is number[] =>{
    return Array.isArray(value) && value.every(item => typeof item === "number")
  }
  if(!isNumberArray(daily_exercises) || typeof target !== "number"){
    return res.status(400).send({
      error: "malformatted parameters"
    })
  }
  const result = calculateExercises(daily_exercises, target);
  return res.send(result);
});

const port: number = 3000;
app.listen(port, ()=>{
  console.log(`server is listening on port ${port}`);
});