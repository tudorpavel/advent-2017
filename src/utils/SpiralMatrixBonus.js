export default class SpiralMatrixBonus {
  constructor(matrix) {
    this.matrix = matrix;

    // initialize matrix
    this.matrix.insert(0, 0, 1);

    this.currentLayer = 0;
    this.currentX = 0;
    this.currentY = 0;
  }

  next() {
    this._nextPosition();

    return this.matrix.insert(
      this.currentX,
      this.currentY,
      this._nextValue()
    );
  }

  _nextPosition() {
    if (this.currentX === -(this.currentLayer) &&
        this.currentY === this.currentLayer) {
      // bottom-right corner of layer
      this.currentY++;
      this.currentLayer++;
    } else if (this.currentX === this.currentLayer &&
               this.currentY === this.currentLayer) {
      // top-right corner of layer
      this.currentY--;
    } else if (this.currentX === this.currentLayer &&
               this.currentY === -(this.currentLayer)) {
      // top-left corner of layer
      this.currentX--;
    } else if (this.currentX === -(this.currentLayer) &&
               this.currentY === -(this.currentLayer)) {
      // bottom-left corner of layer
      this.currentY++;
    } else if (this.currentY === this.currentLayer) {
      // right edge of layer
      this.currentX++;
    } else if (this.currentX === this.currentLayer) {
      // top edge of layer
      this.currentY--;
    } else if (this.currentY === -(this.currentLayer)) {
      // left edge of layer
      this.currentX--;
    } else if (this.currentX === -(this.currentLayer)) {
      // bottom edge of layer
      this.currentY++;
    }
  }

  _nextValue() {
    return (
      this.matrix.at(this.currentX    , this.currentY + 1) +
      this.matrix.at(this.currentX + 1, this.currentY + 1) +
      this.matrix.at(this.currentX + 1, this.currentY    ) +
      this.matrix.at(this.currentX + 1, this.currentY - 1) +

      this.matrix.at(this.currentX    , this.currentY - 1) +
      this.matrix.at(this.currentX - 1, this.currentY - 1) +
      this.matrix.at(this.currentX - 1, this.currentY    ) +
      this.matrix.at(this.currentX - 1, this.currentY + 1)
    );
  }
}
