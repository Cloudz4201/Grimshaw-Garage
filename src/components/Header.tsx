import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Menu, 
  X, 
  Phone, 
  Wrench, 
  FileText, 
  Search, 
  Disc, 
  Snowflake, 
  Zap, 
  Volume2,
  Monitor,
  Settings,
  Battery
} from "lucide-react";
import BookingModal from "./BookingModal";
import { trackPhoneClick, trackBookingModalOpen, trackNavigationClick } from "@/lib/analytics";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handlePhoneCall = () => {
    trackPhoneClick('+61394676328', 'header');
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
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'auto' });
    } else {
      navigate('/');
    }
    setIsMenuOpen(false);
  };

  const services = [
    { name: "Vehicle Servicing", icon: Wrench, path: "/vehicle-servicing", description: "Complete mechanical repairs and maintenance" },
    { name: "Logbook Service", icon: FileText, path: "/logbook-service", description: "Manufacturer-compliant servicing" },
    { name: "Diagnostics", icon: Search, path: "/diagnostics", description: "Advanced fault finding and analysis" },
    { name: "Brake & Suspension", icon: Disc, path: "/brake-suspension", description: "Expert brake and suspension work" },
    { name: "Air Conditioning", icon: Snowflake, path: "/air-conditioning", description: "A/C servicing and repairs" },
    { name: "Performance Tuning", icon: Zap, path: "/performance-tuning", description: "ECU remapping and performance upgrades" },
    { name: "Custom Exhausts", icon: Volume2, path: "/custom-exhausts", description: "Custom exhaust design and fabrication" },
    { name: "Digital Services", icon: Monitor, path: "/digital-services", description: "Technology upgrades and digital solutions" },
    { name: "Porsche Retrofitting", icon: Settings, path: "/porsche-retrofitting", description: "Factory-level Porsche upgrades and retrofits" },
    { name: "Electric Vehicle Servicing", icon: Battery, path: "/electric-vehicle-servicing", description: "Expert EV and hybrid vehicle service" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-700">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between min-h-[56px]">
            {/* Logo */}
            <div className="flex items-center gap-4 flex-shrink-0">
              <button 
                onClick={handleHomeClick} 
                className="flex items-center hover:opacity-80 transition-opacity cursor-pointer"
                aria-label="Go to homepage"
              >
                <img 
                  src="/logo.png" 
                  alt="Grimshaw Automotive Logo"
                  className="h-10 sm:h-12 w-auto object-contain"
                />
              </button>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <button 
                onClick={handleHomeClick}
                className="text-slate-300 hover:text-white transition-colors cursor-pointer"
              >
                Home
              </button>
              <button 
                onClick={() => navigate('/about')}
                className="text-slate-300 hover:text-white transition-colors cursor-pointer"
              >
                About
              </button>
              
              {/* Services with Hover */}
              <div 
                className="relative"
                onMouseEnter={() => setIsServicesHovered(true)}
                onMouseLeave={() => setIsServicesHovered(false)}
              >
                <button 
                  onClick={() => scrollToSection('#services')}
                  className="text-slate-300 hover:text-white transition-colors cursor-pointer"
                >
                  Services
                </button>
              </div>
              
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
                onClick={() => {
                  trackBookingModalOpen('header_desktop');
                  setIsBookingModalOpen(true);
                }}
                className="bg-white text-slate-900 hover:bg-slate-100 font-semibold"
              >
                Book Service
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-white p-2 -mr-2 flex-shrink-0 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg hover:bg-slate-800 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Services Sub-Header - Slides down */}
          <div 
            className={`absolute top-full left-0 right-0 z-40 bg-slate-800/95 backdrop-blur-md border-b border-slate-700 transition-all duration-300 ease-in-out overflow-hidden shadow-lg ${
              isServicesHovered ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
            onMouseEnter={() => setIsServicesHovered(true)}
            onMouseLeave={() => setIsServicesHovered(false)}
          >
            <div className="container mx-auto px-6 py-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {services.map((service, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      trackNavigationClick(service.name, 'header_services_menu');
                      navigate(service.path);
                      setIsServicesHovered(false);
                    }}
                    className="text-left p-4 rounded-lg bg-slate-700/50 hover:bg-slate-700 transition-all duration-200 border border-slate-600 hover:border-slate-500 group"
                  >
                    <div className="flex items-start space-x-3">
                      <div className="bg-slate-600 p-2 rounded-lg group-hover:bg-slate-500 transition-colors">
                        <service.icon className="w-5 h-5 text-slate-300 group-hover:text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-white text-sm mb-1 group-hover:text-blue-300 transition-colors">
                          {service.name}
                        </h3>
                        <p className="text-slate-400 text-xs leading-tight group-hover:text-slate-300 transition-colors">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
              
              {/* Call to Action */}
              <div className="mt-6 pt-6 border-t border-slate-600 text-center">
                <p className="text-slate-300 text-sm mb-4">Need help choosing the right service?</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      handlePhoneCall();
                      setIsServicesHovered(false);
                    }}
                    className="border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white bg-transparent"
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Call (03) 9467 6328
                  </Button>
                  <Button 
                    size="sm"
                    onClick={() => {
                      trackBookingModalOpen('header_services_menu');
                      setIsBookingModalOpen(true);
                      setIsServicesHovered(false);
                    }}
                    className="bg-white text-slate-900 hover:bg-slate-100 font-semibold"
                  >
                    Book Service
                  </Button>
                </div>
              </div>
            </div>
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
                  onClick={() => {
                    navigate('/about');
                    setIsMenuOpen(false);
                  }}
                  className="text-slate-300 hover:text-white transition-colors text-left cursor-pointer"
                >
                  About
                </button>
                
                {/* Mobile Services */}
                <div className="space-y-2">
                  <div className="text-slate-300 font-medium text-left pl-2">Services</div>
                  <div className="pl-4 space-y-2">
                    {services.map((service, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          navigate(service.path);
                          setIsMenuOpen(false);
                        }}
                        className="flex items-center space-x-3 text-slate-400 hover:text-white transition-colors text-left cursor-pointer w-full text-sm p-2 rounded hover:bg-slate-700/50"
                      >
                        <service.icon className="w-4 h-4 flex-shrink-0" />
                        <span>{service.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
                
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
                    onClick={() => {
                      trackBookingModalOpen('header_mobile');
                      setIsBookingModalOpen(true);
                    }}
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