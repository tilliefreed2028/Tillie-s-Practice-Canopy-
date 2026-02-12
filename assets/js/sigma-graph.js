import Graph from "graphology";
import Sigma from "sigma";

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("graph-container");

  if (!container) {
    console.error("Graph container not found");
    return;
  }

  // 1. Create graph
  const graph = new Graph();

  // 2. Add nodes
  graph.addNode("a", {
    label: "Node A",
    x: 0,
    y: 0,
    size: 15,
    color: "#E74C3C",
  });

  graph.addNode("b", {
    label: "Node B",
    x: 2,
    y: 1,
    size: 12,
    color: "#3498DB",
  });

  graph.addNode("c", {
    label: "Node C",
    x: 1,
    y: 3,
    size: 10,
    color: "#2ECC71",
  });

  // 3. Add edges
  graph.addEdge("a", "b", { size: 2 });
  graph.addEdge("a", "c", { size: 2 });

  // 4. Render Sigma
  new Sigma(graph, container);
});
