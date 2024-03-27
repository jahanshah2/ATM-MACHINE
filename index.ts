#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk"

let myBalance = 10000;
let myPin = 7274;
console.log(chalk.bgCyanBright.black.bold.inverse.underline("\n\t\ WELCOME TO SYED ATM \n\t"));

let answerPin = await inquirer.prompt({
  name: "PinCode",
  type: "number",
  message:(chalk.green.bold("Enter Your Pin Code")),
});
if (myPin === answerPin.PinCode) {
  let answerOption = await inquirer.prompt({
    name: "operation",
    type: "list",
    message: (chalk.green.bold("Select One Option")),
    choices: [chalk.bgWhiteBright.blue("Withdraw"), chalk.bgWhiteBright.blue("Check Balance")],
  });
  if (answerOption.operation === chalk.bgWhiteBright.blue("Withdraw")) {
    let ansOption2 = await inquirer.prompt({
      name: "option2",
      type: "list",
      message: (chalk.green.bold("Select One Option")),
      choices: [chalk.redBright("Fast Cash"), chalk.redBright("Enter Amount")],
    });
    if (ansOption2.option2 === chalk.redBright("Fast Cash")) {
      let ansOptionNum = await inquirer.prompt({
        name: "option3",
        type: "list",
        message: (chalk.green.bold("Select The Amount")),
        choices: ["2000","4000","6000","8000","10000"],
      });
      if (ansOptionNum.option3 <= "option3") {
        myBalance -= ansOptionNum.option3;
        console.log(chalk.underline.inverse.blue(`Your Remaining Balance is`)+chalk.bold.blueBright(` : ${myBalance}`));
      }
    } else if (ansOption2.option2 === chalk.redBright("Enter Amount")) {
      let ansAmount = await inquirer.prompt({
        name: "amount",
        type: "number",
        message: (chalk.green.bold("Enter Amount")),
      });
      if (ansAmount.amount <= myBalance) {
        myBalance -= ansAmount.amount;
        console.log(chalk.underline.inverse.blue(`Your Remaining Balance is`)+chalk.bold.blueBright(` : ${myBalance}`));
      } else if (ansAmount.amount > myBalance) {
        console.log(chalk.redBright(`ACCOUNT HAS INSUFFICIENT BALANCE FOR REQUESTED ACTION !`));
      }
    }
  }else if (answerOption.operation === chalk.bgWhiteBright.blue("Check Balance")){
        console.log(chalk.underline.inverse.blue(`Your Current Balance is`)+chalk.bold.blueBright(` : ${myBalance}`));
        
  }
} else {
  console.log(chalk.redBright.bold(`Warrning! `)+chalk.yellowBright(`Please Enter Correct Pin Code.`));
}
