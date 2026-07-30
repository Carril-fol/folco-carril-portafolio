import { WorkExperienceCard } from "./WorkExperienceCard";

interface Experiencie {
  role: string;
  date: string;
  nameCompany: string;
  description: string;
  technologies: string[];
  url?: string;
}

const experiencies: Experiencie[] = [
  {
    role: "Desarrollador FullStack",
    date: "Julio 2025 - Septiembre 2025",
    nameCompany: "Roberto Ottaviani",
    description: "Sitio web para un productor de seguros profesional que presenta los servicios disponibles por categoría (particulares, profesionales y empresas) y cuenta con un formulario de contacto para que los clientes soliciten cotizaciones.",
    technologies: ["TypeScript", "Next.js", "Tailwind CSS", "PostgreSQL"],
    url: "https://www.ottaviani-seguros.com/",
  }
];


function showWorkExperience(experiencies: Experiencie[]) {
  return (
    experiencies.map((experiencie, index) => (
      <WorkExperienceCard
        key={index}
        role={experiencie.role}
        date={experiencie.date}
        nameCompany={experiencie.nameCompany}
        description={experiencie.description}
        technologies={experiencie.technologies}
        url={experiencie.url}
      />
    ))
  );
}

export default function WorkExperienceData() {
  return (
    <div className="flex flex-col gap-y-5">
      <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-indigo-400 bg-clip-text text-transparent">Experiencias Profesional</h2>

      <div className="flex flex-col">
        {showWorkExperience(experiencies)}
      </div>
    </div>
  );
}
