import {argv} from "node:process" ;
interface result {
  periodLength: number,
  trainingDays: number,
  success: boolean,
  rating: 1 | 2 | 3,
  ratingDescription: string,
  target: number,
  average: number
}
export const calculateExercises = (arr: number[], targetHours: number): result=>{
  const periodLength = arr.length;
  const trainingDays = arr.reduce((days, a)=>(a > 0 ? days + 1 : days), 0);
  const success = periodLength === trainingDays;
  const averageTime = arr.reduce((sum, a)=>(sum + a), 0)/ periodLength;
  let rating: 1| 2| 3; 
  if(averageTime - targetHours >= 0){
    rating = 3;
  }
  else if(averageTime - targetHours >= -1* (targetHours/2)){
    rating = 2;
  }
  else{
    rating = 1;
  }
  const rating_des = ()=>{
    if(rating == 1){
      return "comeon man get you ass up";
    }
    else if(rating == 2){
      return "Not bad!! you can do better";
    }
    else if(rating == 3){
      return "Well done man keep it up";
    }
    else{
      return "Invalid rating";
    }
  };

  return{
    periodLength: periodLength,
    trainingDays: trainingDays,
    success: success,
    rating: rating,
    ratingDescription: rating_des(),
    target: targetHours,
    average: averageTime,
  };
};

if(process.argv[1] == import.meta.filename){
  const commandLine_arr: number[] = [];
  const commandLine_target: number = Number(argv[2]);
  argv.forEach((val,index)=>{
    if(index >= 3){
      if(!isNaN(Number(val))){
        commandLine_arr.push(Number(val));
      }
      else{
        throw new Error("Invalid command line arguments, all the elements should be numbers");
      }
    }
  });
  if(commandLine_arr.length != 0){
    console.log(calculateExercises(commandLine_arr, commandLine_target));
  }
  else{
    console.log(calculateExercises([3, 0, 2, 4.5, 1, 3, 1], 2));
  }
}
