import { X } from "lucide-react";
import { useEffect } from "react";
import { trackBookingModalClose, trackFormStart, trackPhoneClick } from "@/lib/analytics";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal = ({ isOpen, onClose }: BookingModalProps) => {
  useEffect(() => {
    // Better scroll management using CSS classes
    if (isOpen) {
      // Add class to body to prevent scroll
      document.body.classList.add('modal-open');
      // Track form start when modal opens
      trackFormStart('booking_form', 'modal');
    } else {
      // Remove class to restore scroll
      document.body.classList.remove('modal-open');
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal - Responsive design for all screens */}
      <div className="relative bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl w-full sm:max-w-4xl max-h-[90vh] sm:max-h-[85vh] flex flex-col m-0 sm:m-4 animate-in slide-in-from-bottom sm:slide-in-from-bottom-0 duration-300">
        {/* Header - Responsive padding */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-slate-200 bg-slate-50 rounded-t-2xl sm:rounded-t-2xl">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Book Your Service</h2>
            <p className="text-sm sm:text-base text-slate-600 mt-1">Schedule your appointment with Grimshaw Automotive</p>
          </div>
          <button
            onClick={() => {
              trackBookingModalClose();
              onClose();
            }}
            className="p-2 rounded-full hover:bg-slate-200 transition-colors text-slate-600 hover:text-slate-900 touch-target"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>
        
        {/* Iframe Container - Responsive height */}
        <div className="flex-1 overflow-hidden">
          <iframe 
            src="https://www.mechanicdesk.com.au/online-booking/a0b2800904275477787f88e7b7f2bfe3909390dc"
            width="100%"
            height="100%"
            frameBorder="0"
            className="w-full h-full min-h-[400px] sm:min-h-[500px]"
            title="Book Service - Grimshaw Automotive"
            loading="lazy"
            allow="geolocation"
          />
        </div>
        
        {/* Footer - Mobile-optimized */}
        <div className="p-3 sm:p-4 bg-slate-50 border-t border-slate-200 text-center rounded-b-none sm:rounded-b-2xl">
          <p className="text-xs sm:text-sm text-slate-600">
            Need help? Call us directly: 
            <a 
              href="tel:+61394676328" 
              onClick={() => trackPhoneClick('+61394676328', 'booking_modal')}
              className="font-semibold text-slate-900 hover:underline ml-1 whitespace-nowrap"
            >
              (03) 9467 6328
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookingModal; 