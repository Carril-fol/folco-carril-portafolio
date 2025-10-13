"use client";

import React, { type SVGProps } from "react";
import { Code, Box, Database, Cloud } from "lucide-react";
import { SiPython, SiPhp, SiTypescript, SiNextdotjs, SiFlask, SiDjango, SiPostgresql, SiMysql, SiMongodb, SiDocker, SiReact } from "react-icons/si";

import TechnologyCard from "./TechnologyCard";

interface Technology {
  icon: React.FC<SVGProps<SVGSVGElement>>;
  name: string;
}

const programingLanguages: Technology[] = [
  { icon: SiPython, name: "Python" },
  { icon: SiPhp, name: "PHP" },
  { icon: SiTypescript, name: "TypeScript" },
];

const frameworks: Technology[] = [
  { icon: SiNextdotjs, name: "Next.js" },
  { icon: SiReact, name: "React" },
  { icon: SiFlask, name: "Flask" },
  { icon: SiDjango, name: "Django" }
];

const databases: Technology[] = [
  { icon: SiPostgresql, name: "PostgreSQL" },
  { icon: SiMysql, name: "MySQL" },
  { icon: SiMongodb, name: "MongoDB" }
];

const cloud: Technology[] = [
  { icon: SiDocker, name: "Docker" }
];

export default function TechnologiesData() {
  return (
    <div className="flex flex-col gap-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Habilidades Técnicas</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <TechnologyCard icon={Code} name="Lenguajes" technologies={programingLanguages} />
        <TechnologyCard icon={Box} name="Frameworks" technologies={frameworks} />
        <TechnologyCard icon={Database} name="Bases de datos" technologies={databases} />
        <TechnologyCard icon={Cloud} name="Cloud" technologies={cloud} />
      </div>
    </div>
  );
}
