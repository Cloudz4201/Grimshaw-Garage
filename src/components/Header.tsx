import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import BookingModal from "./BookingModal";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handlePhoneCall = () => {
    window.location.href = 'tel:+61394676328';
  };

  const scrollToSection = (sectionId: string) => {
    // If we're not on the homepage, navigate to homepage first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const section = document.querySelector(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // We're on the homepage, just scroll
      const section = document.querySelector(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const handleHomeClick = () => {
    navigate('/');
    setIsMenuOpen(false);
    // Scroll to top of page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-slate-900/95 backdrop-blur-md border-b border-slate-700">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button 
              onClick={handleHomeClick} 
              className="text-2xl font-bold text-white hover:text-slate-200 transition-colors cursor-pointer"
              aria-label="Go to homepage"
            >
              GRIMSHAW
              <span className="text-slate-400 block text-xs font-normal tracking-wider">AUTOMOTIVE</span>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <button 
                onClick={handleHomeClick}
                className="text-slate-300 hover:text-white transition-colors cursor-pointer"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('#about')}
                className="text-slate-300 hover:text-white transition-colors cursor-pointer"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('#services')}
                className="text-slate-300 hover:text-white transition-colors cursor-pointer"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('#contact')}
                className="text-slate-300 hover:text-white transition-colors cursor-pointer"
              >
                Contact
              </button>
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                onClick={handlePhoneCall}
                className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white bg-transparent"
              >
                <Phone className="mr-2 h-4 w-4" />
                (03) 9467 6328
              </Button>
              <Button 
                size="sm"
                onClick={() => setIsBookingModalOpen(true)}
                className="bg-white text-slate-900 hover:bg-slate-100 font-semibold"
              >
                Book Service
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 py-4 border-t border-slate-700">
              <nav className="flex flex-col space-y-4">
                <button 
                  onClick={handleHomeClick}
                  className="text-slate-300 hover:text-white transition-colors text-left cursor-pointer"
                >
                  Home
                </button>
                <button 
                  onClick={() => scrollToSection('#about')}
                  className="text-slate-300 hover:text-white transition-colors text-left cursor-pointer"
                >
                  About
                </button>
                <button 
                  onClick={() => scrollToSection('#services')}
                  className="text-slate-300 hover:text-white transition-colors text-left cursor-pointer"
                >
                  Services
                </button>
                <button 
                  onClick={() => scrollToSection('#contact')}
                  className="text-slate-300 hover:text-white transition-colors text-left cursor-pointer"
                >
                  Contact
                </button>
                <div className="pt-4 space-y-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handlePhoneCall}
                    className="w-full border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white bg-transparent"
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    (03) 9467 6328
                  </Button>
                  <Button 
                    size="sm"
                    onClick={() => setIsBookingModalOpen(true)}
                    className="w-full bg-white text-slate-900 hover:bg-slate-100 font-semibold"
                  >
                    Book Service
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
      />
    </>
  );
};

export default Header; 