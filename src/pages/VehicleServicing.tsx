import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import FindUs from "@/components/FindUs";
import SEOHead from "@/components/SEOHead";
import BookingModal from "@/components/BookingModal";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock, Shield, Wrench } from "lucide-react";
import { Link } from "react-router-dom";

const VehicleServicing = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Vehicle Servicing",
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
    "serviceType": "Vehicle Servicing",
    "description": "Professional vehicle servicing including regular maintenance, oil changes, filter replacements, and comprehensive vehicle inspections."
  };

  const services = [
    {
      title: "Regular Service",
      description: "Comprehensive vehicle inspection and maintenance",
      icon: <Wrench className="h-6 w-6 text-blue-500" />,
      features: ["Oil and filter change", "Brake inspection", "Tire check", "Fluid top-ups"]
    },
    {
      title: "Major Service",
      description: "Extensive service for optimal vehicle performance",
      icon: <Shield className="h-6 w-6 text-green-500" />,
      features: ["Full diagnostic scan", "Timing belt check", "Cooling system", "Transmission service"]
    },
    {
      title: "Pre-Purchase Inspection",
      description: "Thorough inspection before buying a used vehicle",
      icon: <CheckCircle className="h-6 w-6 text-purple-500" />,
      features: ["Engine assessment", "Body inspection", "Electrical systems", "Detailed report"]
    },
    {
      title: "Express Service",
      description: "Quick turnaround for basic maintenance",
      icon: <Clock className="h-6 w-6 text-orange-500" />,
      features: ["Oil change", "Basic checks", "While you wait", "30-minute service"]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <SEOHead
        title="Professional Vehicle Servicing"
        description="Expert vehicle servicing at Grimshaw Garage. Regular maintenance, major services, pre-purchase inspections, and express services. Book your service today!"
        keywords="vehicle servicing, car service, auto maintenance, oil change, brake inspection, vehicle inspection, automotive service"
        canonicalUrl={window.location.href}
        schema={schema}
        ogImage="/og-image.png"
      />
      
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-r from-blue-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Professional Vehicle Servicing
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Keep your vehicle running at peak performance with our comprehensive servicing solutions. 
              From regular maintenance to major overhauls, our certified technicians ensure your car's reliability and safety.
            </p>
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white"
              onClick={() => setIsBookingModalOpen(true)}
            >
              Book Your Service Today
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Vehicle Servicing Options
            </h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Choose from our range of professional vehicle servicing options tailored to your needs and schedule.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
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

      {/* Why Choose Us */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Why Choose Grimshaw Garage for Vehicle Servicing?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Certified Technicians</h3>
                <p className="text-slate-300 mb-6">
                  Our team consists of certified automotive technicians with years of experience 
                  servicing all makes and models. We stay updated with the latest automotive technologies.
                </p>
                
                <h3 className="text-2xl font-bold text-white mb-4">Comprehensive Service</h3>
                <p className="text-slate-300 mb-6">
                  From basic oil changes to complex engine overhauls, we provide comprehensive 
                  vehicle servicing that keeps your car running smoothly and safely.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Quality Parts & Materials</h3>
                <p className="text-slate-300 mb-6">
                  We use only high-quality genuine and OEM parts, premium oils, and quality 
                  filters to ensure your vehicle receives the best possible service.
                </p>
                
                <h3 className="text-2xl font-bold text-white mb-4">Transparent Pricing</h3>
                <p className="text-slate-300 mb-6">
                  No hidden costs or surprise charges. We provide detailed quotes upfront 
                  and explain exactly what work needs to be done and why.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-16 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
              Our Service Process
            </h2>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Book Service</h3>
                <p className="text-slate-300">Schedule your service online or by phone</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Inspection</h3>
                <p className="text-slate-300">Comprehensive vehicle inspection and diagnosis</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Service Work</h3>
                <p className="text-slate-300">Professional service using quality parts</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Quality Check</h3>
                <p className="text-slate-300">Final inspection and road test</p>
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
              Explore our other professional automotive services
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <Link to="/logbook-service" className="block">
              <Card className="bg-slate-700 border-slate-600 hover:bg-slate-600 transition-colors h-full">
                <CardHeader className="text-center">
                  <CardTitle className="text-white">Logbook Service</CardTitle>
                  <CardDescription className="text-slate-300">
                    Manufacturer warranty compliant servicing
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
            
            <Link to="/diagnostics" className="block">
              <Card className="bg-slate-700 border-slate-600 hover:bg-slate-600 transition-colors h-full">
                <CardHeader className="text-center">
                  <CardTitle className="text-white">Diagnostics</CardTitle>
                  <CardDescription className="text-slate-300">
                    Advanced computer diagnostics
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
            
            <Link to="/brake-suspension" className="block">
              <Card className="bg-slate-700 border-slate-600 hover:bg-slate-600 transition-colors h-full">
                <CardHeader className="text-center">
                  <CardTitle className="text-white">Brake & Suspension</CardTitle>
                  <CardDescription className="text-slate-300">
                    Safety-critical brake and suspension work
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
      <section className="py-16 bg-blue-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Service Your Vehicle?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Don't wait for problems to arise. Regular servicing keeps your vehicle reliable, 
            safe, and running efficiently. Book your service appointment today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-900 hover:bg-gray-100"
              onClick={() => setIsBookingModalOpen(true)}
            >
              Book Service Online
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-blue-900"
            >
              <a href="tel:+61394676328">Call Now: (03) 9467 6328</a>
            </Button>
          </div>
        </div>
      </section>

      <FindUs />
      <Footer />
      <FloatingCTA />
      
      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
      />
    </div>
  );
};

export default VehicleServicing; 