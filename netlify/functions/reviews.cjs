const https = require('https');

exports.handler = async (event, context) => {
  // Enable CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Content-Type': 'application/json'
  };

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  // Only allow GET requests
  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
    const PLACE_ID = process.env.PLACE_ID || 'ChIJ0aIJp5VI1moROAQUYrnoHnU';

    console.log('Environment check:', {
      hasApiKey: !!GOOGLE_API_KEY,
      hasPlaceId: !!PLACE_ID,
      placeId: PLACE_ID
    });

    if (!GOOGLE_API_KEY) {
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ 
          error: 'Missing GOOGLE_API_KEY environment variable',
          details: 'Please add GOOGLE_API_KEY in Netlify environment variables'
        })
      };
    }

    // Use the new Google Places API (New) instead of legacy
    const url = `https://places.googleapis.com/v1/places/${PLACE_ID}?fields=displayName,rating,reviews,userRatingCount&key=${GOOGLE_API_KEY}`;

    console.log('Making request to new Places API:', url.replace(GOOGLE_API_KEY, 'API_KEY_HIDDEN'));

    // Make request to Google Places API
    const response = await new Promise((resolve, reject) => {
      https.get(url, (res) => {
        let data = '';
        res.on('data', (chunk) => {
          data += chunk;
        });
        res.on('end', () => {
          try {
            const parsed = JSON.parse(data);
            resolve(parsed);
          } catch (error) {
            reject(error);
          }
        });
      }).on('error', (error) => {
        reject(error);
      });
    });

    console.log('Google API response:', response);

    // New Google Places API returns data directly (no "result" wrapper)
    if (response.displayName) {
      // Transform the response to match frontend expectations
      // New API returns objects with {text, languageCode} format
      const transformedResponse = {
        name: response.displayName?.text || response.displayName || 'Grimshaw Automotive',
        rating: response.rating || 5.0,
        reviews: (response.reviews || [])
          .map(review => ({
            author_name: review.authorAttribution?.displayName || 'Anonymous',
            author_url: review.authorAttribution?.uri || '',
            language: review.originalText?.languageCode || 'en',
            profile_photo_url: review.authorAttribution?.photoUri || '',
            rating: review.rating || 5,
            relative_time_description: review.relativePublishTimeDescription || 'Recent',
            text: review.text?.text || review.originalText?.text || 'Great service!',
            time: review.publishTime ? new Date(review.publishTime).getTime() : Date.now()
          }))
          .sort((a, b) => b.time - a.time) // Sort by most recent first
          .slice(0, 6), // Show only the 6 most recent reviews
        user_ratings_total: response.userRatingCount || 0
      };
      
      console.log('Returning transformed response with', transformedResponse.reviews.length, 'reviews');
      
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify(transformedResponse)
      };
    } else {
      console.error('Google API error:', response);
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ 
          error: 'Google Places API error',
          details: response.error?.message || response.error_message || 'No data returned',
          status: response.error?.code || 'UNKNOWN_ERROR'
        })
      };
    }

  } catch (error) {
    console.error('Function error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        error: 'Internal server error',
        details: error.message
      })
    };
  }
}; 