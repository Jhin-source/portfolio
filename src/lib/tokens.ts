export const COLORS = {
  // Backgrounds
  bg: "#0a0a0c",
  surface: "rgba(255,255,255,0.02)",
  surfaceHover: "rgba(255,255,255,0.04)",
  surfaceStrong: "rgba(255,255,255,0.06)",

  // Borders
  border: "rgba(255,255,255,0.08)",
  borderSubtle: "rgba(255,255,255,0.06)",
  borderStrong: "rgba(255,255,255,0.12)",

  // Text
  textPrimary: "#f0f0f0",
  text70: "rgba(255,255,255,0.70)",
  text60: "rgba(255,255,255,0.60)",
  text55: "rgba(255,255,255,0.55)",
  text50: "rgba(255,255,255,0.50)",
  text45: "rgba(255,255,255,0.45)",
  text40: "rgba(255,255,255,0.40)",
  text35: "rgba(255,255,255,0.35)",
  text30: "rgba(255,255,255,0.30)",
  text20: "rgba(255,255,255,0.20)",
  text15: "rgba(255,255,255,0.15)",

  // Accents
  cyan: "#22d3ee",
  cyanDark: "#06b6d4",
  violet: "#a78bfa",
  pink: "#f472b6",
} as const;

export const SPACE = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  "3xl": 28,
  "4xl": 32,
  "5xl": 40,
  "6xl": 48,
  "8xl": 56,
  "10xl": 80,
  "14xl": 120,
} as const;

export const RADIUS = {
  sm: 6,
  md: 8,
  lg: 10,
  xl: 16,
  pill: 20,
  full: "50%",
} as const;

export const FONTS = {
  display: "'Playfair Display', serif",
  mono: "'Space Mono', monospace",
  body: "'IBM Plex Sans', sans-serif",
} as const;

export const LAYOUT = {
  maxContentWidth: 1140,
  marginaliaWidth: 200,
  marginaliaGap: 40,
  sectionPaddingY: 120,
  sectionPaddingX: "10%",
  navPaddingY: 16,
  navPaddingX: 40,
  navScrollThreshold: 60,
} as const;

export const MOTION = {
  fast: "0.2s ease",
  base: "0.25s ease",
  card: "0.35s ease",
  expand: "0.5s ease",
  fade: "0.7s ease",
} as const;

// Section accent map
export const SECTION_ACCENTS = {
  about: COLORS.cyan,
  projects: COLORS.violet,
  experience: COLORS.cyan,
  skills: COLORS.pink,
  contact: COLORS.cyan,
} as const;
