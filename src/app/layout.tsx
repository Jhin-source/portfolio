import type { Metadata } from "next";
import { Playfair_Display, IBM_Plex_Sans, Space_Mono } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-display",
});

const ibmPlex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  // NOTE: metadataBase is intentionally commented out — user does not have a domain yet.
  // Do NOT uncomment or add a placeholder URL. Leave as-is.
  // metadataBase: new URL("https://jhinmcglynn.dev"),

  title: "Jhin McGlynn — Backend & Infrastructure Engineer",
  description:
    "Backend and infrastructure engineer building the invisible systems that keep platforms running.",
  authors: [{ name: "Jhin McGlynn" }],

  openGraph: {
    type: "website",
    siteName: "Jhin McGlynn",
    title: "Jhin McGlynn — Backend & Infrastructure Engineer",
    description:
      "Building the invisible infrastructure that makes everything else possible.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jhin McGlynn — Backend & Infrastructure Engineer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Jhin McGlynn — Backend & Infrastructure Engineer",
    description:
      "Building the invisible infrastructure that makes everything else possible.",
    images: ["/og-image.png"],
  },

  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${ibmPlex.variable} ${spaceMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
