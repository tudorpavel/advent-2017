export default class HexGrid {
  static build(inputText) {
    return new HexGrid(inputText.split(','));
  }

  constructor() {
    this.x = 0;
    this.y = 0;
    this.z = 0;
  }

  move(direction) {
    switch (direction) {
      case 'n':
        this.y++;
        this.z--;
        break;
      case 'ne':
        this.x++;
        this.z--;
        break;
      case 'se':
        this.x++;
        this.y--;
        break;
      case 's':
        this.z++;
        this.y--;
        break;
      case 'sw':
        this.z++;
        this.x--;
        break;
      case 'nw':
        this.y++;
        this.x--;
        break;
      default:
    }
  }

  distanceToCenter() {
    return (
      Math.abs(this.x) +
      Math.abs(this.y) +
      Math.abs(this.z)
    ) / 2;
  }
}
