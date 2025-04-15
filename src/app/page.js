import Image from "next/image";
import Hr from "../components/Hr";
import H1 from "@/components/H1";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="text-center">
        <H1>Das Online-Sekretariat für Privatpersonen</H1>
        <Hr />
      </div>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Left Content */}
        <div>
          <Image
            height={300}
            width={500}
            src="/homepageBild.jpg"
            alt="Office"
            className="rounded-lg w-full"
          />
        </div>

        {/* Right Content */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">
            Wir schreiben Ihre Briefe, bereits ab{" "}
            <span className="text-blue-500">CHF 19.-</span>
          </h2>
          <p className="text-gray-700">
            Wir kümmern uns um Ihre administrativen Bedürfnisse – schnell,
            einfach und zuverlässig.
          </p>
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {/* Wer wir sind */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-4">Wer wir sind</h3>
          <p className="text-gray-700">
            Wir sind ein virtuelles Sekretariat für Einzelpersonen. Durch unsere
            diskrete Arbeit entlasten wir Privatpersonen von administrativen
            Aufgaben.
          </p>
        </div>

        {/* Was wir leisten */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-4">Was wir leisten</h3>
          <p className="text-gray-700">
            Wir schreiben Ihre Briefe. Schnell, einfach und unkompliziert.
            Unsere Services sind speziell auf Ihre Bedürfnisse ausgerichtet.
          </p>
        </div>

        {/* Brief bestellen */}
        <div className="bg-white p-6 rounded-lg shadow flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-4">Brief bestellen</h3>
          <p className="text-gray-700 text-center">
            Wir antworten innerhalb von <strong>24 Stunden</strong>.
          </p>
          <Image
            width={64}
            height={64}
            src="/letter.png"
            alt="Brief bestellen"
            className="w-16 mt-4"
          />
        </div>
      </section>
      <div className="flex justify-end my-4">
        <Link href="/anfrage">
          <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded shadow-lg w-32 h-20 transition duration-300 ease-in-out transform hover:scale-105">
            Bestellen
          </button>
        </Link>
      </div>

      <div className="width-full">
        <h2 className="text-3xl ">Wir sind Ihre persönliche Sekretärin</h2>
        <Hr />
        <p>
          Ab CHF 19.- erhalten Sie Ihren Brief per Email zugestellt. Sie haben
          keinen Drucker, oder Ihnen ist gerade die Druckerfarbe ausgegangen?
          Kein Problem, gerne senden wir Ihnen den ausgedruckten Brief per
          A-Post zu.
        </p>
      </div>
    </>
  );
}
