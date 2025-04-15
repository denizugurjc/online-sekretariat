import H1 from "@/components/H1";
import H2 from "@/components/H2";
import Hr from "@/components/Hr";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="flex flex-row">
        <H1>Vorgehensweise</H1>
        <Image className="ml-8" src="/os.png" width={65} height={65} alt="" />
      </div>
      <Hr />
      <div>
        <H2>
          Sie sind nur <strong>3 Schritte</strong> von Ihrem Brief entfernt!
        </H2>
        <ol className="mt-8">
          <li className="mb-2 ">
            <strong>Schritt 1:</strong> Sie senden uns unverbindlich eine
            Anfrage. Nutzen Sie unser Anfrageformular.
          </li>
          <li className="mb-2">
            <strong>Schritt 2:</strong> Wir bestätigen Ihnen innerhalb 24h, dass
            wir Ihren Auftrag annehmen. Erstellen Ihnen den Gesamtpreis für Ihre
            Bestellung und bitten Sie um die notwenigen Angaben für Ihre
            Korrespondenz.
          </li>
          <li className="mb-2">
            <strong>Schritt 3:</strong> Sie erteilen uns einen Auftrag, indem
            Sie uns Ihre Angaben übermitteln. Wir versenden Ihren Brief innert
            48h. Postversand +1-2 Tage
          </li>
        </ol>
      </div>
      <div className="flex justify-center mt-8">
        <Link href="/anfrage">
          <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 mb-4 md:mb-0 rounded shadow-lg w-100 h-16 transition duration-300 ease-in-out transform hover:scale-105">
            Brief bestellen
          </button>
        </Link>
      </div>
      <div>
        <H1>Zahlungsmöglichkeiten</H1>
        <Hr />
        <p className="mb-4">
          Zahlen Sie einfach und bequem per Rechnung, nach Erhalt Ihrer
          Bestellung. Sie erhalten unsere Rechnung elektronisch per E-Mail.
        </p>
        <ol className="list-disc ml-5">
          <li>E-Banking</li>
          <li>PostFinance</li>
          <li>PayPal</li>
          <li>Postschalter</li>
        </ol>
      </div>
    </div>
  );
};

export default page;
