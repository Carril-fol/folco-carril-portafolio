import CollegeCard from "./CollegeCard";

interface College {
  name: string;
  nameInstitution: string;
  description?: string;
  date: string;
  status: string;
}

const colleges: College[] = [
  {
    name: "Tecnicatura Superior en Desarrollo de Software",
    nameInstitution: "Instituto de Formación Técnica Superior N°4",
    status: "Finalizando",
    date: "Marzo 2023 - Actualidad"
  }
];

export default function CollegeData() {
  return (
    <div className="flex flex-col gap-y-5">
      <h2 className="text-2xl font-bold text-gray-800 ">Formación Academica</h2>

      <div className="flex flex-col">
        {colleges.map((college, index) => (
          <CollegeCard
            key={index}
            date={college.date}
            status={college.status}
            name={college.name}
            description={college.description}
            nameInstitution={college.nameInstitution}
          />
        ))}
      </div>
    </div>
  );
}