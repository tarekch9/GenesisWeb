import Image from "next/image";
import Link from "next/link";
import hand from "/public/Hand.png";
import steps from "/public/Steps.png";
import dog from "/public/Picture_dog.png";

export default function ProcessSection() {
  return (
    <section id="process" className="w-full bg-[#faf9f9] py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <p className="text-[#545f71] text-lg font-medium mb-4">Unser Prozess</p>
        <h1 className="text-[#000000] text-4xl md:text-5xl font-bold max-w-4xl mb-4">
          Unsere Prozesse helfen uns, um ihr Produkt in kürzester Zeit zu
          erstellen.
        </h1>

        <p className="text-[#545f71] max-w-3xl mb-14">
          Maßgeschneiderte Lösungen für unsere Kunden sind die eine Hälfte
          unserer Dienstleistung. Schnelle und reibungslose Abläufe helfen uns,
          ihnen eine angenehme Customer Journey zu liefern
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Step 1 */}
          <div className="bg-[#ffffff] rounded-lg shadow-sm overflow-hidden border border-[#ededed] flex flex-col">
            <div className="h-40 md:h-48 relative flex-shrink-0">
              <Image
                src={hand}
                alt="Hand reaching toward sunset sky"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 md:p-6 flex-grow flex flex-col">
              <h3 className="text-[#000000] text-lg md:text-xl font-bold mb-2 md:mb-4">
                Step 1: Erfassung der Anforderungen
              </h3>
              <p className="text-[#000000] text-sm flex-grow">
                Zunächst muss erfasst werden, welche Anforderungen Sie haben und
                wie ihre Vision ihrer Unternehmung aussieht. Wir helfen ihnen
                gerne dabei, diese näher zu definieren.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-[#ffffff] rounded-lg shadow-sm overflow-hidden border border-[#ededed] flex flex-col">
            <div className="h-40 md:h-48 relative flex-shrink-0">
              <Image
                src={steps}
                alt="Blue stairs leading to clouds"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 md:p-6 flex-grow flex flex-col">
              <h3 className="text-[#000000] text-lg md:text-xl font-bold mb-2 md:mb-4">
                Step 2: Evaluierung des Umsetzungsvorschlags
              </h3>
              <p className="text-[#000000] text-sm flex-grow">
                Nachdem ihre Vorstellungen/ Wünsche visualisiert wurden, werden
                diese mit ihnen besprochen. Hier geht es darum zu schauen, ob
                ihre Vision richtig eingefangen wurde, um dann ggf. Anpassungen
                vorzunehmen
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-[#ffffff] rounded-lg shadow-sm overflow-hidden border border-[#ededed] flex flex-col">
            <div className="h-40 md:h-48 relative flex-shrink-0">
              <Image
                src={dog}
                alt="Dog looking at ocean"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 md:p-6 flex-grow flex flex-col">
              <h3 className="text-[#000000] text-lg md:text-xl font-bold mb-2 md:mb-4">
                Step 3: Die Umsetzung
              </h3>
              <p className="text-[#000000] text-sm flex-grow">
                Im letzten Schritt wird ihre Idee dann in Stein gemeißelt. Ihre
                Landing-Page oder ihre SEO-Seite wird umgesetzt und kann nach
                Vollendung nochmal angepasst werden.
              </p>
            </div>
          </div>
        </div>

        <div className="flex gap-2 mt-8 justify-center">
          <Link
            href="#"
            className="px-6 py-3 border border-[#000000] text-[#000000] font-medium hover:bg-[#f0f0f0] transition-colors"
          >
            Explore
          </Link>
          <Link
            href="#"
            className="px-6 py-3 text-[#000000] font-medium hover:underline"
          >
            Connect
          </Link>
        </div>
      </div>
    </section>
  );
}
