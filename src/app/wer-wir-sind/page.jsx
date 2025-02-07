import H1 from "@/components/H1";
import H2 from "@/components/H2";

import Hr from "@/components/Hr";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <div className="flex justify-between flex-col sm:jusify-center lg:flex-row mb-8 ">
        <div>
          <Hr />
          <H1>Wir sind Ihr virtuelles Sekretariat!</H1>
          <Hr />
        </div>
        <Image
          src="/wer-wir-sind.png"
          alt="Wer wir sind"
          width={400}
          height={400}
        />
      </div>
      <div className="flex gap-4 flex-col w-200">
        <p>
          Das <strong>Online-Sekretariat</strong> ist ein inhabergeführtes,
          virtuelles Unternehmen, im tertiären Wirtschaftssektor, mit Sitz in
          Zürich.
        </p>
        <p>
          Für unsere Kunden formulieren wir bedarfsgerechte Texte und verfassen
          auf Ihre Anliegen optimierte Briefe für Ihre private Korrespondenz.
        </p>
        <p>
          Als eines der ersten Unternehmen seiner Art, hat sich das
          <strong> Online-Sekretariat </strong> auf die administrativen
          Bedürfnisse der Zielgruppe<strong> Privatpersonen </strong>
          spezialisiert und ist richtungsweisend im Markt.
        </p>
        <p>
          Die Teammitglieder sind Freelancer und arbeiten komplett im Home
          Office, somit profitieren die Kunden von den tiefen Preisen.
        </p>
      </div>
      <Hr />
      <div>
        <H1>Warum es uns braucht?</H1>
        <H2>
          Wir leben heute in einer Welt der Bürokratie und niemand kommt um sie
          herum.
        </H2>
        <p className="mb-8">
          <strong>Privathaushalten </strong> wird ein, immer anspruchsvoller
          werdender, Schriftverkehr abverlangt, welcher sie vor grossen
          Herausforderungen stellt. Mit ihren umfassenden Leistungen und den
          unschlagbaren Preisen füllt das <strong> Online-Sekretariat </strong>
          eine grosse Marktlüke.
        </p>
        <Link
          className="underline font-bold text-xl"
          href="/wer-wir-sind/erfolge"
        >
          Erfolgsgeschichten
        </Link>
      </div>
    </div>
  );
};

export default page;
