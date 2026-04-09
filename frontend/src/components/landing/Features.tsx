import { useEffect, useRef, useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { 
  Car, CalendarCheck, CreditCard, Users, BarChart3, 
  Building2, MapPin, Settings 
} from "lucide-react";

// Optimized image placeholder
const ImagePlaceholder = ({ title }) => (
  <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center">
    <div className="w-12 h-12 rounded-full bg-gray-300 dark:bg-gray-700 animate-pulse" />
  </div>
);

// Memoized feature data to prevent recreation
const featuresData = [
  { 
    icon: Car, 
    title: "Fleet Management", 
    desc: "Track vehicle status, maintenance schedules, and availability in real-time across your entire fleet.",
    image: "/images/fleet-management.webp",
    stats: "2,500+ vehicles managed"
  },
  { 
    icon: CalendarCheck, 
    title: "Booking Automation", 
    desc: "Automate reservations with smart scheduling, conflict detection, and instant confirmations.",
    image: "/images/booking-automation.webp",
    stats: "98% automated bookings"
  },
  { 
    icon: CreditCard, 
    title: "Payment Tracking", 
    desc: "Process payments, manage invoices, and track revenue with integrated payment solutions.",
    image: "/images/payment-tracking.webp",
    stats: "15+ payment methods"
  },
  { 
    icon: Users, 
    title: "Customer Management", 
    desc: "Build customer profiles, track history, and deliver personalized rental experiences.",
    image: "/images/customer-management.webp",
    stats: "50K+ active customers"
  },
  { 
    icon: BarChart3, 
    title: "Reports & Analytics", 
    desc: "Gain actionable insights with detailed reports on revenue, utilization, and performance.",
    image: "/images/reports-analytics.webp",
    stats: "Real-time insights"
  },
  { 
    icon: Building2, 
    title: "Multi-Branch Support", 
    desc: "Manage multiple locations from a single dashboard with centralized controls.",
    image: "/images/multi-branch.webp",
    stats: "Unlimited branches"
  },
  { 
    icon: MapPin, 
    title: "GPS Tracking", 
    desc: "Monitor vehicle locations and optimize fleet distribution across your service areas.",
    image: "/images/gps-tracking.webp",
    stats: "Live location updates"
  },
  { 
    icon: Settings, 
    title: "Custom Workflows", 
    desc: "Configure rental agreements, pricing rules, and business processes to match your needs.",
    image: "/images/custom-workflows.webp",
    stats: "Fully customizable"
  },
];

const Features = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [imageErrors, setImageErrors] = useState({});
  const containerRef = useRef(null);

  // Handle image errors
  const handleImageError = (title) => {
    setImageErrors(prev => ({ ...prev, [title]: true }));
  };

  return (
    <section 
      id="features" 
      className="section-padding bg-gradient-to-b from-muted/50 to-background relative overflow-hidden"
      style={{ contentVisibility: 'auto' }}
    >
      {/* Simplified background decorative elements - no heavy animations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto relative z-10" ref={ref}>
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-sm font-semibold text-secondary uppercase tracking-wider mb-3">Features</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Everything You Need to Run{" "}
            <span className="text-primary">Your Rental Business</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive tools designed to streamline operations, boost efficiency, and maximize revenue.
          </p>
        </div>

        <div ref={containerRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresData.map((feature, i) => (
            <div
              key={feature.title}
              className={`group relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-500 hover:-translate-y-2 cursor-pointer will-change-transform ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${Math.min(i * 50, 300)}ms` }}
            >
              {/* Image Section with lazy loading */}
              <div className="relative h-48 overflow-hidden bg-gray-100 dark:bg-gray-800">
                {!imageErrors[feature.title] ? (
                  <>
                    <img
                      src={feature.image}
                      alt={feature.title}
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      onError={() => handleImageError(feature.title)}
                    />
                  </>
                ) : (
                  <ImagePlaceholder title={feature.title} />
                )}
                
                {/* Gradient overlay - pointer events none for performance */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />
                
                {/* Icon overlay */}
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Stats badge */}
                <div className="absolute top-4 right-4">
                  <div className="px-2 py-1 rounded-lg bg-black/50 backdrop-blur-sm text-white text-xs font-semibold">
                    {feature.stats}
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-secondary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.desc}
                </p>
                
                {/* Learn more link - optimized animation */}
                <div className="mt-4 flex items-center gap-2 text-secondary text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Learn more</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
{/* Optimized CTA Section */}
<div className={`mt-20 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
  <div className="border-2 border-primary/30 rounded-2xl shadow-2xl shadow-primary/10 bg-gradient-to-r from-secondary/5 via-background to-amber/5">
    <div className="p-8 md:p-12 text-center">
      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
        Ready to Transform Your{' '}
        <span className="text-primary">Rental Business?</span>
      </h3>
      
      <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
        Join thousands of satisfied rental businesses that have streamlined their operations with RentFlow.
      </p>
      
      <a
        href="#contact"
        className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
      >
        Get Started Today
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </a>
    </div>
  </div>
</div>


      </div>
    </section>
  );
};

export default Features;