const rowsFromInput = (inputText) => {
  return inputText
    .split('\n')
    .map(row => row.split(/\s/));
};

const day4 = (inputText) => {
  if (inputText === null) {
    return 'invalid input';
  }

  const rows = rowsFromInput(inputText);

  return rows.filter((words) => {
    return words.length === [...new Set(words)].length;
  }).length.toString();
}

export function normal(inputText) {
  return day4(inputText);
};

export function bonus(inputText) {
  return 'N/A';
};
