import Node from './Node';

export default class Graph {
  constructor(nodes) {
    this.nodeMap = {};
  }

  at(id) {
    if (this.nodeMap[id] == null) {
      this.nodeMap[id] = new Node(id);
    }

    return this.nodeMap[id];
  }

  add(node) {
    const id = node[0];
    const neighborIds = node[1];
    const currentNode = this.at(id);

    for (let neighborId of neighborIds) {
      const neighborNode = this.at(neighborId);

      currentNode.addNeighbor(neighborNode);
    }

    return currentNode;
  }

  countNodes(currentNode) {
    if (currentNode.seen) {
      return 0;
    }

    currentNode.seen = true;

    return 1 + currentNode.neighbors.reduce((sum, neighbor) => {
      return sum + this.countNodes(neighbor);
    }, 0);
  }
}
