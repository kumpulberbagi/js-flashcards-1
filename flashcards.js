'use strict'
var fs = require('fs')
var json_file = require('jsonfile')
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
var file = 'data.json'
var json_data = fs.readFileSync(file,'utf-8')
var json_object = JSON.parse(json_data)

class FlashCards01 {
  static start_game(count){
  if(count < json_object.length){
    rl.question(`Definition\n${json_object[count].definition} `, (answer) => {
      console.log(`\nGuess: ${answer}`);
      if(answer.toLowerCase() === json_object[count].term.toLowerCase()){
        console.log(`Correct !\n`);
        count++
      return FlashCards01.start_game(count)
      }else{
        console.log(`Incorrect! Try again.\n`);
        return FlashCards01.start_game(count)
      }
    });
  }else{
    rl.close()
  }
  }
}
console.log('Welcome to JS Flash Cards.\nTo play, just enter the correct term for each definition.Ready? Go!');
FlashCards01.start_game(0)
