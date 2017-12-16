import KnotHash from '../day10/KnotHash';

export default class Grid {
  constructor(inputText) {
    const knotHash = new KnotHash();

    this.bitMatrix = [];

    for (let i = 0; i < 128; i++) {
      const hexHash = knotHash.hash(`${inputText}-${i}`);

      const binaryHash = hexHash.split('').reduce((acc, hexChar) => {
        return acc + parseInt(hexChar, 16).toString(2);
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
}
