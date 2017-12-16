import KnotHash from '../day10/KnotHash';

export default class Grid {
  constructor(inputText) {
    const knotHash = new KnotHash();

    this.bitMatrix = [];

    for (let i = 0; i < 128; i++) {
      const hexHash = knotHash.hash(`${inputText}-${i}`);

      const binaryHash = hexHash.split('').reduce((acc, hexChar) => {
        let binaryStr = parseInt(hexChar, 16).toString(2);
        const binaryStrLength = binaryStr.length;

        for (let j = 0; j < (4 - binaryStrLength); j++) {
          binaryStr = '0' + binaryStr;
        }

        return acc + binaryStr;
      }, '');

      this.bitMatrix.push(
        binaryHash.split('').map((bitStr) => {
          return parseInt(bitStr, 10);
        })
      );
    }
  }

  usedBitsCount() {
    return this.bitMatrix.reduce((sum, row) => {
      return sum + row.reduce((sum, bit) => {
        return sum + bit;
      }, 0);
    }, 0);
  }

  regionsCount() {
    let count = 0;

    for (let i = 0; i < this.bitMatrix.length; i++) {
      for (let j = 0; j < this.bitMatrix[i].length; j++) {
        if (this.bitMatrix[i][j] === 1) {
          count++;
          this._visitRegion(i, j);
        }
      }
    }

    return count;
  }

  _visitRegion(i, j) {
    if (this.bitMatrix[i][j] !== 1) {
      return;
    }

    this.bitMatrix[i][j] = -1;

    this._visitRegion(Math.max(0, i - 1), j);
    this._visitRegion(i, Math.max(0, j - 1));
    this._visitRegion(Math.min(this.bitMatrix.length - 1, i + 1), j);
    this._visitRegion(i, Math.min(this.bitMatrix[i].length - 1, j + 1));
  }
}
