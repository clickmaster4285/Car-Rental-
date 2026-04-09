import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Star, Quote, Sparkles, ArrowRight, Crown, Zap } from "lucide-react";
import { useState } from "react";

const reviews = [
  {
    name: "James Carter",
    role: "CEO, DriveEasy Rentals",
    text: "RentFlow transformed our operations. We cut booking time by 60% and our customer satisfaction scores have never been higher.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    achievement: "Efficiency Champion",
  },
  {
    name: "Sarah Mitchell",
    role: "Operations Manager, AutoLux",
    text: "The multi-branch support is a game changer. Managing 12 locations from one dashboard has simplified everything.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    achievement: "Scale Expert",
  },
  {
    name: "David Park",
    role: "Founder, CityWheels",
    text: "From fleet tracking to payment processing, RentFlow covers every aspect of our rental business perfectly.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    achievement: "Innovation Leader",
  },
];

const Testimonials = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="section-padding bg-gradient-to-br from-muted/30 via-background to-muted/30 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-accent/20 to-primary/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-primary/5 to-transparent rotate-12" />
      </div>

      <div className="container mx-auto relative z-10" ref={ref}>
        {/* Section Header with Enhanced Animation */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Join hundreds of satisfied rental businesses that have transformed their operations with RentFlow
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 perspective-1000">
          {reviews.map((review, index) => (
            <div
              key={review.name}
              className={`group relative transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ 
                transitionDelay: `${index * 150}ms`,
                transformStyle: 'preserve-3d',
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
         
              
              {/* Main Card */}
              <div className="relative bg-gradient-to-br from-card to-card/95 backdrop-blur-sm rounded-3xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full blur-2xl -z-10" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-accent/5 to-primary/5 rounded-full blur-2xl -z-10" />
                
                {/* Animated Quote Icon */}
                <div className={`relative transition-all duration-500 ${
                  hoveredIndex === index ? 'scale-110 rotate-12' : ''
                }`}>
                  <Quote className="w-10 h-10 text-primary/20 absolute -top-2 -left-2" />
                  <Quote className="w-8 h-8 text-primary mb-4 relative z-10" />
                </div>

                {/* Achievement Badge */}
                <div className={`absolute top-6 right-6 transition-all duration-500 ${
                  hoveredIndex === index ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                }`}>
                  <div className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full px-3 py-1 backdrop-blur-sm">
                    <div className="flex items-center gap-1 text-xs font-semibold text-primary">
                      <Crown className="w-3 h-3" />
                      <span>{review.achievement}</span>
                    </div>
                  </div>
                </div>

                {/* Testimonial Text with Gradient */}
                <p className="text-foreground/80 leading-relaxed mb-6 relative z-10 text-lg">
                  "{review.text}"
                </p>

                {/* Animated Rating Stars */}
                <div className="flex gap-1.5 mb-6">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 fill-accent text-accent transition-all duration-300 ${
                        hoveredIndex === index ? 'scale-110 rotate-12' : ''
                      }`}
                      style={{ transitionDelay: `${i * 50}ms` }}
                    />
                  ))}
                </div>

                {/* Author Info with Hover Animation */}
                <div className="flex items-center gap-4 pt-4 border-t border-border/50 group/author">
                  {/* Animated Avatar */}
                  <div className="relative">
                    {review.avatar ? (
                      <>
                        <img
                          src={review.avatar}
                          alt={review.name}
                          className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20 group-hover/author:ring-4 transition-all duration-300"
                        />
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary opacity-0 group-hover/author:opacity-20 transition-opacity duration-300" />
                      </>
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover/author:scale-110 transition-transform duration-300">
                        <span className="text-primary font-bold text-lg">
                          {review.name[0]}
                        </span>
                      </div>
                    )}
                    
                    {/* Status Indicator */}
                    <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-card animate-pulse" />
                  </div>

                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground group-hover/author:text-primary transition-colors duration-300">
                      {review.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">{review.role}</p>
                  </div>

                  {/* Arrow Icon on Hover */}
                  <ArrowRight className={`w-4 h-4 text-primary transition-all duration-300 ${
                    hoveredIndex === index ? 'translate-x-1 opacity-100' : 'opacity-0'
                  }`} />
                </div>

                {/* Bottom Progress Bar */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary  to-accent rounded-b-3xl transform origin-left transition-transform duration-500 ${
                  hoveredIndex === index ? 'scale-x-100' : 'scale-x-0'
                }`} />
              </div>

           
         
            </div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div className={`text-center mt-16 transition-all duration-700 delay-300 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 hover:from-primary/20 hover:to-secondary/20 transition-all duration-300 cursor-pointer group">
            <span className="text-foreground font-medium">Join Our Success Stories</span>
            <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform duration-300" />
          </div>
          
          {/* Stats */}
          <div className="flex justify-center gap-8 mt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">98%</div>
              <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">50k+</div>
              <div className="text-sm text-muted-foreground">Bookings Managed</div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animation Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .group:hover .group-hover\\:animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        @keyframes pulse-ring {
          0% { transform: scale(0.8); opacity: 0.5; }
          100% { transform: scale(1.2); opacity: 0; }
        }
        
        .animate-pulse-ring {
          animation: pulse-ring 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;