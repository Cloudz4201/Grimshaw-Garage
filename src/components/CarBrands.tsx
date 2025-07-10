
import { Card } from "@/components/ui/card";

const CarBrands = () => {
  const premiumBrands = [
    { name: "Porsche", specialty: "Factory Retrofitting", image: "/cars/PORCHE.png" },
    { name: "BMW", specialty: "Performance Tuning", image: "/cars/BMW.png" },
    { name: "Mercedes-Benz", specialty: "Luxury Service", image: "/cars/MERCEDES.png" },
    { name: "Audi", specialty: "Advanced Diagnostics", image: "/cars/AUDI.png" },
    { name: "Ferrari", specialty: "Supercar Care", image: "/cars/FERRARI.png" },
    { name: "Lamborghini", specialty: "Exotic Service", image: "/cars/LAMBORHINI.png" },
    { name: "Bentley", specialty: "Ultra-Luxury", image: "/cars/BENTLEY.png" },
    { name: "McLaren", specialty: "Track Performance", image: "/cars/MCLAREN.png" },
    { name: "Jaguar", specialty: "Heritage Service", image: "/cars/JAGUAR.png" },
    { name: "Land Rover", specialty: "Off-Road Excellence", image: "/cars/LAND ROVER.png" },
    { name: "Volkswagen", specialty: "German Engineering", image: "/cars/VOKLSWAGEN.png" },
    { name: "Skoda", specialty: "European Reliability", image: "/cars/SKODA.png" }
  ];

  return (
    <section className="py-20 bg-slate-700">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-block bg-slate-600 px-4 py-2 rounded-full text-sm font-medium mb-6 text-slate-300">
            Premium European Performance
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            High-End Euro Performance
            <span className="block text-slate-400">All Vehicles Welcome</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            While we specialize in premium European performance vehicles with dealership-level expertise, 
            our doors are open to <strong className="text-white">every make and model</strong>. From your daily driver to the most exotic supercars.
          </p>
        </div>

        {/* Premium Brands Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 mb-12">
          {premiumBrands.map((brand, index) => (
            <Card 
              key={index}
              className="p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-slate-600 bg-slate-800 hover:bg-slate-750"
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <div className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 bg-slate-700 border border-slate-600">
                <img 
                  src={brand.image} 
                  alt={`${brand.name} logo`}
                  className="w-12 h-12 object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.parentElement?.querySelector('.fallback-text') as HTMLElement;
                    if (fallback) fallback.style.display = 'block';
                  }}
                />
                <span className="fallback-text hidden text-slate-300 font-bold text-xs">{brand.name.charAt(0)}</span>
              </div>
              <h3 className="font-bold text-white mb-2 text-sm">{brand.name}</h3>
              <p className="text-xs text-slate-400">{brand.specialty}</p>
            </Card>
          ))}
        </div>

        {/* All Vehicles Welcome Section */}
        <div className="bg-slate-800 rounded-2xl p-8 text-center border border-slate-600" data-aos="fade-up" data-aos-delay="200">
          <h3 className="text-2xl font-bold text-white mb-4">
            Every Vehicle Deserves Expert Care
          </h3>
          <p className="text-lg text-slate-300 mb-6 max-w-2xl mx-auto">
            Toyota • Honda • Ford • Holden • Mazda • Subaru • Nissan • Hyundai • Kia
            <span className="block mt-2 font-medium text-white">+ Every Other Make & Model</span>
          </p>
          <div className="inline-block bg-white text-slate-900 px-6 py-3 rounded-full text-sm font-medium hover:bg-slate-100 transition-colors">
            Same Premium Care • Transparent Pricing • No Exceptions
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarBrands;
