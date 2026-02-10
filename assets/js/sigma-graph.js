document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("graph-container");

  if (!container) {
    console.error("Graph container not found");
    return;
  }

  const graph = {
    nodes: [
      { id: "a", label: "Node A", x: 0, y: 0, size: 10, color: "#1f77b4" },
      { id: "b", label: "Node B", x: 1, y: 1, size: 10, color: "#ff7f0e" },
      { id: "c", label: "Node C", x: 1, y: 0, size: 10, color: "#2ca02c" }
    ],
    edges: [
      { id: "e1", source: "a", target: "b" },
      { id: "e2", source: "a", target: "c" }
    ]
  };

  new sigma.Sigma(graph, container);
});

import Graph from "graphology";
import Sigma from "sigma";

// 1. Create a graph
const graph = new Graph();

// 2. Add nodes
graph.addNode("A", {
  label: "Node A",
  x: 0,
  y: 0,
  size: 15,
  color: "#E74C3C",
});

graph.addNode("B", {
  label: "Node B",
  x: 3,
  y: 1,
  size: 12,
  color: "#3498DB",
});

graph.addNode("C", {
  label: "Node C",
  x: 1,
  y: 3,
  size: 10,
  color: "#2ECC71",
});

// 3. Add edges
graph.addEdge("A", "B", { size: 2 });
graph.addEdge("A", "C", { size: 2 });

// 4. Render
const container = document.getElementById("sigma-container");
const renderer = new Sigma(graph, container);

