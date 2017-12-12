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

  countNodes(currentNode, color) {
    if (currentNode.color != null) {
      return 0;
    }

    currentNode.color = color;

    return 1 + currentNode.neighbors.reduce((sum, neighbor) => {
      return sum + this.countNodes(neighbor, color);
    }, 0);
  }
}
