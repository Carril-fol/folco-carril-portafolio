import Image from "next/image";
import { Card, CardHeader } from "@heroui/card";

interface CollegeCardProps {
  key: number;
  name: string;
  nameInstitution: string;
  description?: string;
  date: string;
  status: string;
}

export default function CollegeCard({ key, name, nameInstitution, date, status }: CollegeCardProps) {
  return (
    <Card key={key} className="flex flex-col gap-y-5 rounded-md border border-gray-300 p-4 shadow-md w-full h-full">
      <CardHeader className="flex gap-x-5">
        <div className="flex justify-between gap-x-3 p-2 w-full">
          <div className="flex gap-x-5">
            <div className="bg-gray-200 p-2 rounded-sm flex items-center h-fit w-fit">
              <Image
                src="/images/logo-ifts.webp"
                width={26}
                height={26}
                alt="Imagèn del logo del instituto"
              />
            </div>
            <div className="flex flex-col">
              <h3 className="text-balance font-semibold text-gray-700">{name}</h3>
              <p className="text-balance font-semibold text-gray-500">{nameInstitution}</p>
            </div>
          </div>
          <div className="flex flex-col justify-start gap-y-2">
            <span className="text-sm text-gray-600">{date}</span>
            <span className="text-sm text-gray-600">{status}</span>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
};