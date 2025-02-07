import H1 from "@/components/H1";
import H2 from "@/components/H2";
import Hr from "@/components/Hr";
import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <Image src="/os.png" width={100} height={100} alt="" />
      <H1>Ihre Erfolge sind unsere Motivation</H1>
      <H2>
        Nachfolgende Beispiele sind ein kleiner Auszug aus Ihren Rückmeldungen.
        Erfolgsgeschichten, welche uns immer wieder motivieren und uns
        aufzeigen, wie Wertvoll unsere Arbeit sein kann.
      </H2>
      <div>
        <Hr />
        <div>
          <strong>Neue Wohnung:</strong>
          <p>
            Frau S. K. (48 Jahre, Betreuungsassistentin) bat uns um ein
            Begleitschreiben, welche sie den Wohnungsanmeldungen beilegen
            wollte. Wir gestalteten einen Brief, in der wir Frau K. und Ihre
            Familie vorstellten und fügten ein Familienfoto mit ein. Zwei Wochen
            später mailte uns Frau K., sie habe sich die letzten vier Jahre für
            unzählige Wohnungen beworben und jetzt habe sie gleich die erste
            Wohnung bekommen, für die sie sich mit unserem Begleitbrief beworben
            hatte.
          </p>
        </div>
        <Hr />

        <div>
          <strong>Über CHF 1`000.- Bargeld</strong>
          <p>
            Frau M. S. (35 Jahre, Hausfrau und Mutter) wandte sich mit der
            Anfrage an uns, ob wir ihr einen Brief schreiben könnten, um eine
            individuelle Prämienverbilligung für die Krankenkasse zu beantragen.
            Ihre finanzielle Situation habe sich seit ihrer Scheidung vor zwei
            Jahren sehr verschlechtert. Aufgrund unseres Know-hows konnten wir
            Frau S. kompetent beraten und für sie, sowie ihren beiden Kindern,
            nicht nur eine Neubeurteilung sondern auch eine Nachzahlung von zwei
            Jahren beantragen. Kurze Zeit später mailte uns Frau S., sie habe
            von der Prämienverbilligung insgesamt CHF 1`286.- zurück erhalten,
            was sie uns zu verdanken habe. Sie selbst wäre nie auf die Idee
            gekommen, dass man eine Nachzahlung beantragen kann. Sie habe noch
            nie CHF 19.- besser investiert, als für diesen Brief.
          </p>
        </div>
        <Hr />

        <div>
          <strong>Neues iPhone</strong>
          <p>
            Herr H. U. (21 Jahre, Verkäufer) hatte beim Discounter F. ein neues
            iPhone gekauft, welches zwei Wochen vor Garantieablauf kaputt ging.
            Als er jedoch im Apple Shop ein Austauschgerät beantragen wollte,
            erfuhr Herr U., dass sein iPhone bei Apple bereits einen Monat vor
            dem Kaufdatum auf seiner Quittung eingelöst wurde und daher die
            Apple Werkgarantie bereits abgelaufen sei. Herr U. ging gleich in
            eine Filiale des Discounters F. um zu reklamieren, der Verkäufer
            blieb jedoch stur und liess Herrn U. nur die Möglichkeit, das
            kaputte iPhone zur Reparatur einzuschicken, ohne Anspruch auf ein
            Ersatzgerät, für die zwei Wochen Reparaturzeit. An diesem Punkt bat
            uns Herr U. um einen Reklamationsbrief. Bereits 3 Tage später mailte
            uns Herr U. er habe von der Geschäftsstelle des Discounters F. ein
            brandneues iPhone erhalten.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
