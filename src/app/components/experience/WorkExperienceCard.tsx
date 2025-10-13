"use client";

import { Chip } from "@heroui/chip";
import { Card, CardHeader, CardBody } from "@heroui/card";

interface WorkExperienceCardProps {
  key: number;
  role: string;
  date: string;
  nameCompany: string;
  description: string;
  technologies: string[];
}

export const WorkExperienceCard = ({ key, role, date, nameCompany, description, technologies }: WorkExperienceCardProps) => {
  return (
    <Card key={key} className="flex flex-col bg-white border border-gray-300 rounded-md p-5 shadow-md" isHoverable={true}>
      <CardHeader className="flex flex-col gap-3">
        <div className="flex justify-between w-full">
          <h3 className="text-balance font-semibold text-gray-700">{role}</h3>
          <span className="text-sm text-muted-foreground text-gray-600">{date}</span>
        </div>
        <div className="flex w-full">
          <p className="text-base font-medium text-gray-900">{nameCompany}</p>
        </div>
      </CardHeader>
      <CardBody className="flex flex-col gap-y-5">
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