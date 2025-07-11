import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, ArrowLeft, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";

const Porsche = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const navigate = useNavigate();

  const handlePhoneCall = () => {
    window.location.href = 'tel:+61394676328';
  };

  const services = [
    "Factory Retrofitting & Technology Upgrades",
    "360° Camera System Installation", 
    "Adaptive Cruise Control Installation",
    "Lane Change Assist Integration",
    "Blind Spot Detection Systems",
    "Performance Diagnostics & Tuning",
    "Scheduled Maintenance & Service",
    "Electrical System Repairs"
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden pt-20">
        {/* Back Button */}
        <div className="absolute top-24 left-6 z-20">
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigate('/')}
            className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white bg-transparent"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </div>

        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=2560&q=80')`
          }}
        />
        
        {/* Background overlays */}
        <div className="absolute inset-0 bg-black/70">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 py-20 lg:py-32 pt-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium border border-white/20">
                Factory Retrofitting Specialists
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="block text-white">PORSCHE</span>
                <span className="block bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                  SPECIALISTS
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-slate-300 leading-relaxed">
                Ex-Dutton Head Technician bringing dealership-level expertise and 
                factory retrofitting capabilities to your Porsche.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  onClick={() => setIsBookingModalOpen(true)}
                  className="bg-red-600 hover:bg-red-700 text-white text-lg px-8 py-6 rounded-xl font-semibold shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Book Porsche Service
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={handlePhoneCall}
                  className="border-white/50 text-white hover:bg-white hover:text-slate-900 backdrop-blur-sm text-lg px-8 py-6 rounded-xl font-semibold transition-all duration-300 bg-transparent"
                >
                  Call (03) 9467 6328
                </Button>
              </div>
            </div>

            {/* Right Content - Porsche Logo */}
            <div className="flex justify-center lg:justify-end">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
                <img 
                  src="/cars/PORCHE.png" 
                  alt="Porsche Logo"
                  className="w-64 h-64 object-contain filter drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
              Porsche Services & Retrofitting
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              From routine maintenance to cutting-edge technology retrofits, 
              we provide comprehensive Porsche care with genuine expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-slate-700 p-6 rounded-xl border border-slate-600 hover:border-red-500 transition-all duration-300 group"
              >
                <CheckCircle className="w-8 h-8 text-red-400 mb-4 group-hover:text-red-300 transition-colors" />
                <h3 className="font-semibold text-white mb-2">{service}</h3>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center bg-slate-700 rounded-2xl p-12 border border-slate-600">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Enhance Your Porsche?
            </h3>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
              Experience the difference of working with ex-Dutton technicians who understand 
              your Porsche inside and out.
            </p>
            <Button 
              size="lg"
              onClick={() => setIsBookingModalOpen(true)}
              className="bg-red-600 hover:bg-red-700 text-white text-lg px-12 py-6 rounded-xl font-semibold"
            >
              Book Your Porsche Service
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      
      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
      />
    </>
  );
};

export default Porsche; 