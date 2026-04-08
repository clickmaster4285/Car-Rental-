import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Button } from '../ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface Vehicle {
  id: number;
  name: string;
  imagePath: string;
  description: string;
}

const FleetSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

const vehicles: Vehicle[] = [
  { id: 1, name: 'Car', imagePath: '/images/car.png', description: 'Compact & efficient' },
  { id: 2, name: 'Standard SUV', imagePath: '/images/car2.png', description: 'Spacious & versatile' },
  { id: 3, name: 'Minivan', imagePath: '/images/car1.jpg', description: 'Family-friendly comfort' },
  { id: 4, name: 'Pickup Truck', imagePath: '/images/car4.avif', description: 'Heavy-duty performance' },
  { id: 5, name: 'Luxury Sedan', imagePath: '/images/car5.png', description: 'Comfortable & premium ride' },
  { id: 6, name: 'Convertible', imagePath: '/images/car6.png', description: 'Fun & stylish for city drives' },
  { id: 7, name: 'Electric Car', imagePath: '/images/car7.png', description: 'Eco-friendly & modern' },
];

  return (
    <section className="section-padding">
      <div className="container mx-auto px-4" ref={ref}>
        {/* Header Section */}
        <div className={`text-center max-w-2xl mx-auto mb-12 md:mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-xs sm:text-sm font-semibold text-secondary uppercase tracking-wider mb-2">Wheels</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground leading-tight">Pick Your Perfect Match</h2>
        </div>

        {/* Swiper Carousel - Infinite Loop with No End */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={16}
          slidesPerView={1.1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            480: { slidesPerView: 1.2, spaceBetween: 16 },
            640: { slidesPerView: 1.5, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 24 },
            1024: { slidesPerView: 3, spaceBetween: 28 },
            1280: { slidesPerView: 4, spaceBetween: 30 },
          }}
          className="fleet-swiper !pb-12"
        >
          {vehicles.map((vehicle) => (
            <SwiperSlide key={vehicle.id}>
              <div className="group overflow-hidden transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
                {/* Image Container */}
                <div className="relative w-full h-38 sm:h-34 md:h-30 lg:h-26 overflow-hidden rounded-t-lg">
                  <img
                    src={vehicle.imagePath}
                    alt={vehicle.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => { (e.target as HTMLImageElement).src = 'https://placehold.co/600x400/e2e8f0/475569?text=Vehicle'; }}
                  />
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5 text-center">
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-800 mb-1 sm:mb-2">{vehicle.name}</h3>
                  <p className="text-xs sm:text-sm text-slate-500">{vehicle.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* View All Button */}
        {/* <div className="text-center mt-6 sm:mt-8">
          <Button className="px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base">View All Vehicles</Button>
        </div> */}
      </div>

      {/* Inline Swiper Styles */}
      <style jsx>{`
        .fleet-swiper .swiper-button-next,
        .fleet-swiper .swiper-button-prev {
          color: hsl(var(--primary));
        }
        .fleet-swiper .swiper-pagination-bullet {
          background-color: hsl(var(--primary));
          opacity: 0.6;
        }
        .fleet-swiper .swiper-pagination-bullet-active {
          opacity: 1;
        }
        .fleet-swiper .swiper-button-next:hover,
        .fleet-swiper .swiper-button-prev:hover {
          color: hsl(var(--accent));
        }
        .fleet-swiper .swiper-pagination-bullet:hover {
          background-color: hsl(var(--accent));
        }
      `}</style>
    </section>
  );
};

export default FleetSection;