import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Image2 from "/public/Placeholder_Image_1.png";

export default function about() {
  return (
    <section className="bg-[#faf9f9] flex items-center justify-center px-8 py-12">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 p-4 md:p-8">
        <div className="flex flex-col justify-center space-y-2">
          <span className="text-[#545f71] text-lg font-medium">Innovator</span>
          <h1 className="text-4xl font-bold leading-tight text-[#141414] hyphens-auto">
            Leidenschaftlich bei der Gestaltung digitaler Erlebnisse
          </h1>
          <p className="text-base md:text-lg text-[#141414]/80 max-w-xl mb-8">
            Unser Unternehmen hat es sich zum Ziel gesetzt, Personen und
            Unternehmen sich bei der Verwirklichen zu unterstützen. Und das im
            Rahmen der Digitalisierung
          </p>
          <div className="flex items-center gap-5">
            <Link
              href="#contact"
              className="px-8 py-3 bg-[#271e54] hover:bg-sky-700 transition-colors text-white rounded-md font-medium"
            >
              Kontakt
            </Link>

            <Link
              href="#connect"
              className="flex items-center gap-1 font-medium hover:underline"
            >
              Connect <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="relative h-[600px] rounded-2xl overflow-hidden">
          <Image
            src={Image2}
            alt="Digital art portrait with orange light streaks"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
