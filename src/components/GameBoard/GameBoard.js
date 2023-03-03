import image from '../../image/goblin.png';

export class GameBoard {
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
      currentCell.innerHTML = `<img src=${image}>`;
      this.previousIndex = this.currentIndex;
    }, 5000);
  }
}
