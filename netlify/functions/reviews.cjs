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

    // Use the reliable legacy Google Places API
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=name,rating,reviews,user_ratings_total&key=${GOOGLE_API_KEY}`;

    console.log('Making request to:', url.replace(GOOGLE_API_KEY, 'API_KEY_HIDDEN'));

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

    console.log('Google API response status:', response.status);
    console.log('Google API response keys:', Object.keys(response));

    // Check if the API call was successful
    if (response.status === 'OK' && response.result) {
      const result = response.result;
      
      // Transform the response to match frontend expectations
      const transformedResponse = {
        name: result.name || 'Grimshaw Automotive',
        rating: result.rating || 5.0,
        reviews: (result.reviews || [])
          .map(review => ({
            author_name: review.author_name || 'Anonymous',
            author_url: review.author_url || '',
            language: review.language || 'en',
            profile_photo_url: review.profile_photo_url || '',
            rating: review.rating || 5,
            relative_time_description: review.relative_time_description || 'Recent',
            text: review.text || 'Great service!',
            time: review.time || Date.now()
          }))
          .sort((a, b) => b.time - a.time) // Sort by most recent first
          .slice(0, 6), // Show only the 6 most recent reviews
        user_ratings_total: result.user_ratings_total || 0
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
          details: response.error_message || response.status || 'No data returned',
          status: response.status
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