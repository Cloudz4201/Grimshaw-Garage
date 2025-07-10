import { X } from "lucide-react";
import { useEffect } from "react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal = ({ isOpen, onClose }: BookingModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
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
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl mx-4 h-[90vh] max-h-[800px] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-200 bg-slate-50">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Book Your Service</h2>
            <p className="text-slate-600 mt-1">Schedule your appointment with Grimshaw Automotive</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-slate-200 transition-colors text-slate-600 hover:text-slate-900"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        {/* Iframe Container */}
        <div className="flex-1 p-0 overflow-hidden">
          <iframe 
            src="https://www.mechanicdesk.com.au/online-booking/a0b2800904275477787f88e7b7f2bfe3909390dc"
            width="100%"
            height="100%"
            frameBorder="0"
            className="w-full h-full"
            title="Book Service - Grimshaw Automotive"
            loading="lazy"
          />
        </div>
        
        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 text-center">
          <p className="text-sm text-slate-600">
            Need help? Call us directly: <a href="tel:+61394676328" className="font-semibold text-slate-900 hover:underline">(03) 9467 6328</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookingModal; 