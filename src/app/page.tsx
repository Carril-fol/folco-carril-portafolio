import { Divider } from "@heroui/divider";

import ParticlesBackground from "@/app/components/Background";
import AnimatedSection from "@/app/components/AnimatedSection";
import PersonalData from "@/app/components/personal/PersonalData";
import WorkExperienceData from "./components/experience/WorkExperienceData";
import ProjectsData from "./components/projects/ProjectsData";
import CollegeData from "./components/college/CollegeData";
import TechnologiesData from "./components/technologies/TechnologiesData";

export default function Home() {
  return (
    <main className="w-full min-h-screen flex justify-center items-center relative">
      <ParticlesBackground />

      <section className="flex items-center justify-center py-6 px-3 sm:py-10 sm:px-5">
        <div className="max-w-6xl w-full bg-[#18181b] border border-black/10 shadow-xl shadow-black/40 rounded-xl gap-y-10 flex flex-col p-5 sm:p-8">
          <AnimatedSection delay={0}>
            <PersonalData />
          </AnimatedSection>

          <Divider className="bg-white/10" />

          <AnimatedSection delay={0.1}>
            <WorkExperienceData />
          </AnimatedSection>

          <Divider className="bg-white/10" />

          <AnimatedSection delay={0.1}>
            <ProjectsData />
          </AnimatedSection>

          <Divider className="bg-white/10" />

          <AnimatedSection delay={0.1}>
            <CollegeData />
          </AnimatedSection>

          <Divider className="bg-white/10" />

          <AnimatedSection delay={0.1}>
            <TechnologiesData />
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
