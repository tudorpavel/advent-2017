import HexGrid from './day11/HexGrid';

const setup = (inputText) => {
  const directions = inputText.split(',');
  const grid = new HexGrid();

  for (let direction of directions) {
    grid.move(direction);
  }

  return grid;
}

export function normal(inputText) {
  const grid = setup(inputText)

  return grid.distanceToCenter().toString();
};

export function bonus(inputText) {
  const grid = setup(inputText)

  return grid.maxDistanceToCenter.toString();
};
