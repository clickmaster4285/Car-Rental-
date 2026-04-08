import { ArrowRight, Play, BarChart3, Users, Calendar, CreditCard } from "lucide-react";
import { useState, useEffect } from "react";

const Hero = () => {
  const backgroundImages = [
    "/images/car-rental1.jpg",
    "/images/car-rental2.jpg",
    "/images/car-rental3.jpg",
    "/images/car-rental4.jpg",
    "/images/car-rental5.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentImageIndex]);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
      setTimeout(() => setIsAnimating(false), 50);
    }, 300);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentImageIndex((prev) => (prev - 1 + backgroundImages.length) % backgroundImages.length);
      setTimeout(() => setIsAnimating(false), 50);
    }, 300);
  };

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentImageIndex) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentImageIndex(index);
      setTimeout(() => setIsAnimating(false), 50);
    }, 300);
  };

  const scrollToNext = () => {
    const nextSection = document.getElementById("features");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen overflow-hidden flex items-center">
      {/* Background Image Slider - Horizontal Slide */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
        >
          {backgroundImages.map((img, index) => (
            <div
              key={index}
              className="min-w-full h-full flex-shrink-0 relative"
              style={{
                backgroundImage: `url(${img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />
          ))}
        </div>
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/20" />
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 z-20 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300 flex items-center justify-center group"
      >
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 z-20 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300 flex items-center justify-center group"
      >
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

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
        onClick={scrollToNext}
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
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              currentImageIndex === index
                ? "w-8 h-2 bg-white"
                : "w-2 h-2 bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;