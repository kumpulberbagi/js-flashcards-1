"use strict"
// write your code here
"use strict"

var fs = require("fs");
var contents = fs.readFileSync("data.json");
var data = JSON.parse(contents);
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Quiz{
  constructor(property){
    this.data = data
    this.numSoal = 0

  }

    driver(){
    // rl.on('line', (input) => {
    if(this.numSoal === this.data.length){
      console.log(`Quiz selesai`);
        rl.close();

      }else{
    rl.question(`${this.data[this.numSoal].definition}\n`, (input) => {

        if(input.toLowerCase() === this.data[this.numSoal].term.toLowerCase()){
          console.log(`Jawaban benar`);
            this.numSoal += 1
            this.driver()
          }else{
            console.log(`Jawaban Salah`);
            this.driver()
          }
    });
  }
    }
}

var kuis = new Quiz()
kuis.driver()
