export default class SecurityScanner {
  constructor(layerIndex, scannerLength) {
    this.layerIndex = layerIndex;
    this.scannerLength = scannerLength;
  }

  severity() {
    if (this.isCaught(0)) {
      return this.layerIndex * this.scannerLength;
    } else {
      return 0;
    }
  }

  isCaught(delay) {
    if (this.scannerLength === 1) {
      return true;
    }

    return (this.layerIndex + delay) % this._scannerCycle() === 0;
  }

  _scannerCycle() {
    return (this.scannerLength - 1) * 2;
  }
}
