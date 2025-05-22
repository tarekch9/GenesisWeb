import Image from "next/image";
import Hero from "../components/hero_section";
import About from "../components/about";
import ServiceOfferingPage from "../components/service_offering_page";
import ProcessSection from "../components/process_section";
import ContactPage from "@/components/contact_page";
import Header from "../components/header";
import TestimonialsSection from "@/components/testemonials";
import Footer from "@/components/footer";
import StickyHeader from "@/components/StickyHeader";

export default function Home() {
  return (
    <div>
      <StickyHeader />
        <Hero />
        <About />
        <ServiceOfferingPage />
        <ProcessSection />
        <ContactPage />
        <TestimonialsSection />
        <Footer />
    </div>
  );
}
