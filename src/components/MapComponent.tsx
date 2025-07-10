import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default markers in React Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const MapComponent = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  // Coordinates for Unit 3, 30 Clements Avenue, Bundoora VIC 3083
  const position: [number, number] = [-37.7007, 145.0575]; // Bundoora coordinates
  
  useEffect(() => {
    // Small delay to ensure the component is properly mounted
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  if (error) {
    return (
      <div className="w-full h-96 rounded-lg bg-slate-800 flex items-center justify-center">
        <div className="text-center text-slate-300">
          <p className="mb-4">Unable to load map</p>
          <button 
            onClick={() => {
              setError(null);
              setIsLoaded(false);
              setTimeout(() => setIsLoaded(true), 100);
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div className="w-full h-96 rounded-lg bg-slate-800 flex items-center justify-center">
        <div className="text-center text-slate-300">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p>Loading map...</p>
        </div>
      </div>
    );
  }
  
  try {
    return (
      <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
        <MapContainer
          center={position}
          zoom={15}
          style={{ height: '100%', width: '100%' }}
          className="z-10"
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              <div className="text-center">
                <strong>Grimshaw Automotive</strong><br />
                Unit 3, 30 Clements Avenue<br />
                Bundoora VIC 3083<br />
                <a 
                  href="tel:+61394676328" 
                  className="text-blue-600 hover:text-blue-800"
                >
                  (03) 9467 6328
                </a>
              </div>
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    );
  } catch (err) {
    setError('Failed to render map');
    return null;
  }
};

export default MapComponent; 