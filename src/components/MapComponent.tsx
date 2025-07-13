import { useState, useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

const MapComponent = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<google.maps.Map | null>(null);

  // Coordinates for Unit 3, 30 Clements Avenue, Bundoora VIC 3083
  const position = { lat: -37.7007, lng: 145.0575 };

  useEffect(() => {
    const initMap = async () => {
      try {
        // Debug: Check what API key we're getting
        const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
        console.log('Environment check:', {
          hasViteKey: !!apiKey,
          keyLength: apiKey?.length || 0,
          keyPreview: apiKey ? `${apiKey.substring(0, 10)}...` : 'No key found'
        });

        if (!apiKey || apiKey === 'YOUR_GOOGLE_MAPS_API_KEY') {
          throw new Error('Google Maps API key not configured. Please set VITE_GOOGLE_MAPS_API_KEY in your environment variables.');
        }

        // Initialize Google Maps
        const loader = new Loader({
          apiKey: apiKey,
          version: 'weekly',
          libraries: ['places']
        });

        console.log('Attempting to load Google Maps...');
        await loader.load();
        console.log('Google Maps loaded successfully');

        // Small delay to ensure DOM is ready
        await new Promise(resolve => setTimeout(resolve, 100));

        if (mapRef.current) {
          console.log('Map container found, creating map...');
          console.log('Position:', position);
          console.log('Container dimensions:', {
            width: mapRef.current.offsetWidth,
            height: mapRef.current.offsetHeight
          });

          // Create map
          const map = new google.maps.Map(mapRef.current, {
            center: position,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            disableDefaultUI: false,
            zoomControl: true,
            streetViewControl: true,
            fullscreenControl: true,
            styles: [
              {
                featureType: 'all',
                elementType: 'geometry.fill',
                stylers: [{ color: '#f5f5f5' }]
              },
              {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{ color: '#ffffff' }]
              },
              {
                featureType: 'road',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#616161' }]
              },
              {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#757575' }]
              }
            ]
          });

          console.log('Map created, adding marker...');

          // Create marker
          const marker = new google.maps.Marker({
            position: position,
            map: map,
            title: 'Grimshaw Automotive',
            icon: {
              url: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png',
              scaledSize: new google.maps.Size(40, 40)
            }
          });

          console.log('Marker created, adding info window...');

          // Create info window
          const infoWindow = new google.maps.InfoWindow({
            content: `
              <div style="padding: 10px; font-family: Arial, sans-serif;">
                <h3 style="margin: 0 0 8px 0; color: #1f2937; font-size: 16px; font-weight: bold;">
                  Grimshaw Automotive
                </h3>
                <p style="margin: 0 0 4px 0; color: #374151; font-size: 14px;">
                  Unit 3, 30 Clements Avenue<br>
                  Bundoora VIC 3083
                </p>
                <p style="margin: 8px 0 0 0;">
                  <a href="tel:+61394676328" style="color: #2563eb; text-decoration: none; font-weight: 500;">
                    (03) 9467 6328
                  </a>
                </p>
              </div>
            `
          });

          console.log('Info window created, adding event listeners...');

          // Add click listener to marker
          marker.addListener('click', () => {
            infoWindow.open(map, marker);
          });

          // Open info window by default
          infoWindow.open(map, marker);

          console.log('Setting map instance and loaded state...');
          mapInstance.current = map;
          setIsLoaded(true);
          console.log('Map initialized successfully');
        } else {
          console.error('Map container not found!');
          throw new Error('Map container not found');
        }
      } catch (err) {
        console.error('Error loading Google Maps:', err);
        
        // More specific error messages
        let errorMessage = 'Failed to load Google Maps.';
        if (err instanceof Error) {
          if (err.message.includes('API key')) {
            errorMessage = 'Invalid API key. Please check your Google Maps API key configuration.';
          } else if (err.message.includes('quota')) {
            errorMessage = 'API quota exceeded. Please check your Google Cloud billing.';
          } else if (err.message.includes('restricted')) {
            errorMessage = 'API key restrictions. Please check your domain settings in Google Cloud.';
          } else {
            errorMessage = `API Error: ${err.message}`;
          }
        }
        
        setError(errorMessage);
      }
    };

    initMap();
  }, []);

  const handleRetry = () => {
    setError(null);
    setIsLoaded(false);
    // Retry after a short delay
    setTimeout(() => {
      const initMap = async () => {
        try {
          if (mapRef.current && !mapInstance.current) {
            const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
            
            if (!apiKey || apiKey === 'YOUR_GOOGLE_MAPS_API_KEY') {
              throw new Error('Google Maps API key not configured. Please set VITE_GOOGLE_MAPS_API_KEY in your environment variables.');
            }

            const loader = new Loader({
              apiKey: apiKey,
              version: 'weekly',
              libraries: ['places']
            });

            await loader.load();

            const map = new google.maps.Map(mapRef.current, {
              center: position,
              zoom: 15,
              mapTypeId: google.maps.MapTypeId.ROADMAP,
            });

            const marker = new google.maps.Marker({
              position: position,
              map: map,
              title: 'Grimshaw Automotive',
            });

            const infoWindow = new google.maps.InfoWindow({
              content: `
                <div style="padding: 10px;">
                  <strong>Grimshaw Automotive</strong><br>
                  Unit 3, 30 Clements Avenue<br>
                  Bundoora VIC 3083<br>
                  <a href="tel:+61394676328" style="color: #2563eb;">
                    (03) 9467 6328
                  </a>
                </div>
              `
            });

            marker.addListener('click', () => {
              infoWindow.open(map, marker);
            });

            infoWindow.open(map, marker);
            mapInstance.current = map;
            setIsLoaded(true);
          }
        } catch (err) {
          console.error('Retry failed:', err);
          let errorMessage = 'Failed to load Google Maps.';
          if (err instanceof Error) {
            if (err.message.includes('API key')) {
              errorMessage = 'Invalid API key. Please check your Google Maps API key configuration.';
            } else if (err.message.includes('quota')) {
              errorMessage = 'API quota exceeded. Please check your Google Cloud billing.';
            } else if (err.message.includes('restricted')) {
              errorMessage = 'API key restrictions. Please check your domain settings in Google Cloud.';
            } else {
              errorMessage = `API Error: ${err.message}`;
            }
          }
          setError(errorMessage);
        }
      };
      initMap();
    }, 100);
  };

  if (error) {
    return (
      <div className="w-full h-96 rounded-lg bg-slate-800 flex items-center justify-center">
        <div className="text-center text-slate-300 p-6">
          <div className="mb-4">
            <svg className="w-12 h-12 mx-auto mb-2 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <p className="mb-4 text-sm">{error}</p>
          <button 
            onClick={handleRetry}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors"
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
          <p className="text-sm">Loading Google Maps...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
      <div 
        ref={mapRef}
        className="w-full h-full"
        style={{ 
          minHeight: '384px',
          width: '100%',
          height: '100%',
          display: 'block'
        }}
      />
    </div>
  );
};

export default MapComponent; 