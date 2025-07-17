import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { trackServicePageVisit, trackPhoneClick, trackBookingModalOpen } from "@/lib/analytics";
import { 
  Phone, 
  Wrench, 
  Camera, 
  Navigation, 
  Shield, 
  CheckCircle,
  Settings,
  Car,
  Zap,
  Monitor,
  Gauge,
  Radio
} from "lucide-react";
import BookingModal from "@/components/BookingModal";

const PorscheRetrofitting = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  useEffect(() => {
    trackServicePageVisit('Porsche Retrofitting');
  }, []);

  const handlePhoneCall = () => {
    trackPhoneClick('+61394676328', 'porsche_retrofitting_page');
    window.location.href = 'tel:+61394676328';
  };

  const retrofitServices = [
    {
      icon: Camera,
      title: "360° Camera Systems",
      description: "Complete surround view camera integration with genuine Porsche OEM components and PCM display integration.",
      features: ["Front, rear & side cameras", "Bird's eye view display", "Dynamic parking guidelines", "Obstacle detection alerts"],
      price: "From $3,500"
    },
    {
      icon: Navigation,
      title: "Adaptive Cruise Control",
      description: "Factory-grade ACC with stop & go functionality, lane keeping assist, and traffic jam assist integration.",
      features: ["Radar sensor installation", "Steering wheel controls", "PCM integration", "Speed limit recognition"],
      price: "From $4,200"
    },
    {
      icon: Shield,
      title: "Lane Change Assist",
      description: "Blind spot monitoring with lane change assist using genuine Porsche components and software.",
      features: ["Side mirror indicators", "Radar sensors", "Warning signals", "Emergency steering assist"],
      price: "From $2,800"
    },
    {
      icon: Monitor,
      title: "Advanced Display Upgrades",
      description: "PCM system upgrades including larger displays, enhanced graphics, and additional functionality.",
      features: ["PCM 6.0 upgrades", "Digital instrument cluster", "Head-up display", "Smartphone integration"],
      price: "From $5,500"
    },
    {
      icon: Radio,
      title: "Premium Audio Systems",
      description: "Burmester and Bose premium audio system retrofitting with perfect acoustic calibration.",
      features: ["Premium speakers", "Amplifier upgrades", "Subwoofer integration", "Acoustic tuning"],
      price: "From $3,200"
    },
    {
      icon: Zap,
      title: "Performance Upgrades",
      description: "PASM suspension, sport exhaust, and performance package retrofitting with dealer-level programming.",
      features: ["PASM suspension", "Sport exhaust systems", "Performance air intake", "ECU optimization"],
      price: "From $6,000"
    }
  ];

  const compatibleModels = [
    { model: "911 (991/992)", years: "2012-2024", popular: ["360° Camera", "ACC", "Lane Assist"] },
    { model: "Cayenne", years: "2010-2024", popular: ["Camera Systems", "Audio Upgrades", "ACC"] },
    { model: "Macan", years: "2014-2024", popular: ["PCM Upgrades", "Camera", "Performance"] },
    { model: "Panamera", years: "2009-2024", popular: ["All Systems", "Premium Audio", "Display"] },
    { model: "Taycan", years: "2019-2024", popular: ["Camera", "Display", "Audio Upgrades"] },
    { model: "718 Boxster/Cayman", years: "2016-2024", popular: ["PCM", "Camera", "Audio"] }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Consultation & Assessment",
      description: "Comprehensive vehicle assessment and customization planning with our Porsche specialists."
    },
    {
      step: "2", 
      title: "Genuine Parts Sourcing",
      description: "We source only genuine Porsche OEM components to ensure perfect integration and warranty compliance."
    },
    {
      step: "3",
      title: "Professional Installation",
      description: "Factory-trained technicians perform the installation using Porsche-specific tools and procedures."
    },
    {
      step: "4",
      title: "System Programming",
      description: "Complete system programming and calibration using official Porsche diagnostic equipment."
    },
    {
      step: "5",
      title: "Quality Testing",
      description: "Comprehensive testing and validation to ensure all systems function perfectly and safely."
    }
  ];

  return (
    <>
      <SEOHead 
        title="Porsche Retrofitting Services"
        description="Professional Porsche retrofitting in Melbourne. Factory-level installation of 360° cameras, adaptive cruise control, lane assist, and premium upgrades using genuine OEM parts."
        keywords="Porsche retrofit Melbourne, Porsche 360 camera installation, Porsche adaptive cruise control, Porsche lane assist, Porsche PCM upgrade, genuine Porsche parts, Porsche modification Melbourne"
        canonicalUrl="https://grimshawautomotive.com/porsche-retrofitting"
      />
      
      <Header />
      
      <main className="min-h-screen bg-slate-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/page Cars/index-911-gt3-rs-kek_0.jpg')`
            }}
          />
          
          {/* Background overlays for blur and darkening effect */}
          <div className="absolute inset-0 bg-black/70">
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50 backdrop-blur-sm"></div>
          </div>
          
          <div className="relative z-10 container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center bg-orange-600/20 px-4 py-2 rounded-full text-sm font-medium mb-6 text-orange-300 border border-orange-600/30">
                <Wrench className="w-4 h-4 mr-2" />
                Factory-Level Porsche Retrofitting
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white leading-tight">
                Porsche Retrofitting
                <span className="block text-orange-400">Genuine OEM Upgrades</span>
              </h1>
              
              <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-3xl mx-auto">
                Transform your Porsche with factory-level retrofitting services. We specialize in genuine OEM upgrades 
                including 360° cameras, adaptive cruise control, premium audio, and advanced driver assistance systems.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  onClick={() => setIsBookingModalOpen(true)}
                  className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg font-semibold"
                >
                  <Car className="mr-2 h-5 w-5" />
                  Book Consultation
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  onClick={handlePhoneCall}
                  className="border-orange-500/50 text-orange-300 hover:bg-orange-600 hover:text-white px-8 py-6 text-lg font-semibold bg-transparent"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call (03) 9467 6328
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-slate-800">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
                Factory-Level Porsche Expertise
              </h2>
              <p className="text-lg text-slate-300">
                Our head technician's experience at prestigious Porsche dealerships ensures 
                your retrofitting is performed to the highest standards.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-orange-600/20 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-orange-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Genuine OEM Parts</h3>
                <p className="text-slate-300">Only authentic Porsche components for perfect integration and warranty compliance.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-orange-600/20 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-8 h-8 text-orange-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Factory Programming</h3>
                <p className="text-slate-300">Complete system programming using official Porsche diagnostic equipment.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-orange-600/20 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-orange-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Warranty Protection</h3>
                <p className="text-slate-300">All retrofits maintain your vehicle's warranty and dealer service history.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-slate-900">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
                Available Retrofit Services
              </h2>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                From advanced safety systems to luxury comfort features, we offer comprehensive 
                retrofitting solutions for all Porsche models.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {retrofitServices.map((service, index) => (
                <div key={index} className="bg-slate-800 p-8 rounded-xl border border-slate-700 hover:border-orange-500/50 transition-colors">
                  <div className="bg-orange-600/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-orange-400" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 text-white">{service.title}</h3>
                  <p className="text-slate-300 mb-6 leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-slate-400 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="bg-orange-600/20 px-4 py-2 rounded-lg">
                    <p className="text-orange-300 font-semibold text-center">{service.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compatible Models Section */}
        <section className="py-16 bg-slate-800">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
                Compatible Porsche Models
              </h2>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                We provide retrofitting services for all modern Porsche models with model-specific 
                expertise and genuine parts availability.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {compatibleModels.map((model, index) => (
                <div key={index} className="bg-slate-700 p-6 rounded-xl border border-slate-600">
                  <h3 className="text-xl font-bold text-white mb-2">{model.model}</h3>
                  <p className="text-slate-400 mb-4 text-sm">Model Years: {model.years}</p>
                  
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-slate-300">Popular Retrofits:</p>
                    <div className="flex flex-wrap gap-2">
                      {model.popular.map((retrofit, idx) => (
                        <span key={idx} className="bg-orange-600/20 px-2 py-1 rounded text-orange-300 text-xs">
                          {retrofit}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-slate-900">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
                Our Retrofitting Process
              </h2>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                Every retrofit follows our proven 5-step process to ensure perfect installation 
                and seamless integration with your Porsche's existing systems.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="bg-orange-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">{step.step}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Guarantee Section */}
        <section className="py-16 bg-slate-800">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-orange-600/20 p-8 rounded-2xl border border-orange-600/30">
                <Shield className="w-16 h-16 text-orange-400 mx-auto mb-6" />
                <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-white">
                  Our Retrofit Guarantee
                </h2>
                <p className="text-lg text-slate-300 leading-relaxed">
                  Every retrofit comes with our comprehensive guarantee including parts warranty, 
                  installation guarantee, and post-installation support. Your Porsche's factory warranty 
                  remains intact, and all work is documented in dealer systems.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-slate-900">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
                Ready to Upgrade Your Porsche?
              </h2>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Contact us for a personalized consultation and quote. Our experts will assess your vehicle 
                and recommend the perfect retrofitting options for your needs and budget.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  onClick={() => setIsBookingModalOpen(true)}
                  className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg font-semibold"
                >
                  <Gauge className="mr-2 h-5 w-5" />
                  Schedule Consultation
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  onClick={handlePhoneCall}
                  className="border-orange-500/50 text-orange-300 hover:bg-orange-600 hover:text-white px-8 py-6 text-lg font-semibold bg-transparent"
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

export default PorscheRetrofitting; 