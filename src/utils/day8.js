import Instruction from './day8/Instruction';
import Register from './day8/Register';

const parseInput = (inputText) => {
  return inputText
    .split('\n')
    .map(row => Instruction.build(row));
};

const executeInstructions = (inputText) => {
  if (inputText === null) {
    return 'invalid input';
  }

  Register.reset();
  const instructions = parseInput(inputText);
  for (let instruction of instructions) {
    instruction.execute();
  }
}

export function normal(inputText) {
  executeInstructions(inputText);

  return Register.maxValue().toString();
};

export function bonus(inputText) {
  executeInstructions(inputText);

  return Register.maxHistoricalValue().toString();
};
