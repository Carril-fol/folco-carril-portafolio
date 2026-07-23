import { ProjectCard } from "./ProjectCard";

interface Project {
  name: string;
  description: string;
  technologies: string[];
  url: string;
}

const projects: Project[] = [
  {
    name: "Stock Management API",
    description:
      "API REST multi-tenant para gestión de inventario. Cada empresa administra sus propios productos, categorías, stock y usuarios mediante un sistema de control de acceso basado en roles (RBAC).",
    technologies: ["Python", "Flask", "PostgreSQL", "Docker"],
    url: "https://github.com/Carril-fol/stock-management-api",
  },
  {
    name: "Luzia API",
    description:
      "API REST para una plataforma de blogging. Implementa Clean Architecture con capas separadas, autenticación JWT, caché con Redis y CRUD completo de publicaciones.",
    technologies: ["Python", "Flask", "MySQL", "Redis", "Docker"],
    url: "https://github.com/Carril-fol/luzia-api",
  },
  {
    name: "Project Board API",
    description:
      "API REST para una plataforma de gestión de proyectos donde los usuarios pueden unirse a proyectos existentes y colaborar en su desarrollo.",
    technologies: ["Python", "FastAPI", "PostgreSQL", "Docker"],
    url: "https://github.com/Carril-fol/project-board-api",
  },
];

export default function ProjectsData() {
  return (
    <div className="flex flex-col gap-y-5">
      <h2 className="text-2xl font-bold text-[#e2e8f0]">Proyectos</h2>

      <div className="flex flex-col gap-y-4">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            name={project.name}
            description={project.description}
            technologies={project.technologies}
            url={project.url}
          />
        ))}
      </div>
    </div>
  );
}
