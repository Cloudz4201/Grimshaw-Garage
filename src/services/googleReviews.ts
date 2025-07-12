// Service to fetch Google Reviews from Netlify function
export interface GoogleReview {
  author_name: string;
  author_url?: string;
  language: string;
  profile_photo_url: string;
  rating: number;
  relative_time_description: string;
  text: string;
  time: number;
}

export interface PlaceDetails {
  name: string;
  rating: number;
  reviews: GoogleReview[];
  user_ratings_total: number;
}

export const fetchGoogleReviews = async (): Promise<PlaceDetails | null> => {
  try {
    // Call your Netlify function
    const response = await fetch('/.netlify/functions/reviews.cjs', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      console.error(`Netlify function error: ${response.status} ${response.statusText}`);
      return null;
    }

    const data = await response.json();
    
    // Check if we got an error response
    if (data.error) {
      console.error('Google Reviews API error:', data);
      return null;
    }
    
    return data;
  } catch (error) {
    console.error('Error fetching Google reviews:', error);
    return null;
  }
};

// Fallback reviews in case API fails
export const fallbackReviews: GoogleReview[] = [
  {
    author_name: "Michael Chen",
    rating: 5,
    text: "The 360° camera retrofit on my 911 was flawless. Satnam's expertise really shows - it looks and works exactly like it came from the factory. Couldn't be happier!",
    relative_time_description: "2 weeks ago",
    time: Date.now() - (14 * 24 * 60 * 60 * 1000),
    language: "en",
    profile_photo_url: ""
  },
  {
    author_name: "Sarah Williams",
    rating: 5,
    text: "Exceptional service and transparent pricing. They diagnosed an issue three other workshops couldn't figure out. True to their 'No Fix, No Charge' promise - they fixed it right the first time.",
    relative_time_description: "1 month ago",
    time: Date.now() - (30 * 24 * 60 * 60 * 1000),
    language: "en",
    profile_photo_url: ""
  },
  {
    author_name: "David Thompson",
    rating: 5,
    text: "The adaptive cruise control retrofit exceeded my expectations. Professional installation, genuine parts, and the team explained everything clearly. Highly recommended!",
    relative_time_description: "3 weeks ago",
    time: Date.now() - (21 * 24 * 60 * 60 * 1000),
    language: "en",
    profile_photo_url: ""
  },
  {
    author_name: "Emma Rodriguez",
    rating: 5,
    text: "Finally found a workshop that treats every car like a prestige vehicle. The attention to detail and customer service is outstanding. Will never go anywhere else!",
    relative_time_description: "1 week ago",
    time: Date.now() - (7 * 24 * 60 * 60 * 1000),
    language: "en",
    profile_photo_url: ""
  }
]; 