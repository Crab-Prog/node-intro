const chalk = require("chalk");

const multiply = require("./multiply.js");
const age = "26 years old";
const name = "Ophelie";

console.log(multiply(2, 4));

console.log(chalk.bgGreen("Hello world !!"));
console.log(chalk.magenta.bgCyan("Let's introduce myself"))
console.log(chalk.blue.bgWhite(`My name is ${name} and I'm ${age}, I'm very glad to see you here.`))