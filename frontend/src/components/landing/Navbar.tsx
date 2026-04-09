import { useState, useEffect } from "react";
import { Menu, X, Car } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Features", href: "#features" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Blogs", href: "#blogs" },
 
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-lg py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
            <Car className="w-5 h-5 text-secondary-foreground" />
          </div>
          <span className={`text-xl font-bold transition-colors ${scrolled ? "text-primary" : "text-primary-foreground"}`}>
            RentFlow
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-secondary ${
                scrolled ? "text-foreground" : "text-primary-foreground/80"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-xl bg-secondary text-secondary-foreground text-sm font-semibold hover:bg-blue-light transition-all duration-200 hover:shadow-lg"
          >
            Request Demo
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden p-2 rounded-lg ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden glass mt-2 mx-4 rounded-2xl p-6 space-y-4 animate-fade-up">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-foreground font-medium hover:text-secondary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="block text-center px-5 py-2.5 rounded-xl bg-secondary text-secondary-foreground font-semibold"
          >
            Request Demo
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
