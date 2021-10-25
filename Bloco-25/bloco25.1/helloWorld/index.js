const readline = require("readline-sync");

const name = readline.question("Qual é seu nome? ");
const age =  readline.questionInt("qual é a sua idade? ");

console.log(`Hello, ${name}! You are ${age} years old!`);