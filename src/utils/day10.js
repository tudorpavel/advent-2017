import Circle from './day10/Circle';

export function normal(inputText) {
  const lengths = inputText
    .split(',')
    .map(length => parseInt(length, 10));
  const circle = new Circle();

  for (let length of lengths) {
    circle.step(length);
  }

  return (circle.list[0] * circle.list[1]).toString();
};

export function bonus(inputText) {
  const roundCount = 64;
  const asciiLengths = inputText
    .split('')
    .map(char => char.charCodeAt(0));
  const suffixLengths = [17, 31, 73, 47, 23];
  const lengths = asciiLengths.concat(suffixLengths);
  const circle = new Circle();

  for (let i = 0; i < roundCount; i++) {
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
};
