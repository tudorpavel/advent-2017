const day1 = (inputText) => {
  if (inputText.match(/^(\d+)$/) == null) {
    return 'invalid input';
  }

  let result = 0;

  for (let i = 0; i < inputText.length - 1; i++) {
    if (inputText[i] === inputText[i + 1]) {
      result += parseInt(inputText[i], 10);
    }
  }

  if (inputText[inputText.length - 1] === inputText[0]) {
    result += parseInt(inputText[0], 10);
  }

  return result.toString();
};

export default day1;
