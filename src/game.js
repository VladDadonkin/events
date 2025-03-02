import Goblin from "./goblin";
import Score from "./score";

export default class Game {
  constructor() {
    this.gameField = document.querySelector(".gameField");
    this.allCells = 16;
    this.cells = [];
    this.goblin = new Goblin();
    this.score = new Score();
    this.misses = 0;
  }

  init() {
    this.createField();
    this.goblin.spawn(this.cells);
    this.gameLoop();
  }

  createField() {
    for (let i = 0; i < this.allCells; i++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      this.gameField.appendChild(cell);
      this.cells.push(cell);
      cell.addEventListener("click", () => this.checkHit(cell));
    }
  }

  checkHit(cell) {
    if (cell.contains(this.goblin.element)) {
      this.score.increment();
      this.goblin.remove();
      this.goblin.isHit = true; // Фиксируем, что гоблина поймали
    }
  }

  gameLoop() {
    setInterval(() => {
      if (!this.goblin.isHit) { // Проверяем, был ли прошлый гоблин пойман
        this.misses++;
        document.getElementById("misses").textContent = this.misses;
        if (this.misses >= 5) {
          alert("Игра окончена!");
          location.reload();
        }
      }

      this.goblin.move(this.cells);
      this.goblin.isHit = false; // Сбрасываем флаг после перемещения
    }, 1000);
  }
}
