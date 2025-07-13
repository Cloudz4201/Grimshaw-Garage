
import { Link } from "react-router-dom";
import { 
  Wrench, 
  FileText, 
  Search, 
  Disc, 
  Snowflake, 
  Eye, 
  Camera,
  Zap,
  Shield,
  Navigation
} from "lucide-react";

const Services = () => {
  const mainServices = [
    {
      icon: Wrench,
      title: "Full Vehicle Servicing",
      description: "Complete mechanical repairs for all makes and models with precision and care.",
      link: "/vehicle-servicing"
    },
    {
      icon: FileText,
      title: "Logbook Servicing",
      description: "Manufacturer-compliant servicing to protect your warranty and vehicle value.",
      link: "/logbook-service"
    },
    {
      icon: Search,
      title: "Diagnostics & Fault Finding",
      description: "State-of-the-art diagnostic tools to identify and resolve complex issues.",
      link: "/diagnostics"
    },
    {
      icon: Disc,
      title: "Brake & Suspension",
      description: "Expert brake, suspension, and exhaust system repairs and maintenance.",
      link: "/brake-suspension"
    },
    {
      icon: Snowflake,
      title: "Air Conditioning",
      description: "Professional A/C servicing, re-gassing, and climate control repairs.",
      link: "/air-conditioning"
    },
    {
      icon: Eye,
      title: "Pre-Purchase Inspections",
      description: "Comprehensive vehicle assessments before you buy, ensuring peace of mind.",
      link: "/diagnostics" // Link to diagnostics for now
    }
  ];

  const porsheServices = [
    {
      icon: Camera,
      title: "360° Camera Integration",
      description: "Complete surround-view camera system with seamless OEM integration."
    },
    {
      icon: Zap,
      title: "Adaptive Cruise Control",
      description: "Factory-grade ACC retrofitting for enhanced driving comfort and safety."
    },
    {
      icon: Navigation,
      title: "Lane Change Assist",
      description: "Advanced driver assistance with genuine Porsche components."
    },
    {
      icon: Shield,
      title: "Blind Spot Detection",
      description: "Professional BSM installation using only authentic OEM parts."
    }
  ];

  return (
    <section className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        {/* Main Services */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-block bg-slate-700 px-4 py-2 rounded-full text-sm font-medium mb-6 text-slate-300 shadow-sm">
            Our Services
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            Complete Automotive Care
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            From routine maintenance to complex repairs, we deliver dealership-level service 
            for every vehicle that enters our workshop.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20" style={{ touchAction: 'manipulation' }}>
          {mainServices.map((service, index) => (
            <Link 
              key={index}
              to={service.link}
              className="block bg-slate-700 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-600 hover:border-slate-500"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              style={{ touchAction: 'manipulation' }}
            >
              <div className="bg-slate-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-slate-300" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">{service.title}</h3>
              <p className="text-slate-300 leading-relaxed">{service.description}</p>
              <div className="mt-4 text-blue-400 text-sm font-medium hover:text-blue-300 transition-colors">
                Learn More →
              </div>
            </Link>
          ))}
        </div>

        {/* Porsche Retrofitting Section */}
        <div className="bg-slate-900 rounded-3xl p-12 text-white border border-slate-700" data-aos="fade-up" data-aos-delay="200">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Porsche Factory Retrofitting
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Transform your Porsche with genuine OEM retrofits. Advanced features, 
              seamless integration, factory-level precision.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" style={{ touchAction: 'manipulation' }}>
            {porsheServices.map((service, index) => (
              <div 
                key={index}
                className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={300 + (index * 100)}
                style={{ touchAction: 'manipulation' }}
              >
                <div className="bg-white/10 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-3">{service.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12" data-aos="fade-up" data-aos-delay="700">
            <div className="inline-block bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-medium border border-white/20">
              ✅ Genuine OEM Parts • ✅ Factory Integration • ✅ Warranty Preserved
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
