import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Mail, Phone, MapPin, Send, Clock, Navigation } from "lucide-react";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import * as z from "zod";

// Form schema
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(50),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  interestedIn: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000),
});

type FormData = z.infer<typeof formSchema>;

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [isPending, startTransition] = useTransition();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    startTransition(async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000/api";
        const response = await fetch(`${apiUrl}/contact`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        if (!response.ok) {
          throw new Error("Failed to send message");
        }

        const result = await response.json();
        toast.success("Message sent successfully! We'll reply within 24 hours.");
        reset();
      } catch (error) {
        console.error("Contact form error:", error);
        toast.error("Failed to send message. Please try again.");
      }
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      infos: [
        { value: "+92 333-1116842", action: "tel:+923331116842" },
        { value: "+92 332-5394285", action: "tel:+923325394285" },
      ],
    },
    {
      icon: Mail,
      title: "Email",
      infos: [
        { value: "marketing@clickmasters.pk", subtext: "We respond within 24 hours", action: "mailto:marketing@clickmasters.pk" },
        { value: "info@clickmasters.pk", subtext: "Support team", action: "mailto:info@clickmasters.pk" },
      ],
    },
    {
      icon: Clock,
      title: "Hours",
      infos: [
        { value: "Monday - Saturday", subtext: "9:00 AM - 6:00 PM" },
        { value: "24/7 Technical Support" },
      ],
    },
  ];

  const LOCATION = {
    name: "ClickMasters - Real Estate POS",
    address: "Paris Shopping Mall, 4th floor, PWD",
    fullAddress: "Paris Shopping Mall, 4th floor, Main PWD Rd, PWD Housing Society Sector A, Islamabad, Punjab 45700, Pakistan",
  };

  const FALLBACK_MAP_URL = `https://www.google.com/maps?q=${encodeURIComponent(LOCATION.fullAddress)}&output=embed`;

  const getDirectionsUrl = () => {
    return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(LOCATION.fullAddress)}`;
  };

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container mx-auto" ref={ref}>
        <div className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-sm font-semibold text-secondary uppercase tracking-wider mb-3">Contact</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Get in Touch</h2>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {contactInfo.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.title}
                className={`group bg-gradient-to-br from-card to-card/95 border border-border rounded-xl transition-all duration-500 hover:border-primary/40 hover:shadow-lg ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="p-5">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center transition-all duration-300 group-hover:bg-primary/20">
                        <IconComponent className="w-5 h-5 text-primary transition-transform duration-300 group-hover:scale-105" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-semibold uppercase tracking-wider text-primary/70 mb-2 transition-colors duration-300 group-hover:text-primary">
                        {item.title}
                      </p>
                      <div className="space-y-2">
                        {item.infos.map((info, idx2) =>
                          info.action ? (
                            <a key={idx2} href={info.action} className="block">
                              <p className="text-sm font-medium text-foreground transition-colors duration-200 group-hover:text-primary">
                                {info.value}
                              </p>
                              {info.subtext && (
                                <p className="text-xs text-muted-foreground mt-0.5">{info.subtext}</p>
                              )}
                            </a>
                          ) : (
                            <div key={idx2}>
                              <p className="text-sm font-medium text-foreground">{info.value}</p>
                              {info.subtext && (
                                <p className="text-xs text-muted-foreground mt-0.5">{info.subtext}</p>
                              )}
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl">
          {/* Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={`bg-surface-raised rounded-3xl p-8 card-shadow space-y-5 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="mb-6">
              <h3 className="text-xl font-bold text-foreground mb-2">Send Us a Message</h3>
              <p className="text-muted-foreground text-sm">Fill out the form and we'll get back to you within 24 hours.</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
                <input
                  {...register("name")}
                  type="text"
                  placeholder="John Doe"
                  className={`w-full px-4 py-3 rounded-2xl bg-muted/10 border transition-all ${
                    errors.name
                      ? "border-destructive focus:ring-destructive"
                      : "border-border focus:ring-secondary/50"
                  } text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2`}
                />
                {errors.name && <p className="text-xs text-destructive mt-1">{errors.name.message}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email *</label>
                <input
                  {...register("email")}
                  type="email"
                  placeholder="john@company.com"
                  className={`w-full px-4 py-3 rounded-2xl bg-muted/10 border transition-all ${
                    errors.email
                      ? "border-destructive focus:ring-destructive"
                      : "border-border focus:ring-secondary/50"
                  } text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2`}
                />
                {errors.email && <p className="text-xs text-destructive mt-1">{errors.email.message}</p>}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                <input
                  {...register("phone")}
                  type="tel"
                  placeholder="+92 333-1116842"
                  className="w-full px-4 py-3 rounded-2xl bg-muted/10 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Interested In</label>
                <select
                  {...register("interestedIn")}
                  className="w-full px-4 py-3 rounded-2xl bg-muted/10 border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all"
                >
                  <option value="">Select an option...</option>
                  <option value="demo">Request a demo</option>
                  <option value="pricing">Pricing inquiry</option>
                  <option value="support">Technical support</option>
                  <option value="partnership">Partnership opportunity</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Message *</label>
              <textarea
                {...register("message")}
                rows={5}
                placeholder="Tell us about your rental business needs..."
                className={`w-full px-4 py-3 rounded-2xl bg-muted/10 border resize-none transition-all ${
                  errors.message
                    ? "border-destructive focus:ring-destructive"
                    : "border-border focus:ring-secondary/50"
                } text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2`}
              />
              {errors.message && <p className="text-xs text-destructive mt-1">{errors.message.message}</p>}
            </div>

            <button
              type="submit"
              disabled={isPending}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-primary text-secondary-foreground font-semibold hover:bg-blue-light transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isPending ? (
                <>
                  <div className="w-4 h-4 border-2 border-secondary-foreground/20 border-t-secondary-foreground rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" /> Send Message
                </>
              )}
            </button>
          </form>

          {/* Location & Map */}
          <div className={`space-y-6 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            <div className="bg-surface-raised border border-border rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl">
              <div className="p-4 border-b border-border bg-muted/50">
                <h3 className="font-semibold text-foreground flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-secondary" />
                  Find Us Here
                </h3>
                <p className="text-sm text-muted-foreground mt-1">{LOCATION.address}</p>
              </div>
              <div className="h-[320px] w-full">
                <iframe
                  title="Office Location"
                  src={FALLBACK_MAP_URL}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>
              <div className="p-4 border-t border-border bg-muted/30">
                <a
                  href={getDirectionsUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-secondary hover:text-secondary/80 transition-colors"
                >
                  <Navigation className="h-4 w-4" />
                  Get Directions
                </a>
              </div>
            </div>

            <div className="bg-secondary/5 border border-secondary/20 rounded-2xl p-5 text-center">
              <p className="text-sm text-muted-foreground">
                🚀 <span className="font-medium text-secondary">Need urgent help?</span> Our support team is available 24/7 for technical issues.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
