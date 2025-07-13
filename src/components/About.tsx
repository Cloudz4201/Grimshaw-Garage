
import { Award, CheckCircle, Star, Users, Wrench, Car } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center" style={{ touchAction: 'manipulation' }}>
          {/* Left Content */}
          <div data-aos="fade-right" style={{ touchAction: 'manipulation' }}>
            <div className="inline-block bg-slate-700 px-4 py-2 rounded-full text-sm font-medium mb-6 text-slate-300">
              About Grimshaw Automotive
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
              European Performance Specialists, 
              <span className="text-slate-400"> Welcoming Every Vehicle</span>
            </h2>
            
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              Led by <strong className="text-white">Satnam Singh Dhillon</strong>, former Head Technician at Australia's most 
              prestigious dealerships—Dutton One and Dutton Garage. Decades of high-end European expertise 
              with transparent, friendly service for <strong className="text-white">all vehicle makes and models</strong>.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8" style={{ touchAction: 'manipulation' }}>
              <div className="flex items-start space-x-3" data-aos="fade-up" data-aos-delay="100" style={{ touchAction: 'manipulation' }}>
                <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-white mb-1">No Fix, No Charge</h3>
                  <p className="text-slate-400 text-sm">If we can't fix it, you don't pay. No exceptions.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3" data-aos="fade-up" data-aos-delay="200" style={{ touchAction: 'manipulation' }}>
                <Award className="h-6 w-6 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-white mb-1">Euro Performance Expert</h3>
                  <p className="text-slate-400 text-sm">Porsche, BMW, Mercedes specialist expertise.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3" data-aos="fade-up" data-aos-delay="300" style={{ touchAction: 'manipulation' }}>
                <Users className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-white mb-1">All Vehicles Welcome</h3>
                  <p className="text-slate-400 text-sm">From Honda Civics to McLaren supercars.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3" data-aos="fade-up" data-aos-delay="400" style={{ touchAction: 'manipulation' }}>
                <Star className="h-6 w-6 text-yellow-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-white mb-1">Transparent Pricing</h3>
                  <p className="text-slate-400 text-sm">Honest advice and clear pricing always.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Professional Profile with Custom Badge */}
          <div className="bg-slate-700 rounded-2xl p-8 text-center relative" data-aos="fade-left" style={{ touchAction: 'manipulation' }}>
            {/* Custom Professional Badge */}
            <div className="absolute -top-4 -right-4 bg-white rounded-full p-2 shadow-xl border-4 border-slate-800">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoEcLQ9q0FzEVmWIqNWDI-ZFfvlUbmYIe2ww&s"
                alt="Professional Certification Badge"
                className="w-12 h-12 rounded-full object-cover"
              />
            </div>
            
            {/* Profile Image with Professional Styling */}
            <div className="relative w-32 h-32 mx-auto mb-6">
              <img 
                src="/satnam-profile.jpg" 
                alt="Satnam Singh Dhillon - Head Technician & Owner"
                className="w-full h-full rounded-full object-cover border-4 border-slate-500 shadow-xl"
              />
              {/* Credential Badge */}
              <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full p-2 border-3 border-slate-700 shadow-lg">
                <Wrench className="w-4 h-4 text-slate-900" />
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-2">Satnam Singh Dhillon</h3>
            <p className="text-slate-400 mb-4 font-medium">Head Technician & Owner</p>
            
            {/* Professional Credentials */}
            <div className="bg-slate-800 rounded-xl p-4 mb-4">
              <div className="flex items-center justify-center mb-3">
                <Car className="w-5 h-5 text-blue-400 mr-2" />
                <span className="text-white font-semibold text-sm">FORMER HEAD TECHNICIAN</span>
              </div>
              <div className="space-y-2 text-sm text-slate-300">
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Dutton One</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Dutton Garage</span>
                </div>
              </div>
            </div>

            {/* Specialization Badge */}
            <div className="bg-gradient-to-r from-slate-600 to-slate-700 rounded-lg p-3 mb-6 border border-slate-600">
              <p className="text-white font-semibold text-sm mb-1">SPECIALIZATION</p>
              <p className="text-slate-300 text-sm">European Performance & All Vehicles</p>
            </div>
            
            <div className="mt-6 pt-6 border-t border-slate-600">
              <p className="text-slate-400 italic">
                "Every vehicle deserves the precision and care of a prestige dealership, 
                regardless of make, model, or price point."
              </p>
            </div>
          </div>
        </div>

        {/* Digital Service Records Section */}
        <div className="mt-16 bg-slate-700 rounded-2xl p-8" data-aos="fade-up" data-aos-delay="500" style={{ touchAction: 'manipulation' }}>
          <div className="text-center mb-8">
            <div className="inline-block bg-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4 text-white">
              Digital Service Records
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Warranty Protected Service History
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center" style={{ touchAction: 'manipulation' }}>
            <div>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                We update and digitize your service book directly in the dealer's system. 
                Any authorized dealer can see that <strong className="text-white">Grimshaw Automotive</strong> has 
                performed your service, ensuring <strong className="text-blue-400">your warranty remains valid</strong>.
              </p>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-white mb-2">Complete Digital Integration</h4>
                  <p className="text-slate-400">
                    Full dealer system access means seamless service history tracking and warranty protection.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-600">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-blue-600 rounded-full p-3">
                  <Award className="w-8 h-8 text-white" />
                </div>
              </div>
              <h4 className="text-white font-bold text-center mb-2">Warranty Guarantee</h4>
              <p className="text-slate-300 text-center text-sm">
                Professional service with full dealer system integration - your warranty stays intact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
