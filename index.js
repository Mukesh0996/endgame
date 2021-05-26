var readlineSync = require("readline-sync");
var chalk = require('chalk');

var score = 0;
var userName = readlineSync.question("Whats your name? ");
console.log("Welcome to "+ userName+ " do you know Tanay?");

function play(question, answer){
var userAnswer = readlineSync.question(question);
if(userAnswer === answer) {
  console.log("Right");
  score += 1;
} else {
  console.log("Wrong");
  score -= 1;
}
console.log("Current Score is ", score);
console.log("----------------------------");
}
var questions = [{
  question: "Where do I live? ",
  answer: "Bangalore"
}, {
  question: "Where do I work? ",
  answer: "Microsoft"
}];

for(var i=0;i< questions.length;i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}


console.log("YAY, you scored ", score);