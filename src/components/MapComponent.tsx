import React, { useEffect, useRef, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import { MapPin, Phone } from 'lucide-react';

const MapComponent = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Business location - Unit 3, 30 Clements Avenue, Bundoora VIC 3083
  const businessLocation = { 
    lat: -37.7007, 
    lng: 145.0575 
  };

  const businessInfo = {
    name: 'Grimshaw Automotive',
    address: 'Unit 3, 30 Clements Avenue, Bundoora VIC 3083',
    phone: '+61 3 9467 6328',
  };

  useEffect(() => {
    const initMap = async () => {
      try {
        const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
        
        if (!apiKey) {
          setError('Google Maps API key not configured');
          return;
        }

        const loader = new Loader({
          apiKey: apiKey,
          version: 'weekly',
        });

        await loader.load();

        if (mapRef.current) {
          const map = new google.maps.Map(mapRef.current, {
            center: businessLocation,
            zoom: 15,
          });

          new google.maps.Marker({
            position: businessLocation,
            map: map,
            title: businessInfo.name,
          });

          setIsLoaded(true);
        }
      } catch (err) {
        console.error('Error loading map:', err);
        setError('Failed to load map');
      }
    };

    initMap();
  }, []);

  const handlePhoneCall = () => {
    window.location.href = `tel:${businessInfo.phone}`;
  };

  if (error) {
    return (
      <div className="w-full h-[400px] bg-slate-700 rounded-lg flex items-center justify-center overflow-hidden">
        <div className="text-center text-slate-300">
          <MapPin className="w-12 h-12 mx-auto mb-4 text-slate-400" />
          <h3 className="text-lg font-semibold mb-2">Map Unavailable</h3>
          <p className="text-sm">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-full overflow-hidden">
      {/* Map Container */}
      <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg max-w-full">
        {!isLoaded && (
          <div className="w-full h-full bg-slate-700 flex items-center justify-center">
            <div className="text-center text-slate-300">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-500 mx-auto mb-4"></div>
              <p>Loading map...</p>
            </div>
          </div>
        )}
        <div ref={mapRef} className="w-full h-full max-w-full" />
      </div>

      {/* Business Info Card */}
      <div className="mt-6 bg-slate-800 rounded-lg p-6 w-full max-w-full overflow-hidden">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="min-w-0">
            <h3 className="text-xl font-bold text-white mb-4">Visit Our Workshop</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                <div className="min-w-0 flex-1">
                  <p className="text-white font-medium">{businessInfo.name}</p>
                  <p className="text-slate-300 text-sm break-words">{businessInfo.address}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-red-500 flex-shrink-0" />
                <p className="text-slate-300">{businessInfo.phone}</p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center md:justify-end">
            <button
              onClick={handlePhoneCall}
              className="flex items-center justify-center gap-2 border border-slate-600 hover:border-slate-500 text-white px-6 py-3 rounded-lg font-medium transition-colors w-full md:w-auto"
            >
              <Phone className="w-4 h-4" />
              Call Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapComponent; 