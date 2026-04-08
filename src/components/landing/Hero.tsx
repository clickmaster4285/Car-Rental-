import { ArrowRight, Play, BarChart3, Users, Calendar, CreditCard } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen gradient-hero overflow-hidden flex items-center">
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-amber/5 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-secondary/5 rounded-full blur-2xl animate-float-slow" />
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "linear-gradient(hsl(0 0% 100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100%) 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }} />
      </div>

      <div className="container mx-auto relative z-10 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="space-y-8 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark text-sm text-secondary-foreground">
              <span className="w-2 h-2 bg-amber rounded-full animate-pulse" />
              Trusted by 500+ rental businesses
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
              Smart POS System for{" "}
              <span className="gradient-text">Car Rental</span>{" "}
              Businesses
            </h1>
            <p className="text-lg text-primary-foreground/70 max-w-lg leading-relaxed">
              Automate bookings, manage your fleet, track payments, and grow your business — all from one powerful, intuitive platform.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-secondary text-secondary-foreground font-semibold hover:bg-blue-light transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5"
              >
                Request Demo <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#features"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl glass-dark text-primary-foreground font-semibold hover:bg-white/10 transition-all duration-200"
              >
                <Play className="w-4 h-4" /> View Features
              </a>
            </div>
          </div>

          {/* Right - Dashboard Mockup */}
          <div className="relative animate-slide-in-right hidden lg:block">
            <div className="relative glass-dark rounded-3xl p-6 shadow-2xl" style={{ animationDelay: "0.3s" }}>
              {/* Mock header */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <span className="ml-3 text-xs text-primary-foreground/40">RentFlow Dashboard</span>
              </div>
              {/* Mock stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  { icon: BarChart3, label: "Revenue", value: "$48,250", color: "text-green-400" },
                  { icon: Users, label: "Customers", value: "1,284", color: "text-secondary" },
                  { icon: Calendar, label: "Bookings", value: "342", color: "text-amber" },
                  { icon: CreditCard, label: "Payments", value: "98.5%", color: "text-purple-400" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-white/5 rounded-2xl p-4 border border-white/5">
                    <stat.icon className={`w-5 h-5 ${stat.color} mb-2`} />
                    <p className="text-xs text-primary-foreground/50">{stat.label}</p>
                    <p className={`text-lg font-bold ${stat.color}`}>{stat.value}</p>
                  </div>
                ))}
              </div>
              {/* Mock chart */}
              <div className="bg-white/5 rounded-2xl p-4 border border-white/5">
                <p className="text-xs text-primary-foreground/50 mb-3">Weekly Bookings</p>
                <div className="flex items-end gap-2 h-20">
                  {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-lg bg-secondary/60 transition-all hover:bg-secondary"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
            {/* Floating element */}
            <div className="absolute -bottom-4 -left-4 glass-dark rounded-2xl px-4 py-3 flex items-center gap-3 animate-float shadow-xl">
              <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div>
                <p className="text-xs text-primary-foreground/50">System Status</p>
                <p className="text-sm font-semibold text-green-400">All Systems Online</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
