import React, { type SVGProps } from "react";

interface ContactInformationProps {
  icon: React.FC<SVGProps<SVGSVGElement>>;
  text: string;
}

export const ContactInformation: React.FC<ContactInformationProps> = ({ text, icon: Icon }) => {
  return (
    <div className="flex items-center gap-2 mt-1">
      <Icon className="text-[#94a3b8] w-4 h-4" />
      <span className="text-sm font-medium text-[#94a3b8]">{text}</span>
    </div>
  );
};