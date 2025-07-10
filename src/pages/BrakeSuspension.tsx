import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import SEOHead from "@/components/SEOHead";
import BookingModal from "@/components/BookingModal";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Shield, Car, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

const BrakeSuspension = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Brake and Suspension Service",
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
    "serviceType": "Brake and Suspension Service",
    "description": "Professional brake and suspension services including repairs, replacements, and safety inspections. Ensuring your vehicle's safety and performance."
  };

  const services = [
    {
      title: "Brake Pad Replacement",
      description: "High-quality brake pads for optimal stopping power and safety",
      icon: <Shield className="h-6 w-6" />,
      features: ["Optimal stopping power", "Long-lasting performance", "Safety-certified"]
    },
    {
      title: "Brake Disc Machining & Replacement",
      description: "Professional disc resurfacing and replacement services",
      icon: <Shield className="h-6 w-6" />,
      features: ["Precision resurfacing", "Improved braking performance", "Safety-tested"]
    },
    {
      title: "Brake Fluid Service",
      description: "Complete brake fluid replacement and system bleeding",
      icon: <Shield className="h-6 w-6" />,
      features: ["System bleeding", "Clean fluid", "Safety-certified"]
    },
    {
      title: "Brake System Inspection",
      description: "Comprehensive safety inspection of entire brake system",
      icon: <Shield className="h-6 w-6" />,
      features: ["Complete inspection", "Safety assessment", "Recommendations"]
    },
    {
      title: "Shock Absorber Replacement",
      description: "Quality shock absorbers for improved ride comfort and handling",
      icon: <Car className="h-6 w-6" />,
      features: ["Improved ride comfort", "Enhanced handling", "Safety-tested"]
    },
    {
      title: "Strut Replacement & Repair",
      description: "Complete strut assembly service and replacement",
      icon: <Car className="h-6 w-6" />,
      features: ["Complete replacement", "Professional repair", "Safety-certified"]
    },
    {
      title: "Wheel Alignment",
      description: "Precision alignment for even tire wear and straight tracking",
      icon: <Car className="h-6 w-6" />,
      features: ["Even tire wear", "Straight tracking", "Optimal performance"]
    },
    {
      title: "Suspension Inspection",
      description: "Complete suspension system assessment and diagnosis",
      icon: <Car className="h-6 w-6" />,
      features: ["System assessment", "Diagnosis", "Recommendations"]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <SEOHead
        title="Brake & Suspension Service - Safety Critical Repairs"
        description="Expert brake and suspension services at Grimshaw Garage. Professional brake repairs, suspension work, and safety inspections. Book your safety check today."
        keywords="brake service, suspension repair, brake pads, shock absorbers, brake inspection, vehicle safety, brake replacement"
        canonicalUrl={window.location.href}
        schema={schema}
      />
      
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-r from-orange-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Brake & Suspension Specialists
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Your safety is our priority. Professional brake and suspension services 
              to keep you and your family safe on the road.
            </p>
            <Button 
              size="lg" 
              className="bg-orange-600 hover:bg-orange-700 text-white"
              onClick={() => setIsBookingModalOpen(true)}
            >
              Book Brake & Suspension Service
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Professional Brake & Suspension Services
            </h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Safety is our priority - trust our certified technicians with your vehicle's critical systems
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

      {/* Warning Signs & Maintenance */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Warning Signs & Maintenance
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">When to Service Brakes</h3>
                <ul className="space-y-4 text-slate-300">
                  <li className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-white">Squealing or grinding noises:</span> Brake pad wear indicators
                    </div>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-white">Vibration when braking:</span> Warped brake discs
                    </div>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-white">Longer stopping distances:</span> Worn brake components
                    </div>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-white">Soft or spongy brake pedal:</span> Brake fluid or air in system
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-slate-800 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-white mb-6">Suspension Warning Signs</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Car className="h-6 w-6 text-orange-500 mr-4" />
                    <span className="text-slate-300">Excessive bouncing or swaying</span>
                  </div>
                  <div className="flex items-center">
                    <Car className="h-6 w-6 text-orange-500 mr-4" />
                    <span className="text-slate-300">Uneven tire wear patterns</span>
                  </div>
                  <div className="flex items-center">
                    <Car className="h-6 w-6 text-orange-500 mr-4" />
                    <span className="text-slate-300">Vehicle pulling to one side</span>
                  </div>
                  <div className="flex items-center">
                    <Car className="h-6 w-6 text-orange-500 mr-4" />
                    <span className="text-slate-300">Clunking noises over bumps</span>
                  </div>
                  <div className="flex items-center">
                    <Car className="h-6 w-6 text-orange-500 mr-4" />
                    <span className="text-slate-300">Difficulty steering or poor handling</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <p className="text-slate-300 text-lg mb-4">
                <strong className="text-red-400">Safety Alert:</strong> If you experience any of these symptoms, 
                have your vehicle inspected immediately.
              </p>
              <Button className="bg-red-600 hover:bg-red-700 text-white">
                Book Emergency Inspection
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Safety First */}
      <section className="py-16 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Safety First - Quality Components
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-gradient-to-b from-orange-900/50 to-slate-800 border-orange-700">
                <CardHeader>
                  <Shield className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                  <CardTitle className="text-white text-xl">Premium Parts</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">
                    We use only quality brake pads, discs, and suspension components 
                    from trusted manufacturers for reliable, long-lasting performance.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-b from-red-900/50 to-slate-800 border-red-700">
                <CardHeader>
                  <CheckCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
                  <CardTitle className="text-white text-xl">Certified Service</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">
                    Our qualified technicians follow strict safety procedures and 
                    manufacturer specifications for all brake and suspension work.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-b from-yellow-900/50 to-slate-800 border-yellow-700">
                <CardHeader>
                  <Car className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                  <CardTitle className="text-white text-xl">Road Testing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">
                    Every brake and suspension repair includes comprehensive testing 
                    to ensure your vehicle is safe and performs optimally.
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
              Related Services
            </h2>
            <p className="text-slate-300 text-lg">
              Complete automotive solutions for vehicle safety and performance
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <Link to="/vehicle-servicing" className="block">
              <Card className="bg-slate-700 border-slate-600 hover:bg-slate-600 transition-colors h-full">
                <CardHeader className="text-center">
                  <CardTitle className="text-white">Vehicle Servicing</CardTitle>
                  <CardDescription className="text-slate-300">
                    Regular maintenance and inspection
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
            
            <Link to="/diagnostics" className="block">
              <Card className="bg-slate-700 border-slate-600 hover:bg-slate-600 transition-colors h-full">
                <CardHeader className="text-center">
                  <CardTitle className="text-white">Diagnostics</CardTitle>
                  <CardDescription className="text-slate-300">
                    Advanced fault finding
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
      <section className="py-16 bg-orange-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Safety Can't Wait - Book Today
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Don't compromise on safety. If you're experiencing any brake or suspension issues, 
            book an inspection with our qualified technicians today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-orange-900 hover:bg-gray-100"
              onClick={() => setIsBookingModalOpen(true)}
            >
              Book Safety Inspection
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-orange-900"
            >
              <a href="tel:+61394676328">Emergency: (03) 9467 6328</a>
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

export default BrakeSuspension; 