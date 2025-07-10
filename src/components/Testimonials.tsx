
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Michael Chen",
      vehicle: "Porsche 911 Carrera",
      rating: 5,
      text: "The 360° camera retrofit on my 911 was flawless. Satnam's expertise really shows - it looks and works exactly like it came from the factory. Couldn't be happier!",
      location: "Melbourne"
    },
    {
      name: "Sarah Williams",
      vehicle: "BMW X5",
      rating: 5,
      text: "Exceptional service and transparent pricing. They diagnosed an issue three other workshops couldn't figure out. True to their 'No Fix, No Charge' promise - they fixed it right the first time.",
      location: "Bundoora"
    },
    {
      name: "David Thompson",
      vehicle: "Porsche Cayenne",
      rating: 5,
      text: "The adaptive cruise control retrofit exceeded my expectations. Professional installation, genuine parts, and the team explained everything clearly. Highly recommended!",
      location: "Preston"
    },
    {
      name: "Emma Rodriguez",
      vehicle: "Mercedes C-Class",
      rating: 5,
      text: "Finally found a workshop that treats every car like a prestige vehicle. The attention to detail and customer service is outstanding. Will never go anywhere else!",
      location: "Northcote"
    }
  ];

  return (
    <section className="py-20 bg-slate-700">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-block bg-slate-600 px-4 py-2 rounded-full text-sm font-medium mb-6 text-slate-300">
            Customer Reviews
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            What Our Customers Say
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers 
            have to say about our service and expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-slate-800 p-8 rounded-xl relative hover:shadow-xl transition-shadow duration-300 border border-slate-600"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-slate-500" />
              
              {/* Star Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              {/* Review Text */}
              <p className="text-slate-300 mb-6 text-lg leading-relaxed italic">
                "{testimonial.text}"
              </p>
              
              {/* Customer Info */}
              <div className="border-t border-slate-600 pt-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                    <p className="text-slate-400 text-sm">{testimonial.location}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-slate-300 font-medium text-sm">{testimonial.vehicle}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center" data-aos="fade-up" data-aos-delay="400">
          <div className="inline-flex items-center space-x-8 bg-slate-800 px-8 py-4 rounded-full border border-slate-600">
            <div className="flex items-center space-x-2">
              <Star className="w-6 h-6 text-yellow-400 fill-current" />
              <span className="font-bold text-white">4.9/5</span>
              <span className="text-slate-400">Average Rating</span>
            </div>
            <div className="w-px h-6 bg-slate-600"></div>
            <div className="text-slate-300">
              <span className="font-bold text-white">200+</span> Happy Customers
            </div>
            <div className="w-px h-6 bg-slate-600"></div>
            <div className="text-slate-300">
              <span className="font-bold text-white">15+</span> Years Experience
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
