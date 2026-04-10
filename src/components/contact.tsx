"use client";

import { FadeIn } from "./fade-in";
import { SectionHeader } from "./section-header";
import { PERSONAL } from "@/data/personal";
import { COLORS, SECTION_ACCENTS } from "@/lib/tokens";

const LINKS = [
  { label: "Email", href: `mailto:${PERSONAL.email}`, icon: "\u2709" },
  { label: "GitHub", href: PERSONAL.github, icon: "\u25C6" },
  { label: "LinkedIn", href: PERSONAL.linkedin, icon: "\u25B8" },
];

export function Contact() {
  return (
    <section id="contact" style={{ padding: "120px 10% 80px", maxWidth: 1140 }}>
      <FadeIn>
        <SectionHeader number="05" label="Contact" accentColor={SECTION_ACCENTS.contact} />
      </FadeIn>

      <FadeIn delay={0.1}>
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 42,
            fontWeight: 600,
            marginBottom: 20,
            letterSpacing: "-0.02em",
          }}
        >
          Let&apos;s connect.
        </h2>
        <p
          style={{
            fontSize: 16,
            lineHeight: 1.7,
            color: COLORS.text50,
            maxWidth: 480,
            marginBottom: 40,
          }}
        >
          I&apos;m currently exploring senior backend and infrastructure roles.
          If you&apos;re building something that needs to scale — I&apos;d love to
          talk.
        </p>
      </FadeIn>

      <FadeIn delay={0.25}>
        <div className="flex flex-wrap" style={{ gap: 16 }}>
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center no-underline"
              style={{
                gap: 8,
                fontFamily: "'Space Mono', monospace",
                fontSize: 13,
                color: COLORS.text50,
                padding: "14px 28px",
                border: `1px solid rgba(255,255,255,0.1)`,
                borderRadius: 10,
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = COLORS.cyan;
                e.currentTarget.style.color = COLORS.cyan;
                e.currentTarget.style.background = "rgba(34,211,238,0.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                e.currentTarget.style.color = COLORS.text50;
                e.currentTarget.style.background = "transparent";
              }}
            >
              <span style={{ fontSize: 16 }}>{link.icon}</span>
              {link.label}
            </a>
          ))}
        </div>
      </FadeIn>

      {/* Footer */}
      <div
        className="flex justify-between items-center max-md:flex-col max-md:gap-4"
        style={{
          marginTop: 80,
          paddingTop: 32,
          borderTop: `1px solid rgba(255,255,255,0.05)`,
        }}
      >
        <div
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: 12,
            color: COLORS.text20,
          }}
        >
          &copy; {new Date().getFullYear()} {PERSONAL.fullName}
        </div>
        <div
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: 11,
            color: COLORS.text15,
            letterSpacing: "0.05em",
          }}
        >
          Built with intention
        </div>
      </div>
    </section>
  );
}
