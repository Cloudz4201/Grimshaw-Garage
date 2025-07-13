
import { useState, useEffect } from "react";
import { Star, Quote } from "lucide-react";
import { fetchGoogleReviews, fallbackReviews, GoogleReview, PlaceDetails } from "@/services/googleReviews";

const Testimonials = () => {
  const [reviews, setReviews] = useState<GoogleReview[]>(fallbackReviews);
  const [businessData, setBusinessData] = useState<PlaceDetails | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadReviews = async () => {
      try {
        const data = await fetchGoogleReviews();
        if (data && data.reviews && data.reviews.length > 0) {
          setBusinessData(data);
          setReviews(data.reviews.slice(0, 4)); // Show only 4 reviews for better layout
        }
      } catch (error) {
        console.error('Failed to load Google reviews, using fallback:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadReviews();
  }, []);

  return (
    <section className="py-20 bg-slate-700">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-block bg-slate-600 px-4 py-2 rounded-full text-sm font-medium mb-6 text-slate-300">
            {businessData ? "Google Reviews" : "Customer Reviews"}
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            What Our Customers Say
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            {businessData 
              ? "Real reviews from our customers on Google. See what they have to say about our service and expertise."
              : "Don't just take our word for it. Here's what our satisfied customers have to say about our service and expertise."
            }
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8" style={{ touchAction: 'manipulation' }}>
          {reviews.map((review, index) => (
            <div 
              key={index}
              className="bg-slate-800 p-8 rounded-xl relative hover:shadow-xl transition-shadow duration-300 border border-slate-600"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              style={{ touchAction: 'manipulation' }}
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-slate-500" />
              
              {/* Star Rating */}
              <div className="flex items-center mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
                <span className="ml-2 text-slate-400 text-sm">
                  {review.relative_time_description}
                </span>
              </div>
              
              {/* Review Text */}
              <p className="text-slate-300 mb-6 text-lg leading-relaxed italic">
                "{review.text}"
              </p>
              
              {/* Customer Info */}
              <div className="border-t border-slate-600 pt-4">
                <div className="flex justify-between items-start">
                  <div className="flex items-center space-x-3">
                    {review.profile_photo_url && (
                      <img 
                        src={review.profile_photo_url} 
                        alt={review.author_name}
                        className="w-10 h-10 rounded-full"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    )}
                    <div>
                      <h4 className="font-bold text-white">{review.author_name}</h4>
                      {businessData && (
                        <p className="text-slate-400 text-sm">Google Review</p>
                      )}
                    </div>
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
              <span className="font-bold text-white">
                {businessData ? businessData.rating.toFixed(1) : "4.9"}/5
              </span>
              <span className="text-slate-400">Google Rating</span>
            </div>
            <div className="w-px h-6 bg-slate-600"></div>
            <div className="text-slate-300">
              <span className="font-bold text-white">
                {businessData ? businessData.user_ratings_total : "200+"}
              </span> Google Reviews
            </div>
            <div className="w-px h-6 bg-slate-600"></div>
            <div className="text-slate-300">
              <span className="font-bold text-white">15+</span> Years Experience
            </div>
          </div>
        </div>

        {/* Loading indicator */}
        {isLoading && (
          <div className="text-center mt-8">
            <div className="inline-flex items-center space-x-2 text-slate-400">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500"></div>
              <span>Loading latest reviews...</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
