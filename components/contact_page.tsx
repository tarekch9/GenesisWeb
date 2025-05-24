import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import MountainClimber from "/public/MountainClimber.png";

export default function ContactPage() {
  return (
    <section id="kontakt">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
          <div className="space-y-4">
            <p className="text-[#545f71] text-lg font-medium">Connect</p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Kontaktieren Sie uns.. wir gehen den Weg mit ihnen zusammen!
            </h1>
            <p className="text-base md:text-lg">
              Wenn Sie fragen zu uns oder unseren Dienstleistungen haben, melden
              Sie sich gerne. Wir freuen uns, ihnen Ihre Fragen im Detail zu
              beantworten.
            </p>
          </div>
          <div className="mt-4 space-y-8">
            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 mt-0.5" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <a
                  href="mailto:tachaani@protonmail.com"
                  className="text-base hover:underline"
                >
                  tachaani@protonmail.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 mt-0.5" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Telefon</h3>
                <a href="tel:+15550000000" className="text-base hover:underline">
                  +1 (555) 000-0000
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 mt-0.5" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Büro</h3>
                <p className="text-base">123 Sample St, Sydney NSW 2000 AU</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 w-full h-[400px] relative rounded-lg overflow-hidden">
          <Image
            src={MountainClimber}
            alt="Mountain hikers walking through snow"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
