import Grid from './day14/Grid';

export function normal(inputText) {
  const grid = new Grid(inputText);

  return grid.usedBitsCount().toString();
}

export function bonus(inputText) {
  const grid = new Grid(inputText);

  return grid.regionsCount().toString();
}
