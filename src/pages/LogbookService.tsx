import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import SEOHead from "@/components/SEOHead";
import BookingModal from "@/components/BookingModal";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Calendar, FileText, Shield, Award } from "lucide-react";
import { Link } from "react-router-dom";

const LogbookService = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Logbook Service",
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
    "serviceType": "Logbook Service",
    "description": "Manufacturer-compliant logbook servicing that maintains your vehicle warranty while providing comprehensive maintenance."
  };

  const benefits = [
    {
      title: "Warranty Protection",
      description: "Maintains manufacturer warranty compliance",
      icon: <Shield className="h-6 w-6 text-green-500" />,
      features: ["Genuine parts used", "Manufacturer specifications", "Complete documentation", "Warranty retention"]
    },
    {
      title: "Scheduled Service",
      description: "Follow manufacturer service intervals",
      icon: <Calendar className="h-6 w-6 text-blue-500" />,
      features: ["Service reminders", "Interval tracking", "Preventive maintenance", "Optimal performance"]
    },
    {
      title: "Comprehensive Records",
      description: "Detailed service documentation",
      icon: <FileText className="h-6 w-6 text-purple-500" />,
      features: ["Digital logbook", "Service history", "Parts record", "Resale value boost"]
    },
    {
      title: "Quality Assurance",
      description: "Certified technician service",
      icon: <Award className="h-6 w-6 text-orange-500" />,
      features: ["Trained technicians", "Quality guarantee", "Professional service", "Peace of mind"]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <SEOHead
        title="Logbook Service - Warranty Compliant Vehicle Servicing"
        description="Professional logbook servicing at Grimshaw Garage. Maintain your vehicle warranty with manufacturer-compliant service. Genuine parts, certified technicians."
        keywords="logbook service, warranty service, manufacturer service, genuine parts, vehicle warranty, automotive logbook, car service"
        canonicalUrl={window.location.href}
        schema={schema}
        ogImage="/og-image.png"
      />
      
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-20 bg-gradient-to-r from-green-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Logbook Service Specialists
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Maintain your vehicle warranty with our manufacturer-compliant logbook service. 
              Professional maintenance using genuine parts and certified technicians.
            </p>
            <Button 
              size="lg" 
              className="bg-green-600 hover:bg-green-700 text-white"
              onClick={() => setIsBookingModalOpen(true)}
            >
              Book Logbook Service
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Logbook Service?
            </h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Protect your investment and maintain manufacturer warranty compliance
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-slate-700 border-slate-600 hover:bg-slate-600 transition-colors">
                <CardHeader>
                  <div className="flex items-center justify-center w-12 h-12 bg-slate-800 rounded-lg mb-4">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-white">{benefit.title}</CardTitle>
                  <CardDescription className="text-slate-300">
                    {benefit.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {benefit.features.map((feature, featureIndex) => (
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

      {/* Service Details */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              What's Included in Logbook Service?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Standard Service Items</h3>
                <ul className="space-y-4 text-slate-300">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-white">Engine Oil & Filter:</span> Premium oil change with genuine filter
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-white">Safety Inspection:</span> Comprehensive brake and tire check
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-white">Fluid Levels:</span> Check and top-up all essential fluids
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-white">Battery Test:</span> Electrical system and battery check
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-slate-800 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-white mb-6">Service Intervals</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">Basic Service</span>
                    <span className="text-white font-semibold">6 months / 10,000km</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">Standard Service</span>
                    <span className="text-white font-semibold">12 months / 15,000km</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">Major Service</span>
                    <span className="text-white font-semibold">12 months / 20,000km</span>
                  </div>
                  <div className="mt-6 p-4 bg-green-900/30 rounded-lg">
                    <p className="text-green-400 text-sm">
                      * Intervals may vary by manufacturer. We follow your vehicle's specific requirements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Warranty Information */}
      <section className="py-16 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Protecting Your Warranty
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-gradient-to-b from-green-900/50 to-slate-800 border-green-700">
                <CardHeader>
                  <Shield className="h-12 w-12 text-green-500 mx-auto mb-4" />
                  <CardTitle className="text-white text-xl">Warranty Compliance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">
                    Our logbook service strictly follows manufacturer specifications to ensure 
                    your warranty remains valid throughout the service period.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-b from-blue-900/50 to-slate-800 border-blue-700">
                <CardHeader>
                  <FileText className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                  <CardTitle className="text-white text-xl">Complete Documentation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">
                    Detailed service records and stamps in your logbook provide complete 
                    documentation for warranty claims and resale value.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-b from-purple-900/50 to-slate-800 border-purple-700">
                <CardHeader>
                  <Award className="h-12 w-12 text-purple-500 mx-auto mb-4" />
                  <CardTitle className="text-white text-xl">Genuine Parts</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">
                    We use only genuine or manufacturer-approved parts and fluids to 
                    maintain the highest quality and warranty compliance.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Complementary Services
            </h2>
            <p className="text-slate-300 text-lg">
              Additional services to keep your vehicle in peak condition
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <Link to="/vehicle-servicing" className="block">
              <Card className="bg-slate-700 border-slate-600 hover:bg-slate-600 transition-colors h-full">
                <CardHeader className="text-center">
                  <CardTitle className="text-white">Vehicle Servicing</CardTitle>
                  <CardDescription className="text-slate-300">
                    Comprehensive vehicle maintenance
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
                    Safety-critical systems
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
            
            <Link to="/air-conditioning" className="block">
              <Card className="bg-slate-700 border-slate-600 hover:bg-slate-600 transition-colors h-full">
                <CardHeader className="text-center">
                  <CardTitle className="text-white">Air Conditioning</CardTitle>
                  <CardDescription className="text-slate-300">
                    Climate control service
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Protect Your Warranty Today
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Don't risk voiding your manufacturer warranty. Book your logbook service with our 
            certified technicians and maintain your vehicle's warranty protection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-green-900 hover:bg-gray-100"
              onClick={() => setIsBookingModalOpen(true)}
            >
              Book Logbook Service
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-green-900"
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

export default LogbookService; 