export interface MarginaliaData {
  type: "stat" | "quote" | "stack";
  label: string;
  value: string;
  detail?: string;
}

export interface Project {
  title: string;
  role: string;
  summary: string;
  challenge: string;
  solution: string;
  impact: string;
  tech: string[];
  accent: string;
  marginalia?: MarginaliaData;
}

export const PROJECTS: Project[] = [
  {
    title: "PoolProvider v2",
    role: "Lead Engineer",
    summary:
      "Critical platform service orchestrating thousands of concurrent CI/CD pipeline jobs across multiple regions. Redesigned from Azure Durable Functions (v1) to a stateless architecture achieving 4–6× agent allocation speedup.",
    challenge:
      "V1 suffered from a shared storage bottleneck that throttled job throughput under high concurrency.",
    solution:
      "Architected V2 around Postgres (synchronous replication), Redis (heartbeat TTLs), and a stateless API with region partitioning. Introduced pre-warming to eliminate cold-start latency.",
    impact:
      "4–6× speedup in agent allocation, eliminated single points of failure, scaled to thousands of concurrent jobs.",
    tech: ["C#", "Postgres", "Redis", "Azure", "CI/CD"],
    accent: "#22d3ee",
    marginalia: { type: "stat", label: "impact", value: "4–6×", detail: "agent allocation\nspeedup" },
  },
  {
    title: "Concurrent KV Store",
    role: "Personal Project",
    summary:
      "A concurrent key-value store built from scratch in Go, exploring concurrency primitives, data safety, and systems-level design patterns.",
    challenge:
      "Building a thread-safe, performant data store that handles concurrent reads and writes without race conditions.",
    solution:
      "Implemented with Go's sync.RWMutex for fine-grained locking, structured logging, and a clean API layer. Designed as a deep-dive into Go concurrency patterns.",
    impact:
      "Deepened Go expertise in concurrency, sync primitives, and systems design.",
    tech: ["Go", "Concurrency", "RWMutex", "Systems Design"],
    accent: "#a78bfa",
    marginalia: { type: "quote", label: "learning", value: "Building systems from first principles is how you actually internalize them." },
  },
  {
    title: "Pipeline Debug Tool",
    role: "Internal Tool",
    summary:
      "A desktop debugging tool that tracks Azure DevOps pipeline history, compares builds, and surfaces failure patterns — built with a Go backend and Tauri + TypeScript frontend.",
    challenge:
      "Engineers spent too much time manually digging through pipeline logs to identify regressions and flaky failures.",
    solution:
      "Built a Go backend that ingests pipeline data from Azure DevOps APIs, with a Tauri-powered desktop UI for interactive build comparison and trend visualization.",
    impact:
      "Reduced pipeline debugging time for the team, surfaced recurring failure patterns automatically.",
    tech: ["Go", "Tauri", "TypeScript", "Azure DevOps"],
    accent: "#f472b6",
    marginalia: { type: "stack", label: "stack", value: "Go + Tauri", detail: "rust-powered\ndesktop shell" },
  },
];
