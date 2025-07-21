import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { trackServicePageVisit, trackPhoneClick, trackBookingModalOpen } from "@/lib/analytics";
import { 
  Phone, 
  FileText, 
  Shield,
  CheckCircle,
  Award,
  Database,
  Clock,
  Settings
} from "lucide-react";
import BookingModal from "@/components/BookingModal";

const DigitalServices = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  useEffect(() => {
    trackServicePageVisit('Digital Service Records');
  }, []);

  const handlePhoneCall = () => {
    trackPhoneClick('+61394676328', 'digital_services_page');
    window.location.href = 'tel:+61394676328';
  };

  const serviceFeatures = [
    {
      icon: Database,
      title: "Direct Dealer System Access",
      description: "We update your service records directly in the manufacturer's dealer system, ensuring complete transparency and accessibility."
    },
    {
      icon: Shield,
      title: "Warranty Protection",
      description: "Your vehicle warranty remains fully valid with our digitally documented service history that dealers can instantly verify."
    },
    {
      icon: FileText,
      title: "Complete Service Documentation",
      description: "Every service, repair, and maintenance item is digitally recorded with full details, photos, and technician notes."
    },
    {
      icon: Clock,
      title: "Real-Time Updates",
      description: "Service records are updated immediately upon completion, providing instant access to your vehicle's maintenance history."
    }
  ];

  const benefits = [
    "Warranty remains 100% valid and protected",
    "Any authorized dealer can access service history",
    "Complete transparency in all service documentation", 
    "Instant verification of maintenance compliance",
    "Digital record keeping prevents lost paperwork",
    "Enhanced resale value with verified service history"
  ];

  return (
    <>
      <SEOHead 
        title="Digital Service Records & Warranty Protection"
        description="Professional digital service record management in Melbourne. We update and digitize your service book directly in dealer systems, ensuring warranty protection and complete service history tracking."
        keywords="digital service records Melbourne, warranty protected service, dealer system integration, service book digitization, automotive service history, warranty compliance, service documentation"
        canonicalUrl="https://grimshawautomotive.com/digital-services"
      />
      
      <Header />
      
      <main className="min-h-screen bg-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center bg-blue-600/20 px-4 py-2 rounded-full text-sm font-medium mb-6 text-blue-300 border border-blue-600/30">
                <FileText className="w-4 h-4 mr-2" />
                Digital Service Records
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white leading-tight">
                Warranty Protected
                <span className="block text-blue-400">Service History</span>
              </h1>
              
              <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-3xl mx-auto">
                We update and digitize your service book directly in the dealer's system. 
                Any authorized dealer can see that <strong className="text-white">Grimshaw Automotive</strong> has 
                performed your service, ensuring <strong className="text-blue-400">your warranty remains valid</strong>.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  onClick={() => {
                    trackBookingModalOpen('digital_services_page');
                    setIsBookingModalOpen(true);
                  }}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg font-semibold"
                >
                  <FileText className="mr-2 h-5 w-5" />
                  Book Service
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  onClick={handlePhoneCall}
                  className="border-blue-500/50 text-blue-300 hover:bg-blue-600 hover:text-white px-8 py-6 text-lg font-semibold bg-transparent"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call (03) 9467 6328
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Digital Integration Feature */}
        <section className="py-20 bg-slate-800">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
                  Complete Digital Integration
                </h2>
                <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                  Full dealer system access means seamless service history tracking and warranty protection. 
                  Our digital integration ensures your service records are permanently documented in the 
                  manufacturer's official system.
                </p>
                
                <div className="space-y-6">
                  {serviceFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="bg-blue-600/20 p-3 rounded-lg flex-shrink-0">
                        <feature.icon className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                        <p className="text-slate-300">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Right Content - Warranty Guarantee */}
              <div className="bg-slate-700 p-8 rounded-2xl border border-slate-600">
                <div className="text-center mb-8">
                  <div className="bg-blue-600 rounded-full p-4 inline-block mb-4">
                    <Award className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Warranty Guarantee</h3>
                  <p className="text-slate-300 text-lg">
                    Professional service with full dealer system integration - your warranty stays intact.
                  </p>
                </div>
                
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 bg-slate-900">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
                How Digital Service Records Work
              </h2>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                Our seamless digital integration process ensures your service history 
                is always accessible and warranty-compliant.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="bg-blue-600/20 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">1. Service Completion</h3>
                <p className="text-slate-300">We complete your vehicle service with dealership-level precision and documentation.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-600/20 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Database className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">2. Digital Upload</h3>
                <p className="text-slate-300">Service records are immediately uploaded to the manufacturer's official dealer system.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-600/20 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">3. Warranty Protected</h3>
                <p className="text-slate-300">Any dealer can verify our work, ensuring your warranty remains fully valid and protected.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-slate-800">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
                Protect Your Warranty with Digital Service Records
              </h2>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Experience the peace of mind that comes with professional service documentation 
                and complete warranty protection through our digital integration system.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  onClick={() => setIsBookingModalOpen(true)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg font-semibold"
                >
                  <FileText className="mr-2 h-5 w-5" />
                  Book Service Today
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  onClick={handlePhoneCall}
                  className="border-blue-500/50 text-blue-300 hover:bg-blue-600 hover:text-white px-8 py-6 text-lg font-semibold bg-transparent"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      
      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
      />
    </>
  );
};

export default DigitalServices; 