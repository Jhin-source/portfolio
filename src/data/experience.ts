export interface ExperienceEntry {
	type: "work" | "education";
	company: string;
	logo: string;
	role: string;
	period: string;
	location: string;
	summary: string;
	highlights: string[];
	tech: string[];
	accent: string;
}

export const EXPERIENCE: ExperienceEntry[] = [
	{
		type: "work",
		company: "Microsoft",
		logo: "/logos/microsoft-svgrepo-com.svg",
		role: "Software Engineer II",
		period: "2024 — Present",
		location: "Remote",
		summary:
			"Backend and infrastructure engineer on the platform team, owning CI/CD orchestration and developer tooling for hundreds of engineers across multiple regions.",
		highlights: [
			"Led the redesign of PoolProvider from Azure Durable Functions to a stateless Postgres + Redis architecture, achieving 4–6× agent allocation speedup.",
			"Maintained and improved CI/CD pipelines handling thousands of concurrent jobs daily.",
			"Built internal debugging tools (Go + Tauri) to surface pipeline failure patterns and reduce incident response time."
		],
		tech: ["C#", "Python", "Azure", "Redis", "Postgres", "KQL"],
		accent: "#22d3ee"
	},
	{
		type: "work",
		company: "Microsoft",
		logo: "/logos/microsoft-svgrepo-com.svg",
		role: "Software Engineer",
		period: "2022 — 2024",
		location: "Redmond, WA",
		summary:
			"Early-career backend role focused on API development, data pipelines, and establishing engineering best practices.",
		highlights: [
			"Placeholder — describe a key project or achievement here.",
			"Placeholder — describe scope, scale, or impact here."
		],
		tech: ["C#", "Python", "SQL", "Azure"],
		accent: "#a78bfa"
	},
	{
		type: "education",
		company: "University of Connecticut",
		logo: "/logos/oak-leaf-white.png",
		role: "B.S. Computer Science",
		period: "2018, 2022",
		location: "Storrs, CT",
		summary:
			"A rigorous program in theoretical and systems-level computer science. Graduated with distinction and a taste for hard problems.",
		highlights: [
			"GPA 3.94 / 4.0.",
			"Relevant coursework: Distributed Systems, Operating Systems, Concurrency, Database Systems, Computer Networks, Compilers.",
			"Teaching Assistant for Data Structures & Algorithms (senior year). Led weekly recitations and office hours for a section of 40+ students."
		],
		tech: [],
		accent: "#f472b6"
	}
];
