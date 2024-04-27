#! /usr/bin/env
import inquirer from "inquirer";
let myBalance = 20000; //Dollar
let myPin = 4321;
let pinAnswer = await inquirer.prompt([{
        name: "pin",
        message: "Enter Your Pin",
        type: "number",
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code!!!");
}
let operationRequirement = await inquirer.prompt([
    {
        name: "operation",
        message: "Please select an option",
        type: "list",
        choices: ["withdraw", "check balance"]
    }
]);
console.log(operationRequirement);
if (operationRequirement.operation === "withdraw") {
    let amountAns = await inquirer.prompt([
        {
            name: "amount",
            message: "Enter your amount",
            type: "number",
        }
    ]);
    if (amountAns.amount > myBalance) {
        console.log("Insufficient Balance");
    }
    else {
        myBalance -= amountAns.amount;
        console.log(`${amountAns.amount} withdraw Successfully`);
        console.log(`your remaining balance is: ${myBalance} `);
    }
}
else if (operationRequirement.operation === "check balance") {
    console.log(`Your Account Balance is: ${myBalance} `);
}
else {
    console.log("Incorrect Pin, Please enter your correct pin number");
}
