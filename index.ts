#! /usr/bin/env node
import inquirer from "inquirer";

//1) computer will generate a random number
//2) user input for guessing number
//3) compare user input with computer generated number and show result

const randomNumber = Math.floor(Math.random () * 20 + 1);

console.log("welcome to number guessing game");

const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guessa number between 1-20: ",
    }
]);
if (answers.userGuessedNumber === randomNumber){
    console.log("Congratulations! You guessed  right number.");
}else {
    console.log("Oops! You guessed wrong number. Please try again.");
}
