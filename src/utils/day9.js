import Stack from './day9/Stack';

const escapeRegex = new RegExp(/(!.)/g);
const garbageRegex = new RegExp(/(<[^>]*>)+/g)

export function normal(inputText) {
  const noTrash = inputText
    .replace(escapeRegex, '')
    .replace(garbageRegex, '');
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
  const noEscaped = inputText.replace(escapeRegex, '');
  const matches = noEscaped.match(garbageRegex);

  if (matches == null) {
    return '0';
  }

  return matches.reduce((sum, match) => {
    return sum + (match.length - 2);
  }, 0).toString();
};
