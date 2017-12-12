import Graph from './day12/Graph';

export function normal(inputText) {
  const nodes = inputText
    .split('\n')
    .map(row => row.split(' <-> '))
    .map(row => [row[0], row[1].split(', ')]);
  const graph = new Graph();

  for (let node of nodes) {
    graph.add(node);
  }

  const nodeCount = graph.countNodes(graph.at('0'));

  return nodeCount.toString();
};

export function bonus(inputText) {
  return 'wip';
};
