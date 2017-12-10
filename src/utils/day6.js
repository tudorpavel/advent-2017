import Memory from './day6/Memory';

const parseInput = (inputText) => {
  return inputText
    .split(/\s/)
    .map(row => parseInt(row, 10))
    .filter(row => !isNaN(row));
};

const computeNormal = (memoryBanks) => {
  while (!memoryBanks.hasDuplicate()) {
    memoryBanks.redistribute();
  }

  return (memoryBanks.history.length - 1).toString();
}

const computeBonus = (memoryBanks) => {
  computeNormal(memoryBanks);

  memoryBanks.resetHistory();

  return computeNormal(memoryBanks);
}

const day6 = (inputText, computeFunction) => {
  if (inputText === null) {
    return 'invalid input';
  }

  const banks = parseInput(inputText);
  const memoryBanks = new Memory(banks);

  return computeFunction(memoryBanks);
}

export function normal(inputText) {
  return day6(inputText, computeNormal);
};

export function bonus(inputText) {
  return day6(inputText, computeBonus);
};
