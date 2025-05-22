import { Globe, Search, Briefcase } from "lucide-react";
import Link from "next/link";

export default function ServiceOfferingPage() {
  return (
    <section id="services">
      <div className="max-w-6xl mx-auto px-4 py-16 text-center">
        <div className="mb-14">
          <h2 className="text-[#545f71] text-lg font-medium mb-6">
            Unser Angebot
          </h2>
          <h1 className="text-[#000000] text-4xl font-bold mb-4">
            Ihre Vision ist unsere Mission
          </h1>
          <p className="text-[#545f71] max-w-3xl mx-auto text-lg">
            Wir bieten eine Reihe von freiberuflichen Dienstleistungen an, die auf
            Ihre Bedürfnisse zugeschnitten sind. Unser Fachwissen umfasst die
            Bereiche Webentwicklung, Branding und Copywriting.
          </p>
        </div>

        <div className="w-full h-px bg-[#9d9595] opacity-30 mt-8 mb-10"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 mb-10">
          <div className="flex flex-col items-center px-4 md:px-0">
            <div className="mb-4 md:mb-6">
              <Globe className="w-12 h-12 md:w-16 md:h-16 text-[#545f71]" />
            </div>
            <h3 className="text-[#000000] text-xl md:text-2xl font-bold mb-2 text-center">
              Web Development &<br />
              Google Business Page
            </h3>
            <p className="text-[#545f71] text-center md:text-left">
              Wir erstellen ansprechende & benutzerfreundliche Websites, die ihr
              Vorhaben präsentieren und ihre Besucher ansprechen. Außerdem
              unterstützen wir Sie bei der Erstellung ein Google Business Page.
            </p>
          </div>

          <div className="flex flex-col items-center px-4 md:px-0">
            <div className="mb-4 md:mb-6">
              <Search className="w-12 h-12 md:w-16 md:h-16 text-[#545f71]" />
            </div>
            <h3 className="text-[#000000] text-xl md:text-2xl font-bold mb-2 text-center">
              Search Engine
              <br />
              Optimization (SEO)
            </h3>
            <p className="text-[#545f71] text-center md:text-left">
              Unser Ziel ist es, ihre Online Präsenz so zu platzieren, dass diese
              gefunden werden. Das erstellen einer Online Präsenz ist die eine
              Sache. Das richtige platzieren in der Google Suche das andere.
            </p>
          </div>

          <div className="flex flex-col items-center px-4 md:px-0">
            <div className="mb-4 md:mb-6">
              <Briefcase className="w-12 h-12 md:w-16 md:h-16 text-[#545f71]" />
            </div>
            <h3 className="text-[#000000] text-xl md:text-2xl font-bold mb-2 text-center">
              Web-Hosting etc.
            </h3>
            <p className="text-[#545f71] text-center md:text-left">
              Wir unterstützen Sie zusätzlich dabei, die passende Domain und den
              richtigen Webhosting-Anbieter zu finden, damit ihre Website
              einwandfrei im Internet läuft.
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link
            href="#contact"
            className="px-8 py-3 bg-[#271e54] hover:bg-sky-700 text-white rounded hover:bg-opacity-90 transition-colors"
          >
            Contact
          </Link>
          <Link href="#learn-more" className="text-[#000000] hover:underline">
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
