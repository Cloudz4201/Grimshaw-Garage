import { useState } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { 
  Phone, 
  Monitor, 
  Smartphone, 
  Wifi, 
  CheckCircle,
  Settings,
  Camera,
  Navigation,
  Bluetooth,
  Radio,
  Shield,
  Zap
} from "lucide-react";
import BookingModal from "@/components/BookingModal";

const DigitalServices = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handlePhoneCall = () => {
    window.location.href = 'tel:+61394676328';
  };

  const digitalServices = [
    {
      icon: Monitor,
      title: "Infotainment System Upgrades",
      description: "Advanced display systems, touchscreen interfaces, and multimedia entertainment solutions for modern vehicles.",
      features: ["Touchscreen displays", "Apple CarPlay/Android Auto", "Navigation systems", "Media integration"],
      popular: true
    },
    {
      icon: Camera,
      title: "Camera & Parking Systems",
      description: "Professional installation of dash cams, parking cameras, and 360-degree surround view systems.",
      features: ["Dash cam installation", "Reverse cameras", "360° camera systems", "Parking sensors"],
      popular: true
    },
    {
      icon: Smartphone,
      title: "Smartphone Integration",
      description: "Seamless smartphone connectivity with wireless charging, mirroring, and hands-free functionality.",
      features: ["Wireless Apple CarPlay", "Android Auto", "Wireless charging pads", "Phone mirroring"],
      popular: false
    },
    {
      icon: Navigation,
      title: "GPS & Navigation Solutions",
      description: "Professional GPS navigation system installation and updates for all vehicle types.",
      features: ["GPS navigation", "Map updates", "Traffic integration", "Voice guidance"],
      popular: false
    },
    {
      icon: Bluetooth,
      title: "Bluetooth & Connectivity",
      description: "Wireless connectivity solutions including Bluetooth adapters and Wi-Fi hotspot installation.",
      features: ["Bluetooth adapters", "Hands-free calling", "Audio streaming", "Wi-Fi hotspots"],
      popular: false
    },
    {
      icon: Radio,
      title: "Audio System Modernization",
      description: "Upgrade legacy audio systems with modern digital solutions while maintaining factory aesthetics.",
      features: ["Digital radio upgrades", "Amplifier installation", "Speaker upgrades", "Sound optimization"],
      popular: true
    },
    {
      icon: Shield,
      title: "Vehicle Security Systems",
      description: "Advanced security solutions including alarms, immobilizers, and remote monitoring systems.",
      features: ["Alarm systems", "Remote start", "GPS tracking", "Immobilizers"],
      popular: false
    },
    {
      icon: Zap,
      title: "Electronic Diagnostics",
      description: "Advanced electronic system diagnostics and software updates for modern vehicle computers.",
      features: ["ECU diagnostics", "Software updates", "Module programming", "System calibration"],
      popular: true
    }
  ];

  const vehicleTypes = [
    "European Luxury Vehicles (BMW, Mercedes, Audi, Porsche)",
    "Japanese Vehicles (Toyota, Honda, Nissan, Mazda)",
    "American Vehicles (Ford, Holden, Chrysler)",
    "Electric & Hybrid Vehicles (Tesla, BMW i-Series, Prius)",
    "Commercial Vehicles & Fleet Solutions"
  ];

  return (
    <>
      <SEOHead 
        title="Digital Services & Technology Upgrades"
        description="Professional automotive digital services in Melbourne. Infotainment upgrades, camera systems, smartphone integration, GPS navigation, and modern tech solutions for all vehicles."
        keywords="car technology upgrade Melbourne, infotainment installation, dash cam installation, Apple CarPlay Android Auto, GPS navigation, Bluetooth upgrade, digital car services, automotive electronics"
        canonicalUrl="https://grimshawautomotive.com/digital-services"
      />
      
      <Header />
      
      <main className="min-h-screen bg-slate-900">
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center bg-blue-600/20 px-4 py-2 rounded-full text-sm font-medium mb-6 text-blue-300 border border-blue-600/30">
                <Monitor className="w-4 h-4 mr-2" />
                Digital Automotive Solutions
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white leading-tight">
                Digital Services &
                <span className="block text-blue-400">Technology Upgrades</span>
              </h1>
              
              <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-3xl mx-auto">
                Transform your vehicle with cutting-edge digital technology. From infotainment systems to 
                camera installations, we bring modern convenience and safety to any vehicle.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  onClick={() => setIsBookingModalOpen(true)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg font-semibold"
                >
                  <Monitor className="mr-2 h-5 w-5" />
                  Book Tech Upgrade
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

        {/* Services Section */}
        <section className="py-20 bg-slate-800">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
                Digital Technology Services
              </h2>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                Professional installation and integration of modern digital solutions 
                to enhance your driving experience and vehicle safety.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {digitalServices.map((service, index) => (
                <div key={index} className={`bg-slate-700 p-6 rounded-xl border border-slate-600 hover:border-blue-500/50 transition-colors ${service.popular ? 'ring-2 ring-blue-500/30' : ''}`}>
                  {service.popular && (
                    <div className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full inline-block mb-4">
                      POPULAR
                    </div>
                  )}
                  
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

        {/* Vehicle Compatibility Section */}
        <section className="py-16 bg-slate-900">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
                Compatible with All Vehicles
              </h2>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                Our digital services work with vehicles of all makes, models, and ages. 
                We specialize in seamless integration that maintains your vehicle's aesthetics.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {vehicleTypes.map((type, index) => (
                <div key={index} className="bg-slate-800 p-6 rounded-xl border border-slate-700 text-center">
                  <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white">{type}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-slate-800">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
                Why Choose Our Digital Services?
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="bg-blue-600/20 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Professional Installation</h3>
                <p className="text-slate-300">Expert technicians with years of experience in automotive electronics and digital systems.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-600/20 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Quality Guarantee</h3>
                <p className="text-slate-300">All installations come with comprehensive warranty and ongoing support for peace of mind.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-600/20 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Wifi className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Latest Technology</h3>
                <p className="text-slate-300">We stay current with the latest automotive technology trends and manufacturer updates.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-slate-900">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
                Ready to Upgrade Your Vehicle's Technology?
              </h2>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Contact us to discuss your digital upgrade needs. Our experts will recommend 
                the perfect technology solutions for your vehicle and driving style.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  onClick={() => setIsBookingModalOpen(true)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg font-semibold"
                >
                  <Smartphone className="mr-2 h-5 w-5" />
                  Book Consultation
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  onClick={handlePhoneCall}
                  className="border-blue-500/50 text-blue-300 hover:bg-blue-600 hover:text-white px-8 py-6 text-lg font-semibold bg-transparent"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Get Quote
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

export default DigitalServices; 