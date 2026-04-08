import { Car, Mail, Phone, MapPin, Twitter, Linkedin, Facebook, Instagram, ChevronRight, Clock, Headphones, Send, ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook", color: "hover:bg-[#1877f2]" },
    { icon: Twitter, href: "#", label: "Twitter", color: "hover:bg-[#1da1f2]" },
    { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:bg-[#0a66c2]" },
    { icon: Instagram, href: "#", label: "Instagram", color: "hover:bg-[#e4405f]" }
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" }
  ];

  const resources = [
    { name: "Help Center", href: "#help" },
    { name: "Blog", href: "#blog" },
    { name: "FAQs", href: "#faqs" },
    { name: "Support", href: "#support" }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-16 pb-6 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Main Grid */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
          
          {/* Brand Section - 5 columns */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-5 group cursor-pointer" onClick={scrollToTop}>
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-secondary to-secondary/70 flex items-center justify-center shadow-lg transform transition-transform group-hover:scale-105">
                <Car className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">RentFlow</span>
                <p className="text-xs text-white/40">Smart Rental Solutions</p>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-md">
              Built for car rental businesses, RentFlow helps you streamline bookings, 
              manage your fleet, and scale your operations with ease.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-2">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links - 2 columns */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold text-white mb-5 text-lg relative inline-block">
              Quick Links
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-secondary rounded-full"></div>
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a 
                    href={link.href} 
                    className="group flex items-center gap-2 text-white/60 hover:text-primary transition-all duration-300"
                  >
                    <ChevronRight className="w-3.5 h-3.5 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    <span className="group-hover:ml-1 transition-all duration-300 text-sm">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources - 2 columns */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold text-white mb-5 text-lg relative inline-block">
              Resources
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-secondary rounded-full"></div>
            </h4>
            <ul className="space-y-3">
              {resources.map((resource, idx) => (
                <li key={idx}>
                  <a 
                    href={resource.href} 
                    className="group flex items-center gap-2 text-white/60 hover:text-primary transition-all duration-300"
                  >
                    <ChevronRight className="w-3.5 h-3.5 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    <span className="group-hover:ml-1 transition-all duration-300 text-sm">{resource.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info - 3 columns */}
          <div className="lg:col-span-3">
            <h4 className="font-semibold text-white mb-5 text-lg relative inline-block">
              Contact Us
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-secondary rounded-full"></div>
            </h4>
            <ul className="space-y-4">
              <li className="group">
                <a href="mailto:marketing@clickmasters.pk" className="flex items-start gap-3 text-white/60 hover:text-secondary transition-colors duration-300">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/20 transition-colors">
                    <Mail className="w-4 h-4 group-hover:text-secondary transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs text-white/40 mb-0.5">Email Us</p>
                    <p className="text-sm">marketing@clickmasters.pk</p>
                  </div>
                </a>
              </li>
              
              <li className="group">
                <a href="tel:+923331116842" className="flex items-start gap-3 text-white/60 hover:text-secondary transition-colors duration-300">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/20 transition-colors">
                    <Phone className="w-4 h-4 group-hover:text-secondary transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs text-white/40 mb-0.5">Call Us</p>
                    <p className="text-sm">+92 333-1116842</p>
                  </div>
                </a>
              </li>
              
              <li className="group">
                <div className="flex items-start gap-3 text-white/60">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-white/40 mb-0.5">Visit Us</p>
                    <p className="text-sm">Main PWD Rd, Islamabad<br />Punjab, Pakistan</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Business Hours & Support */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="flex items-center gap-6 flex-wrap">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="text-xs text-white/40">Business Hours</p>
                  <p className="text-sm text-white/80 font-medium">Mon - Sat: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
              
              <div className="w-px h-8 bg-white/10 hidden md:block"></div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Headphones className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-white/40">24/7 Emergency Support</p>
                  <a href="tel:+923325394285" className="text-accent font-semibold text-sm hover:underline">
                    +92 332-5394285
                  </a>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="w-full md:w-auto">
              <div className="flex items-center gap-2 bg-white/5 rounded-xl p-1">
                <input 
                  type="email" 
                  placeholder="Subscribe to newsletter" 
                  className="bg-transparent px-4 py-2 text-sm text-white placeholder-white/40 focus:outline-none min-w-[200px]"
                />
                <button className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg text-sm font-medium hover:bg-secondary/90 transition-all flex items-center gap-2 group">
                  <span>Subscribe</span>
                  <Send className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/40">
              © {currentYear} RentFlow. All rights reserved.
            </p>
            
            <div className="flex gap-6 text-xs">
              <a href="#privacy" className="text-white/40 hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-white/40 hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#cookies" className="text-white/40 hover:text-primary transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button 
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-10 h-10 rounded-full bg-secondary text-secondary-foreground shadow-lg flex items-center justify-center hover:scale-110 transition-all duration-300 z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-4 h-4" />
      </button>
    </footer>
  );
};

export default Footer;