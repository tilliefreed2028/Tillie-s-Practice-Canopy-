"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    sigma?: any;
    graphology?: any;
  }
}

function loadScript(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    // avoid double-loading:
    const existing = document.querySelector(`script[src="${src}"]`);
    if (existing) {
      // if it already loaded, resolve; otherwise wait for load
      if ((existing as any).dataset.loaded === "true") return resolve();
      existing.addEventListener("load", () => resolve());
      existing.addEventListener("error", () => reject(new Error(`Failed to load ${src}`)));
      return;
    }

    const s = document.createElement("script");
    s.src = src;
    s.async = true;

    s.onload = () => {
      (s as any).dataset.loaded = "true";
      resolve();
    };
    s.onerror = () => reject(new Error(`Failed to load ${src}`));

    document.body.appendChild(s);
  });
}

export default function SigmaGraph() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let renderer: any = null;

    (async () => {
      if (!containerRef.current) return;

      // Load Graphology first, then Sigma
      await loadScript("https://unpkg.com/graphology@0.25.4/dist/graphology.umd.min.js");
      await loadScript("https://unpkg.com/sigma@2/build/sigma.min.js");

      const Graph = window.graphology?.Graph;
      const Sigma = window.sigma?.Sigma;

      if (!Graph || !Sigma) {
        console.error("Sigma/Graphology not available on window. Scripts may have failed to load.");
        return;
      }

      // Build a simple graph
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

      // IMPORTANT: Clear any previous renderer if hot reload re-runs
      containerRef.current.innerHTML = "";

      renderer = new Sigma(graph, containerRef.current);

      // Optional: fit/refresh
      if (renderer.getCamera) renderer.getCamera().animatedReset?.();
    })().catch((err) => console.error(err));

    return () => {
      if (renderer?.kill) renderer.kill();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: 600,
        height: 400,
        border: "1px solid #ccc",
        borderRadius: 8,
      }}
    />
  );
}
