"use client";

import { FadeIn } from "./fade-in";
import { SectionHeader } from "./section-header";
import { ProjectCard } from "./project-card";
import { Marginalia } from "./marginalia";
import { PROJECTS } from "@/data/projects";
import { COLORS, SECTION_ACCENTS } from "@/lib/tokens";

export function Projects() {
  return (
    <section id="projects" style={{ padding: "120px 10%", maxWidth: 1140 }}>
      <FadeIn>
        <SectionHeader number="02" label="Projects" accentColor={SECTION_ACCENTS.projects} />
      </FadeIn>

      <FadeIn delay={0.1}>
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 36,
            fontWeight: 600,
            marginBottom: 12,
            letterSpacing: "-0.02em",
          }}
        >
          Selected Work
        </h2>
        <p style={{ fontSize: 15, color: COLORS.text40, marginBottom: 48, maxWidth: 500 }}>
          Click any project to expand the full story — challenge, solution,
          and impact.
        </p>
      </FadeIn>

      {PROJECTS.map((p, i) => (
        <div
          key={p.title}
          className="marginalia-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 200px",
            gap: 40,
            alignItems: "start",
          }}
        >
          <ProjectCard project={p} index={i} />
          <Marginalia data={p.marginalia} />
        </div>
      ))}
    </section>
  );
}
