import { MapPin, Phone, Clock, Car } from "lucide-react";
import MapComponent from "./MapComponent";

const FindUs = () => {
  const handleGetDirections = () => {
    const address = "Unit 3, 30 Clements Avenue, Bundoora VIC 3083, Australia";
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`, '_blank');
  };

  return (
    <section className="py-16 bg-slate-900">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <div className="inline-block bg-slate-700 px-4 py-2 rounded-full text-sm font-medium mb-6 text-slate-300 shadow-sm">
            Location
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            Find Us
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Located in Bundoora, easily accessible from surrounding suburbs. 
            Visit our modern workshop for all your automotive needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start" style={{ touchAction: 'manipulation' }}>
          {/* Map */}
          <div data-aos="fade-right" style={{ touchAction: 'manipulation' }}>
            <MapComponent />
            <div className="mt-4">
              <button
                onClick={handleGetDirections}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2"
                style={{ touchAction: 'manipulation' }}
              >
                <Car className="w-5 h-5" />
                <span>Get Directions</span>
              </button>
            </div>
          </div>

          {/* Location Details */}
          <div data-aos="fade-left" style={{ touchAction: 'manipulation' }}>
            <div className="space-y-8">
              {/* Address */}
              <div className="bg-slate-800 p-6 rounded-xl">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Our Address</h3>
                    <p className="text-slate-300">
                      Unit 3, 30 Clements Avenue<br />
                      Bundoora VIC 3083<br />
                      Australia
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="bg-slate-800 p-6 rounded-xl">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-600 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Contact Details</h3>
                    <div className="space-y-1 text-slate-300">
                      <p>
                        <a href="tel:+61394676328" className="hover:text-white transition-colors">
                          (03) 9467 6328
                        </a>
                      </p>
                      <p>
                        <a href="tel:+61451431429" className="hover:text-white transition-colors">
                          +61 451 431 429
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-slate-800 p-6 rounded-xl">
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-600 p-3 rounded-lg">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Business Hours</h3>
                    <div className="space-y-1 text-slate-300">
                      <p><span className="font-semibold">Monday - Friday:</span> 8:00 AM - 6:00 PM</p>
                      <p><span className="font-semibold">Saturday:</span> 8:00 AM - 4:00 PM</p>
                      <p><span className="font-semibold">Sunday:</span> Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Nearby Suburbs */}
              <div className="bg-slate-800 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-white mb-3">We Service These Areas</h3>
                <div className="grid grid-cols-2 gap-2 text-slate-300 text-sm">
                  <p>• Bundoora</p>
                  <p>• Mill Park</p>
                  <p>• Lalor</p>
                  <p>• Thomastown</p>
                  <p>• Preston</p>
                  <p>• Reservoir</p>
                  <p>• Heidelberg</p>
                  <p>• Macleod</p>
                  <p>• Greensborough</p>
                  <p>• Watsonia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindUs; 