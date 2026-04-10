"use client";

import { useState, useEffect } from "react";
import { useScrollPosition } from "@/hooks/use-scroll-position";
import { COLORS } from "@/lib/tokens";

const NAV_ITEMS = [
	{ id: "about", label: "About" },
	{ id: "projects", label: "Projects" },
	{ id: "experience", label: "Experience" },
	{ id: "skills", label: "Skills" },
	{ id: "contact", label: "Contact" }
];

export function Nav() {
	const scrollY = useScrollPosition();
	const [activeSection, setActiveSection] = useState("hero");
	const [mobileOpen, setMobileOpen] = useState(false);

	// Lock body scroll when mobile menu is open
	useEffect(() => {
		document.body.style.overflow = mobileOpen ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [mobileOpen]);

	useEffect(() => {
		const sections = [
			"hero",
			"about",
			"projects",
			"experience",
			"skills",
			"contact"
		];
		const obs = new IntersectionObserver(
			(entries) => {
				entries.forEach((e) => {
					if (e.isIntersecting) setActiveSection(e.target.id);
				});
			},
			{ threshold: 0.35 }
		);

		sections.forEach((id) => {
			const el = document.getElementById(id);
			if (el) obs.observe(el);
		});

		return () => obs.disconnect();
	}, []);

	const scrollTo = (id: string) => {
		document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
		setMobileOpen(false);
	};

	const scrolled = scrollY > 60;

	return (
		<>
			<nav
				className="site-nav"
				style={{
					position: "fixed",
					top: 0,
					left: 0,
					right: 0,
					zIndex: 100,
					padding: "16px 40px",
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					background: scrolled ? "rgba(10,10,12,0.85)" : "transparent",
					backdropFilter: scrolled ? "blur(20px)" : "none",
					borderBottom: scrolled
						? "1px solid rgba(255,255,255,0.05)"
						: "1px solid transparent",
					transition: "all 0.3s"
				}}>
				<div
					onClick={() => scrollTo("hero")}
					style={{
						fontFamily: "'Space Mono', monospace",
						fontSize: 15,
						fontWeight: 700,
						cursor: "pointer",
						letterSpacing: "-0.03em",
						color: COLORS.cyan
					}}>
					{"{ JM }"}
				</div>

				<div className="nav-links" style={{ display: "flex", gap: 32 }}>
					{NAV_ITEMS.map((item) => (
						<button
							key={item.id}
							onClick={() => scrollTo(item.id)}
							style={{
								background: "none",
								border: "none",
								fontFamily: "'Space Mono', monospace",
								fontSize: 12,
								letterSpacing: "0.08em",
								textTransform: "uppercase",
								color: activeSection === item.id ? COLORS.cyan : COLORS.text40,
								cursor: "pointer",
								padding: "4px 0",
								borderBottom:
									activeSection === item.id
										? `1px solid ${COLORS.cyan}`
										: "1px solid transparent",
								transition: "all 0.25s"
							}}>
							{item.label}
						</button>
					))}
				</div>

				{/* Hamburger toggle (only visible ≤768px via CSS) */}
				<button
					className="mobile-menu-toggle"
					onClick={() => setMobileOpen(!mobileOpen)}
					aria-label={mobileOpen ? "Close menu" : "Open menu"}
					style={{
						display: "none",
						background: "none",
						border: `1px solid ${COLORS.borderStrong}`,
						borderRadius: 8,
						width: 40,
						height: 40,
						cursor: "pointer",
						fontFamily: "'Space Mono', monospace",
						fontSize: 18,
						color: mobileOpen ? COLORS.cyan : COLORS.textPrimary,
						alignItems: "center",
						justifyContent: "center",
						transition: "all 0.25s",
						padding: 0,
						zIndex: 110,
						position: "relative"
					}}>
					{mobileOpen ? "×" : "≡"}
				</button>
			</nav>

			{/* ── MOBILE MENU OVERLAY ── */}
			<div
				className="mobile-menu-overlay"
				style={{
					position: "fixed",
					inset: 0,
					background: "rgba(10,10,12,0.97)",
					backdropFilter: "blur(24px)",
					WebkitBackdropFilter: "blur(24px)",
					zIndex: 105,
					display: "none",
					flexDirection: "column",
					justifyContent: "center",
					padding: "0 32px",
					opacity: mobileOpen ? 1 : 0,
					pointerEvents: mobileOpen ? "auto" : "none",
					transition: "opacity 0.4s ease"
				}}>
				{/* Close button */}
				<button
					onClick={() => setMobileOpen(false)}
					aria-label="Close menu"
					style={{
						position: "absolute",
						top: 16,
						right: 20,
						background: "none",
						border: `1px solid ${COLORS.borderStrong}`,
						borderRadius: 8,
						width: 40,
						height: 40,
						cursor: "pointer",
						fontFamily: "'Space Mono', monospace",
						fontSize: 18,
						color: COLORS.cyan,
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						padding: 0,
						transition: "all 0.25s",
						zIndex: 1,
					}}>
					×
				</button>

				{/* Faint grid texture */}
				<div
					style={{
						position: "absolute",
						inset: 0,
						backgroundImage: `
              linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)
            `,
						backgroundSize: "60px 60px",
						pointerEvents: "none"
					}}
				/>

				{/* Nav links — large editorial */}
				<nav
					style={{
						position: "relative",
						display: "flex",
						flexDirection: "column",
						gap: 4
					}}>
					{NAV_ITEMS.map((item, i) => (
						<button
							key={item.id}
							onClick={() => scrollTo(item.id)}
							style={{
								background: "none",
								border: "none",
								cursor: "pointer",
								padding: "16px 0",
								textAlign: "left",
								display: "flex",
								alignItems: "baseline",
								gap: 20,
								opacity: mobileOpen ? 1 : 0,
								transform: mobileOpen ? "translateY(0)" : "translateY(20px)",
								transition: `opacity 0.5s ease ${0.1 + i * 0.06}s, transform 0.5s ease ${0.1 + i * 0.06}s`,
								borderBottom: `1px solid ${COLORS.borderSubtle}`
							}}>
							<span
								style={{
									fontFamily: "'Space Mono', monospace",
									fontSize: 11,
									color:
										activeSection === item.id ? COLORS.cyan : COLORS.text30,
									letterSpacing: "0.1em",
									fontWeight: 600,
									minWidth: 24
								}}>
								{String(i + 1).padStart(2, "0")}
							</span>
							<span
								style={{
									fontFamily: "'Playfair Display', serif",
									fontSize: 36,
									fontWeight: 600,
									color:
										activeSection === item.id
											? COLORS.textPrimary
											: "rgba(255,255,255,0.65)",
									letterSpacing: "-0.02em",
									lineHeight: 1.1
								}}>
								{item.label}
							</span>
						</button>
					))}
				</nav>

				{/* Footer info inside menu */}
				<div
					style={{
						position: "absolute",
						bottom: 40,
						left: 32,
						right: 32,
						opacity: mobileOpen ? 1 : 0,
						transition: "opacity 0.5s ease 0.5s"
					}}>
					<div
						style={{
							fontFamily: "'Space Mono', monospace",
							fontSize: 10,
							color: COLORS.text30,
							letterSpacing: "0.1em",
							textTransform: "uppercase",
							marginBottom: 6
						}}>
						// available for hire
					</div>
					<div
						style={{
							fontFamily: "'Space Mono', monospace",
							fontSize: 12,
							color: COLORS.text50
						}}>
						jhin · backend & infrastructure
					</div>
				</div>
			</div>
		</>
	);
}
