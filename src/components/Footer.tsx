
import { Link } from "react-router-dom";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Facebook,
  Instagram,
  Linkedin
} from "lucide-react";

const Footer = () => {
  const handlePhoneCall = (phoneNumber: string) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const scrollToServices = () => {
    // Navigate to homepage and scroll to services section
    if (window.location.pathname !== '/') {
      window.location.href = '/#services';
    } else {
      const section = document.querySelector('#services');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12" style={{ touchAction: 'manipulation' }}>
          {/* Company Info */}
          <div className="lg:col-span-2" data-aos="fade-up" style={{ touchAction: 'manipulation' }}>
            <h3 className="text-2xl font-bold mb-4">GRIMSHAW AUTOMOTIVE</h3>
            <p className="text-slate-400 mb-6 max-w-md">
              Premium automotive servicing, repairs, and Porsche retrofitting in Bundoora. 
              Dealership-level expertise with transparent, friendly care.
            </p>
            <div className="flex space-x-4">
              <div className="bg-slate-800 p-3 rounded-lg hover:bg-slate-700 transition-colors cursor-pointer">
                <Facebook className="w-5 h-5" />
              </div>
              <div className="bg-slate-800 p-3 rounded-lg hover:bg-slate-700 transition-colors cursor-pointer">
                <Instagram className="w-5 h-5" />
              </div>
              <div className="bg-slate-800 p-3 rounded-lg hover:bg-slate-700 transition-colors cursor-pointer">
                <Linkedin className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div data-aos="fade-up" data-aos-delay="100">
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <Link to="/vehicle-servicing" className="hover:text-white transition-colors">
                  Vehicle Servicing
                </Link>
              </li>
              <li>
                <Link to="/logbook-service" className="hover:text-white transition-colors">
                  Logbook Service
                </Link>
              </li>
              <li>
                <Link to="/diagnostics" className="hover:text-white transition-colors">
                  Diagnostics
                </Link>
              </li>
              <li>
                <Link to="/brake-suspension" className="hover:text-white transition-colors">
                  Brake & Suspension
                </Link>
              </li>
              <li>
                <Link to="/air-conditioning" className="hover:text-white transition-colors">
                  Air Conditioning
                </Link>
              </li>
              <li>
                <button onClick={scrollToServices} className="hover:text-white transition-colors text-left">
                  Porsche Retrofitting
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h4 className="font-bold mb-4">Contact Info</h4>
            <div className="space-y-3 text-slate-400">
              <div 
                className="flex items-center space-x-2 cursor-pointer hover:text-white transition-colors"
                onClick={() => handlePhoneCall('+61394676328')}
              >
                <Phone className="w-4 h-4" />
                <span>(03) 9467 6328</span>
              </div>
              <div 
                className="flex items-center space-x-2 cursor-pointer hover:text-white transition-colors"
                onClick={() => handlePhoneCall('+61451431429')}
              >
                <Phone className="w-4 h-4" />
                <span>+61 451 431 429</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1" />
                <div>
                  <p>Unit 3, 30 Clements Avenue</p>
                  <p>Bundoora VIC 3083</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Business Hours */}
        <div className="border-t border-slate-800 pt-8 mb-8" data-aos="fade-up" data-aos-delay="300">
          <div className="flex items-center justify-center space-x-2 text-slate-400">
            <Clock className="w-5 h-5" />
            <span className="font-medium">Business Hours:</span>
            <span>Mon-Fri 8AM-6PM • Sat 8AM-4PM • Sun Closed</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0" data-aos="fade-up" data-aos-delay="400">
          <p className="text-slate-400 text-sm">
            © 2024 Grimshaw Automotive. All rights reserved.
          </p>
          <div className="flex space-x-6 text-slate-400 text-sm">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
            <a href="#" className="hover:text-white transition-colors">ABN: 89853435816</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
