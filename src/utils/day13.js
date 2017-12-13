import SecurityScanner from './day13/SecurityScanner';

const setup = (inputText) => {
  return inputText
    .split('\n')
    .map(row => row.split(': '));
}

export function normal(inputText) {
  const pairs = setup(inputText);
  const layers = {};

  for (let pair of pairs) {
    layers[pair[0]] = new SecurityScanner(pair[1]);
  }

  let severity = 0;

  for (let [depth, scanner] of Object.entries(layers)) {
    const indexAfter = scanner.indexAfter(depth);

    if (indexAfter === 0) {
      severity += depth * scanner.range;
    }
  }

  return severity.toString();
};

export function bonus(inputText) {
  return 'n/a';
};
