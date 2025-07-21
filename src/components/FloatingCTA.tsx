
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, X, Calendar } from "lucide-react";
import BookingModal from "./BookingModal";
import { trackPhoneClick, trackBookingModalOpen } from "@/lib/analytics";

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 300px instead of 600px for better mobile experience
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePhoneCall = () => {
    trackPhoneClick('+61394676328', 'floating_cta');
    window.location.href = 'tel:+61394676328';
  };

  if (!isVisible) return null;

  return (
    <>
      <div className="fixed bottom-4 right-4 z-50">
        {isMinimized ? (
          <Button
            onClick={() => setIsMinimized(false)}
            className="bg-slate-900 text-white hover:bg-slate-800 rounded-full w-12 h-12 shadow-lg transition-all duration-200"
          >
            <Phone className="w-5 h-5" />
          </Button>
        ) : (
          <div className="bg-slate-900 text-white p-4 rounded-lg shadow-xl max-w-xs border border-slate-700">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-bold text-sm">Book Service</h3>
              <button
                onClick={() => setIsMinimized(true)}
                className="text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            
            <p className="text-slate-300 text-xs mb-3">
              Ready for expert automotive care?
            </p>
            
            <div className="space-y-2">
              <Button 
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  trackBookingModalOpen('floating_cta');
                  setIsBookingModalOpen(true);
                }}
                type="button"
                className="w-full bg-white text-slate-900 hover:bg-slate-100 font-semibold text-sm py-2"
              >
                <Calendar className="mr-2 h-3 w-3" />
                Book Online
              </Button>
              <Button 
                onClick={handlePhoneCall}
                variant="outline" 
                className="w-full border-white/50 text-white hover:bg-white hover:text-slate-900 text-xs py-2 bg-transparent"
              >
                <Phone className="mr-2 h-3 w-3" />
                (03) 9467 6328
              </Button>
            </div>
          </div>
        )}
      </div>

      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
      />
    </>
  );
};

export default FloatingCTA;
