import JumpsList from './day5/JumpsList';

const rowsFromInput = (inputText) => {
  return inputText
    .split('\n')
    .map(row => parseInt(row, 10));
};

const offsetChangeStrategyNormal = (currentOffset) => {
  return currentOffset + 1;
}

const offsetChangeStrategyBonus = (currentOffset) => {
  if (currentOffset >= 3) {
    return currentOffset - 1;
  } else {
    return currentOffset + 1;
  }
}

const day5 = (inputText, offsetChangeStrategy) => {
  if (inputText === null) {
    return 'invalid input';
  }

  const jumps = rowsFromInput(inputText);
  const jumpsList = new JumpsList(jumps, offsetChangeStrategy);
  let lastJumpCount = 0;

  while (lastJumpCount !== null) {
    lastJumpCount = jumpsList.next();
  }

  return jumpsList.jumpCount.toString();
}

export function normal(inputText) {
  return day5(inputText, offsetChangeStrategyNormal);
};

export function bonus(inputText) {
  return day5(inputText, offsetChangeStrategyBonus);
};
