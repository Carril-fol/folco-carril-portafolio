"use client";

import Image from "next/image";
import { Card, CardHeader } from "@heroui/card";

interface CollegeCardProps {
  key: number;
  name: string;
  image: string;
  nameInstitution: string;
  description?: string;
  date: string;
  status: string;
}

export default function CollegeCard({
  key,
  name,
  nameInstitution,
  image,
  date,
  status,
}: CollegeCardProps) {
  return (
    <Card
      key={key}
      className="group flex flex-col gap-y-5 rounded-md border border-white/10 bg-[#1e1b2e]/60 p-4 shadow-md w-full h-full transition-all duration-300 hover:bg-white-950 hover:border-indigo-700/40 hover:shadow-xl hover:shadow-indigo-950/50"
      isHoverable={false}
    >
      <CardHeader className="flex gap-x-5">
        <div className="flex flex-col sm:flex-row sm:justify-between gap-x-3 p-2 w-full gap-y-3">
          <div className="flex gap-x-5">
            <div className="bg-indigo-950/70 p-2 rounded-sm flex items-center h-fit w-fit transition-colors duration-300 group-hover:bg-indigo-800">
              <Image
                src={image}
                width={26}
                height={26}
                alt="Imagèn del logo del instituto"
              />
            </div>
            <div className="flex flex-col">
              <h3 className="text-balance font-semibold text-[#e2e8f0] transition-colors duration-300 group-hover:text-white">
                {name}
              </h3>
              <p className="text-balance font-semibold text-[#94a3b8] transition-colors duration-300 group-hover:text-slate-300">
                {nameInstitution}
              </p>
            </div>
          </div>
          <div className="flex flex-row sm:flex-col justify-start sm:justify-center items-end gap-x-4 gap-y-2 text-right">
            <span className="text-sm text-[#94a3b8] transition-colors duration-300 group-hover:text-indigo-300">
              {date}
            </span>
            <span className="text-sm text-indigo-400 transition-colors duration-300 group-hover:text-indigo-300">
              {status}
            </span>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
}
