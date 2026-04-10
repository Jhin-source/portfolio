"use client";

import { useState } from "react";
import { FadeIn } from "./fade-in";
import { COLORS } from "@/lib/tokens";
import type { ExperienceEntry } from "@/data/experience";

interface ExperienceCardProps {
  entry: ExperienceEntry;
  index: number;
}

export function ExperienceCard({ entry, index }: ExperienceCardProps) {
  const [open, setOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const accent = entry.accent;
  const hasExpandable = entry.highlights.length > 0 || entry.tech.length > 0;

  return (
    <FadeIn delay={index * 0.12}>
      <div
        onClick={() => hasExpandable && setOpen(!open)}
        style={{
          cursor: hasExpandable ? "pointer" : "default",
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

        <div className="flex items-start relative" style={{ gap: 16 }}>
          {/* Logo */}
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 10,
              background: COLORS.surfaceStrong,
              border: `1px solid ${COLORS.border}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              flexShrink: 0,
            }}
          >
            {logoError ? (
              <span
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: 16,
                  color: COLORS.text40,
                  fontWeight: 700,
                }}
              >
                {entry.company[0]}
              </span>
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={entry.logo}
                alt={entry.company}
                style={{
                  width: 28,
                  height: 28,
                  objectFit: "contain",
                  filter: "brightness(0) invert(1)",
                  opacity: 0.7,
                }}
                onError={() => setLogoError(true)}
              />
            )}
          </div>

          {/* Content */}
          <div className="flex-1">
            <div className="flex items-center flex-wrap" style={{ gap: 12, marginBottom: 4 }}>
              <h3
                className="m-0"
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: 18,
                  fontWeight: 700,
                  color: COLORS.textPrimary,
                  letterSpacing: "-0.02em",
                }}
              >
                {entry.company}
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
                {entry.type === "education" ? "Education" : "Work"}
              </span>
            </div>
            <div
              style={{
                fontFamily: "'IBM Plex Sans', sans-serif",
                fontSize: 15,
                color: COLORS.text70,
                marginBottom: 4,
              }}
            >
              {entry.role}
            </div>
            <div
              className="flex"
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: 12,
                color: COLORS.text30,
                gap: 16,
              }}
            >
              <span>{entry.period}</span>
              <span>{entry.location}</span>
            </div>
            <p
              className="m-0"
              style={{
                fontFamily: "'IBM Plex Sans', sans-serif",
                fontSize: 14,
                color: COLORS.text50,
                lineHeight: 1.6,
                marginTop: 12,
              }}
            >
              {entry.summary}
            </p>
          </div>

          {/* Expand toggle */}
          {hasExpandable && (
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
          )}
        </div>

        {/* Expanded details */}
        {hasExpandable && (
          <div
            style={{
              maxHeight: open ? 600 : 0,
              opacity: open ? 1 : 0,
              overflow: "hidden",
              transition: "max-height 0.5s ease, opacity 0.4s ease 0.1s",
            }}
          >
            <div
              className="max-md:pl-0"
              style={{
                marginTop: 24,
                paddingTop: 20,
                paddingLeft: 60,
                borderTop: `1px solid ${COLORS.borderSubtle}`,
              }}
            >
              {entry.highlights.length > 0 && (
                <div style={{ marginBottom: 20 }}>
                  <div
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: 10,
                      textTransform: "uppercase",
                      letterSpacing: "0.12em",
                      color: accent,
                      marginBottom: 12,
                      fontWeight: 600,
                    }}
                  >
                    Key Contributions
                  </div>
                  {entry.highlights.map((h, i) => (
                    <div
                      key={i}
                      style={{
                        fontFamily: "'IBM Plex Sans', sans-serif",
                        fontSize: 13.5,
                        lineHeight: 1.65,
                        color: COLORS.text55,
                        marginBottom: 8,
                        paddingLeft: 16,
                        borderLeft: `2px solid ${accent}30`,
                      }}
                    >
                      {h}
                    </div>
                  ))}
                </div>
              )}
              {entry.tech.length > 0 && (
                <div className="flex flex-wrap" style={{ gap: 8 }}>
                  {entry.tech.map((t) => (
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
              )}
            </div>
          </div>
        )}
      </div>
    </FadeIn>
  );
}
