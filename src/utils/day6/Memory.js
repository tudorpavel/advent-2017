export default class Memory {
  constructor(banks) {
    this.banks = banks;

    this.resetHistory();
    this.currentIndex = 0;
  }

  hasDuplicate() {
    return this.history.length !== [...new Set(this.history)].length;
  }

  redistribute() {
    let maxBank = -1;

    this.banks.forEach((bank, index) => {
      if (bank > maxBank) {
        this.currentIndex = index;
        maxBank = bank;
      }
    });

    this.banks[this.currentIndex] = 0;

    while (maxBank > 0) {
      this._nextIndex();
      this.banks[this.currentIndex]++;
      maxBank--;
    }

    this._save();
  }

  resetHistory() {
    this.history = [];
    this._save();
  }

  _save() {
    this.history.push(this.banks.join(''));
  }

  _nextIndex() {
    if (this.currentIndex === this.banks.length - 1) {
      this.currentIndex = 0;
    } else {
      this.currentIndex++;
    }
  }
}
