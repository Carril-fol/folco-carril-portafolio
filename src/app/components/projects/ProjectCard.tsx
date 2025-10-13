"use client";

import { Chip } from "@heroui/chip";
import { Card, CardHeader, CardBody } from "@heroui/card";

interface ProjectCardProps {
  key: number;
  name: string;
  description: string;
  technologies: string[];
}

export const ProjectCard = ({ key, name, description, technologies }: ProjectCardProps) => {
  return (
    <Card key={key} className="flex flex-col gap-y-2 bg-white border border-gray-300 rounded-md p-5 shadow-lg" isHoverable={true}>
      <CardHeader className="flex flex-col">
        <div className="flex justify-start w-full">
          <h3 className="text-balance font-semibold text-gray-700">{name}</h3>
        </div>
      </CardHeader>
      <CardBody className="flex flex-col gap-y-3">
        <p className="text-gray-600 leading-relaxed text-pretty">{description}</p>
        <div className="flex flex-wrap gap-2 text-sm">
          {technologies.map((technology, index) => (
            <Chip key={index} size="lg" className="bg-gray-300 rounded-md flex items-center px-2">{technology}</Chip>
          ))}
        </div>
      </CardBody>
    </Card>
  );
};