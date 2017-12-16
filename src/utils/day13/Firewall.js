import SecurityScanner from './SecurityScanner';

export default class Firewall {
  constructor(pairs) {
    this.scanners = [];

    for (let pair of pairs) {
      this.scanners.push(new SecurityScanner(pair[0], pair[1]));
    }
  }

  severity() {
    return this.scanners.reduce((sum, scanner) => {
      return sum + scanner.severity();
    }, 0);
  }
}
