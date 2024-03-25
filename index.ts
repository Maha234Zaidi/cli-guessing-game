#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(`${chalk.bgBlueBright.bold("\n\t Welcome to my project - CLI Number Guessing Game \t\n")}`);

const randomNumber = Math.floor(Math.random() * 6 +1);
// console.log(randomNumber);

const answers = await inquirer.prompt([{
    name:"userGuessedNumber",
    type:"number",
    message:"Guess a number between (Number Limit from 1 to 6)",
}])
if(answers.userGuessedNumber === randomNumber){
  console.log(`${chalk.green.italic("Congratulation! Your answer is correct :-) ")}`);
}
else{
    console.log(`${chalk.red.italic("Opsss better luck next time! Your answer is wrong :-( ")}`);   
}


