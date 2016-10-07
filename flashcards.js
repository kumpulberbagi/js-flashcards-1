"use strict"
// write your code here
const fs = require ('fs')
const readline = require ('readline')

class Data {

  static getData(){
    let flash = fs.readFileSync('data.json')
    return JSON.parse(flash)
  }
}


class Flash {
  constructor(){
    this.count = 0
    this.looper = 0
  }
  question(){
    console.log("Definition\n" + Data.getData()[this.count].definition + "\n")
  }
  answer(){
    return (Data.getData()[this.count].term);
  }
  check(x){
    if (x == false){
      console.log("Salah!");
      rl.question("Guess: ", (guess) =>{
        this.check(guess.toLowerCase() == this.answer().toLowerCase())
      })
    }
    if (x == true){
      console.log("Benar!\n");
      this.count += 1
      flash.looper += 1
      this.loop(flash.looper)
    }
  }
  loop(x){
    if (x == Data.getData().length){
      console.log("Udah abis!\nDapet contekan dari mana lu");
      rl.close()
    }
    else{

        flash.question()
        rl.question("Guess: ", (guess) =>{
          this.check(guess.toLowerCase() == this.answer().toLowerCase())
        })


    }
  }

}

let flash = new Flash

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Welcome to js-flash, type go to play\n", (input) =>{
  if (input.toLowerCase() !== "go"){
    console.log("Can't follow simple instructions, can you? :poop:");
    rl.close();
  }
  else{
    flash.loop(flash.looper)
  }
})
