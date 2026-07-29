"use client";

import { type LucideIcon } from "lucide-react";
import { Technologies } from "@/app/components/common/Technonologies";
import { Card, CardHeader, CardBody } from "@heroui/card";

interface TechnologyCardProps {
  name: string;
  icon: LucideIcon;
  technologies: string[];
}

export default function TechnologyCard({ name, icon: Icon, technologies }: TechnologyCardProps) {
  return (
    <Card
      className="
        group flex flex-col
        gap-y-5 rounded-md
        border border-white/10
        bg-zinc-800/30
        p-4 shadow-md
        w-full h-full
        transition-all duration-300
        hover:shadow-2xl
        hover:shadow-indigo-900/50
        hover:scale-[1.01]
      "
      isHoverable={false}
    >
      <CardHeader className="flex items-center gap-x-3">
        <div className="flex items-center justify-center rounded-md bg-indigo-950/60 p-2 transition-colors duration-300 group-hover:bg-indigo-500/20">
          <Icon
            className="h-5 w-5 text-indigo-300 transition-colors duration-300 group-hover:text-indigo-200"
            aria-hidden="true"
          />
        </div>
        <h3 className="font-semibold text-balance text-[#e2e8f0] transition-colors duration-300 group-hover:text-white">
          {name}
        </h3>
      </CardHeader>

      <CardBody className="flex justify-start items-start">
        <div className="flex flex-wrap gap-2">
          <Technologies
            technologies={technologies}
          />
        </div>
      </CardBody>
    </Card>
  );
}