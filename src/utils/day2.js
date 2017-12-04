const rowsFromInput = (inputText) => {
  if (inputText.match(/^(\d+\s?)+$/) == null) {
    return null;
  }

  const rows = inputText.split('\n');

  return rows.map(row => row.split(/\s/).map(str => parseInt(str, 10)));
};

const add = (a, b) => {
  return a + b;
}

const rowChecksum = (row) => {
  return Math.max(...row) - Math.min(...row);
}

const finalChecksum = (rows) => {
  return rows.map(rowChecksum).reduce(add, 0);
}

const day2 = (inputText) => {
  const rows = rowsFromInput(inputText);

  if (rows === null) {
    return 'invalid input';
  }

  return finalChecksum(rows).toString();
}

export const day2Normal = (inputText) => {
  return day2(inputText);
};

export const day2Bonus = (inputText) => {
  return day2(inputText);
};
