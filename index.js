"use strict"
// kamus
const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var database = fs.readFileSync('data.json')
var data = JSON.parse(database)

console.log("Welcome to JS Flash Cards. To play, just enter the correct term for each definition. Ready? Go!");

var i = 0
function permainan(answer){
  if(i == ( data.length )){
    rl.close();
  }else{

    rl.question(data[i].pertanyaan + " : ", (answer) => {
      if(data[i].answer == answer){
        console.log("\n selamat anda benar!");
        i++
        permainan(answer)
      }else{
        console.log("jawaban anda salah! tebak lagi");
        permainan(answer)
      }

    });
  }
}

permainan()
