import { useEffect, useRef, useState } from "react";
import {
  Car, CalendarCheck, CreditCard, Users, BarChart3,
  Building2, MapPin, Settings
} from "lucide-react";

// ------------------------------
// IMAGE FALLBACK
// ------------------------------
const ImageFallback = () => (
  <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 animate-pulse" />
);

// ------------------------------
// SINGLE CARD (IMPORTANT OPTIMIZATION)
// ------------------------------
const FeatureCard = ({ feature, index }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="group relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1"
    >
      {/* IMAGE */}
      <div className="relative h-48 bg-gray-100 dark:bg-gray-800 overflow-hidden">

        {/* only load when visible */}
        {isVisible && !error ? (
          <img
            src={feature.image}
            alt={feature.title}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={() => setError(true)}
          />
        ) : (
          <ImageFallback />
        )}

        {/* overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

        {/* icon */}
        <div className="absolute bottom-4 left-4">
          <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur flex items-center justify-center">
            <feature.icon className="w-5 h-5 text-white" />
          </div>
        </div>

        {/* stats */}
        <div className="absolute top-3 right-3 text-xs bg-black/50 text-white px-2 py-1 rounded">
          {feature.stats}
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-5">
        <h3 className="font-semibold text-lg mb-1">
          {feature.title}
        </h3>
        <p className="text-sm text-muted-foreground">
          {feature.desc}
        </p>
      </div>
    </div>
  );
};

// ------------------------------
// MAIN COMPONENT
// ------------------------------
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
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-4xl font-bold">
            Everything You Need to Run Your Rental Business
          </h2>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresData.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;