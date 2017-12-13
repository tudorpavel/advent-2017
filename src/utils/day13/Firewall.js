import SecurityScanner from './SecurityScanner';

export default class Firewall {
  constructor(pairs) {
    this.layers = {};

    for (let pair of pairs) {
      this.layers[pair[0]] = new SecurityScanner(pair[1]);
    }
  }

  severity() {
    let severity = 0;

    for (let [depth, indexAfter] of Object.entries(this._layersWithIndexAfter())) {
      if (indexAfter === 0) {
        severity += depth * this.layers[depth].range;
      }
    }

    return severity;
  }

  isCaught(delay = 0) {
    const caught = Object.entries(this._layersWithIndexAfter(delay))
      .find(([_depth, indexAfter]) => {
        return indexAfter === 0;
      });

    return !!caught;
  }

  _layersWithIndexAfter(delay = 0) {
    return Object.entries(this.layers).map(([depth, scanner]) => {
      const numDepth = parseInt(depth, 10);
      const indexAfter = scanner.indexAfter(numDepth + delay);

      return { [numDepth]: indexAfter };
    }).reduce((obj, pair) => {
      return Object.assign(obj, pair);
    }, {})
  }
}
