import React from "react";
import H2 from "@/components/H2";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div className="w-75">
      <div className="flex justify-between mb-8 flex-col md:flex-row items-center">
        <h1 className="text-5xl mb-4">Persönliche Anliegen:</h1>
        <Image
          src="/personliche-angliegen.jpg"
          height={300}
          width={300}
          alt=""
        />
      </div>
      <H2>
        Ob Geburtstagseinladungen, Entschuldigungen oder Liebesbriefe, wir
        finden immer die richtigen Worte!
      </H2>
      <div className="mt-8">
        <ol className="list-disc ml-5 mb-8">
          <li className="mb-2">
            <strong>Einladungen:</strong> Geburtstage, Feier, Besuche
          </li>
          <li className="mb-2">
            <strong>Dankesbriefe:</strong> Freunde, Geschenke
          </li>
          <li className="mb-2">
            <strong>Gratulationen:</strong>Beförderung, Vermählung, Geburt
          </li>
          <li className="mb-2">
            <strong>Entschuldigungen:</strong>Nachbarn, Familie, Kollegen
          </li>
          <li className="mb-2">
            <strong>Liebesbriefe: </strong> Paare, Verliebte, Eheleute
          </li>
        </ol>
        <strong>Gestaltung von:</strong>
        <br />
        <p>Einladungen, Visitenkarten, Flyer, Homepage</p>
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
