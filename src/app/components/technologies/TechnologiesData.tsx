"use client";

import { Code, Box, Database, Cloud, type LucideIcon } from "lucide-react";
import TechnologyCard from "./TechnologyCard";

interface TechCategory {
  name: string;
  icon: LucideIcon;
  technologies: string[];
}

const techCategories: TechCategory[] = [
  { name: "Lenguajes", icon: Code, technologies: ["Python", "PHP", "TypeScript"] },
  { name: "Frameworks", icon: Box, technologies: ["Next.js", "Flask", "FastAPI", "Django"] },
  { name: "Bases de datos", icon: Database, technologies: ["PostgreSQL", "MySQL", "MongoDB"] },
  { name: "Cloud", icon: Cloud, technologies: ["Docker"] },
];

export default function TechnologiesData() {
  return (
    <div className="flex flex-col gap-y-6">
      <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-indigo-400 bg-clip-text text-transparent">Habilidades Técnicas</h2>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {techCategories.map((category) => (
          <TechnologyCard key={category.name} {...category} />
        ))}
      </div>
    </div>
  );
}