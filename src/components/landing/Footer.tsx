import { Car } from "lucide-react";

const Footer = () => (
  <footer className="gradient-hero py-16 px-4">
    <div className="container mx-auto">
      <div className="grid md:grid-cols-4 gap-12 mb-12">
        {/* Brand */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
              <Car className="w-5 h-5 text-secondary-foreground" />
            </div>
            <span className="text-xl font-bold text-primary-foreground">RentFlow</span>
          </div>
          <p className="text-primary-foreground/60 text-sm leading-relaxed max-w-md">
            The leading POS platform for car rental businesses. Automate bookings, 
            manage fleets, and grow your revenue with our enterprise-grade solution.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-primary-foreground mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {["Home", "About", "Features", "Pricing", "Contact"].map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} className="text-sm text-primary-foreground/60 hover:text-secondary transition-colors">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-primary-foreground mb-4">Contact</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/60">
            <li>hello@rentflow.com</li>
            <li>+1 (555) 123-4567</li>
            <li>San Francisco, CA</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-primary-foreground/40">© 2026 RentFlow. All rights reserved.</p>
        <div className="flex gap-4">
          {["Twitter", "LinkedIn", "Facebook"].map((s) => (
            <a key={s} href="#" className="text-sm text-primary-foreground/40 hover:text-secondary transition-colors">
              {s}
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
