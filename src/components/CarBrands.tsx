
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { trackNavigationClick } from "@/lib/analytics";

const CarBrands = () => {
  const navigate = useNavigate();

  const premiumBrands = [
    { name: "Porsche", specialty: "Factory Retrofitting", image: "/cars/PORCHE.png", path: "/porsche" },
    { name: "BMW", specialty: "Performance Tuning", image: "/cars/BMW.png", path: "/bmw" },
    { name: "Mercedes-Benz", specialty: "Luxury Service", image: "/cars/MERCEDES.png", path: "/mercedes" },
    { name: "Audi", specialty: "Advanced Diagnostics", image: "/cars/AUDI.png", path: "/audi" },
    { name: "Ferrari", specialty: "Supercar Care", image: "/cars/FERRARI.png", path: "/ferrari" },
    { name: "Lamborghini", specialty: "Exotic Service", image: "/cars/LAMBORHINI.png", path: "/lamborghini" },
    { name: "Bentley", specialty: "Ultra-Luxury", image: "/cars/BENTLEY.png", path: "/bentley" },
    { name: "McLaren", specialty: "Track Performance", image: "/cars/MCLAREN.png", path: "/mclaren" },
    { name: "Jaguar", specialty: "Heritage Service", image: "/cars/JAGUAR.png", path: "/jaguar" },
    { name: "Land Rover", specialty: "Off-Road Excellence", image: "/cars/LAND ROVER.png", path: "/land-rover" },
    { name: "Volkswagen", specialty: "German Engineering", image: "/cars/VOKLSWAGEN.png", path: "/volkswagen" },
    { name: "Maserati", specialty: "Italian Excellence", image: "/cars/MASERATI.png", path: "/maserati" }
  ];

  const handleBrandClick = (path: string, brandName: string) => {
    trackNavigationClick(brandName, 'car_brands_grid');
    navigate(path);
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-slate-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16" data-aos="fade-up">
          <div className="inline-block bg-slate-600 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 text-slate-300">
            Premium European Performance
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white">
            High-End Euro Performance
            <span className="block text-slate-400 text-2xl sm:text-3xl lg:text-4xl mt-2">All Vehicles Welcome</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed px-4">
            While we specialize in premium European performance vehicles with dealership-level expertise, 
            our doors are open to <strong className="text-white">every make and model</strong>. From your daily driver to the most exotic supercars.
          </p>
        </div>

        {/* Premium Brands Grid - Responsive layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-6 mb-8 sm:mb-10 lg:mb-12">
          {premiumBrands.map((brand, index) => (
            <Card 
              key={index}
              onClick={() => handleBrandClick(brand.path, brand.name)}
              className="p-3 sm:p-4 lg:p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-slate-600 bg-slate-800 hover:bg-slate-750 cursor-pointer touch-manipulation"
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-28 lg:h-28 rounded-lg lg:rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3 lg:mb-4 bg-slate-600 border border-slate-500">
                <img 
                  src={brand.image} 
                  alt={`${brand.name} logo`}
                  className="w-14 h-14 sm:w-16 sm:h-16 lg:w-24 lg:h-24 object-contain"
                  style={brand.name === "Mercedes-Benz" ? { transform: 'rotate(180deg)' } : {}}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.parentElement?.querySelector('.fallback-text') as HTMLElement;
                    if (fallback) fallback.style.display = 'block';
                  }}
                />
                <span className="fallback-text hidden text-slate-300 font-bold text-xs sm:text-sm">{brand.name.charAt(0)}</span>
              </div>
              <h3 className="font-bold text-white mb-1 text-xs sm:text-sm">{brand.name}</h3>
              <p className="text-xs text-slate-400 hidden sm:block">{brand.specialty}</p>
            </Card>
          ))}
        </div>

        {/* All Vehicles Welcome Section - Mobile optimized */}
        <div className="bg-slate-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center border border-slate-600" data-aos="fade-up" data-aos-delay="200">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
            Every Vehicle Deserves Expert Care
          </h3>
          <p className="text-base sm:text-lg text-slate-300 mb-4 sm:mb-6 max-w-2xl mx-auto">
            Toyota • Honda • Ford • Holden • Mazda • Subaru • Nissan • Hyundai • Kia
            <span className="block mt-2 font-medium text-white">+ Every Other Make & Model</span>
          </p>
          <div className="inline-block bg-white text-slate-900 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium hover:bg-slate-100 transition-colors">
            Same Premium Care • Transparent Pricing • No Exceptions
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarBrands;
