import Graph from './day12/Graph';

const setup = (inputText) => {
  const nodes = inputText
    .split('\n')
    .map(row => row.split(' <-> '))
    .map(row => [row[0], row[1].split(', ')]);
  const graph = new Graph();

  for (let node of nodes) {
    graph.add(node);
  }

  return graph;
}

export function normal(inputText) {
  const graph = setup(inputText);

  const nodeCount = graph.countNodes(graph.at('0'), 0);

  return nodeCount.toString();
};

export function bonus(inputText) {
  const graph = setup(inputText);
  let color = 0;

  let uncoloredNode = Object.values(graph.nodeMap)
    .find(node => node.color == null);

  while (uncoloredNode != null) {
    graph.countNodes(uncoloredNode, color++);

    uncoloredNode = Object.values(graph.nodeMap)
      .find(node => node.color == null);
  }

  return color.toString();
};
