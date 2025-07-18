
import { Award, CheckCircle, Star, Users, Wrench, Car } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 bg-slate-800 relative overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/Backgroung-Cars/c63amg grey.jpeg')`
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/70 to-slate-900/80"></div>
      </div>
      
      {/* Content - Add relative z-10 to ensure it appears above the background */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div data-aos="fade-right">
            <div className="inline-flex items-center bg-slate-700 px-4 py-2 rounded-full text-sm font-medium mb-6 text-slate-300">
              <img 
                src="/logo.png" 
                alt="Grimshaw Automotive Logo"
                className="h-6 w-auto object-contain"
              />
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
              European Performance Specialists, 
              <span className="text-slate-400"> Welcoming Every Vehicle</span>
            </h2>
            
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              Led by our experienced Head Technician, former Head Technician at Australia's most 
              prestigious dealerships—Dutton One and Dutton Garage. Decades of high-end European expertise 
              with transparent, friendly service for <strong className="text-white">all vehicle makes and models</strong>.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start space-x-3" data-aos="fade-up" data-aos-delay="100">
                <Award className="h-6 w-6 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-white mb-1">Euro Performance Expert</h3>
                  <p className="text-slate-400 text-sm">Porsche, BMW, Mercedes specialist expertise.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3" data-aos="fade-up" data-aos-delay="300">
                <Users className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-white mb-1">All Vehicles Welcome</h3>
                  <p className="text-slate-400 text-sm">From Honda Civics to McLaren supercars.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3" data-aos="fade-up" data-aos-delay="400">
                <Star className="h-6 w-6 text-yellow-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-white mb-1">Transparent Pricing</h3>
                  <p className="text-slate-400 text-sm">Honest advice and clear pricing always.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Professional Profile */}
          <div className="bg-slate-700/90 backdrop-blur-sm rounded-2xl p-8 text-center relative" data-aos="fade-left">
            {/* Profile Image with Professional Styling */}
            <div className="relative w-36 h-36 mx-auto mb-4">
              <img 
                src="/satnam-profile.jpg" 
                alt="Head Technician & Owner"
                className="w-full h-full rounded-lg object-cover border-4 border-slate-500 shadow-xl"
              />
              {/* Credential Badge */}
              <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full p-2 border-3 border-slate-700 shadow-lg">
                <Wrench className="w-4 h-4 text-slate-900" />
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-2">Head Technician & Owner</h3>
            <p className="text-slate-400 mb-4 font-medium">European Performance Specialist</p>
            
            {/* Professional Credentials */}
            <div className="bg-slate-800/90 rounded-xl p-4 mb-4">
              <div className="flex items-center justify-center mb-3 relative">
                <div className="flex items-center">
                  <Car className="w-5 h-5 text-blue-400 mr-2" />
                  <span className="text-white font-semibold text-sm">FORMER HEAD TECHNICIAN</span>
                </div>
                <img 
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoEcLQ9q0FzEVmWIqNWDI-ZFfvlUbmYIe2ww&s"
                  alt="Professional Certification Badge"
                  className="w-8 h-8 object-cover absolute right-0"
                />
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
            <div className="bg-gradient-to-r from-slate-600/90 to-slate-700/90 rounded-lg p-3 mb-6 border border-slate-600">
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
        <div id="digital-service-records" className="mt-16 bg-slate-700/90 backdrop-blur-sm rounded-2xl p-8" data-aos="fade-up" data-aos-delay="500">
          <div className="text-center mb-8">
            <div className="inline-block bg-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4 text-white">
              Digital Service Records
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Warranty Protected Service History
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
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
            
            <div className="bg-slate-800/90 rounded-xl p-6 border border-slate-600">
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
