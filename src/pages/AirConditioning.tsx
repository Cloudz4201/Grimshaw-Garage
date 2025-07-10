import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import SEOHead from "@/components/SEOHead";
import BookingModal from "@/components/BookingModal";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Snowflake, Wind, Thermometer, Wrench } from "lucide-react";
import { Link } from "react-router-dom";

const AirConditioning = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Air Conditioning Service",
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
    "serviceType": "Air Conditioning Service",
    "description": "Professional automotive air conditioning service, repair, and re-gassing. Keep your vehicle cool and comfortable year-round."
  };

  const services = [
    {
      title: "AC Re-gassing",
      description: "Professional refrigerant replacement",
      icon: <Snowflake className="h-6 w-6 text-blue-500" />,
      features: ["R134a & R1234yf gases", "Leak detection", "System pressure test", "Performance verification"]
    },
    {
      title: "AC System Repair",
      description: "Complete air conditioning repairs",
      icon: <Wrench className="h-6 w-6 text-green-500" />,
      features: ["Compressor replacement", "Condenser repair", "Evaporator service", "Belt replacement"]
    },
    {
      title: "Climate Control Service",
      description: "Electronic climate control diagnosis",
      icon: <Thermometer className="h-6 w-6 text-red-500" />,
      features: ["Temperature calibration", "Control module diagnosis", "Sensor replacement", "System programming"]
    },
    {
      title: "Cabin Filter Service",
      description: "Clean air for healthy driving",
      icon: <Wind className="h-6 w-6 text-purple-500" />,
      features: ["Filter replacement", "Pollen filter upgrade", "Activated carbon filters", "Air quality improvement"]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <SEOHead
        title="Air Conditioning Service - AC Repair & Re-gassing"
        description="Professional air conditioning service at Grimshaw Garage. AC repair, re-gassing, and climate control service. Stay cool with our expert AC technicians."
        keywords="air conditioning service, AC repair, car air con, AC re-gassing, climate control, automotive air conditioning"
        canonicalUrl={window.location.href}
        schema={schema}
      />
      
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-r from-cyan-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Air Conditioning Specialists
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Stay cool and comfortable year-round. Professional air conditioning service, 
              repair, and maintenance for all vehicle makes and models.
            </p>
            <Button 
              size="lg" 
              className="bg-cyan-600 hover:bg-cyan-700 text-white"
              onClick={() => setIsBookingModalOpen(true)}
            >
              Book AC Service
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Complete AC Solutions
            </h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              From routine servicing to complex repairs, we handle all your air conditioning needs
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

      {/* AC Problems & Solutions */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Common AC Problems We Fix
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Signs Your AC Needs Service</h3>
                <ul className="space-y-4 text-slate-300">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-cyan-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-white">Weak or No Cold Air:</span> Low refrigerant or compressor issues
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-cyan-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-white">Strange Noises:</span> Compressor or belt problems
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-cyan-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-white">Bad Odors:</span> Dirty cabin filter or bacterial growth
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-cyan-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-white">Water Leaks:</span> Blocked drain or seal issues
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-slate-800 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-white mb-6">Our Service Process</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="bg-cyan-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4">
                      1
                    </div>
                    <span className="text-slate-300">Visual inspection and system diagnosis</span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-cyan-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4">
                      2
                    </div>
                    <span className="text-slate-300">Pressure testing and leak detection</span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-cyan-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4">
                      3
                    </div>
                    <span className="text-slate-300">System evacuation and cleaning</span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-cyan-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4">
                      4
                    </div>
                    <span className="text-slate-300">Re-gassing with correct refrigerant</span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-cyan-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4">
                      5
                    </div>
                    <span className="text-slate-300">Performance testing and verification</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seasonal Tips */}
      <section className="py-16 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Seasonal AC Maintenance Tips
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-gradient-to-br from-orange-900/50 to-red-900/50 border-orange-700">
                <CardHeader>
                  <CardTitle className="text-white text-xl">Summer Preparation</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-slate-300 text-left">
                    <li>• Service your AC before the hot weather arrives</li>
                    <li>• Replace cabin filter for clean air circulation</li>
                    <li>• Check refrigerant levels and system pressure</li>
                    <li>• Inspect belts and hoses for wear</li>
                    <li>• Test climate control functions</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-blue-900/50 to-cyan-900/50 border-blue-700">
                <CardHeader>
                  <CardTitle className="text-white text-xl">Winter Care</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-slate-300 text-left">
                    <li>• Run AC monthly to keep system lubricated</li>
                    <li>• Use defrost function to prevent window fogging</li>
                    <li>• Replace cabin filter before allergy season</li>
                    <li>• Check heating system operation</li>
                    <li>• Inspect for any winter damage or corrosion</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-cyan-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Beat the Heat - Service Your AC Today
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Don't wait for the hottest day of the year to discover your AC isn't working. 
            Book your air conditioning service today and stay comfortable all season long.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-cyan-900 hover:bg-gray-100"
              onClick={() => setIsBookingModalOpen(true)}
            >
              Book AC Service
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-cyan-900"
              onClick={() => setIsBookingModalOpen(true)}
            >
              Emergency AC Repair
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

export default AirConditioning; 