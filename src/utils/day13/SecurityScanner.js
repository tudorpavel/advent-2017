export default class SecurityScanner {
  constructor(layerIndex, scannerLength) {
    this.layerIndex = layerIndex;
    this.scannerLength = scannerLength;
  }

  severity() {
    if (this.scannerLength === 1) {
      return this.layerIndex;
    } else if (this.layerIndex % this._scannerCycle() === 0) {
      return this.layerIndex * this.scannerLength;
    } else {
      return 0;
    }
  }

  _scannerCycle() {
    return (this.scannerLength - 1) * 2;
  }
}
