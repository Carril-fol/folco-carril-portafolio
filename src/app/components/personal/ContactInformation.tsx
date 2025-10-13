import React, { type SVGProps } from "react";

interface ContactInformationProps {
  icon: React.FC<SVGProps<SVGSVGElement>>;
  text: string;
}

export const ContactInformation: React.FC<ContactInformationProps> = ({ text, icon: Icon }) => {
  return (
    <div className="flex items-center gap-2 mt-1">
      <Icon className="text-gray-600 w-[15] h-[15]" />
      <span className="text-sm font-bold text-gray-500">{text}</span>
    </div>
  );
};