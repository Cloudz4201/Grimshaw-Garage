
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";
import BookingModal from "./BookingModal";

const Hero = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePhoneCall = () => {
    window.location.href = 'tel:+61394676328';
  };

  return (
    <>
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden w-full max-w-full">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat max-w-full"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1580654712603-eb43273aff33?w=2560&q=80')`
          }}
        />
        
        {/* Background overlays */}
        <div className="absolute inset-0 bg-black/60 max-w-full">
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 max-w-full"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 py-20 lg:py-32 pt-32 w-full max-w-full">
          <div className="max-w-4xl w-full">
            {/* Dutton Branding */}
            <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/20 max-w-full">
              <span className="break-words">Dutton One • Dutton Automotive • Dutton Garage</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight break-words">
              <span className="block text-white">GRIMSHAW</span>
              <span className="block bg-gradient-to-r from-slate-300 to-slate-100 bg-clip-text text-transparent">
                AUTOMOTIVE
              </span>
            </h1>
            
            <p className="text-2xl lg:text-3xl font-light mb-4 text-slate-300 break-words">
              Precision. Performance. Peace of Mind.
            </p>
            
            <p className="text-lg lg:text-xl mb-12 text-slate-400 max-w-2xl leading-relaxed break-words">
              Premium European performance expertise meets everyday reliability. 
              Specializing in high-end Euro vehicles with dealership-level care for <strong>every make and model</strong>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <Button 
                size="lg" 
                onClick={() => setIsBookingModalOpen(true)}
                className="bg-white text-slate-900 hover:bg-slate-100 text-lg px-8 py-6 rounded-xl font-semibold shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer w-full sm:w-auto"
              >
                <Phone className="mr-2 h-5 w-5" />
                Book Service Today
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={scrollToContact}
                className="border-white/50 text-white hover:bg-white hover:text-slate-900 backdrop-blur-sm text-lg px-8 py-6 rounded-xl font-semibold transition-all duration-300 cursor-pointer bg-transparent w-full sm:w-auto"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Porsche Retrofitting
              </Button>
            </div>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-white/5 rounded-full blur-xl hidden lg:block"></div>
        <div className="absolute bottom-40 right-40 w-20 h-20 bg-white/5 rounded-full blur-lg hidden lg:block"></div>
      </section>

      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
      />
    </>
  );
};

export default Hero;
