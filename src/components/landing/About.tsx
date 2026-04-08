import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Shield, Zap, Globe, Headphones } from "lucide-react";

const points = [
  { icon: Shield, title: "Enterprise-Grade Security", desc: "Bank-level encryption for all your data" },
  { icon: Zap, title: "Lightning Fast", desc: "Process transactions in under 2 seconds" },
  { icon: Globe, title: "Cloud-Based Platform", desc: "Access your business from anywhere" },
  { icon: Headphones, title: "24/7 Support", desc: "Dedicated support when you need it" },
];

const About = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image / Visual */}
          <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            <div className="relative">
              <div className="bg-muted rounded-3xl p-8 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center">
                    <Zap className="w-7 h-7 text-secondary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">10+ Years</p>
                    <p className="text-sm text-muted-foreground">Industry Experience</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { n: "500+", l: "Businesses" },
                    { n: "50K+", l: "Daily Transactions" },
                    { n: "99.9%", l: "Uptime" },
                  ].map((s) => (
                    <div key={s.l} className="bg-surface-raised rounded-2xl p-4 text-center card-shadow">
                      <p className="text-xl font-bold text-secondary">{s.n}</p>
                      <p className="text-xs text-muted-foreground mt-1">{s.l}</p>
                    </div>
                  ))}
                </div>
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-secondary rounded-full" style={{ width: "92%" }} />
                </div>
                <p className="text-xs text-muted-foreground">Customer Satisfaction Score: 92%</p>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-amber/10 rounded-full blur-xl" />
            </div>
          </div>

          {/* Right - Text */}
          <div className={`space-y-8 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            <div>
              <p className="text-sm font-semibold text-secondary uppercase tracking-wider mb-3">About RentFlow</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                Empowering Car Rental Businesses Worldwide
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              RentFlow is the leading POS platform designed exclusively for car rental businesses. 
              We combine powerful fleet management, automated bookings, and real-time analytics 
              into one seamless solution that scales with your business.
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              {points.map((p, i) => (
                <div
                  key={p.title}
                  className="flex gap-4 p-4 rounded-2xl hover:bg-muted transition-colors duration-200"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                    <p.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{p.title}</p>
                    <p className="text-xs text-muted-foreground mt-1">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
