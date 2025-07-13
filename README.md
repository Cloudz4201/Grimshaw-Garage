# Grimshaw Automotive - Premium Auto Service

Professional automotive website for Grimshaw Automotive, specializing in premium vehicle servicing and Porsche retrofitting in Bundoora, Melbourne.

## About Grimshaw Automotive

Led by Satnam Singh Dhillon, former Head Technician at prestigious dealerships including Dutton One and Dutton Garage. We provide:

- **European Performance Specialists** - Expert service for Porsche, BMW, Mercedes, and all premium vehicles
- **All Vehicles Welcome** - From Honda Civics to McLaren supercars
- **No Fix, No Charge Guarantee** - If we can't fix it, you don't pay
- **Porsche Factory Retrofitting** - 360° cameras, adaptive cruise control, lane change assist, blind spot detection

## Services

- Full Vehicle Servicing
- Logbook Servicing
- Diagnostics & Fault Finding
- Brake & Suspension
- Air Conditioning
- Pre-Purchase Inspections
- Porsche OEM Retrofitting

## Tech Stack

- React 18 with TypeScript
- Vite for fast development
- Tailwind CSS for styling
- Shadcn/ui component library
- React Router for navigation
- Lucide React for icons
- Google Maps JavaScript API for location services

## Setup

### Google Maps API Key

This project uses Google Maps to display the shop location. You need to:

1. Get a Google Maps API key from the [Google Cloud Console](https://console.cloud.google.com/google/maps-apis)
2. Enable the **Maps JavaScript API** for your project
3. Create a `.env` file in the project root with:
   ```
   REACT_APP_GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here
   ```

**Note**: The map will show an error message if the API key is not configured correctly.

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Contact

**Grimshaw Automotive**
- Phone: (03) 9467 6328
- Location: Bundoora, Melbourne
- Specialties: European Performance, Porsche Retrofitting, All Vehicle Service

*"Every vehicle deserves the precision and care of a prestige dealership, regardless of make, model, or price point."*
