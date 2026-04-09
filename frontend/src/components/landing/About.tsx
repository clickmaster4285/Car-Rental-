import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Shield, Zap, Globe, Headphones, Award, TrendingUp, Users, Clock } from "lucide-react";

const points = [
  { icon: Shield, title: "Enterprise-Grade Security", desc: "Bank-level encryption for all your data" },
  { icon: Zap, title: "Lightning Fast", desc: "Process transactions in under 2 seconds" },
  { icon: Globe, title: "Cloud-Based Platform", desc: "Access your business from anywhere" },
  { icon: Headphones, title: "24/7 Support", desc: "Dedicated support when you need it" },
];

const stats = [
  { number: "500+", label: "Businesses", icon: Users },
  { number: "50K+", label: "Daily Transactions", icon: TrendingUp },
  { number: "99.9%", label: "Uptime", icon: Clock },
  { number: "10+", label: "Years Experience", icon: Award },
];

const About = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-20 md:py-28 bg-gradient-to-br from-background via-background to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image Section */}
          <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            <div className="relative">
              {/* Main Image */}
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/experience.webp"
                  alt="10+ Years Experience in Car Rental Industry"
                  className="w-full h-auto object-cover"
                />
              </div>
              
              {/* Stats Floating Cards */}
              <div className="absolute -bottom-6 -right-6 bg-card rounded-xl p-4 shadow-xl border border-border">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary">10+ Years</p>
                    <p className="text-xs text-muted-foreground">Industry Experience</p>
                  </div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="absolute -top-6 -left-6 bg-card rounded-xl p-4 shadow-xl border border-border">
                <div className="grid grid-cols-2 gap-3">
                  {stats.slice(0, 2).map((stat, idx) => (
                    <div key={stat.label} className="text-center min-w-[80px]">
                      <stat.icon className="w-5 h-5 text-primary mx-auto mb-1" />
                      <p className="text-lg font-bold text-foreground">{stat.number}</p>
                      <p className="text-xs text-muted-foreground">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content Section */}
          <div className={`space-y-8 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            {/* Badge */}
            

            {/* Title */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Empowering Car Rental{' '}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Businesses Worldwide
              </span>
            </h2>

            {/* Description */}
            <p className="text-lg text-muted-foreground leading-relaxed">
              RentFlow is an all-in-one platform crafted for car rental businesses. 
              From fleet management to automated bookings and real-time analytics, 
              everything works seamlessly to help you operate smarter and scale faster.
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4">
              {stats.map((stat, idx) => (
                <div
                  key={stat.label}
                  className="text-center p-3 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
                  style={{ transitionDelay: `${idx * 50}ms` }}
                >
                  <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-xl font-bold text-foreground">{stat.number}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {points.map((p, i) => (
                <div
                  key={p.title}
                  className="flex gap-3 p-4 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 group"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <p.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{p.title}</p>
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