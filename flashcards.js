"use strict"
// write your code here

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var jsonfile = require('jsonfile')
var file = 'data.json'
var database = jsonfile.readFileSync(file)

class flashcards {
    constructor() {
        this._salah = 0
        this._nilai = 0
        this._jalan = 0
    }

    layout(){
      rl.question('Welcome to JS Flash Cards. To play, just enter the correct term for each definition. Ready? Go!',(input)=>{
          if(input == ""){
            this.run()
          }else{
            this.layout()
          }
      })
    }
    run(){
        if (this._jalan == database.length) {
            console.log(`Kamu Mengulang Pertanyaan Sebanyak: ${this._salah}`);
            console.log(`Soal Selesai, Nilaimu: ${this._nilai}`);
            rl.close()
        } else {
            console.log(database[this._jalan].definition)
            rl.question("Guess: ", (answer) => {
                if(answer.toLowerCase()==database[this._jalan].term.toLowerCase()){
                  this._nilai+=10
                  this._jalan++
                  this.run()
                }else{
                  this._salah++
                  console.log("Incorrect! Try again");
                  this.run()
                }
            });
        }
    }
}

var game = new flashcards()
game.layout()
