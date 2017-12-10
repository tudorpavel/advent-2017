import Stack from './day9/Stack';

const parseInput = (inputText) => {
  const escapeRegex = new RegExp(/(!.)/g);
  const garbageRegex = new RegExp(/(<[^>]*>)+/g)

  return inputText
    .replace(escapeRegex, '')
    .replace(garbageRegex, '');
};

export function normal(inputText) {
  const noTrash = parseInput(inputText);
  const stack = new Stack();

  for (let char of noTrash.split('')) {
    if (char === '{') {
      stack.push();
    } else if (char === '}') {
      stack.pop();
    }
  }

  return stack.score.toString();
};

export function bonus(inputText) {
  return 'N/A';
};
