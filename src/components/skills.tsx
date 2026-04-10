"use client";

import { FadeIn } from "./fade-in";
import { SectionHeader } from "./section-header";
import { SKILLS } from "@/data/skills";
import { COLORS, SECTION_ACCENTS } from "@/lib/tokens";

export function Skills() {
  return (
    <section id="skills" style={{ padding: "120px 10%", maxWidth: 1140 }}>
      <FadeIn>
        <SectionHeader number="04" label="Skills" accentColor={SECTION_ACCENTS.skills} />
      </FadeIn>

      <div className="skills-grid grid" style={{ gridTemplateColumns: "1fr 1fr", gap: 40 }}>
        {Object.entries(SKILLS).map(([category, items], ci) => (
          <FadeIn key={category} delay={ci * 0.1}>
            <div>
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 20,
                  fontWeight: 600,
                  marginBottom: 20,
                  color: COLORS.textPrimary,
                }}
              >
                {category}
              </h3>
              <div className="flex flex-wrap" style={{ gap: 8 }}>
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="cursor-default"
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: 12,
                      color: COLORS.text55,
                      background: COLORS.surfaceHover,
                      border: `1px solid rgba(255,255,255,0.07)`,
                      padding: "8px 16px",
                      borderRadius: 8,
                      transition: "all 0.25s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "rgba(34,211,238,0.3)";
                      e.currentTarget.style.color = COLORS.cyan;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                      e.currentTarget.style.color = COLORS.text55;
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
