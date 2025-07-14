import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import BookingModal from "@/components/BookingModal";
import { Phone, Zap, Gauge, Wrench, CheckCircle } from "lucide-react";

const PerformanceTuning = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handlePhoneCall = () => {
    window.location.href = 'tel:+61394676328';
  };

  return (
    <>
      <SEOHead 
        title="Performance Tuning Services"
        description="Professional performance tuning services for all makes and models. ECU remapping, engine optimization, and performance upgrades by certified technicians at Grimshaw Automotive."
        keywords="performance tuning, ECU remapping, engine tuning, performance upgrades, horsepower, torque, Melbourne automotive"
      />
      
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-red-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
              Performance Tuning
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Unleash Your Vehicle's
              <span className="block text-red-400">True Potential</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Professional ECU remapping and performance tuning services for all makes and models. 
              Increase power, improve fuel efficiency, and enhance your driving experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                onClick={() => setIsBookingModalOpen(true)}
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg font-semibold"
              >
                <Phone className="mr-2 h-5 w-5" />
                Book Performance Consultation
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

      {/* Services Overview */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Performance Tuning Services
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              From ECU remapping to complete performance packages, we deliver measurable gains 
              in power, torque, and efficiency across all vehicle makes and models.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-700 p-8 rounded-xl border border-slate-600">
              <div className="bg-red-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">ECU Remapping</h3>
              <p className="text-slate-300 mb-4">
                Professional ECU remapping to optimize engine performance, increase power output, 
                and improve fuel efficiency without compromising reliability.
              </p>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-400" />15-30% power increase</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-400" />Improved fuel economy</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-400" />Enhanced throttle response</li>
              </ul>
            </div>

            <div className="bg-slate-700 p-8 rounded-xl border border-slate-600">
              <div className="bg-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Gauge className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Dyno Testing</h3>
              <p className="text-slate-300 mb-4">
                Comprehensive dyno testing to measure baseline performance and validate 
                improvements after tuning modifications.
              </p>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-400" />Before & after testing</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-400" />Power & torque graphs</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-400" />Performance reports</li>
              </ul>
            </div>

            <div className="bg-slate-700 p-8 rounded-xl border border-slate-600">
              <div className="bg-purple-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Wrench className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Performance Packages</h3>
              <p className="text-slate-300 mb-4">
                Complete performance packages including hardware modifications, 
                tuning, and ongoing support for maximum gains.
              </p>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-400" />Custom solutions</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-400" />Quality components</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-400" />Ongoing support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Why Choose Grimshaw for Performance Tuning?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-red-600 p-3 rounded-lg flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Expert Technicians</h3>
                      <p className="text-slate-300">
                        Our certified technicians have extensive experience with performance tuning 
                        across all makes and models, from everyday vehicles to exotic supercars.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-600 p-3 rounded-lg flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Latest Technology</h3>
                      <p className="text-slate-300">
                        We use the latest tuning equipment and software to ensure optimal results 
                        while maintaining reliability and warranty protection where applicable.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-green-600 p-3 rounded-lg flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Proven Results</h3>
                      <p className="text-slate-300">
                        Measurable improvements in power, torque, and efficiency with dyno-proven 
                        results and comprehensive performance reports.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">
                  Ready to Unleash Your Vehicle's Potential?
                </h3>
                <p className="text-slate-300 text-center mb-8">
                  Contact us today for a performance consultation and discover what your vehicle is truly capable of.
                </p>
                <div className="space-y-4">
                  <Button 
                    onClick={() => setIsBookingModalOpen(true)}
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3"
                  >
                    Book Performance Consultation
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={handlePhoneCall}
                    className="w-full border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white bg-transparent"
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Call (03) 9467 6328
                  </Button>
                </div>
              </div>
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

export default PerformanceTuning; 