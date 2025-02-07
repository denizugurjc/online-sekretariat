import H1 from "@/components/H1";
import Hr from "@/components/Hr";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <Hr />
      <div>
        <H1>Übersicht Dienstleistungen</H1>
      </div>
      <Hr />
      <p className="mb-8">
        Die administrativen Bedürfnisse der <strong>Privathaushalte</strong>
        sind sehr vielfältig. Wir entlasten Sie in allen Bereichen.
      </p>
      <div className="flex gap-4 flex-col">
        <div>
          <Link
            className="underline font-bold text-xl text-blue-800"
            href="/was-wir-leisten/allgemeine-briefe"
          >
            Allgemeine Briefe:
          </Link>
          <p>
            Kündigungen, Rechtfertigungen, Anträge, Mängelrügen, Reklamationen,
            Beschwerden
          </p>
        </div>
        <div>
          <Link
            className="underline font-bold text-xl text-blue-800"
            href="/was-wir-leisten/personliche-anliegen"
          >
            Persönliche Anliegen:
          </Link>
          <p>
            Einladungen, Dankesbriefe, Gratulationen, Entschuldigungen,
            Liebesbriefe
          </p>
        </div>
        <div>
          <Link
            className="underline font-bold text-xl text-blue-800"
            href="/was-wir-leisten/amtliche-korrespond"
          >
            Amtliche Korrespondenz:
          </Link>
          <p>SVA, Prämienverbilligung, RAV, Sozialzentren, IPV</p>
        </div>
      </div>
    </div>
  );
};

export default page;
