import { ArrowRight, Play, BarChart3, Users, Calendar, CreditCard } from "lucide-react";
import { useState, useEffect } from "react";

const Hero = () => {
  const backgroundImages = [
    "/images/car-rental1.webp",
    "/images/car-rental2.webp",
    "/images/car-rental3.webp",
    "/images/car-rental4.webp",
    "/images/car-rental5.webp",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden flex items-center">
      {/* Background Image Slider - Fade Effect */}
      <div className="absolute inset-0">
        {backgroundImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
        ))}
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/30" />
      </div>

      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-amber/10 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-secondary/15 rounded-full blur-2xl animate-float-slow" />
      </div>

      <div className="container mx-auto relative z-10 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark text-sm text-secondary-foreground backdrop-blur-md bg-white/10">
              <span className="w-2 h-2 bg-amber rounded-full animate-pulse" />
              Trusted by 500+ rental businesses
            </div>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
              style={{
                textShadow: "0 2px 6px rgba(0,0,0,0.4)"
              }}
            >
              The Complete{" "}
              <span className="text-primary">Car Rental</span>{" "}
              Management System
            </h1>
            <p
              className="text-lg text-white/80 max-w-lg leading-relaxed"
              style={{ textShadow: "0 1px 4px rgba(0,0,0,0.4)" }}
            >
              Automate bookings, manage your fleet, track payments, and grow your business — all from one powerful, intuitive platform.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-primary text-secondary-foreground font-semibold hover:bg-blue-light transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5"
              >
                Request Demo <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#features"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl glass-dark text-white font-semibold hover:bg-white/20 transition-all duration-200 backdrop-blur-md bg-white/10"
              >
                <Play className="w-4 h-4" /> View Features
              </a>
            </div>
          </div>

          {/* Right - Dashboard Mockup */}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 cursor-pointer group"
        onClick={() => {
          const nextSection = document.getElementById("features");
          if (nextSection) {
            nextSection.scrollIntoView({ behavior: "smooth" });
          }
        }}
      >
        <div className="flex flex-col items-center gap-2">
          <div className="w-6 h-10 rounded-full border-2 border-white/40 flex justify-center group-hover:border-white/70 transition-colors duration-300">
            <div className="w-1 h-2 bg-white/60 rounded-full mt-2 animate-scroll-bounce group-hover:bg-white/90" />
          </div>
        </div>
      </div>

      {/* Image Slider Dots */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`transition-all duration-500 rounded-full ${
              currentImageIndex === index
                ? "w-8 h-2 bg-white"
                : "w-2 h-2 bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes fade-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-up {
          animation: fade-up 0.8s ease-out forwards;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float 10s ease-in-out infinite 2s;
        }
        
        .animate-float-slow {
          animation: float 12s ease-in-out infinite 4s;
        }
        
        @keyframes scroll-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(8px); }
        }
        
        .animate-scroll-bounce {
          animation: scroll-bounce 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;