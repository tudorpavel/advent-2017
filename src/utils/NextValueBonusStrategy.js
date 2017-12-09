export default class NextValueBonusStrategy {
  constructor(matrix, _initalValue) {
    this.matrix = matrix;
  }

  nextValue(x, y) {
    return (
      this.matrix.at(x    , y + 1) +
      this.matrix.at(x + 1, y + 1) +
      this.matrix.at(x + 1, y    ) +
      this.matrix.at(x + 1, y - 1) +

      this.matrix.at(x    , y - 1) +
      this.matrix.at(x - 1, y - 1) +
      this.matrix.at(x - 1, y    ) +
      this.matrix.at(x - 1, y + 1)
    );
  };
}
