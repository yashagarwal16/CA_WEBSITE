import express from 'express';
import Review from '../models/Review.js';
import { googleReviewsService } from '../services/googleReviewsService.js';
import { authenticate, authorize } from '../middleware/auth.js';

const router = express.Router();

// Get all approved reviews
router.get('/', async (req, res) => {
  try {
    const reviews = await Review.find({ isApproved: true })
      .sort({ createdAt: -1 })
      .limit(20);

    res.json({
      success: true,
      reviews
    });
  } catch (error) {
    console.error('Error fetching reviews:', error);
    res.status(500).json({ error: 'Failed to fetch reviews' });
  }
});

// Submit new review
router.post('/', async (req, res) => {
  try {
    const { name, email, rating, comment, service } = req.body;

    if (!name || !email || !rating || !comment) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    if (rating < 1 || rating > 5) {
      return res.status(400).json({ error: 'Rating must be between 1 and 5' });
    }

    const review = new Review({
      name,
      email,
      rating,
      comment,
      service,
      source: 'website'
    });

    await review.save();

    // Attempt to sync with Google (placeholder)
    const googleSync = await googleReviewsService.syncReviewToGoogle({
      name,
      email,
      rating,
      comment
    });

    res.status(201).json({
      success: true,
      message: 'Review submitted successfully! It will be published after approval.',
      review: {
        id: review._id,
        name: review.name,
        rating: review.rating,
        comment: review.comment,
        createdAt: review.createdAt
      },
      googleReviewLink: googleReviewsService.getGoogleReviewLink()
    });
  } catch (error) {
    console.error('Error submitting review:', error);
    res.status(500).json({ error: 'Failed to submit review' });
  }
});

// Sync Google reviews (admin only)
router.post('/sync-google', authenticate, authorize('admin'), async (req, res) => {
  try {
    const googleReviews = await googleReviewsService.fetchGoogleReviews();
    
    res.json({
      success: true,
      message: `Synced ${googleReviews.length} reviews from Google`,
      count: googleReviews.length
    });
  } catch (error) {
    console.error('Error syncing Google reviews:', error);
    res.status(500).json({ error: 'Failed to sync Google reviews' });
  }
});

// Approve review (admin only)
router.patch('/:id/approve', authenticate, authorize('admin'), async (req, res) => {
  try {
    const review = await Review.findByIdAndUpdate(
      req.params.id,
      { isApproved: true },
      { new: true }
    );

    if (!review) {
      return res.status(404).json({ error: 'Review not found' });
    }

    res.json({
      success: true,
      message: 'Review approved successfully',
      review
    });
  } catch (error) {
    console.error('Error approving review:', error);
    res.status(500).json({ error: 'Failed to approve review' });
  }
});

// Get pending reviews (admin only)
router.get('/pending', authenticate, authorize('admin'), async (req, res) => {
  try {
    const reviews = await Review.find({ isApproved: false })
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      reviews
    });
  } catch (error) {
    console.error('Error fetching pending reviews:', error);
    res.status(500).json({ error: 'Failed to fetch pending reviews' });
  }
});

export default router;