import ParticlesBackground from "@/app/components/Background";
import PersonalData from "@/app/components/personal/PersonalData";
import WorkExperienceData from "./components/experience/WorkExperienceData";
import ProjectsData from "./components/projects/ProjectsData";
import CollegeData from "./components/college/CollegeData";
import TechnologiesData from "./components/technologies/TechnologiesData";

export default function Home() {
  return (
    <main className="w-full min-h-screen flex justify-center items-center relative">
      <ParticlesBackground />

      <section className="flex items-center justify-center py-10 px-5">
        <div className="max-w-4xl bg-white backdrop-blur-md shadow-lg rounded-lg gap-y-10 flex flex-col p-8">
          <PersonalData />
          <WorkExperienceData />
          <CollegeData />
          <TechnologiesData />
        </div>
      </section>
    </main>
  );
}

