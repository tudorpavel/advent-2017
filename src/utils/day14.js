import KnotHash from './day10/KnotHash';

export function normal(inputText) {
  const knotHash = new KnotHash();
  let usedBitsCount = 0;

  for (let i = 0; i < 128; i++) {
    const hexHash = knotHash.hash(`${inputText}-${i}`);

    const binaryHash = hexHash.split('').reduce((acc, hexChar) => {
      return acc + parseInt(hexChar, 16).toString(2);
    }, '');

    usedBitsCount += binaryHash.split('').reduce((sum, bit) => {
      return sum + parseInt(bit, 10);
    }, 0)
  }

  return usedBitsCount.toString();
}

export function bonus(inputText) {
  return 'wip';
}
