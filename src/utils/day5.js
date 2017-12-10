import JumpsList from './day5/JumpsList';

const rowsFromInput = (inputText) => {
  return inputText
    .split('\n')
    .map(row => parseInt(row, 10));
};

const day5 = (inputText) => {
  if (inputText === null) {
    return 'invalid input';
  }

  const jumps = rowsFromInput(inputText);
  const jumpsList = new JumpsList(jumps);
  let lastJumpCount = 0;

  while (lastJumpCount !== null) {
    lastJumpCount = jumpsList.next();
  }

  return jumpsList.jumpCount.toString();
}

export function normal(inputText) {
  return day5(inputText);
};

export function bonus(inputText) {
  return 'N/A';
};
