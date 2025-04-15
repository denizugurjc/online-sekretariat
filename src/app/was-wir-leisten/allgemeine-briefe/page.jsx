import H1 from "@/components/H1";
import H2 from "@/components/H2";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="w-75">
      <div className="flex justify-between flex-col md:flex-row mb-8 items-center">
        <h1 className="text-5xl mb-4">Allgemeine Briefe:</h1>
        <Image src="/allgemeine-briefe.jpg" height={300} width={300} alt="" />
      </div>
      <H2>
        Sie wollen Kündigen, Reklamieren oder eine Mietzinsreduktion beantragen?
        Wir formulieren Ihren Brief!
      </H2>
      <div className="mt-8">
        <ol className="list-disc ml-5">
          <li className="mb-2">
            <strong>Kündigungen:</strong> Wohnung, Job, Versicherungen,
            Telefongesellschaft
          </li>
          <li className="mb-2">
            <strong>Reklamationen, Beschwerden und Mängelrügen:</strong>{" "}
            Kaufverträge, Liegenschaftenverwaltung, Nachbarn
          </li>
          <li className="mb-2">
            <strong>Anträge:</strong> Mietzinsreduktionen, Prämienverbilligung
          </li>
          <li className="mb-2">
            <strong>Rechtfertigungen:</strong> privat, geschäftlich und amtlich
          </li>
        </ol>
      </div>
      <div className="flex justify-between flex-col md:flex-row mt-12 items-center">
        <p className="mb-4 md:mb-0">
          Senden Sie uns unverbindlich Ihre Anfrage und erhalten Sie innert 24h
          Antwort.
        </p>
        <Link href="/anfrage">
          <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
            Anfrage senden
          </button>
        </Link>
      </div>
    </div>
  );
};

export default page;
