import Circle from './day10/Circle';
import KnotHash from './day10/KnotHash';

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
  const knotHash = new KnotHash();

  return knotHash.hash(inputText);
};
