'use strict'

// set the module for running the programs
const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//Initiate variable to start the programs
let question = JSON.parse(fs.readFileSync('./data.json', 'utf8'));
// imutable data set for changing the index of the question
var counter = 0;

function theGame() {
  rl.question(question[counter].definition + "\n", (answer) => {
    if (answer.toLowerCase() === question[counter].term.toLowerCase()) {
      console.log("\nGuess: "+ answer + "\n" + "Correct!\n");
      counter += 1;
      if (counter < question.length) {
        theGame();
      } else {
        console.log("Complete!");
        rl.close();
      }
    } else {
      console.log("\nGuess: "+ answer + "\n" + "Incorect, Try Again\n");
      theGame();
    }
  });
}


// Starting the game
theGame()
