"use client";

import { FadeIn } from "./fade-in";
import { SectionHeader } from "./section-header";
import { ExperienceCard } from "./experience-card";
import { EXPERIENCE } from "@/data/experience";
import { COLORS, SECTION_ACCENTS } from "@/lib/tokens";

export function Experience() {
	return (
		<section id="experience" style={{ padding: "120px 10%", maxWidth: 1140 }}>
			<FadeIn>
				<SectionHeader
					number="03"
					label="Experience"
					accentColor={SECTION_ACCENTS.experience}
				/>
			</FadeIn>

			<FadeIn delay={0.1}>
				<h2
					style={{
						fontFamily: "'Playfair Display', serif",
						fontSize: 36,
						fontWeight: 600,
						marginBottom: 12,
						letterSpacing: "-0.02em"
					}}>
					Where I&apos;ve Been
				</h2>
				<p
					style={{
						fontSize: 15,
						color: COLORS.text40,
						marginBottom: 48,
						maxWidth: 500
					}}>
					Professional experience and education — click to expand details.
				</p>
			</FadeIn>

			{EXPERIENCE.map((e, i) => (
				<ExperienceCard key={i} entry={e} index={i} />
			))}
		</section>
	);
}
