import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import About from "@/components/landing/About";
import Features from "@/components/landing/Features";
import WhyChooseUs from "@/components/landing/WhyChooseUs";
import FleetSection from "@/components/landing/FleetSection";
import Testimonials from "@/components/landing/Testimonials";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import Blog from "@/components/landing/Blogs";

const Index = () => (
  <main>
    <Navbar />
    <Hero />
    <About />
    <Features />
    <WhyChooseUs />
    <FleetSection />
    <Testimonials />
    <Blog />
    <Contact />
    <Footer />
  </main>
);

export default Index;
