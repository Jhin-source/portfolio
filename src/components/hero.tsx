"use client";

import { useScrollPosition } from "@/hooks/use-scroll-position";
import { FadeIn } from "./fade-in";
import { PERSONAL } from "@/data/personal";
import { COLORS } from "@/lib/tokens";

export function Hero() {
  const scrollY = useScrollPosition();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center relative"
      style={{ padding: "0 10%", maxWidth: 1140 }}
    >
      <FadeIn>
        <div
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: 12,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: COLORS.cyan,
            marginBottom: 20,
          }}
        >
          {PERSONAL.title}
        </div>
      </FadeIn>

      <FadeIn delay={0.15}>
        <h1
          className="m-0"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(48px, 7vw, 80px)",
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
          }}
        >
          Hi, I&apos;m{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #22d3ee, #a78bfa)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {PERSONAL.name}
          </span>
          .
        </h1>
      </FadeIn>

      <FadeIn delay={0.3}>
        <p
          style={{
            fontSize: 19,
            lineHeight: 1.7,
            color: COLORS.text50,
            maxWidth: 560,
            marginTop: 28,
            fontWeight: 300,
          }}
        >
          {PERSONAL.heroTagline}
        </p>
      </FadeIn>

      <FadeIn delay={0.45}>
        <div className="flex max-md:flex-col max-md:items-start" style={{ gap: 16, marginTop: 40 }}>
          <button
            onClick={() => scrollTo("projects")}
            className="hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(34,211,238,0.25)]"
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 13,
              letterSpacing: "0.04em",
              padding: "14px 32px",
              background: "linear-gradient(135deg, #22d3ee, #06b6d4)",
              color: COLORS.bg,
              border: "none",
              borderRadius: 10,
              cursor: "pointer",
              fontWeight: 700,
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
          >
            View Projects
          </button>
          <button
            onClick={() => scrollTo("contact")}
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 13,
              letterSpacing: "0.04em",
              padding: "14px 32px",
              background: "transparent",
              color: COLORS.text60,
              border: `1px solid ${COLORS.borderStrong}`,
              borderRadius: 10,
              cursor: "pointer",
              fontWeight: 400,
              transition: "all 0.25s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
              e.currentTarget.style.color = COLORS.textPrimary;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = COLORS.borderStrong;
              e.currentTarget.style.color = COLORS.text60;
            }}
          >
            Get In Touch
          </button>
        </div>
      </FadeIn>

      {/* Scroll indicator */}
      <div
        className="absolute flex items-center"
        style={{
          bottom: 40,
          left: "10%",
          gap: 12,
          opacity: scrollY > 100 ? 0 : 0.3,
          transition: "opacity 0.4s",
        }}
      >
        <div
          className="animate-pulse-slow"
          style={{
            width: 1,
            height: 40,
            background: "linear-gradient(to bottom, rgba(255,255,255,0.4), transparent)",
          }}
        />
        <span
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: 10,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          Scroll
        </span>
      </div>
    </section>
  );
}
