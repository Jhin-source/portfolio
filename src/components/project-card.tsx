"use client";

import { useState } from "react";
import { FadeIn } from "./fade-in";
import { COLORS } from "@/lib/tokens";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [open, setOpen] = useState(false);
  const accent = project.accent;

  return (
    <FadeIn delay={index * 0.12}>
      <div
        onClick={() => setOpen(!open)}
        style={{
          cursor: "pointer",
          border: `1px solid ${open ? accent : COLORS.border}`,
          borderRadius: 16,
          padding: "32px 28px",
          marginBottom: 20,
          background: open
            ? "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)"
            : COLORS.surface,
          transition: "all 0.35s ease",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Glow orb */}
        <div
          style={{
            position: "absolute",
            top: -60,
            right: -60,
            width: 180,
            height: 180,
            borderRadius: "50%",
            background: accent,
            opacity: open ? 0.06 : 0,
            filter: "blur(60px)",
            transition: "opacity 0.4s",
            pointerEvents: "none",
          }}
        />

        <div className="flex justify-between items-start relative" style={{ gap: 16 }}>
          <div className="flex-1">
            <div className="flex items-center flex-wrap" style={{ gap: 12, marginBottom: 8 }}>
              <h3
                className="m-0"
                style={{
                  fontFamily: COLORS.textPrimary && "'Space Mono', monospace",
                  fontSize: 20,
                  fontWeight: 700,
                  color: COLORS.textPrimary,
                  letterSpacing: "-0.02em",
                }}
              >
                {project.title}
              </h3>
              <span
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: 11,
                  color: accent,
                  background: `${accent}18`,
                  padding: "3px 10px",
                  borderRadius: 20,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                  whiteSpace: "nowrap",
                }}
              >
                {project.role}
              </span>
            </div>
            <p
              className="m-0"
              style={{
                fontFamily: "'IBM Plex Sans', sans-serif",
                fontSize: 15,
                color: COLORS.text60,
                lineHeight: 1.6,
              }}
            >
              {project.summary}
            </p>
          </div>

          <div
            style={{
              fontSize: 22,
              color: COLORS.text30,
              transition: "transform 0.3s, color 0.3s",
              transform: open ? "rotate(45deg)" : "rotate(0deg)",
              flexShrink: 0,
              marginTop: 4,
            }}
          >
            +
          </div>
        </div>

        {/* Expanded details */}
        <div
          style={{
            maxHeight: open ? 600 : 0,
            opacity: open ? 1 : 0,
            overflow: "hidden",
            transition: "max-height 0.5s ease, opacity 0.4s ease 0.1s",
          }}
        >
          <div
            className="project-expanded-grid grid"
            style={{
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: 20,
              marginTop: 24,
              paddingTop: 24,
              borderTop: `1px solid ${COLORS.borderSubtle}`,
            }}
          >
            {[
              { label: "Challenge", text: project.challenge },
              { label: "Solution", text: project.solution },
              { label: "Impact", text: project.impact },
            ].map((item) => (
              <div key={item.label}>
                <div
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: 10,
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    color: accent,
                    marginBottom: 8,
                    fontWeight: 600,
                  }}
                >
                  {item.label}
                </div>
                <div
                  style={{
                    fontFamily: "'IBM Plex Sans', sans-serif",
                    fontSize: 13.5,
                    lineHeight: 1.65,
                    color: COLORS.text55,
                  }}
                >
                  {item.text}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech tags */}
        <div className="flex flex-wrap relative" style={{ gap: 8, marginTop: 20 }}>
          {project.tech.map((t) => (
            <span
              key={t}
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: 11,
                color: COLORS.text45,
                border: `1px solid ${COLORS.border}`,
                padding: "4px 12px",
                borderRadius: 6,
                letterSpacing: "0.02em",
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </FadeIn>
  );
}
