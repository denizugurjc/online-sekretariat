import H1 from "@/components/H1";
import Hr from "@/components/Hr";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div className="md:w-200">
      <div className="flex flex-row">
        <H1>Datenschutz und Privatsphäre</H1>
        <Image
          className="md:ml-8 object-contain "
          src="/os.png"
          width={80}
          height={80}
          alt=""
        />
      </div>
      <Hr />
      <div>
        <p>
          Gestützt auf Artikel 13 der schweizerischen Bundesverfassung und die
          datenschutzrechtlichen Bestimmungen des Bundes (Datenschutzgesetz,
          DSG) hat jede Person Anspruch auf Schutz ihrer Privatsphäre sowie auf
          Schutz vor Missbrauch ihrer persönlichen Daten. Wir halten diese
          Bestimmungen ein. Persönliche Daten werden streng vertraulich
          behandelt und weder an Dritte verkauft noch weitergegeben.
        </p>
        <br></br>
        <p>
          Online-Sekretariat verpflichtet sich, die ihr anvertrauten
          Kundendaten, Adressen oder Unterlagen, absolut vertraulich zu
          behandeln und ihre Teammitglieder entsprechend zu verpflichten. Diese
          Verpflichtung gilt auch über die Vertragsdauer hinaus.
        </p>
      </div>
    </div>
  );
};

export default page;
