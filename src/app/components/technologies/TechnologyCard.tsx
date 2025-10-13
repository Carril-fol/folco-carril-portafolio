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
    <Card className="flex flex-col gap-y-5 rounded-md border border-gray-300 p-4 shadow-md w-full h-full">
      <CardHeader className="flex gap-x-5">
        <div className="bg-gray-200 rounded-sm p-2">
          <Icon className="text-blue-800" />
        </div>
        <div>
          <h3 className="font-semibold text-balance text-gray-900">{name}</h3>
        </div>
      </CardHeader>
      <CardBody className="flex justify-start items-start">
        <ul className="flex flex-wrap gap-2">
          {technologies.map((technology, index) => (
            <li key={index}>
              <Chip key={index} size="lg" className="bg-gray-300 rounded-md flex items-center px-2">{technology.name}</Chip>
            </li>
          ))}
        </ul>
      </CardBody>
    </Card>
  );
}