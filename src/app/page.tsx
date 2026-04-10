"use client";

import { Background } from "@/components/background";
import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Projects } from "@/components/projects";
import { Experience } from "@/components/experience";
import { Skills } from "@/components/skills";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-bg text-text-primary font-body relative overflow-hidden">
      <Background />
      <Nav />
      <div className="relative z-1">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </div>
    </div>
  );
}
