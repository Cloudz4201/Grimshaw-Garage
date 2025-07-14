import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import BookingModal from "@/components/BookingModal";
import { Phone, Volume2, Settings, Wrench, CheckCircle, Award } from "lucide-react";

const CustomExhausts = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handlePhoneCall = () => {
    window.location.href = 'tel:+61394676328';
  };

  return (
    <>
      <SEOHead 
        title="Custom Exhaust Systems"
        description="Professional custom exhaust system design and installation for all makes and models. Performance exhausts, cat-back systems, and sound tuning by expert technicians at Grimshaw Automotive."
        keywords="custom exhaust, performance exhaust, cat-back system, exhaust installation, sound tuning, Melbourne automotive"
      />
      
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-orange-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
              Custom Exhaust Systems
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Custom Exhaust Systems
              <span className="block text-orange-400">Built for Performance</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Professional design, fabrication, and installation of custom exhaust systems. 
              Enhance performance, improve sound, and optimize your vehicle's character.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                onClick={() => setIsBookingModalOpen(true)}
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg font-semibold"
              >
                <Phone className="mr-2 h-5 w-5" />
                Book Exhaust Consultation
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
              Custom Exhaust Services
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              From subtle performance enhancements to full custom fabrication, we create exhaust systems 
              that perfectly match your vehicle's requirements and your personal preferences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-700 p-8 rounded-xl border border-slate-600">
              <div className="bg-orange-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Volume2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Sound Tuning</h3>
              <p className="text-slate-300 mb-4">
                Custom sound design to achieve the perfect exhaust note. From subtle enhancement 
                to aggressive performance sound, tailored to your preferences.
              </p>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-400" />Professional sound analysis</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-400" />Custom muffler selection</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-400" />Resonator optimization</li>
              </ul>
            </div>

            <div className="bg-slate-700 p-8 rounded-xl border border-slate-600">
              <div className="bg-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Settings className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Performance Systems</h3>
              <p className="text-slate-300 mb-4">
                Cat-back and turbo-back exhaust systems designed to maximize performance 
                gains while maintaining optimal flow characteristics.
              </p>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-400" />Increased horsepower</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-400" />Improved exhaust flow</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-400" />Weight reduction</li>
              </ul>
            </div>

            <div className="bg-slate-700 p-8 rounded-xl border border-slate-600">
              <div className="bg-purple-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Wrench className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Custom Fabrication</h3>
              <p className="text-slate-300 mb-4">
                Complete custom exhaust fabrication for unique applications, modified vehicles, 
                or when off-the-shelf solutions aren't available.
              </p>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-400" />Bespoke design</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-400" />Quality materials</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-400" />Perfect fitment</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Materials & Brands */}
      <section className="py-20 bg-slate-700">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Premium Materials & Brands
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              We work with the highest quality materials and trusted brands to ensure 
              durability, performance, and longevity of your custom exhaust system.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-slate-800 rounded-xl border border-slate-600">
              <div className="bg-orange-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Stainless Steel</h3>
              <p className="text-slate-400 text-sm">Premium 304 & 316 stainless steel for maximum durability</p>
            </div>

            <div className="text-center p-6 bg-slate-800 rounded-xl border border-slate-600">
              <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Titanium</h3>
              <p className="text-slate-400 text-sm">Lightweight titanium options for racing applications</p>
            </div>

            <div className="text-center p-6 bg-slate-800 rounded-xl border border-slate-600">
              <div className="bg-green-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Mandrel Bent</h3>
              <p className="text-slate-400 text-sm">Precision mandrel bent pipes for optimal flow</p>
            </div>

            <div className="text-center p-6 bg-slate-800 rounded-xl border border-slate-600">
              <div className="bg-purple-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">TIG Welding</h3>
              <p className="text-slate-400 text-sm">Professional TIG welding for clean, strong joints</p>
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
                Why Choose Grimshaw for Custom Exhausts?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-600 p-3 rounded-lg flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Expert Fabrication</h3>
                      <p className="text-slate-300">
                        Our skilled fabricators have years of experience creating custom exhaust systems 
                        for all types of vehicles, from daily drivers to track cars.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-600 p-3 rounded-lg flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Custom Design Process</h3>
                      <p className="text-slate-300">
                        We work closely with you to understand your goals and create a system that 
                        perfectly matches your performance and sound requirements.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-green-600 p-3 rounded-lg flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Quality Guarantee</h3>
                      <p className="text-slate-300">
                        All our custom exhaust work comes with a comprehensive warranty, ensuring 
                        your investment is protected for years to come.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">
                  Ready for a Custom Exhaust?
                </h3>
                <p className="text-slate-300 text-center mb-8">
                  Contact us today to discuss your custom exhaust project and discover the perfect sound and performance for your vehicle.
                </p>
                <div className="space-y-4">
                  <Button 
                    onClick={() => setIsBookingModalOpen(true)}
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3"
                  >
                    Book Exhaust Consultation
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

export default CustomExhausts; 