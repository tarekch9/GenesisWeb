import Link from "next/link";
import Image from "next/image";
import Image1 from "/public/Placeholder Image.png";
import ContactModal from "../components/contactmodal"

export default function hero() {
  return (
    <section id="home" className="scroll-mt-24 flex flex-col items-center px-8 py-4">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="mt-8 mb-6 text-4xl font-semibold leading-tight">
          GenesisWeb – Wo Technik<br></br> auf Vertrauen trifft
        </h1>
        <p className="mb-6 text-base md:text-lg text-[#545f71] max-w-2xl mx-auto">
          Digitale Dienstleistungen, um ihr Unternehmen sichtbar im Internet zu
          machen. Wir helfen ihnen, ihre Vision digital zu verwirklichen
        </p>
        <div className="flex flex-col sm:flex-row gap-2 justify-center mt-6 m-4 mb-8 px-8 py-3">
          {/* <Link
            href="/kontakt"
            className="inline-flex h-12 items-center justify-center rounded px-8 font-medium bg-[#271e54] hover:bg-sky-700 text-white hover:bg-opacity-90 transition-colors"
          >
            Kontakt
          </Link> */}
          <ContactModal />
          <Link
            href="/portfolio"
            className="inline-flex h-12 items-center justify-center rounded px-8 font-medium border border-gray-300 hover:bg-gray-50 transition-colors"
          >
            Portfolio
          </Link>
        </div>
      </div>

      <div className="w-full max-w-7xl m-4 rounded-xl overflow-hidden">
        <Image
          src={Image1}
          alt="Placeholder"
          width={2000}
          height={400}
          className="w-full h-auto object-cover"
          priority
        />
      </div>
    </section>
  );
}
