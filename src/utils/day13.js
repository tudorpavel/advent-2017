import Firewall from './day13/Firewall';

const setup = (inputText) => {
  return inputText
    .split('\n')
    .map((row) => {
      return row.split(': ').map(num => parseInt(num, 10));
    });
}

export function normal(inputText) {
  const pairs = setup(inputText);
  const firewall = new Firewall(pairs);

  return firewall.severity().toString();
};

export function bonus(inputText) {
  const pairs = setup(inputText);
  const firewall = new Firewall(pairs);

  let delay = 0;

  // TODO: Fix this infinite loop
  /* while(firewall.isCaught(delay)) {
   *   delay++;
   * }
   */
  return delay.toString();
};
