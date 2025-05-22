import Image from "next/image";
import { Star } from "lucide-react";
import Obama from "/public/obama-2689110_1280.jpg";


export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "An exceptional professional who delivers outstanding results!",
      name: "Jane Doe",
      title: "Project Manager, ABC Corp",
    },
    {
      quote: "A true visionary, transforming ideas into reality!",
      name: "John Smith",
      title: "Creative Director, XYZ Ltd",
    },
    {
      quote: "Professional, reliable, and a pleasure to work with!",
      name: "Emily Johnson",
      title: "Marketing Specialist, DEF Inc",
    },
  ];

  return (
    <section className="py-14 px-8 bg-[#faf9f9]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 text-center">
          Customer Testimonials
        </h2>
        <p className="text-xl text-black mb-16 text-center">
          Their feedback speaks volumes about my work.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col">
               <div className="flex mb-6">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center m-4">
                  <Image
                    src={Obama}
                    alt={testimonial.name}
                    width={64}
                    height={64}
                    className="rounded-full"
                  />
                </div>
                <div className="flex mb-4">
                  <div>
                    <h4 className="font-bold text-black">{testimonial.name}</h4>
                    <p className="text-black">{testimonial.title}</p>
                  </div>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-black text-black" />
                ))}
              </div>

              <p className="text-lg font-medium mb-8 text-black">
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
