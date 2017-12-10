export default class JumpsList {
  constructor(jumps, offsetChangeStrategy) {
    this.jumps = jumps;
    this.offsetChangeStrategy = offsetChangeStrategy;

    this.currentIndex = 0;
    this.jumpCount = 0;
  }

  next() {
    const nextIndex = this._nextIndex();

    if (nextIndex < 0 || this.jumps.length <= nextIndex) {
      this.jumpCount++;
      return null;
    }

    this.jumps[this.currentIndex] = this.offsetChangeStrategy(
      this.jumps[this.currentIndex]
    );
    this.currentIndex = nextIndex;

    return ++(this.jumpCount);
  }

  _nextIndex() {
    return this.currentIndex + this.jumps[this.currentIndex];
  }
}
