const fs = require('fs');

class Flashcard {
  static getData(file) {
    let deck = fs.readFileSync('deck.json');
    return JSON.parse(deck);
  }
}

class FlashcardController {
  constructor(args = {}) {
    this.point = [];
    this.answer = ""
    this.current_soal = 0
  }

  generate_soal() {
    var soalsoal = Flashcard.getData()
    var soal = soalsoal[this.current_soal]['definition']
    return soal
  }

  cek_answer(answer) {
    var jawabjawab = Flashcard.getData()
    var jawab = jawabjawab[this.current_soal]['term']
    if (answer == jawab) {
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
    var result = 0
    for (var i = 0; i < this.point.length; i++) {
      result = result + this.point[i]
    }
    return result
  }

}

class FlashcardView {
  constructor(args = {}) {

  }
  start() {
    console.log("SELAMAT DATANG DI TAMSYAN FLASHCARD GAME!");
  }
  soal() {
    console.log(controller.generate_soal());
  }


}

let controller = new FlashcardController();
let view = new FlashcardView();

view.start();
for (var i = 0; i < Flashcard.getData().length; i++) {
  view.soal();
}


//Driver
console.log(controller.generate_soal())
console.log(controller.cek_answer("VOC"));
controller.next_question();
console.log(controller.generate_soal())
console.log(controller.cek_answer("Bandung"));
controller.next_question();
// console.log(controller.generate_soal())
// console.log(controller.generate_soal())
// console.log(controller.generate_soal())
// console.log(controller.generate_soal())
console.log(controller.scoring());
