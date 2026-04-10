"use client";

import { useScrollPosition } from "@/hooks/use-scroll-position";

export function Background() {
  const scrollY = useScrollPosition();

  return (
    <>
      {/* Grid overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Cyan orb */}
      <div
        className="fixed pointer-events-none z-0"
        style={{
          top: "20%",
          left: "60%",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(34,211,238,0.06) 0%, transparent 70%)",
          filter: "blur(80px)",
          transform: `translateY(${scrollY * -0.08}px)`,
        }}
      />

      {/* Violet orb */}
      <div
        className="fixed pointer-events-none z-0"
        style={{
          bottom: "10%",
          left: "20%",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(167,139,250,0.05) 0%, transparent 70%)",
          filter: "blur(80px)",
          transform: `translateY(${scrollY * 0.05}px)`,
        }}
      />
    </>
  );
}
