export default class Circle {
  static size = 256;

  constructor() {
    this.list = [];
    this.currentIndex = 0;
    this.currentSkip = 0;

    for (let i = 0; i < Circle.size; i++) {
      this.list[i] = i;
    }
  }

  step(length) {
    for (let i = 0; i < Math.floor(length / 2); i++) {
      const swapIndex1 = (this.currentIndex + i) % Circle.size;
      const swapIndex2 = (this.currentIndex + length - i - 1) % Circle.size;

      let aux = this.list[swapIndex1];
      this.list[swapIndex1] = this.list[swapIndex2];
      this.list[swapIndex2] = aux;
    }

    this.currentIndex = (
      this.currentIndex + length + this.currentSkip
    ) % Circle.size;
    this.currentSkip++;
  }
}
