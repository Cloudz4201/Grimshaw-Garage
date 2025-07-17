import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { trackServicePageVisit, trackPhoneClick, trackBookingModalOpen } from "@/lib/analytics";
import { 
  Phone, 
  Zap, 
  Battery, 
  Shield, 
  CheckCircle,
  Wrench,
  Settings,
  AlertTriangle,
  Car,
  Gauge,
  CircuitBoard
} from "lucide-react";
import BookingModal from "@/components/BookingModal";

const ElectricVehicleServicing = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  useEffect(() => {
    trackServicePageVisit('Electric Vehicle Servicing');
  }, []);

  const handlePhoneCall = () => {
    trackPhoneClick('+61394676328', 'electric_vehicle_page');
    window.location.href = 'tel:+61394676328';
  };

  const services = [
    {
      icon: Battery,
      title: "Battery System Diagnostics",
      description: "Comprehensive battery health checks, capacity testing, and performance analysis for all EV and hybrid systems.",
      features: ["Battery health assessment", "Capacity testing", "Thermal management check", "Cell balancing verification"]
    },
    {
      icon: Zap,
      title: "Charging System Service",
      description: "Complete charging system maintenance including onboard chargers, DC fast charging systems, and home charging solutions.",
      features: ["Charging port inspection", "Onboard charger diagnostics", "Cable and connector service", "Fast charging compatibility"]
    },
    {
      icon: CircuitBoard,
      title: "High Voltage System Maintenance",
      description: "Safe and certified high voltage system servicing including inverters, converters, and motor controllers.",
      features: ["HV safety protocols", "Inverter diagnostics", "Motor controller service", "HV cable inspection"]
    },
    {
      icon: Settings,
      title: "Hybrid System Integration",
      description: "Specialized service for hybrid vehicles combining traditional and electric powertrains for optimal performance.",
      features: ["Engine-motor coordination", "Regenerative braking service", "Hybrid battery maintenance", "System optimization"]
    },
    {
      icon: Gauge,
      title: "Performance Optimization",
      description: "Software updates, efficiency tuning, and performance enhancements for electric and hybrid vehicles.",
      features: ["Software updates", "Range optimization", "Performance tuning", "Energy efficiency analysis"]
    },
    {
      icon: Shield,
      title: "Safety Systems Check",
      description: "Comprehensive safety system verification including emergency shutdown, isolation protocols, and safety interlocks.",
      features: ["Emergency systems test", "Safety interlock verification", "Isolation protocol check", "Warning system diagnostics"]
    }
  ];

  const certifications = [
    "Hybrid & Electric Vehicle Specialist Certification",
    "High Voltage Safety Training",
    "Manufacturer-Specific EV Training (Tesla, BMW, Mercedes, Audi)",
    "Battery Management System Specialist",
    "Charging Infrastructure Certified",
    "Electric Vehicle Safety Institute Certified"
  ];

  const vehicleTypes = [
    { brand: "Tesla", models: "Model S, 3, X, Y, Cybertruck", specialty: "Autopilot & Supercharging" },
    { brand: "BMW", models: "i3, i4, iX, i7, X5 xDrive45e", specialty: "BMW iDrive & Efficient Dynamics" },
    { brand: "Mercedes-Benz", models: "EQS, EQE, EQC, EQA, C300e", specialty: "MBUX & EV Services" },
    { brand: "Audi", models: "e-tron GT, Q4 e-tron, A3 e-tron", specialty: "Virtual Cockpit & Matrix LED" },
    { brand: "Porsche", models: "Taycan, Cayenne E-Hybrid, Panamera E-Hybrid", specialty: "Performance EV Systems" },
    { brand: "Hybrid Vehicles", models: "Toyota Prius, Honda Insight, Lexus Hybrids", specialty: "Traditional Hybrid Systems" }
  ];

  return (
    <>
      <SEOHead 
        title="Electric & Hybrid Vehicle Servicing"
        description="Expert electric and hybrid vehicle servicing in Melbourne. Fully certified technicians for all EV and hybrid systems. Tesla, BMW, Mercedes, Audi specialists."
        keywords="electric vehicle service Melbourne, EV repair, hybrid car service, Tesla service, BMW electric service, electric car maintenance, hybrid vehicle repair, EV battery service, electric vehicle specialist"
        canonicalUrl="https://grimshawautomotive.com/electric-vehicle-servicing"
      />
      
      <Header />
      
      <main className="min-h-screen bg-slate-900">
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center bg-blue-600/20 px-4 py-2 rounded-full text-sm font-medium mb-6 text-blue-300 border border-blue-600/30">
                <Zap className="w-4 h-4 mr-2" />
                Certified EV & Hybrid Specialists
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white leading-tight">
                Electric & Hybrid Vehicle
                <span className="block text-blue-400">Expert Servicing</span>
              </h1>
              
              <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-3xl mx-auto">
                Our technicians are fully certified in all hybrid and electric vehicle systems servicing. 
                From Tesla to traditional hybrids, we provide comprehensive EV care with cutting-edge diagnostic tools.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  onClick={() => setIsBookingModalOpen(true)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg font-semibold"
                >
                  <Zap className="mr-2 h-5 w-5" />
                  Book EV Service
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  onClick={handlePhoneCall}
                  className="border-blue-500/50 text-blue-300 hover:bg-blue-600 hover:text-white px-8 py-6 text-lg font-semibold bg-transparent"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call (03) 9467 6328
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="py-16 bg-slate-800">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
                Fully Certified EV Technicians
              </h2>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                Our team holds the highest certifications in electric and hybrid vehicle technology, 
                ensuring safe and expert service for your valuable investment.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-slate-700 p-6 rounded-xl border border-slate-600">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-white mb-2">{cert}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-slate-900">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
                Comprehensive EV & Hybrid Services
              </h2>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                From routine maintenance to complex high-voltage repairs, we cover every aspect 
                of electric and hybrid vehicle care.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-slate-800 p-8 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-colors">
                  <div className="bg-blue-600/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-blue-400" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 text-white">{service.title}</h3>
                  <p className="text-slate-300 mb-6 leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-slate-400 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vehicle Types Section */}
        <section className="py-16 bg-slate-800">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
                All Electric & Hybrid Brands Welcome
              </h2>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                From cutting-edge Tesla technology to traditional hybrid systems, 
                we service all makes and models with manufacturer-level expertise.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {vehicleTypes.map((vehicle, index) => (
                <div key={index} className="bg-slate-700 p-6 rounded-xl border border-slate-600">
                  <h3 className="text-xl font-bold text-white mb-2">{vehicle.brand}</h3>
                  <p className="text-slate-300 mb-3 text-sm">{vehicle.models}</p>
                  <div className="bg-blue-600/20 px-3 py-1 rounded-full text-blue-300 text-xs font-medium inline-block">
                    {vehicle.specialty}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Safety Warning Section */}
        <section className="py-16 bg-red-900/20 border-y border-red-500/30">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center mb-6">
                <AlertTriangle className="w-12 h-12 text-red-400" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-white">
                High Voltage Safety First
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed">
                Electric and hybrid vehicles operate with high voltage systems that require specialized training and equipment. 
                Our certified technicians follow strict safety protocols and use professional-grade isolation equipment 
                to ensure safe service of your vehicle's electrical systems.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-slate-900">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
                Ready to Service Your Electric or Hybrid Vehicle?
              </h2>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Trust your EV or hybrid to our certified specialists. Book your service today 
                and experience the difference professional electric vehicle care makes.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  onClick={() => setIsBookingModalOpen(true)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg font-semibold"
                >
                  <Car className="mr-2 h-5 w-5" />
                  Book Service Now
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  onClick={handlePhoneCall}
                  className="border-blue-500/50 text-blue-300 hover:bg-blue-600 hover:text-white px-8 py-6 text-lg font-semibold bg-transparent"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call for Quote
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      
      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
      />
    </>
  );
};

export default ElectricVehicleServicing; 