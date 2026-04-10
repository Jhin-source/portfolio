"use client";

import { FadeIn } from "./fade-in";
import { SectionHeader } from "./section-header";
import { PERSONAL } from "@/data/personal";
import { COLORS, SECTION_ACCENTS } from "@/lib/tokens";

export function About() {
  return (
    <section
      id="about"
      style={{ padding: "120px 10%", maxWidth: 1140 }}
    >
      <FadeIn>
        <SectionHeader number="01" label="About" accentColor={SECTION_ACCENTS.about} />
      </FadeIn>

      <FadeIn delay={0.1}>
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 36,
            fontWeight: 600,
            marginBottom: 28,
            letterSpacing: "-0.02em",
          }}
        >
          {PERSONAL.aboutHeading}
        </h2>
      </FadeIn>

      <FadeIn delay={0.2}>
        <div
          className="about-grid grid"
          style={{ gridTemplateColumns: "1fr 1fr", gap: "24px 48px" }}
        >
          {PERSONAL.aboutParagraphs.map((p, i) => (
            <p
              key={i}
              className="m-0"
              style={{
                fontSize: 15,
                lineHeight: 1.8,
                color: COLORS.text55,
              }}
            >
              {p}
            </p>
          ))}
        </div>
      </FadeIn>

      {/* Stats ribbon */}
      <FadeIn delay={0.35}>
        <div
          className="stats-grid grid"
          style={{
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 24,
            marginTop: 56,
            padding: "32px 0",
            borderTop: `1px solid ${COLORS.borderSubtle}`,
            borderBottom: `1px solid ${COLORS.borderSubtle}`,
          }}
        >
          {PERSONAL.stats.map((s) => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 32,
                  fontWeight: 700,
                  background: "linear-gradient(135deg, #22d3ee, #a78bfa)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {s.num}
              </div>
              <div
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: 10,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: COLORS.text35,
                  marginTop: 8,
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
