"use strict"


var jsonfile = require('jsonfile')
var file = 'data.json'
var data = []

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



var read = jsonfile.readFileSync(file)
for (var i = 0; i < read.length; i++) {
  data.push(read[i])
}

// console.log(data);

// for (var i = 0; i < data.length; i++) {
//   console.log("Definition");
//   console.log(data[i].definition);
// }

let soal = (nomor,index,stats) => {
  // console.log(index);
  if(nomor<index) {
    // console.log("Definition");
    // console.log(data[i].definition);
    if(stats == 0) {
      console.log(data[nomor].definition);
    }
    rl.question("Guess: ", (answer) => {

      while (answer != data[nomor].term.toLowerCase()) {
        console.log("Incorrect! try again.");
        return soal(nomor, index, 1)
      }

      if(nomor>=index-1) {
        rl.close()
      }
      return soal(nomor+1, index,0)

    });
    // console.log(data[i].term+"\n");

  }
}

console.log("Welcome to JS Flash Cards. To play, just enter the corret term for each definition. Ready? Go!");
soal(0,data.length,0)
