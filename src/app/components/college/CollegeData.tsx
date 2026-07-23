import CollegeCard from "./CollegeCard";

interface College {
  name: string;
  image: string;
  nameInstitution: string;
  description?: string;
  date: string;
  status: string;
}

const colleges: College[] = [
  {
    name: "Tecnicatura Superior en Desarrollo de Software",
    image: "/images/logo-ifts.webp",
    nameInstitution: "Instituto de Formación Técnica Superior N°4",
    status: "Finalizando",
    date: "Marzo 2023 - Actualidad",
  },
  {
    name: "Licenciatura en Tecnologías de la Información",
    image: "/images/logo-up.webp",
    nameInstitution: "Universidad de Palermo",
    status: "Estudiando",
    date: "Agosto 2026 - Actualidad",
  },
];

export default function CollegeData() {
  return (
    <div className="flex flex-col gap-y-5">
      <h2 className="text-2xl font-bold text-[#e2e8f0]">Formación Academica</h2>

      <div className="flex flex-col gap-y-4">
        {colleges.map((college, index) => (
          <CollegeCard
            key={index}
            date={college.date}
            status={college.status}
            name={college.name}
            image={college.image}
            description={college.description}
            nameInstitution={college.nameInstitution}
          />
        ))}
      </div>
    </div>
  );
}
