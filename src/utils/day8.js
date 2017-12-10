import Instruction from './day8/Instruction';
import Register from './day8/Register';

const parseInput = (inputText) => {
  return inputText
    .split('\n')
    .map(row => Instruction.build(row));
};

const computeNormal = () => {
  return Register.maxValue().toString();
}

const computeBonus = () => {
  return 'N/A';
}

const day8 = (inputText, computeFunction) => {
  if (inputText === null) {
    return 'invalid input';
  }

  Register.reset();
  const instructions = parseInput(inputText);
  for (let instruction of instructions) {
    instruction.execute();
  }

  return computeFunction();
}

export function normal(inputText) {
  return day8(inputText, computeNormal);
};

export function bonus(inputText) {
  return day8(inputText, computeBonus);
};
