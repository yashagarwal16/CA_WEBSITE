// server/index.js
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import connectDB from './database.js';
import { sendBookingNotifications } from './notifications.js';
import authRoutes from './routes/auth.js';
import chatRoutes from './routes/chat.js';
import reviewRoutes from './routes/reviews.js';

import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/chat', chatRoutes);
app.use('/api/reviews', reviewRoutes);

// API route to book a consultation
app.post('/api/book-consultation', async (req, res) => {
  const { name, email, phone, service, message, preferredDate, preferredTime } = req.body;

  if (!name || !email || !phone || !service) {
    return res.status(400).json({ error: 'All required fields must be filled.' });
  }

  const bookingData = {
    name,
    email,
    phone,
    service,
    message,
    preferredDate,
    preferredTime,
    submittedAt: new Date().toISOString()
  };

  try {
    console.log(`📅 New consultation booked:`, bookingData);

    const notificationResults = await sendBookingNotifications(bookingData);

    const emailSent = notificationResults.email.success;
    const whatsappSent = notificationResults.whatsapp.success;

    if (emailSent || whatsappSent) {
      res.json({ 
        success: true, 
        message: 'Consultation booked successfully! We will contact you within 24 hours.',
        notifications: {
          email: emailSent,
          whatsapp: whatsappSent
        }
      });
    } else {
      res.json({ 
        success: true, 
        message: 'Consultation booked successfully! We will contact you within 24 hours.',
        warning: 'Notification delivery may be delayed'
      });
    }
  } catch (error) {
    console.error('❌ Error processing booking:', error);
    res.status(500).json({ 
      error: 'Booking could not be processed. Please try again or call us directly.',
      phone: '+91 97334-12222'
    });
  }
});

// -----------------------------
// React frontend serving config
// -----------------------------
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve React build files
app.use(express.static(path.join(__dirname, "../dist")));

// Any route not starting with /api/* should return React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

// -----------------------------
// Start server
// -----------------------------
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
