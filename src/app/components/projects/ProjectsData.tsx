import { ProjectCard } from "./ProjectCard";

interface Project {
  name: string;
  description: string;
  technologies: string[];
}

const projects: Project[] = [];


export default function ProjectsData() {
  return (
    <div className="flex flex-col gap-y-5">
      <h2 className="text-2xl font-bold text-gray-800 ">Proyectos</h2>

      <div className="flex flex-col">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            name={project.name}
            description={project.description}
            technologies={project.technologies}
          />
        ))}
      </div>
    </div>
  );
}
