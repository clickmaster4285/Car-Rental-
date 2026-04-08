import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "James Carter",
    role: "CEO, DriveEasy Rentals",
    text: "RentFlow transformed our operations. We cut booking time by 60% and our customer satisfaction scores have never been higher.",
    rating: 5,
  },
  {
    name: "Sarah Mitchell",
    role: "Operations Manager, AutoLux",
    text: "The multi-branch support is a game changer. Managing 12 locations from one dashboard has simplified everything.",
    rating: 5,
  },
  {
    name: "David Park",
    role: "Founder, CityWheels",
    text: "From fleet tracking to payment processing, RentFlow covers every aspect of our rental business perfectly.",
    rating: 5,
  },
];

const Testimonials = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding bg-muted/50">
      <div className="container mx-auto" ref={ref}>
        <div className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-sm font-semibold text-secondary uppercase tracking-wider mb-3">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">What Our Clients Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div
              key={r.name}
              className={`bg-surface-raised rounded-3xl p-8 card-shadow hover:card-shadow-hover transition-all duration-500 hover:-translate-y-1 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <Quote className="w-8 h-8 text-secondary/20 mb-4" />
              <p className="text-foreground leading-relaxed mb-6">{r.text}</p>
              <div className="flex gap-1 mb-4">
                {Array.from({ length: r.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-amber text-amber" />
                ))}
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary font-bold text-sm">
                  {r.name[0]}
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{r.name}</p>
                  <p className="text-xs text-muted-foreground">{r.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
