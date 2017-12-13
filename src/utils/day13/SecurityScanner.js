export default class SecurityScanner {
  constructor(range) {
    this.range = range;
    this.index = 0;
    this.direction = 1;
  }

  indexAfter(moveCount) {
    for (let i = 0; i < moveCount; i++) {
      this._move();
    }

    return this.index;
  }

  _move() {
    if (this.index === 0) {
      this.direction = 1;
    } else if (this.index === this.range - 1) {
      this.direction = -1;
    }

    this.index += this.direction;
  }
}
