import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, ArrowLeft, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";

const Maserati = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const navigate = useNavigate();

  const handlePhoneCall = () => {
    window.location.href = 'tel:+61394676328';
  };

  const services = [
    "Italian Excellence Service",
    "Quattroporte Luxury Care", 
    "Ghibli Performance Tuning",
    "Levante SUV Specialists",
    "V6 & V8 Engine Service",
    "Luxury Interior Care",
    "Modena Craftsmanship",
    "Performance Optimization"
  ];

  return (
    <>
      <Header />
      
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden pt-20">
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

        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=2560&q=80')`
          }}
        />
        
        <div className="absolute inset-0 bg-black/70">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 py-16 lg:py-20 pt-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium border border-white/20">
                Italian Excellence Specialists
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="block text-white">MASERATI</span>
                <span className="block bg-gradient-to-r from-blue-400 to-yellow-400 bg-clip-text text-transparent">
                  EXCELLENCE
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-slate-300 leading-relaxed">
                Audace in corsa. Experience Italian excellence automotive service 
                that honors Maserati's century of luxury and performance heritage.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  onClick={() => setIsBookingModalOpen(true)}
                  className="bg-blue-700 hover:bg-blue-800 text-white text-lg px-8 py-6 rounded-xl font-semibold shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Book Maserati Service
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

            <div className="flex justify-center lg:justify-end">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
                <img 
                  src="/cars/MASERATI.png" 
                  alt="Maserati Logo"
                  className="w-64 h-64 object-contain filter drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
              Maserati Italian Excellence
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              From Modena's racing heritage to luxury grand touring, 
              our Italian excellence specialists understand the passion behind every Maserati.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-slate-700 p-6 rounded-xl border border-slate-600 hover:border-blue-500 transition-all duration-300 group"
              >
                <CheckCircle className="w-8 h-8 text-blue-400 mb-4 group-hover:text-blue-300 transition-colors" />
                <h3 className="font-semibold text-white mb-2">{service}</h3>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center bg-slate-700 rounded-2xl p-12 border border-slate-600">
            <h3 className="text-3xl font-bold text-white mb-4">
              Italian Passion & Precision
            </h3>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
              Your Maserati represents over a century of Italian automotive passion and excellence. 
              Our service honors that distinguished Modena heritage.
            </p>
            <Button 
              size="lg"
              onClick={() => setIsBookingModalOpen(true)}
              className="bg-blue-700 hover:bg-blue-800 text-white text-lg px-12 py-6 rounded-xl font-semibold"
            >
              Book Your Maserati Service
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

export default Maserati; 