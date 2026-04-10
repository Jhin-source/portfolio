import { COLORS } from "@/lib/tokens";
import type { MarginaliaData } from "@/data/projects";

interface MarginaliaProps {
  data?: MarginaliaData;
}

const labelStyle = {
  fontFamily: "'Space Mono', monospace",
  fontSize: 10,
  color: "rgba(167,139,250,0.6)",
  letterSpacing: "0.12em",
  textTransform: "uppercase" as const,
  marginBottom: 8,
};

export function Marginalia({ data }: MarginaliaProps) {
  if (!data) return <div />;

  if (data.type === "stat") {
    return (
      <div style={{ paddingTop: 8 }}>
        <div style={labelStyle}>// {data.label}</div>
        <div
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 36,
            fontWeight: 700,
            background: "linear-gradient(135deg, #22d3ee, #a78bfa)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            lineHeight: 1,
            marginBottom: 4,
            letterSpacing: "-0.02em",
          }}
        >
          {data.value}
        </div>
        {data.detail && (
          <div
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 11,
              color: COLORS.text40,
              lineHeight: 1.5,
              whiteSpace: "pre-line",
            }}
          >
            {data.detail}
          </div>
        )}
      </div>
    );
  }

  if (data.type === "quote") {
    return (
      <div style={{ paddingTop: 8 }}>
        <div style={labelStyle}>// {data.label}</div>
        <div
          style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: "italic",
            fontSize: 14,
            color: COLORS.text50,
            lineHeight: 1.55,
          }}
        >
          &ldquo;{data.value}&rdquo;
        </div>
      </div>
    );
  }

  if (data.type === "stack") {
    return (
      <div style={{ paddingTop: 8 }}>
        <div style={labelStyle}>// {data.label}</div>
        <div
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: 16,
            fontWeight: 700,
            color: COLORS.textPrimary,
            marginBottom: 4,
            letterSpacing: "-0.01em",
          }}
        >
          {data.value}
        </div>
        {data.detail && (
          <div
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 11,
              color: COLORS.text40,
              lineHeight: 1.5,
              whiteSpace: "pre-line",
            }}
          >
            {data.detail}
          </div>
        )}
      </div>
    );
  }

  return <div />;
}
