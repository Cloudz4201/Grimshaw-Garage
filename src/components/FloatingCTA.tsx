
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, X } from "lucide-react";

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 600);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePhoneCall = () => {
    window.location.href = 'tel:+61394676328';
  };

  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isMinimized ? (
        <Button
          onClick={() => setIsMinimized(false)}
          className="bg-slate-900 text-white hover:bg-slate-800 rounded-full w-14 h-14 shadow-2xl transform hover:scale-110 transition-all duration-300"
        >
          <Phone className="w-6 h-6" />
        </Button>
      ) : (
        <div className="bg-slate-900 text-white p-4 rounded-2xl shadow-2xl max-w-sm transform hover:scale-105 transition-all duration-300 border border-slate-700">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-bold text-lg">Book Your Service</h3>
            <button
              onClick={() => setIsMinimized(true)}
              className="text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <p className="text-slate-300 text-sm mb-4">
            Ready for dealership-level care? Call us now or request a callback.
          </p>
          
          <div className="space-y-2">
            <Button 
              onClick={handlePhoneCall}
              className="w-full bg-white text-slate-900 hover:bg-slate-100 font-semibold"
            >
              <Phone className="mr-2 h-4 w-4" />
              (03) 9467 6328
            </Button>
            <Button 
              variant="outline" 
              onClick={scrollToContact}
              className="w-full border-white/50 text-white hover:bg-white hover:text-slate-900 backdrop-blur-sm text-sm bg-transparent"
            >
              Request Callback
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FloatingCTA;
