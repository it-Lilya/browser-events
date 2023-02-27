/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/image/goblin.png
const goblin_namespaceObject = __webpack_require__.p + "2dbd01ce16c0fa83cb67.png";
;// CONCATENATED MODULE: ./src/components/GameBoard/GameBoard.js

class GameBoard {
  constructor(boardSize) {
    this.boardSize = boardSize ** 2;
    this.previousIndex = 0;
    this.currentIndex = 0;
  }
  newBoard() {
    const board = document.getElementById('board');
    for (let i = 0; i < this.boardSize; i += 1) {
      const itemBoard = document.createElement('div');
      itemBoard.className = 'target';
      itemBoard.id = `target${i}`;
      board.appendChild(itemBoard);
    }
    this.randomCell();
  }
  randomCell() {
    setInterval(() => {
      do {
        this.currentIndex = Math.floor(Math.random() * this.boardSize);
      } while (this.currentIndex === this.previousIndex);
      if (this.previousIndex >= 0) {
        const previous = document.getElementById(`target${this.previousIndex}`);
        previous.innerHTML = '';
        previous.classList.remove('open');
      }
      const currentCell = document.getElementById(`target${this.currentIndex}`);
      currentCell.classList.add('open');
      currentCell.innerHTML = `<img src=${goblin_namespaceObject}>`;
      this.previousIndex = this.currentIndex;
    }, 3000);
  }
}
;// CONCATENATED MODULE: ./src/components/HammerBlow/HammerBlow.js
class HammerBlow {
  constructor(element) {
    this.element = element;
    this.check = 0;
    this.pass = -1;
    this.onClick = this.onClick.bind(this);
    this.onPass = this.onPass.bind(this);
    document.addEventListener('click', this.onClick);
    setInterval(() => {
      document.addEventListener('input', this.onPass());
    }, 3000);
  }

  // eslint-disable-next-line class-methods-use-this
  onClick(e) {
    const {
      target
    } = e;
    if (target.parentElement.classList.contains('open') === true) {
      this.check += 1;
      this.pass = -1;
    }
    const check = document.querySelector('.check');
    check.innerHTML = `Счет: ${this.check}`;
  }
  onPass() {
    this.pass += 1;
    console.log(this.pass);
    if (this.pass === 5) {
      // eslint-disable-next-line no-restricted-globals
      confirm('Конец игры! Вы проиграли(');
      this.pass = -1;
    }
  }
}
;// CONCATENATED MODULE: ./src/js/app.js


const newBoard = new GameBoard(4);
const newHit = new HammerBlow();
newBoard.newBoard();
newHit.onPass();
;// CONCATENATED MODULE: ./src/index.js



/******/ })()
;