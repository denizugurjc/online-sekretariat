import H1 from "@/components/H1";
import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className="bg-white">
      <div className="ml-4">
        <H1 className="mt-4">Teammitglieder</H1>
        <p className="w-200 mb-8">
          Die Geschäftsleitung ist die direkte Ansprechperson der Kunden, sowie
          der Teammitglieder. Als Dreh- und Angelpunkt beantwortet sie die
          Kundenanfragen, verteilt unter den Teammitgliedern die Aufträge und
          führt alle Endkontrollen durch.
        </p>
        <Image src="/team-pic.png" width={800} height={800} alt="" />
      </div>
    </div>
  );
};

export default page;
