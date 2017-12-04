const day1 = (inputText, comparisonStep) => {
  if (inputText.match(/^(\d+)$/) == null) {
    return 'invalid input';
  }

  let result = 0;

  for (let i = 0; i < inputText.length; i++) {
    const comparisonIndex = (i + comparisonStep) % inputText.length;

    if (inputText[i] === inputText[comparisonIndex]) {
      result += parseInt(inputText[i], 10);
    }
  }

  return result.toString();
};

export function normal(inputText) {
  return day1(inputText, 1);
};

export function bonus(inputText) {
  return day1(inputText, inputText.length / 2);
};
