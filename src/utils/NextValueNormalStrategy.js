export default class NextValueNormalStrategy {
  constructor(matrix, initalValue) {
    this.matrix = matrix;
    this.currentValue = initalValue + 1;
  }

  nextValue(x, y) {
    return this.currentValue++;
  };
}
