 document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("sigma-container");
   if (!container) return;

  const Graph = window.graphology.Graph;
  const Sigma = window.sigma.Sigma;

  const graph = new Graph();

  graph.addNode("n0", {
    label: "Node 1",
    x: 0,
    y: 0,
    size: 12,
    color: "#ff0000",
  });

  graph.addNode("n1", {
    label: "Node 2",
    x: 1,
    y: 1,
    size: 12,
    color: "#0000ff",
  });

  graph.addEdge("n0", "n1");

  new Sigma(graph, container);

// Render
const container = document.getElementById("graph-container");
const renderer = new Sigma(graph, container);

});
