export default class Score {
    constructor() {
      this.value = 0;
      this.scoreElement = document.getElementById("score");
    }
  
    increment() {
      this.value++;
      this.scoreElement.textContent = this.value;
    }
  }
  