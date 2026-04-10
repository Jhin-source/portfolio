import { COLORS } from "@/lib/tokens";

interface SectionHeaderProps {
  number: string;
  label: string;
  accentColor: string;
}

export function SectionHeader({ number, label, accentColor }: SectionHeaderProps) {
  return (
    <div className="flex items-center" style={{ gap: 16, marginBottom: 20 }}>
      <div
        style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: 11,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: accentColor,
        }}
      >
        {number} &mdash; {label}
      </div>
      <div className="flex-1" style={{ height: 1, background: COLORS.borderSubtle }} />
    </div>
  );
}
