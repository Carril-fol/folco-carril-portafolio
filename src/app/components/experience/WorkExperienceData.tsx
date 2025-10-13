import { WorkExperienceCard } from "./WorkExperienceCard";

interface Experiencie {
  role: string;
  date: string;
  nameCompany: string;
  description: string;
  technologies: string[];
}

const experiencies: Experiencie[] = [
  {
    role: "Desarrollador FullStack",
    date: "Julio 2025 - Septiembre 2025",
    nameCompany: "Roberto Ottaviani",
    description: "Aplicación orientada a optimizar el proceso de cotización de seguros. Permite registrar consultas de clientes y organizar la información para que el productor de seguros gestione las cotizaciones de forma más ágil y eficiente.",
    technologies: ["TypeScript", "Next.js", "Tailwind CSS", "PostgreSQL"]
  }
];


export default function WorkExperienceData() {
  return (
    <div className="flex flex-col gap-y-5">
      <h2 className="text-2xl font-bold text-gray-800 ">Experiencias Profesional</h2>

      <div className="flex flex-col">
        {experiencies.map((experiencie, index) => (
          <WorkExperienceCard
            key={index}
            role={experiencie.role}
            date={experiencie.date}
            nameCompany={experiencie.nameCompany}
            description={experiencie.description}
            technologies={experiencie.technologies}
          />
        ))}
      </div>
    </div>
  );
}
