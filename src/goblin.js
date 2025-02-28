import goblinImg from "./img/goblin.png";

export default class Goblin {
  constructor() {
    this.element = document.createElement("img");
    this.element.src = goblinImg;
    this.element.alt = "Goblin";
    this.element.classList.add("goblin");
    this.currentCell = null;
    this.isHit = false;
  }

  spawn(cells) {
    const randomIndex = Math.floor(Math.random() * cells.length);
    cells[randomIndex].appendChild(this.element);
    this.currentCell = cells[randomIndex];
  }

  move(cells) {
    this.remove();
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * cells.length);
    } while (cells[newIndex] === this.currentCell);

    this.isHit = false;
    cells[newIndex].appendChild(this.element);
    this.currentCell = cells[newIndex];
  }

  remove() {
    if (this.currentCell) {
      this.currentCell.innerHTML = "";
    }
    this.isHit = true;
  }
}
