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

