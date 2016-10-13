
const fs = require('fs');

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Flashcard {
  static getData(file) {
    let deck = fs.readFileSync('deck.json');
    return JSON.parse(deck);
  }
}

class FlashcardController {
  constructor(args = {}) {
    this.point = [];
    this.answer = false
    this.current_soal = 0
  }

  generate_soal() {
    let soalsoal = Flashcard.getData()
    let soal = soalsoal[this.current_soal]['definition']
    return soal
  }
  cek_input(answer){
    let jawabjawab = Flashcard.getData()
    let jawab = jawabjawab[this.current_soal]['term']
    if (answer.toLowerCase() == jawab.toLowerCase()) {
      this.answer = true
      return true
    } else {
      this.answer = false
      return false
    }
  }

  cek_answer(){
    if (this.answer = true){
      this.point.push(4)
    } else {
      this.point.push(-1)
    }
    return this.point
  }

  next_question() {
    this.current_soal += 1
  }
  scoring() {
    let result = 0
    for (let i = 0; i < this.point.length; i++) {
      result = result + this.point[i]
    }
    return result
  }

}

class FlashcardView {
  constructor(args = {}) {

  }
  sleep() {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > 1000) {
        break;
      }
    }
  }
  start() {
    console.log(" ### SELAMAT DATANG DI TAMSYAN FLASHCARD GAME! ### \n");
    this.sleep()
  }
  soal() {
    // rl.setPrompt(`${controller.generate_soal()} > `);
    // rl.prompt();

    if (controller.current_soal < Flashcard.getData().length) {
      rl.question(`${controller.generate_soal()} > `, (answer) => {
        if (controller.cek_input(answer) == true) {
          controller.next_question();
          console.log("\nBenar, sekarang coba jawab soal selanjutnya!\n");
          this.soal();
        }
        else {
          this.soal();
        }
      })
    }
    else {
      console.log("Oops, ternyata soalnya udah abis. :grin:");
      rl.close();
    }
  }



}

let controller = new FlashcardController();
let view = new FlashcardView();

view.start();
view.soal();

