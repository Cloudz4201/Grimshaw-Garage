
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle,
  Car,
  Wrench
} from "lucide-react";

const Contact = () => {
  const handlePhoneCall = () => {
    window.location.href = 'tel:+61394676328';
  };

  const handleRetrofittingInquiry = () => {
    // Scroll to the form and pre-select Porsche Retrofitting
    const serviceSelect = document.querySelector('select[name="service"]') as HTMLSelectElement;
    if (serviceSelect) {
      serviceSelect.value = 'porsche';
    }
    const messageTextarea = document.querySelector('textarea[placeholder*="Tell us about your vehicle"]') as HTMLTextAreaElement;
    if (messageTextarea) {
      messageTextarea.focus();
      messageTextarea.value = 'Hello, I am interested in Porsche retrofitting services. Please provide more information about: ';
    }
  };

  return (
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
              onClick={handlePhoneCall}
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

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div data-aos="fade-right">
            <h3 className="text-2xl font-bold mb-8">Get In Touch</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4" data-aos="fade-up" data-aos-delay="100">
                <div className="bg-white/10 p-3 rounded-lg">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Phone Numbers</h4>
                  <a href="tel:+61394676328" className="text-slate-300 hover:text-white transition-colors block">(03) 9467 6328</a>
                  <a href="tel:+61451431429" className="text-slate-300 hover:text-white transition-colors block">+61 451 431 429</a>
                  <a href="tel:+61470377850" className="text-slate-300 hover:text-white transition-colors block">+61 470 377 850</a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4" data-aos="fade-up" data-aos-delay="200">
                <div className="bg-white/10 p-3 rounded-lg">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Location</h4>
                  <p className="text-slate-300">Unit 3, 30 Clements Avenue</p>
                  <p className="text-slate-300">Bundoora VIC 3083</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4" data-aos="fade-up" data-aos-delay="300">
                <div className="bg-white/10 p-3 rounded-lg">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Business Hours</h4>
                  <p className="text-slate-300">Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p className="text-slate-300">Saturday: 8:00 AM - 4:00 PM</p>
                  <p className="text-slate-300">Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-slate-800 rounded-xl p-8 text-center border border-slate-700" data-aos="fade-up" data-aos-delay="400">
              <MapPin className="w-12 h-12 mx-auto mb-4 text-slate-400" />
              <h4 className="font-semibold mb-2">Interactive Map</h4>
              <p className="text-slate-400 text-sm">
                Google Maps integration showing our Bundoora location
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10" data-aos="fade-left">
            <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">First Name</label>
                  <Input 
                    placeholder="John" 
                    className="bg-white/10 border-white/20 text-white placeholder-slate-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Last Name</label>
                  <Input 
                    placeholder="Doe" 
                    className="bg-white/10 border-white/20 text-white placeholder-slate-400"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="bg-white/10 border-white/20 text-white placeholder-slate-400"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Phone</label>
                <Input 
                  placeholder="+61 xxx xxx xxx" 
                  className="bg-white/10 border-white/20 text-white placeholder-slate-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Service Interest</label>
                <select name="service" className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white">
                  <option value="">Select a service</option>
                  <option value="general">General Servicing</option>
                  <option value="logbook">Logbook Service</option>
                  <option value="repairs">Repairs & Diagnostics</option>
                  <option value="porsche">Porsche Retrofitting</option>
                  <option value="inspection">Pre-purchase Inspection</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <Textarea 
                  placeholder="Tell us about your vehicle and service needs..." 
                  rows={4}
                  className="bg-white/10 border-white/20 text-white placeholder-slate-400"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-white text-slate-900 hover:bg-slate-100 py-6 text-lg font-semibold rounded-xl"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
