import "./styles.css";
import Game from "./game";
import Cursor from "./cursor";



document.addEventListener("DOMContentLoaded", () => {
  const game = new Game();
  game.init();
});

const cursor = new Cursor();