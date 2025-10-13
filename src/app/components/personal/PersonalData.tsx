import Image from "next/image";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { MapPin, Mail } from "lucide-react";

import { ContactInformation } from "./ContactInformation";

export default function PersonalData() {
  return (
    <div className="flex items-center gap-6">

      <div className="flex flex-col w-full gap-y-5">
        <div className="flex justify-between items-start w-full">
          {/* Left div with information */}
          <div className="flex gap-x-5">
            {/* Image profile*/}
            <div className="relative w-32 h-32 rounded-xl overflow-hidden shadow-md">
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
                <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
                  Folco Carril
                </h1>
                <p className="text-lg text-gray-600 mt-1">Backend Developer</p>
              </div>

              <div className="mt-4 flex gap-4">
                <a
                  href="https://github.com/"
                  className="text-gray-500 hover:text-black transition-colors"
                >
                  <GitHubLogoIcon className="w-6 h-6" />
                </a>
                <a
                  href="https://linkedin.com/"
                  className="text-gray-500 hover:text-blue-600 transition-colors"
                >
                  <LinkedInLogoIcon className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Right div with location */}
          <div className="flex flex-col gap-y-2">
            <ContactInformation
              icon={MapPin}
              text="Buenos Aires, Argentina"
            />

            <ContactInformation
              icon={Mail}
              text="folco.carril@gmail.com"
            />
          </div>
        </div>

        <p className="text-gray-700 max-w-4xl leading-relaxed">
          Soy un desarrollador back-end apasionado por la tecnología.
          Actualmente busco mi primera oportunidad laboral y seguir creciendo dentro del mundo del desarrollo.
        </p>
      </div>
    </div>
  );
}