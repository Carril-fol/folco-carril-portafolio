import { Chip } from "@heroui/chip";

interface Technologies {
  technologies: string[]
}

export const Technologies = ({ technologies }: Technologies) => {
  return technologies.map((technology, index) => (
    <Chip
      key={index}
      size="lg"
      className="
      bg-indigo-900/40 
      text-indigo-300
        rounded-md 
        flex items-center 
        px-2 transition-all 
        duration-300 
        group-hover:bg-indigo-700/60 
        group-hover:text-indigo-200
      "
    >
      {technology}
    </Chip>
  ));
}