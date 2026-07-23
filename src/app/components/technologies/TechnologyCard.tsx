"use client";

import React, { type SVGProps } from "react";
import { Card, CardHeader, CardBody } from "@heroui/card";
import { Chip } from "@heroui/chip";

interface Technology {
  icon: React.FC<SVGProps<SVGSVGElement>>;
  name: string;
}

interface TechnologyCardProps {
  icon: React.FC<SVGProps<SVGSVGElement>>;
  name: string;
  technologies: Technology[];
}

export default function TechnologyCard({ icon: Icon, name, technologies }: TechnologyCardProps) {
  return (
    <Card
      className="group flex flex-col gap-y-5 rounded-md border border-white/10 bg-[#1e1b2e]/60 p-4 shadow-md w-full h-full transition-all duration-300 hover:bg-indigo-950 hover:border-indigo-700/40 hover:shadow-xl hover:shadow-indigo-950/50"
      isHoverable={false}
    >
      <CardHeader className="flex gap-x-5">
        <div className="bg-indigo-950/70 rounded-sm p-2 transition-colors duration-300 group-hover:bg-indigo-800">
          <Icon className="text-indigo-400 transition-colors duration-300 group-hover:text-indigo-300" />
        </div>
        <div>
          <h3 className="font-semibold text-balance text-[#e2e8f0] transition-colors duration-300 group-hover:text-white">{name}</h3>
        </div>
      </CardHeader>
      <CardBody className="flex justify-start items-start">
        <ul className="flex flex-wrap gap-2">
          {technologies.map((technology, index) => (
            <li key={index}>
              <Chip
                key={index}
                size="lg"
                className="bg-indigo-900/40 text-indigo-300 rounded-md flex items-center px-2 transition-all duration-300 group-hover:bg-indigo-700/60 group-hover:text-indigo-200"
              >
                {technology.name}
              </Chip>
            </li>
          ))}
        </ul>
      </CardBody>
    </Card>
  );
}
