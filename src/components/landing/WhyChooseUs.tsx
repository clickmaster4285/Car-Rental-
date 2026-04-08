import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useEffect, useState } from "react";

const stats = [
  { end: 500, suffix: "+", label: "Businesses Served", desc: "Trusted worldwide" },
  { end: 99.9, suffix: "%", label: "System Uptime", desc: "Enterprise reliability" },
  { end: 50, suffix: "K+", label: "Daily Transactions", desc: "Processed seamlessly" },
  { end: 24, suffix: "/7", label: "Support Available", desc: "Always here for you" },
];

function AnimatedCounter({ end, suffix, active }: { end: number; suffix: string; active: boolean }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const duration = 2000;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start * 10) / 10);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [active, end]);

  const display = Number.isInteger(end) ? Math.floor(count) : count.toFixed(1);
  return <span>{display}{suffix}</span>;
}

const WhyChooseUs = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding gradient-hero relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-amber/5 rounded-full blur-3xl animate-float-delayed" />
      </div>
      <div className="container mx-auto relative z-10" ref={ref}>
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-sm font-semibold text-secondary uppercase tracking-wider mb-3">Why Choose Us</p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">Numbers That Speak for Themselves</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`glass-dark rounded-3xl p-8 text-center transition-all duration-500 hover:-translate-y-1 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <p className="text-4xl md:text-5xl font-bold text-secondary mb-2">
                <AnimatedCounter end={s.end} suffix={s.suffix} active={isVisible} />
              </p>
              <p className="font-semibold text-primary-foreground">{s.label}</p>
              <p className="text-sm text-primary-foreground/50 mt-1">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
