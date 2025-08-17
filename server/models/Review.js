import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },
  comment: {
    type: String,
    required: true,
    trim: true
  },
  service: {
    type: String,
    trim: true
  },
  isApproved: {
    type: Boolean,
    default: false
  },
  googleReviewId: {
    type: String,
    trim: true
  },
  source: {
    type: String,
    enum: ['website', 'google'],
    default: 'website'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Review', reviewSchema);