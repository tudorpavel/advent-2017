export default class FlexibleMatrix {
  constructor() {
    this.array = [];

    this.minX = 0;
    this.minY = 0;
    this.maxX = 0;
    this.maxY = 0;
  }

  at(x, y) {
    if (this.array[x] != null) {
      return this.array[x][y] || null;
    }

    return null;
  }

  insert(x, y, value) {
    if (this.array[x] == null) {
      this.array[x] = [];
    }

    this._growMatrix(x, y);

    return this.array[x][y] = value;
  }

  toString() {
    let rows = [];

    for (let x = this.maxX; x >= this.minX; x--) {
      let row = [];

      for (let y = this.minY; y <= this.maxY; y++) {
        if (!isNaN(this.at(x, y))) {
          row.push(this.at(x, y))
        } else {
          row.push('x');
        }
      }

      rows.push(row.join(' '));
    }

    return rows.join('\n');
  }

  _growMatrix(x, y) {
    if (x < this.minX) {
      this.minX = x;
    }
    if (y < this.minY) {
      this.minY = y;
    }
    if (x > this.maxX) {
      this.maxX = x;
    }
    if (y > this.maxY) {
      this.maxY = y;
    }
  }
}
