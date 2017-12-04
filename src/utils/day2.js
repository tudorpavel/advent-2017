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

const rowChecksumNormal = (row) => {
  return Math.max(...row) - Math.min(...row);
}

const rowChecksumBonus = (row) => {
  for (let i = 0; i < row.length - 1; i++) {
    for (let j = i + 1; j < row.length; j++) {
      if (row[i] % row[j] === 0) {
        return row[i] / row[j];
      } else if (row[j] % row[i] === 0) {
        return row[j] / row[i];
      }
    }
  }

  return 0;
}

const finalChecksum = (rowChecksums) => {
  return rowChecksums.reduce(add, 0);
}

const day2 = (inputText, rowChecksum) => {
  const rows = rowsFromInput(inputText);

  if (rows === null) {
    return 'invalid input';
  }

  return finalChecksum(rows.map(rowChecksum)).toString();
}

export const day2Normal = (inputText) => {
  return day2(inputText, rowChecksumNormal);
};

export const day2Bonus = (inputText) => {
  return day2(inputText, rowChecksumBonus);
};
