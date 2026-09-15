export const calculateBmi = (height: number, weight: number): string=>{
  const bmi = weight/Math.pow(height/100, 2);
  if(isNaN(Number(bmi))) throw new Error("Invalid Number inputs");
  if(bmi < 16){
    return "Underweight (Severe thinness)";
  }
  else if(bmi <= 17){
    return "Underweight (Moderate thinness)";
  }
  else if(bmi <= 18.5){
    return "Underweight (Mild thinness)";
  }
  else if(bmi <= 25){
    return "Normal range";
  }
  else if(bmi <= 30){
    return "Overweight (Pre-obese)";
  }
  else if(bmi <= 35){
    return "Obese (Class I)";
  }
  else if(bmi <= 40){
    return "Obese (Class II)";
  }
  else {
    return "Obese (Class III)";
  }
};

if(process.argv[1] === import.meta.filename){
  const height:number = Number(process.argv[2]);
  const weight: number = Number(process.argv[3]);
  if(isNaN(height) || isNaN(weight)){
    throw new Error("Invalid or empty Command arguments");
  }
  else{
    console.log(calculateBmi(height, weight));
  }
}



// console.log(calculateBmi(170,60));