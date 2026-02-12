import Graph from "graphology";
import Sigma from "sigma";

export function renderGraph(container) {
  const graph = new Graph();

  graph.addNode("a", {
    label: "Node A",
    x: 0,
    y: 0,
    size: 15,
    color: "#E74C3C",
  });

  graph.addNode("b", {
    label: "Node B",
    x: 1,
    y: 1,
    size: 12,
    color: "#3498DB",
  });

  graph.addEdge("a", "b");

  new Sigma(graph, container);
}
