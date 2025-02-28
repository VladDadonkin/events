import hammerImg from "./img/hammer.png";

export default class Cursor {
  constructor() {
    this.cursor = document.createElement("img");
    this.cursor.src = hammerImg;
    this.cursor.classList.add("cursor");
    document.body.appendChild(this.cursor);
    this.init();
  }

  init() {
    document.addEventListener("mousemove", (e) => {
      this.cursor.style.left = `${e.pageX}px`;
      this.cursor.style.top = `${e.pageY}px`;
    });
  }
}
