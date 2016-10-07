"use strict"
// write your code here

var jsonfile = require('jsonfile')
var file = 'data.json'
var data = jsonfile.readFileSync(file)
// console.dir(data.length)

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
console.log(`Welcome to JS Flash Cards. To play, just enter the correct term for each definition. Read? GO !`);

let askQuestion = (counter) => {
  if(counter < data.length){
    rl.question(`Definition\n${data[counter].definition} `, (answer) => {
      // TODO: Log the answer in a database
      // console.log('Thank you for your valuable feedback:', answer);
      //
      // rl.close();
      answer = answer.toLowerCase()

      console.log(`\nGuess: ${answer}`);

      if(answer === data[counter].term.toLowerCase()){
        console.log(`Correct !\n`);
        counter++
        askQuestion(counter)
      }else{
        console.log(`Incorrect! Try again.\n`);
        askQuestion(counter)
      }
    });
  }else{
    rl.close()
  }
}

askQuestion(0)
