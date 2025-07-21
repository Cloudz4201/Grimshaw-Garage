import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import BookingModal from "@/components/BookingModal";
import { 
  Phone, 
  MapPin, 
  Calendar, 
  Award, 
  CheckCircle, 
  Star, 
  Users, 
  Wrench, 
  Car,
  Shield,
  Clock,
  Settings
} from "lucide-react";

const AboutUs = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handlePhoneCall = () => {
    window.location.href = 'tel:+61394676328';
  };

  return (
    <>
      <SEOHead 
        title="About Us - Grimshaw Automotive"
        description="Learn about Grimshaw Automotive Bundoora - established in 1992, specializing in European, prestige & general automotive repairs. Experienced mechanics, honest service, dealer-level quality."
        keywords="about Grimshaw Automotive, Bundoora mechanics, European car service, prestige vehicle repairs, automotive workshop Melbourne"
        ogImage="/og-image.png"
      />
      
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-slate-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <img 
                src="/logo.png" 
                alt="Grimshaw Automotive Logo"
                className="h-6 w-auto object-contain"
              />
            </div>
            <h1 className="text-3xl lg:text-5xl font-bold mb-6">
              Proudly Independent,
              <span className="block text-blue-400">Locally Owned</span>
            </h1>
            <p className="text-lg text-slate-300 mb-8 max-w-3xl mx-auto">
              Since 1992, we've built our reputation on honest advice, high-quality workmanship, 
              and excellent customer service for all makes and models.
            </p>
          </div>
        </div>
      </section>

      {/* Business Profile */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Business Details */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">
                Grimshaw Automotive Bundoora
                <span className="block text-slate-400 text-xl mt-2">Business Profile</span>
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 p-3 rounded-lg flex-shrink-0">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Established 1992</h3>
                    <p className="text-slate-300">
                      Over 30 years of trusted service, built on decades of combined experience 
                      in the automotive industry.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-600 p-3 rounded-lg flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Prime Bundoora Location</h3>
                    <p className="text-slate-300">
                      <strong>3/30 Clements Avenue, Bundoora, VIC 3083</strong><br />
                      Convenient location with easy access for surrounding suburbs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-600 p-3 rounded-lg flex-shrink-0">
                    <Car className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Specialization</h3>
                    <p className="text-slate-300">
                      <strong>European, Prestige & General Automotive Repairs</strong><br />
                      Expert care for all makes and models, from luxury to everyday vehicles.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Workshop Image Placeholder */}
            <div className="bg-slate-700 rounded-2xl p-8 text-center">
              <div className="bg-slate-600 rounded-xl p-12 mb-6">
                <Settings className="w-24 h-24 text-slate-400 mx-auto mb-4" />
                <p className="text-slate-300">Modern Workshop Facility</p>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Fully Equipped Workshop</h3>
              <p className="text-slate-400">
                State-of-the-art diagnostic tools and dealer-level equipment for comprehensive automotive care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Story */}
      <section className="py-20 bg-slate-700">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Our Story
              </h2>
              <p className="text-lg text-slate-300">
                Building relationships through trust and reliability
              </p>
            </div>

            <div className="bg-slate-800 rounded-2xl p-8 lg:p-12">
              <div className="prose prose-invert max-w-none">
                <p className="text-lg text-slate-300 leading-relaxed mb-6">
                  Grimshaw Automotive Bundoora is a proudly independent, locally owned automotive repair business 
                  established in 1992. We specialise in servicing and repairing European and prestige vehicles, 
                  as well as all makes and models of cars.
                </p>
                
                <p className="text-lg text-slate-300 leading-relaxed mb-6">
                  Our reputation has been built on <strong className="text-white">honest advice</strong>, 
                  <strong className="text-white"> high-quality workmanship</strong>, and 
                  <strong className="text-white"> excellent customer service</strong>.
                </p>

                <p className="text-lg text-slate-300 leading-relaxed mb-6">
                  With a fully equipped modern workshop and access to the latest diagnostic tools and dealer-level 
                  equipment, we offer a comprehensive range of services — from routine servicing and diagnostics 
                  to complex mechanical repairs, performance upgrades, and specialist work on European brands 
                  such as <strong className="text-white">Mercedes-Benz, BMW, Audi, Porsche, and Volkswagen</strong>.
                </p>

                <div className="bg-slate-700 rounded-lg p-6 border-l-4 border-blue-500">
                  <p className="text-lg text-slate-300 italic">
                    "At Grimshaw Automotive, we pride ourselves on treating every customer's car as if it were our own. 
                    Our focus is not just fixing cars — it's building long-term relationships with our clients through 
                    trust and reliability."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Why Choose Grimshaw Automotive?
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Five key reasons why customers trust us with their vehicles
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-slate-800 p-8 rounded-xl border border-slate-700 text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Experienced Mechanics</h3>
              <p className="text-slate-300">
                Highly skilled and experienced mechanics with expertise across all vehicle makes and models.
              </p>
            </div>

            <div className="bg-slate-800 p-8 rounded-xl border border-slate-700 text-center">
              <div className="bg-green-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Honest & Transparent</h3>
              <p className="text-slate-300">
                Personal, honest, and transparent service with clear communication and fair pricing.
              </p>
            </div>

            <div className="bg-slate-800 p-8 rounded-xl border border-slate-700 text-center">
              <div className="bg-purple-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Wrench className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Latest Technology</h3>
              <p className="text-slate-300">
                Latest diagnostic technology and dealer-level equipment for accurate diagnosis and repair.
              </p>
            </div>

            <div className="bg-slate-800 p-8 rounded-xl border border-slate-700 text-center">
              <div className="bg-orange-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Dealer-Level Service</h3>
              <p className="text-slate-300">
                Dealer-level service quality and expertise without the expensive dealer price tag.
              </p>
            </div>

            <div className="bg-slate-800 p-8 rounded-xl border border-slate-700 text-center">
              <div className="bg-red-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Convenient Location</h3>
              <p className="text-slate-300">
                Prime Bundoora location with easy access from surrounding suburbs and ample parking.
              </p>
            </div>

            <div className="bg-slate-800 p-8 rounded-xl border border-slate-700 text-center md:col-span-2 lg:col-span-1">
              <div className="bg-yellow-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Customer Focus</h3>
              <p className="text-slate-300">
                Building long-term relationships through exceptional service and genuine care for your vehicle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Experience the Grimshaw Difference
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Ready to experience honest, professional automotive care? Contact us today to discuss 
              your vehicle's needs or book your next service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                onClick={() => setIsBookingModalOpen(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg font-semibold"
              >
                <Phone className="mr-2 h-5 w-5" />
                Book Your Service
              </Button>
              <Button 
                variant="outline"
                size="lg"
                onClick={handlePhoneCall}
                className="border-white/50 text-white hover:bg-white hover:text-slate-900 px-8 py-6 text-lg font-semibold bg-transparent"
              >
                Call (03) 9467 6328
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingCTA />
      
      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
      />
    </>
  );
};

export default AboutUs; 