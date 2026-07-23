"use client";

import { Chip } from "@heroui/chip";
import { Card, CardHeader, CardBody } from "@heroui/card";
import { ExternalLink } from "lucide-react";

interface WorkExperienceCardProps {
  key: number;
  role: string;
  date: string;
  nameCompany: string;
  description: string;
  technologies: string[];
  url?: string;
}

export const WorkExperienceCard = ({ key, role, date, nameCompany, description, technologies, url }: WorkExperienceCardProps) => {
  return (
    <Card
      key={key}
      className="group flex flex-col bg-[#1e1b2e]/60 border border-white/10 rounded-md p-5 shadow-md transition-all duration-300 hover:bg-indigo-950 hover:border-indigo-700/40 hover:shadow-xl hover:shadow-indigo-950/50"
      isHoverable={false}
    >
      <CardHeader className="flex flex-col gap-3">
        <div className="flex flex-col sm:flex-row sm:justify-between w-full gap-y-1">
          <h3 className="text-balance font-semibold text-[#e2e8f0] transition-colors duration-300 group-hover:text-white">{role}</h3>
          <span className="text-sm text-[#94a3b8] transition-colors duration-300 group-hover:text-indigo-300">{date}</span>
        </div>
        <div className="flex items-center justify-between w-full">
          <p className="text-base font-medium text-[#e2e8f0] transition-colors duration-300 group-hover:text-white">{nameCompany}</p>
          {url && (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#94a3b8] transition-colors duration-300 group-hover:text-slate-300 hover:!text-white"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </CardHeader>
      <CardBody className="flex flex-col gap-y-5">
        <p className="text-[#94a3b8] leading-relaxed text-pretty transition-colors duration-300 group-hover:text-slate-300">{description}</p>
        <div className="flex flex-wrap gap-2 text-sm">
          {technologies.map((technology, index) => (
            <Chip
              key={index}
              size="lg"
              className="bg-indigo-900/40 text-indigo-300 rounded-md flex items-center px-2 transition-all duration-300 group-hover:bg-indigo-700/60 group-hover:text-indigo-200"
            >
              {technology}
            </Chip>
          ))}
        </div>
      </CardBody>
    </Card>
  );
};
