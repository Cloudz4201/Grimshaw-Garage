
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import CarBrands from "@/components/CarBrands";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import FindUs from "@/components/FindUs";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import SEOHead from "@/components/SEOHead";

const Index = () => {
  // Enhanced structured data for better SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "name": "Grimshaw Automotive",
    "description": "Premium automotive servicing, repairs, and Porsche retrofitting in Melbourne. European performance specialists serving Bundoora, Mill Park, Preston, Reservoir, and surrounding suburbs.",
    "url": "https://grimshawautomotive.com.au",
    "telephone": "+61394676328",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Unit 3, 30 Clements Avenue",
      "addressLocality": "Bundoora",
      "addressRegion": "VIC",
      "postalCode": "3083",
      "addressCountry": "AU"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -37.7007,
      "longitude": 145.0575
    },
    "openingHours": [
      "Mo-Fr 08:00-18:00",
      "Sa 08:00-16:00"
    ],
    "priceRange": "$$",
    "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"],
    "areaServed": [
      {
        "@type": "Place",
        "name": "Balwyn, VIC"
      },
      {
        "@type": "Place",
        "name": "Blackburn, VIC"
      },
      {
        "@type": "Place",
        "name": "Box Hill, VIC"
      },
      {
        "@type": "Place",
        "name": "Brunswick, VIC"
      },
      {
        "@type": "Place",
        "name": "Bulleen, VIC"
      },
      {
        "@type": "Place",
        "name": "Bundoora, VIC"
      },
      {
        "@type": "Place",
        "name": "Croydon, VIC"
      },
      {
        "@type": "Place",
        "name": "Croydon North, VIC"
      },
      {
        "@type": "Place",
        "name": "Diamond Creek, VIC"
      },
      {
        "@type": "Place",
        "name": "Doncaster, VIC"
      },
      {
        "@type": "Place",
        "name": "Donnybrook, VIC"
      },
      {
        "@type": "Place",
        "name": "Doreen, VIC"
      },
      {
        "@type": "Place",
        "name": "Eltham, VIC"
      },
      {
        "@type": "Place",
        "name": "Epping, VIC"
      },
      {
        "@type": "Place",
        "name": "Fawkner, VIC"
      },
      {
        "@type": "Place",
        "name": "Hawthorn, VIC"
      },
      {
        "@type": "Place",
        "name": "Heidelberg, VIC"
      },
      {
        "@type": "Place",
        "name": "Hurstbridge, VIC"
      },
      {
        "@type": "Place",
        "name": "Ivanhoe, VIC"
      },
      {
        "@type": "Place",
        "name": "Kalkallo, VIC"
      },
      {
        "@type": "Place",
        "name": "Kew, VIC"
      },
      {
        "@type": "Place",
        "name": "Kilsyth, VIC"
      },
      {
        "@type": "Place",
        "name": "Lalor, VIC"
      },
      {
        "@type": "Place",
        "name": "Lower Templestowe, VIC"
      },
      {
        "@type": "Place",
        "name": "Macleod, VIC"
      },
      {
        "@type": "Place",
        "name": "Mickleham, VIC"
      },
      {
        "@type": "Place", 
        "name": "Mill Park, VIC"
      },
      {
        "@type": "Place",
        "name": "Montmorency, VIC"
      },
      {
        "@type": "Place",
        "name": "Montrose, VIC"
      },
      {
        "@type": "Place",
        "name": "Mooroolbark, VIC"
      },
      {
        "@type": "Place",
        "name": "Plenty, VIC"
      },
      {
        "@type": "Place",
        "name": "Preston, VIC"
      },
      {
        "@type": "Place",
        "name": "Reservoir, VIC"
      },
      {
        "@type": "Place",
        "name": "Ringwood, VIC"
      },
      {
        "@type": "Place",
        "name": "Ringwood North, VIC"
      },
      {
        "@type": "Place",
        "name": "Rosanna, VIC"
      },
      {
        "@type": "Place",
        "name": "South Morang, VIC"
      },
      {
        "@type": "Place",
        "name": "Surrey Hills, VIC"
      },
      {
        "@type": "Place",
        "name": "Templestowe, VIC"
      },
      {
        "@type": "Place",
        "name": "Thomastown, VIC"
      },
      {
        "@type": "Place",
        "name": "Viewbank, VIC"
      },
      {
        "@type": "Place",
        "name": "Whittlesea, VIC"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Automotive Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "European Car Service",
            "description": "Specialized service for BMW, Mercedes, Audi, Porsche, and other European vehicles"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Porsche Retrofitting",
            "description": "Factory-level Porsche retrofitting with genuine OEM parts"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Electric Vehicle Service",
            "description": "Professional electric and hybrid vehicle servicing and repairs"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Logbook Service",
            "description": "Manufacturer-compliant logbook servicing to maintain your warranty"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "200",
      "bestRating": "5"
    }
  };

  return (
    <>
      <SEOHead 
        title="Grimshaw Automotive - European Car Service Melbourne | BMW, Mercedes, Audi, Porsche"
        description="Premium automotive servicing in Melbourne. European performance specialists serving Bundoora, Eltham, Templestowe, Doncaster, Mill Park, Diamond Creek, Plenty, Kalkallo, Mickleham, Donnybrook, Whittlesea, Doreen, Hurstbridge, Montmorency, Preston, Reservoir, Brunswick, Kew, Hawthorn, Balwyn & surrounding suburbs. Expert BMW, Mercedes, Audi & Porsche service with electric vehicle expertise."
        keywords="car service Melbourne, European car service, BMW service Melbourne, Mercedes service Melbourne, Audi service Melbourne, Porsche service Melbourne, electric car service, automotive repair, logbook service, Porsche retrofitting, vehicle diagnostics, brake service, air conditioning service, performance tuning, car service Eltham, car service Templestowe, car service Doncaster, car service Diamond Creek, car service Plenty"
        canonicalUrl="https://grimshawautomotive.com.au"
        schema={structuredData}
        ogImage="/logo.png"
      />
      
      <div className="min-h-screen bg-slate-900">
        <Header />
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <CarBrands />
      <section id="services">
        <Services />
      </section>
      <Testimonials />
      <Contact />
      <FindUs />
        <Footer />
        <FloatingCTA />
      </div>
    </>
  );
};

export default Index;
