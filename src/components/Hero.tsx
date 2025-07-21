
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Zap, Wrench } from "lucide-react";
import { useNavigate } from "react-router-dom";
import BookingModal from "./BookingModal";
import { trackPhoneClick, trackBookingModalOpen, trackNavigationClick, trackScrollToSection } from "@/lib/analytics";

const Hero = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToContact = () => {
    trackScrollToSection('contact');
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToDigitalRecords = () => {
    trackScrollToSection('digital-service-records');
    const digitalRecordsSection = document.querySelector('#digital-service-records');
    if (digitalRecordsSection) {
      digitalRecordsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleElectricServicing = () => {
    trackNavigationClick('Electric Vehicle Servicing', 'hero');
    navigate('/electric-vehicle-servicing');
  };

  const handlePorscheRetrofitting = () => {
    trackNavigationClick('Porsche Retrofitting', 'hero');
    navigate('/porsche-retrofitting');
  };

  const handlePhoneCall = () => {
    trackPhoneClick('+61394676328', 'hero');
    window.location.href = 'tel:+61394676328';
  };

  return (
    <>
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1580654712603-eb43273aff33?w=2560&q=80')`
          }}
        />
        
        {/* Background overlays */}
        <div className="absolute inset-0 bg-black/60">
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-12 sm:pt-16 lg:pt-20 min-h-screen flex items-center">
          <div className="w-full max-w-5xl">
            {/* Main heading with responsive typography */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
              <span className="block text-white">Precision. Performance.</span>
              <span className="block bg-gradient-to-r from-slate-300 to-slate-100 bg-clip-text text-transparent mt-2">
                Peace of Mind.
              </span>
            </h1>
            
            {/* Subheading with responsive text */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-10 lg:mb-12 text-slate-300 max-w-3xl leading-relaxed">
              Premium European performance expertise meets everyday reliability. 
              Specializing in high-end Euro vehicles with dealership-level care for <strong className="text-white">every make and model</strong>.
            </p>
            
            {/* Responsive button layout */}
            <div className="w-full space-y-4">
              {/* Primary CTA buttons - Stack on mobile, side-by-side on larger screens */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Button 
                  size="lg" 
                  onClick={() => {
                    trackBookingModalOpen('hero');
                    setIsBookingModalOpen(true);
                  }}
                  className="bg-white text-slate-900 hover:bg-slate-100 text-base sm:text-lg px-6 py-4 sm:px-8 sm:py-6 rounded-xl font-semibold shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer w-full min-h-[48px]"
                >
                  <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  Book Service Today
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={scrollToDigitalRecords}
                  className="border-white/50 text-white hover:bg-white hover:text-slate-900 backdrop-blur-sm text-base sm:text-lg px-6 py-4 sm:px-8 sm:py-6 rounded-xl font-semibold transition-all duration-300 cursor-pointer bg-transparent w-full min-h-[48px]"
                >
                  <MessageCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="hidden sm:inline">Digital Service Updating</span>
                  <span className="sm:hidden">Digital Services</span>
                </Button>
              </div>
              
              {/* Secondary service buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={handleElectricServicing}
                  className="border-blue-500/50 text-blue-300 hover:bg-blue-600 hover:text-white backdrop-blur-sm text-base sm:text-lg px-6 py-4 sm:px-8 sm:py-6 rounded-xl font-semibold transition-all duration-300 cursor-pointer bg-transparent w-full min-h-[48px]"
                >
                  <Zap className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="hidden sm:inline">Electric Car Servicing</span>
                  <span className="sm:hidden">EV Service</span>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={handlePorscheRetrofitting}
                  className="border-orange-500/50 text-orange-300 hover:bg-orange-600 hover:text-white backdrop-blur-sm text-base sm:text-lg px-6 py-4 sm:px-8 sm:py-6 rounded-xl font-semibold transition-all duration-300 cursor-pointer bg-transparent w-full min-h-[48px]"
                >
                  <Wrench className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="hidden sm:inline">Porsche Retrofitting</span>
                  <span className="sm:hidden">Porsche Retrofit</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating elements - Hidden on mobile for cleaner look */}
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
