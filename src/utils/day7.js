import Program from './day7/Program';
import Tower from './day7/Tower';

const parseInput = (inputText) => {
  return inputText
    .split('\n')
    .map(row => Program.build(row));
};

const computeNormal = (tower) => {
  return tower.root.id;
}

const computeBonus = (tower) => {
  tower.computeDesiredWeight();

  return 'bla';
}

const day7 = (inputText, computeFunction) => {
  if (inputText === null) {
    return 'invalid input';
  }

  const programs = parseInput(inputText);
  const tower = new Tower(programs);

  return computeFunction(tower);
}

export function normal(inputText) {
  return day7(inputText, computeNormal);
};

export function bonus(inputText) {
  return day7(inputText, computeBonus);
};
