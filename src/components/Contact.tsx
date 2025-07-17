
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Phone, 
  MapPin, 
  Clock, 
  Car
} from "lucide-react";
import BookingModal from "./BookingModal";
import { trackPhoneClick, trackBookingModalOpen, trackNavigationClick } from "@/lib/analytics";

const Contact = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleRetrofittingInquiry = () => {
    // Open booking modal for retrofitting inquiries
    setIsBookingModalOpen(true);
  };

  return (
    <>
      <section id="contact" className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
          {/* CTA Header */}
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              Ready to Experience 
              <span className="block text-slate-300">Dealership-Level Care?</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-8">
              Without the dealership price. Contact us today for premium automotive service 
              or to discuss your Porsche retrofitting needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="100">
              <Button 
                size="lg" 
                onClick={() => setIsBookingModalOpen(true)}
                className="bg-white text-slate-900 hover:bg-slate-100 text-lg px-8 py-6 rounded-xl font-semibold"
              >
                <Phone className="mr-2 h-5 w-5" />
                Book Service Today
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={handleRetrofittingInquiry}
                className="border-white/50 text-white hover:bg-white hover:text-slate-900 backdrop-blur-sm text-lg px-8 py-6 rounded-xl font-semibold bg-transparent"
              >
                <Car className="mr-2 h-5 w-5" />
                Enquire About Retrofitting
              </Button>
            </div>
          </div>

          {/* Contact Information - Centered */}
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-aos="fade-up" style={{ touchAction: 'manipulation' }}>
              {/* Phone Numbers */}
              <div className="text-center">
                <div className="bg-white/10 p-4 rounded-xl w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8" />
                </div>
                <h4 className="font-semibold mb-3 text-xl">Call Us</h4>
                <div className="space-y-2">
                  <a href="tel:+61394676328" className="text-slate-300 hover:text-white transition-colors block text-lg">(03) 9467 6328</a>
                  <a href="tel:+61451431429" className="text-slate-300 hover:text-white transition-colors block">+61 451 431 429</a>
                  <a href="tel:+61470377850" className="text-slate-300 hover:text-white transition-colors block">+61 470 377 850</a>
                </div>
              </div>
              
              {/* Location */}
              <div className="text-center">
                <div className="bg-white/10 p-4 rounded-xl w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8" />
                </div>
                <h4 className="font-semibold mb-3 text-xl">Visit Us</h4>
                <div className="text-slate-300">
                  <p className="text-lg">Unit 3, 30 Clements Avenue</p>
                  <p className="text-lg">Bundoora VIC 3083</p>
                </div>
              </div>
              
              {/* Business Hours */}
              <div className="text-center md:col-span-2 lg:col-span-1">
                <div className="bg-white/10 p-4 rounded-xl w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8" />
                </div>
                <h4 className="font-semibold mb-3 text-xl">Hours</h4>
                <div className="text-slate-300 space-y-1">
                  <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p>Saturday: 8:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
      />
    </>
  );
};

export default Contact;
