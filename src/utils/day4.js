const rowsFromInput = (inputText) => {
  return inputText
    .split('\n')
    .map(row => row.split(/\s/));
};

const wordsPolicyNormal = (words) => {
  return words.length === [...new Set(words)].length;
}

const wordsPolicyBonus = (words) => {
  const wordsWithEachSorted = words.map((word) => {
    return word.split('').sort().join('');
  });

  return wordsPolicyNormal(wordsWithEachSorted);
}

const day4 = (inputText, wordsPolicy) => {
  if (inputText === null) {
    return 'invalid input';
  }

  const rows = rowsFromInput(inputText);

  return rows.filter(wordsPolicy).length.toString();
}

export function normal(inputText) {
  return day4(inputText, wordsPolicyNormal);
};

export function bonus(inputText) {
  return day4(inputText, wordsPolicyBonus);
};
