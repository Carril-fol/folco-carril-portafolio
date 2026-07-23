import Image from "next/image";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { MapPin, Mail } from "lucide-react";

import { ContactInformation } from "./ContactInformation";

export default function PersonalData() {
  return (
    <div className="flex items-center gap-6">
      <div className="flex flex-col w-full gap-y-5">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start w-full gap-y-4">
          {/* Left div with information */}
          <div className="flex gap-x-5">
            {/* Image profile*/}
            <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-xl overflow-hidden shadow-md shrink-0">
              <Image
                src="/images/profile.webp"
                alt="Foto de perfil Folco Carril"
                fill
                className="object-cover"
              />
            </div>

            {/* Name and social medias */}
            <div className="flex flex-col">
              <div className="flex flex-col">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-1">
                  <h1 className="text-2xl sm:text-4xl font-bold text-[#e2e8f0] tracking-tight">
                    Folco Carril
                  </h1>
                  <span className="flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/25">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Disponible
                  </span>
                </div>
                <p className="text-base sm:text-lg text-[#94a3b8]">
                  Backend Developer
                </p>
              </div>

              <div className="mt-4 flex gap-4">
                <a
                  href="https://github.com/Carril-fol"
                  className="text-[#94a3b8] hover:text-white transition-colors"
                >
                  <GitHubLogoIcon className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/folco-carril/"
                  className="text-[#94a3b8] hover:text-indigo-400 transition-colors"
                >
                  <LinkedInLogoIcon className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Right div with location */}
          <div className="flex flex-row sm:flex-col gap-x-4 gap-y-2">
            <ContactInformation icon={MapPin} text="Buenos Aires, Argentina" />

            <ContactInformation icon={Mail} text="folco.carril@gmail.com" />
          </div>
        </div>

        <p className="text-[#94a3b8] max-w-4xl leading-relaxed">
          Soy un desarrollador back-end apasionado por la tecnología.
          Actualmente busco mi primera oportunidad laboral y seguir creciendo
          dentro del mundo del desarrollo.
        </p>
      </div>
    </div>
  );
}
