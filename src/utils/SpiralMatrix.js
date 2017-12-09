export default class SpiralMatrix {
  constructor(matrix, NextValueStrategy) {
    const initialValue = 1;

    this.matrix = matrix;
    this.nextValueStrategy = new NextValueStrategy(
      this.matrix,
      initialValue
    );

    // initialize matrix
    this.matrix.insert(0, 0, initialValue);

    this.currentLayer = 0;
    this.currentX = 0;
    this.currentY = 0;
  }

  next() {
    this._nextPosition();

    return this.matrix.insert(
      this.currentX,
      this.currentY,
      this.nextValueStrategy.nextValue(this.currentX, this.currentY)
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
}
