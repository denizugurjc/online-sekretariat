import React from "react";
import H2 from "@/components/H2";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div className="w-75">
      <div className="flex justify-between flex-col md:flex-row mb-8 items-center">
        <h1 className="md:text-5xl text-4xl mb-4">Amtliche Korrespondenz:</h1>
        <Image
          src="/amtliche-korrespondenz.jpg"
          height={300}
          width={300}
          alt=""
        />
      </div>
      <H2>
        Der Schriftverkehr mit den Ämtern kann sehr anspruchsvoll sein, wir
        helfen Ihnen weiter!
      </H2>
      <div className="mt-8">
        <ol className="list-disc ml-5 mb-8">
          <li className="mb-2">
            <strong>SVA:</strong> Sozial-Versicherungs-Anstalt
          </li>
          <li className="mb-2">
            <strong>RAV:</strong> Regionale Arbeitsvermittlung
          </li>
          <li className="mb-2">
            <strong>IPV:</strong> Individuelle Prämienverbilligung
          </li>
          <li className="mb-2">
            <strong>Sozialzentren:</strong> Sozialbehörde
          </li>
          <li className="mb-2">
            <strong>Friedensrichteramt</strong>
          </li>
          <li className="mb-2">
            <strong>Ombudsstelle</strong>
          </li>
        </ol>
        <strong>Wir legalisieren Ihre Putzfrau:</strong>
        <br />
        <p>
          Von der Anmeldung bei der Ausgleichskasse bis hin zum Arbeitsvertrag
        </p>
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
