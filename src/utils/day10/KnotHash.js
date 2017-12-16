import Circle from './Circle';

export default class KnotHash {
  static roundCount = 64;
  static suffixLengths = [17, 31, 73, 47, 23];

  hash(str) {
    const asciiLengths = str
      .split('')
      .map(char => char.charCodeAt(0));
    const lengths = asciiLengths.concat(KnotHash.suffixLengths);
    const circle = new Circle();

    for (let i = 0; i < KnotHash.roundCount; i++) {
      for (let length of lengths) {
        circle.step(length);
      }
    }

    let numbers = circle.list;
    let blocks = [];

    while (numbers.length > 0) {
      blocks.push(numbers.splice(0, 16));
    }

    const denseHash = blocks.map((block) => {
      return block.reduce((acc, number) => acc ^ number);
    });

    const hexStrings = denseHash.map((number) => {
      let hexString = number.toString(16);

      if (hexString.length === 1) {
        hexString = '0' + hexString;
      }

      return hexString;
    });

    return hexStrings.join('');
  }
}
