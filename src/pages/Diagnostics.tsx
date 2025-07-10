import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import SEOHead from "@/components/SEOHead";
import BookingModal from "@/components/BookingModal";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Zap, Monitor, Search, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

const Diagnostics = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Vehicle Diagnostics",
    "provider": {
      "@type": "AutomotiveBusiness",
      "name": "Grimshaw Garage",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Your City",
        "addressRegion": "Your State",
        "postalCode": "Your ZIP"
      },
      "telephone": "Your Phone Number"
    },
    "serviceType": "Vehicle Diagnostics",
    "description": "Advanced computer diagnostics to identify vehicle problems quickly and accurately. Professional fault finding and system analysis."
  };

  const diagnosticServices = [
    {
      title: "Engine Diagnostics",
      description: "Comprehensive engine system analysis",
      icon: <Zap className="h-6 w-6 text-red-500" />,
      features: ["OBD-II scanning", "Performance analysis", "Emission testing", "Fault code reading"]
    },
    {
      title: "Electronic Systems",
      description: "Modern vehicle computer diagnostics",
      icon: <Monitor className="h-6 w-6 text-blue-500" />,
      features: ["ECU diagnostics", "Sensor testing", "Module communication", "Software updates"]
    },
    {
      title: "Fault Finding",
      description: "Precise problem identification",
      icon: <Search className="h-6 w-6 text-green-500" />,
      features: ["Intermittent faults", "Wiring issues", "Component testing", "Root cause analysis"]
    },
    {
      title: "Warning Light Diagnosis",
      description: "Dashboard warning light investigation",
      icon: <AlertTriangle className="h-6 w-6 text-orange-500" />,
      features: ["Check engine light", "ABS warnings", "Airbag lights", "Service indicators"]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <SEOHead
        title="Vehicle Diagnostics - Computer Diagnosis & Fault Finding"
        description="Professional vehicle diagnostics at Grimshaw Garage. Advanced computer diagnosis, fault finding, warning light diagnosis. Quick and accurate problem identification."
        keywords="vehicle diagnostics, computer diagnosis, fault finding, OBD scan, check engine light, automotive diagnostics, warning lights"
        canonicalUrl={window.location.href}
        schema={schema}
      />
      
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-r from-red-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Advanced Vehicle Diagnostics
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Pinpoint vehicle problems with precision using our state-of-the-art diagnostic equipment. 
              Fast, accurate fault finding saves you time and money.
            </p>
            <Button 
              size="lg" 
              className="bg-red-600 hover:bg-red-700 text-white"
              onClick={() => setIsBookingModalOpen(true)}
            >
              Book Diagnostic Check
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Diagnostic Services
            </h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Modern vehicles require sophisticated diagnostic tools - we have the technology and expertise
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {diagnosticServices.map((service, index) => (
              <Card key={index} className="bg-slate-700 border-slate-600 hover:bg-slate-600 transition-colors">
                <CardHeader>
                  <div className="flex items-center justify-center w-12 h-12 bg-slate-800 rounded-lg mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-white">{service.title}</CardTitle>
                  <CardDescription className="text-slate-300">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-slate-300">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Diagnostics Matter */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Why Professional Diagnostics Matter
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Save Time & Money</h3>
                <ul className="space-y-4 text-slate-300">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-white">Accurate Diagnosis:</span> Identify the exact problem first time
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-white">Prevent Guesswork:</span> No unnecessary part replacements
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-white">Early Detection:</span> Catch problems before they become expensive
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-white">Quick Resolution:</span> Faster repairs with precise fault finding
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-slate-800 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-white mb-6">Common Warning Signs</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <AlertTriangle className="h-6 w-6 text-red-500 mr-4" />
                    <span className="text-slate-300">Check Engine Light illuminated</span>
                  </div>
                  <div className="flex items-center">
                    <AlertTriangle className="h-6 w-6 text-orange-500 mr-4" />
                    <span className="text-slate-300">Unusual engine noises or vibrations</span>
                  </div>
                  <div className="flex items-center">
                    <AlertTriangle className="h-6 w-6 text-yellow-500 mr-4" />
                    <span className="text-slate-300">Poor fuel economy or performance</span>
                  </div>
                  <div className="flex items-center">
                    <AlertTriangle className="h-6 w-6 text-blue-500 mr-4" />
                    <span className="text-slate-300">Dashboard warning lights</span>
                  </div>
                  <div className="flex items-center">
                    <AlertTriangle className="h-6 w-6 text-purple-500 mr-4" />
                    <span className="text-slate-300">Intermittent electrical problems</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diagnostic Process */}
      <section className="py-16 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
              Our Diagnostic Process
            </h2>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Initial Assessment</h3>
                <p className="text-slate-300">Understand symptoms and vehicle history</p>
              </div>
              
              <div className="text-center">
                <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Computer Scan</h3>
                <p className="text-slate-300">Professional diagnostic scan for fault codes</p>
              </div>
              
              <div className="text-center">
                <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold text-white mb-2">System Testing</h3>
                <p className="text-slate-300">Test specific components and systems</p>
              </div>
              
              <div className="text-center">
                <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Report & Quote</h3>
                <p className="text-slate-300">Detailed findings and repair recommendations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Related Services
            </h2>
            <p className="text-slate-300 text-lg">
              Complete automotive solutions for your vehicle
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <Link to="/vehicle-servicing" className="block">
              <Card className="bg-slate-700 border-slate-600 hover:bg-slate-600 transition-colors h-full">
                <CardHeader className="text-center">
                  <CardTitle className="text-white">Vehicle Servicing</CardTitle>
                  <CardDescription className="text-slate-300">
                    Regular maintenance and service
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
            
            <Link to="/logbook-service" className="block">
              <Card className="bg-slate-700 border-slate-600 hover:bg-slate-600 transition-colors h-full">
                <CardHeader className="text-center">
                  <CardTitle className="text-white">Logbook Service</CardTitle>
                  <CardDescription className="text-slate-300">
                    Warranty compliant servicing
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
            
            <Link to="/brake-suspension" className="block">
              <Card className="bg-slate-700 border-slate-600 hover:bg-slate-600 transition-colors h-full">
                <CardHeader className="text-center">
                  <CardTitle className="text-white">Brake & Suspension</CardTitle>
                  <CardDescription className="text-slate-300">
                    Safety-critical repairs
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
            
            <Link to="/air-conditioning" className="block">
              <Card className="bg-slate-700 border-slate-600 hover:bg-slate-600 transition-colors h-full">
                <CardHeader className="text-center">
                  <CardTitle className="text-white">Air Conditioning</CardTitle>
                  <CardDescription className="text-slate-300">
                    AC service and repair
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Don't Ignore Warning Signs
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Dashboard lights and unusual symptoms are your car's way of asking for help. 
            Book a diagnostic check today and get to the root of the problem quickly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-red-900 hover:bg-gray-100"
              onClick={() => setIsBookingModalOpen(true)}
            >
              Book Diagnostic Check
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-red-900"
            >
              <a href="tel:+61394676328">Call: (03) 9467 6328</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingCTA />
      
      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
      />
    </div>
  );
};

export default Diagnostics; 