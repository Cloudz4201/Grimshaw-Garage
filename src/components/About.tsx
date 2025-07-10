
import { Award, CheckCircle, Star, Users } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div data-aos="fade-right">
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
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start space-x-3" data-aos="fade-up" data-aos-delay="100">
                <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-white mb-1">No Fix, No Charge</h3>
                  <p className="text-slate-400 text-sm">If we can't fix it, you don't pay. No exceptions.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3" data-aos="fade-up" data-aos-delay="200">
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
          
          {/* Right Content - Profile */}
          <div className="bg-slate-700 rounded-2xl p-8 text-center" data-aos="fade-left">
            <div className="w-32 h-32 bg-slate-600 rounded-full mx-auto mb-6 flex items-center justify-center">
              <Users className="w-16 h-16 text-slate-300" />
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-2">Satnam Singh Dhillon</h3>
            <p className="text-slate-400 mb-4 font-medium">Head Technician & Owner</p>
            
            <div className="space-y-2 text-sm text-slate-300">
              <p><strong className="text-white">Former Head Technician:</strong></p>
              <p>• Dutton One (Porsche Centre)</p>
              <p>• Dutton Garage (Premium Service)</p>
              <p><strong className="text-white">Specialization:</strong> European Performance & All Vehicles</p>
            </div>
            
            <div className="mt-6 pt-6 border-t border-slate-600">
              <p className="text-slate-400 italic">
                "Every vehicle deserves the precision and care of a prestige dealership, 
                regardless of make, model, or price point."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
