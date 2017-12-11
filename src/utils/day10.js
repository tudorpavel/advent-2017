import Circle from './day10/Circle';

const parseInput = (inputText) => {
  return inputText.split(',').map(length => parseInt(length, 10));
}

export function normal(inputText) {
  const lengths = parseInput(inputText);
  const circle = new Circle();

  for (let length of lengths) {
    circle.step(length);
  }

  return (circle.list[0] * circle.list[1]).toString();
};

export function bonus(inputText) {
  return 'N/A';
};
