export default class Stack {
  constructor() {
    this.index = 0;
    this.score = 0;
  }

  push() {
    return ++(this.index);
  }

  pop() {
    if (this.index === 0) {
      throw new Error('tried to pop empty Stack');
    }

    this.score += this.index;

    return --(this.index);
  }
}
