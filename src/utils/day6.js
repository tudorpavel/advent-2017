import Memory from './day6/Memory';

const parseInput = (inputText) => {
  return inputText
    .split(/\s/)
    .map(row => parseInt(row, 10))
    .filter(row => !isNaN(row));
};

const day6 = (inputText) => {
  if (inputText === null) {
    return 'invalid input';
  }

  const banks = parseInput(inputText);
  const memoryBanks = new Memory(banks);

  while (!memoryBanks.hasDuplicate()) {
    memoryBanks.redistribute();
  }

  return (memoryBanks.history.length - 1).toString();
}

export function normal(inputText) {
  return day6(inputText);
};

export function bonus(inputText) {
  return 'N/A';
};
