document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("sigma-container");

  const graph = {
    nodes: [
      { id: "n0", label: "Node 1", x: 0, y: 0, size: 10, color: "#ff0000" },
      { id: "n1", label: "Node 2", x: 1, y: 1, size: 10, color: "#0000ff" }
    ],
    edges: [
      { id: "e0", source: "n0", target: "n1" }
    ]
  };

  new sigma.Sigma(graph, container);
});

