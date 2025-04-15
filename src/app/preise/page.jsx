import React from "react";
import Hr from "../../components/Hr";
import Image from "next/image";
import H1 from "@/components/H1";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <div>
        <H1>Preisliste</H1>
        <Hr />
        <p className="mb-16">
          Sie zahlen einfach und bequem per Rechnung, nach Erhalt Ihrer
          Bestellung.
        </p>
        <div className="flex flex-wrap gap-3 mb-6">
          <div className="w-1/2 flex flex-col items-start">
            <div>
              <strong>Allgemeine Briefe:</strong>
            </div>
            <p>Standartbrief, eine A4-Seite</p>
          </div>
          <span className="ml-2">CHF 19.-</span>
          <div className="w-1/2 flex flex-col items-start">
            <div>
              <strong>Allgemeine Briefe:</strong>
            </div>
            <p>Standartbrief, eine A4-Seite</p>
          </div>
          <span className="ml-2">CHF 19.-</span>
          <div className="w-1/2 flex flex-col items-start">
            <div>
              <strong>Amtliche Korrespondenz:</strong>
            </div>

            <p>Standartbrief, eine A4-Seite</p>
          </div>
          <span className="ml-2">CHF 19.-</span>
        </div>
        <p className="mb-4">Jede weitere Seite + CHF 6.-</p>

        <p className="mb-6">
          * Aufwendige Briefe mit schwierigen Texten und Recherchearbeiten bis
          zu 2 Stunden ab CHF 35.-
        </p>
      </div>
      <Hr />
      <p>
        <strong>Versand per Email</strong>: kostenlos
      </p>
      <p className="mb-8">(Wir stellen Ihnen den Brief per Email zu.)</p>
      <p>
        <strong>Versand per Email</strong>: + CHF 4.90
      </p>
      <p className="mb-3">(Wir stellen Ihnen den Brief per A-Post zu.)</p>
      <Image
        className="mb-3"
        alt=""
        src="/priceImage.jpg"
        height="250"
        width="250"
      />
      <p className="mb-4">
        Sie brauchen noch ein frankiertes Couvert mit Sichtfenster, um Ihren
        Brief weiterzuschicken? Bei Postversandbestellungen, schicken wir Ihnen
        Couvert und A-Post Briefmarke gleich mit: +CHF 1.10
      </p>

      <Hr />
      <div>
        <H1>Gestalterisches</H1>
        <div className="flex flex-wrap gap-3 mb-8">
          <div className="w-1/2 flex items-center">
            <p>Einladungen</p>
          </div>
          <span className="ml-2">CHF 19.-</span>

          <div className="w-1/2 flex items-center">
            <p>Flyer</p>
          </div>
          <span className="ml-2">CHF 39.-</span>

          <div className="w-1/2 flex items-center ">
            <p>Homepage</p>
          </div>
          <span className="ml-2">ab CHF 350.-</span>
        </div>
      </div>
      <Hr />
      <div className="mb-16">
        <H1>Anmeldung Haushalthilfe</H1>
        <table className="w-full">
          <tbody>
            <tr>
              <td>
                <p>Anmeldung Ausgleichskasse, Arbeitsvertrag, BUV</p>
              </td>
              <td className="pl-16">CHF 49.-</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Hr />
      <div className="flex justify-between flex-col md:flex-row">
        <p className="mb-4">
          Senden Sie uns unverbindlich Ihre Anfrage und erhalten Sie innert 24h
          ein Angebot.
        </p>
        <Link href="/anfrage">
          <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
            Anfrage
          </button>
        </Link>
      </div>
    </div>
  );
};

export default page;
