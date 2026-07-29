"use client";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@heroui/button";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Technologies } from "@/app/components/common/Technonologies";

import { GitHubLogoIcon } from "@radix-ui/react-icons";

interface ProjectCardProps {
  owner: string;
  repo: string;
  name: string;
  description: string;
  technologies: string[];
  url: string;
}

export const ProjectCard = ({
  owner,
  repo,
  name,
  description,
  technologies,
  url
}: ProjectCardProps) => {
  return (
    <Card
      className="
        group
        overflow-hidden
        border border-white/10
        bg-zinc-800/30
        transition-all
        duration-300
        hover:border-indigo-500/40
        hover:shadow-xl
        hover:shadow-indigo-950/30
        hover:scale-[1.01]
        rounded-2xl
      "
    >
      <CardHeader className="relative p-0">
        <Image
          src={`https://opengraph.githubassets.com/1/${owner}/${repo}`}
          alt={name}
          width={1200}
          height={630}
          priority={false}
          className="w-full"
        />
      </CardHeader>

      <CardBody className="flex flex-1 flex-col p-6 gap-5">
        <div>
          <h3 className="text-2xl font-bold text-white">{name}</h3>

          <p className="mt-3 text-zinc-400 leading-relaxed">
            {description}
          </p>
        </div>

        <div className="mt-auto flex flex-wrap gap-2">
          <Technologies
            technologies={technologies}
          />
        </div>
      </CardBody>

      <CardFooter className="px-6 pb-6 pt-0">
        <Button
          as={Link}
          href={url}
          className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-xl flex justify-center items-center p-2 transition 120 "
          startContent={<GitHubLogoIcon />}
        >
          Ver en GitHub
        </Button>
      </CardFooter>
    </Card>
  );
};