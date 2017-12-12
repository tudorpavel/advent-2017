export default class Node {
  constructor(id) {
    this.id = id;
    this.neighbors = [];
    this.color = null;
  }

  addNeighbor(node) {
    if (node.id !== this.id) {
      this.neighbors.push(node);
    } else {
      return null;
    }
  }
}
