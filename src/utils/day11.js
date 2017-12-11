import HexGrid from './day11/HexGrid';

export function normal(inputText) {
  const directions = inputText.split(',');
  const grid = new HexGrid();

  for (let direction of directions) {
    grid.move(direction);
  }

  return grid.distanceToCenter().toString();
};

export function bonus(inputText) {
  return 'WIP';
};
