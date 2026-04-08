import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Car, CalendarCheck, CreditCard, Users, BarChart3, Building2, MapPin, Settings } from "lucide-react";

const features = [
  { icon: Car, title: "Fleet Management", desc: "Track vehicle status, maintenance schedules, and availability in real-time across your entire fleet." },
  { icon: CalendarCheck, title: "Booking Automation", desc: "Automate reservations with smart scheduling, conflict detection, and instant confirmations." },
  { icon: CreditCard, title: "Payment Tracking", desc: "Process payments, manage invoices, and track revenue with integrated payment solutions." },
  { icon: Users, title: "Customer Management", desc: "Build customer profiles, track history, and deliver personalized rental experiences." },
  { icon: BarChart3, title: "Reports & Analytics", desc: "Gain actionable insights with detailed reports on revenue, utilization, and performance." },
  { icon: Building2, title: "Multi-Branch Support", desc: "Manage multiple locations from a single dashboard with centralized controls." },
  { icon: MapPin, title: "GPS Tracking", desc: "Monitor vehicle locations and optimize fleet distribution across your service areas." },
  { icon: Settings, title: "Custom Workflows", desc: "Configure rental agreements, pricing rules, and business processes to match your needs." },
];

const Features = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="features" className="section-padding bg-muted/50">
      <div className="container mx-auto" ref={ref}>
        <div className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-sm font-semibold text-secondary uppercase tracking-wider mb-3">Features</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Everything You Need to Run Your Rental Business</h2>
          <p className="text-muted-foreground mt-4">Comprehensive tools designed to streamline operations and maximize revenue.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`group bg-surface-raised rounded-3xl p-6 card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1 cursor-default ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors duration-300">
                <f.icon className="w-6 h-6 text-secondary group-hover:text-secondary-foreground transition-colors" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
