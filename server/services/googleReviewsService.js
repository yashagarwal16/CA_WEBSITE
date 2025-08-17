import axios from 'axios';
import Review from '../models/Review.js';

export class GoogleReviewsService {
  constructor() {
    this.apiKey = process.env.GOOGLE_PLACES_API_KEY;
    this.placeId = process.env.GOOGLE_PLACE_ID;
  }

  async fetchGoogleReviews() {
    try {
      if (!this.apiKey || !this.placeId) {
        console.log('Google Places API key or Place ID not configured');
        return [];
      }

      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/place/details/json?place_id=${this.placeId}&fields=reviews&key=${this.apiKey}`
      );

      if (response.data.status === 'OK' && response.data.result.reviews) {
        const googleReviews = response.data.result.reviews.map(review => ({
          name: review.author_name,
          rating: review.rating,
          comment: review.text,
          googleReviewId: review.time.toString(),
          source: 'google',
          createdAt: new Date(review.time * 1000),
          isApproved: true
        }));

        // Save new reviews to database
        for (const reviewData of googleReviews) {
          const existingReview = await Review.findOne({ 
            googleReviewId: reviewData.googleReviewId 
          });
          
          if (!existingReview) {
            await Review.create({
              ...reviewData,
              email: 'google-user@example.com' // Placeholder email for Google reviews
            });
          }
        }

        return googleReviews;
      }

      return [];
    } catch (error) {
      console.error('Error fetching Google reviews:', error);
      return [];
    }
  }

  async syncReviewToGoogle(reviewData) {
    try {
      // Note: Google My Business API requires special setup and permissions
      // This is a placeholder for the actual implementation
      console.log('Syncing review to Google:', reviewData);
      
      // In a real implementation, you would:
      // 1. Use Google My Business API
      // 2. Create a review response or encourage the user to leave a Google review
      // 3. Send an email to the user with a Google review link
      
      return { success: true, message: 'Review sync initiated' };
    } catch (error) {
      console.error('Error syncing review to Google:', error);
      return { success: false, error: error.message };
    }
  }

  getGoogleReviewLink() {
    if (!this.placeId) return null;
    return `https://search.google.com/local/writereview?placeid=${this.placeId}`;
  }
}

export const googleReviewsService = new GoogleReviewsService();