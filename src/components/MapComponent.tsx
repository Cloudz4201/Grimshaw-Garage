import { useState, useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import { MapPin, ExternalLink, Phone, AlertCircle } from 'lucide-react';

const MapComponent = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<google.maps.Map | null>(null);

  // Business location - Unit 3, 30 Clements Avenue, Bundoora VIC 3083
  const businessLocation = { 
    lat: -37.7007, 
    lng: 145.0575 
  };

  const businessInfo = {
    name: 'Grimshaw Automotive',
    address: 'Unit 3, 30 Clements Avenue, Bundoora VIC 3083',
    phone: '(03) 9467 6328',
    hours: 'Mon-Fri: 8AM-6PM, Sat: 8AM-4PM'
  };

  useEffect(() => {
    const initMap = async () => {
      try {
        setIsLoading(true);
        setError(null);

        // Get API key from environment variables
        const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
        
        if (!apiKey) {
          throw new Error('Google Maps API key not found. Please check your environment variables.');
        }

        console.log('Initializing Google Maps...');

        const loader = new Loader({
          apiKey: apiKey,
          version: 'weekly',
          libraries: ['places', 'geometry']
        });

        await loader.load();
        console.log('Google Maps API loaded successfully');

        if (!mapRef.current) {
          throw new Error('Map container not found');
        }

        // Create the map
        const map = new google.maps.Map(mapRef.current, {
          center: businessLocation,
          zoom: 16,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          styles: [
            {
              featureType: "all",
              elementType: "geometry.fill",
              stylers: [{ saturation: -20 }]
            },
            {
              featureType: "road",
              elementType: "geometry.fill",
              stylers: [{ color: "#ddd" }]
            }
          ],
          mapTypeControl: true,
          streetViewControl: true,
          fullscreenControl: true,
          zoomControl: true,
        });

        mapInstanceRef.current = map;

        // Create custom marker
        const marker = new google.maps.Marker({
          position: businessLocation,
          map: map,
          title: businessInfo.name,
          icon: {
            path: google.maps.SymbolPath.CIRCLE,
            scale: 10,
            fillColor: '#DC2626',
            fillOpacity: 1,
            strokeColor: '#FFFFFF',
            strokeWeight: 2,
          },
          animation: google.maps.Animation.DROP,
        });

        // Create info window
        const infoWindow = new google.maps.InfoWindow({
          content: `
            <div style="padding: 12px; max-width: 250px; font-family: Arial, sans-serif;">
              <h3 style="margin: 0 0 8px 0; color: #1f2937; font-size: 16px; font-weight: bold;">
                ${businessInfo.name}
              </h3>
              <p style="margin: 0 0 6px 0; color: #4b5563; font-size: 14px; line-height: 1.4;">
                ${businessInfo.address}
              </p>
              <p style="margin: 0 0 8px 0; color: #4b5563; font-size: 14px;">
                ${businessInfo.hours}
              </p>
              <div style="display: flex; gap: 8px; margin-top: 10px;">
                <a href="tel:${businessInfo.phone.replace(/\s/g, '')}" 
                   style="color: #dc2626; text-decoration: none; font-weight: 500; font-size: 14px;">
                  📞 ${businessInfo.phone}
                </a>
              </div>
              <div style="margin-top: 8px;">
                <a href="https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(businessInfo.address)}" 
                   target="_blank" 
                   style="color: #2563eb; text-decoration: none; font-size: 13px;">
                  🗺️ Get Directions
                </a>
              </div>
            </div>
          `
        });

        // Add click listener to marker
        marker.addListener('click', () => {
          infoWindow.open(map, marker);
        });

        // Open info window by default
        infoWindow.open(map, marker);

        // Add click listener to map to close info window
        map.addListener('click', () => {
          infoWindow.close();
        });

        setIsLoaded(true);
        console.log('Map initialized successfully');

      } catch (err) {
        console.error('Error loading Google Maps:', err);
        setError(err instanceof Error ? err.message : 'Failed to load Google Maps');
      } finally {
        setIsLoading(false);
      }
    };

    initMap();
  }, []);

  const handleGetDirections = () => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(businessInfo.address)}`;
    window.open(url, '_blank');
  };

  const handleRetry = () => {
    setError(null);
    setIsLoaded(false);
    setIsLoading(true);
    // Re-trigger the effect
    window.location.reload();
  };

  if (error) {
    return (
      <div className="w-full h-96 rounded-lg bg-slate-800 border border-slate-600 flex flex-col items-center justify-center p-6">
        <AlertCircle className="h-12 w-12 text-red-500 mb-4" />
        <div className="text-center">
          <h3 className="text-white font-semibold mb-2">Unable to Load Map</h3>
          <p className="text-slate-300 mb-4 text-sm max-w-md">
            {error}
          </p>
          <div className="space-y-3">
            <button 
              onClick={handleRetry}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              Try Again
            </button>
            <div className="text-slate-400 text-sm">
              <p className="mb-2">{businessInfo.name}</p>
              <p className="mb-2">{businessInfo.address}</p>
              <div className="flex flex-col sm:flex-row gap-2 justify-center">
                <a 
                  href={`tel:${businessInfo.phone.replace(/\s/g, '')}`}
                  className="text-blue-400 hover:text-blue-300 transition-colors flex items-center justify-center gap-1"
                >
                  <Phone className="h-4 w-4" />
                  {businessInfo.phone}
                </a>
                <button
                  onClick={handleGetDirections}
                  className="text-blue-400 hover:text-blue-300 transition-colors flex items-center justify-center gap-1"
                >
                  <ExternalLink className="h-4 w-4" />
                  Get Directions
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (isLoading || !isLoaded) {
    return (
      <div className="w-full h-96 rounded-lg bg-slate-800 border border-slate-600 flex flex-col items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-slate-300 mb-2">Loading map...</p>
          <p className="text-slate-400 text-sm">{businessInfo.name}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg border border-slate-600">
      <div 
        ref={mapRef}
        className="w-full h-full"
        style={{ minHeight: '384px' }}
      />
    </div>
  );
};

export default MapComponent; 