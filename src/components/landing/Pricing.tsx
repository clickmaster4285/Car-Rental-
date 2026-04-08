import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$49",
    period: "/month",
    desc: "Perfect for small rental businesses getting started.",
    popular: false,
    features: [
      "Up to 20 vehicles",
      "Basic booking management",
      "Payment processing",
      "Email support",
      "Basic reports",
    ],
  },
  {
    name: "Business",
    price: "$129",
    period: "/month",
    desc: "For growing businesses that need more power.",
    popular: true,
    features: [
      "Up to 100 vehicles",
      "Advanced booking automation",
      "Multi-payment gateways",
      "Priority support",
      "Advanced analytics",
      "Customer CRM",
      "API access",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "Tailored solutions for large-scale operations.",
    popular: false,
    features: [
      "Unlimited vehicles",
      "Multi-branch support",
      "Dedicated account manager",
      "Custom integrations",
      "SLA guarantees",
      "On-premise option",
      "White-label solution",
    ],
  },
];

const Pricing = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="pricing" className="section-padding bg-background">
      <div className="container mx-auto" ref={ref}>
        <div className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-sm font-semibold text-secondary uppercase tracking-wider mb-3">Pricing</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Simple, Transparent Pricing</h2>
          <p className="text-muted-foreground mt-4">Choose the plan that fits your business. No hidden fees.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl p-8 transition-all duration-500 hover:-translate-y-1 ${
                plan.popular
                  ? "bg-primary text-primary-foreground card-shadow-hover scale-105"
                  : "bg-surface-raised card-shadow hover:card-shadow-hover"
              } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-amber text-accent-foreground text-xs font-bold">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-bold">{plan.name}</h3>
              <p className={`text-sm mt-2 ${plan.popular ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                {plan.desc}
              </p>
              <div className="mt-6 mb-8">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className={`text-sm ${plan.popular ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
                  {plan.period}
                </span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm">
                    <Check className={`w-4 h-4 shrink-0 ${plan.popular ? "text-amber" : "text-secondary"}`} />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`block text-center py-3 rounded-2xl font-semibold transition-all duration-200 hover:-translate-y-0.5 ${
                  plan.popular
                    ? "bg-secondary text-secondary-foreground hover:bg-blue-light"
                    : "bg-muted text-foreground hover:bg-secondary hover:text-secondary-foreground"
                }`}
              >
                Request Demo
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
