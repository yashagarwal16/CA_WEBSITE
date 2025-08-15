// server/index.js
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import { sendBookingNotifications } from './notifications.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

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
    // Log the consultation booking
    console.log(`📅 New consultation booked:`, bookingData);

    // Send notifications to counselor
    const notificationResults = await sendBookingNotifications(bookingData);
    
    // Check if at least one notification was sent successfully
    const emailSent = notificationResults.email.success;
    const whatsappSent = notificationResults.whatsapp.success;
    
    if (emailSent || whatsappSent) {
      console.log('✅ Notifications sent:', {
        email: emailSent ? 'Success' : 'Failed',
        whatsapp: whatsappSent ? 'Success' : 'Failed'
      });
      
      res.json({ 
        success: true, 
        message: 'Consultation booked successfully! We will contact you within 24 hours.',
        notifications: {
          email: emailSent,
          whatsapp: whatsappSent
        }
      });
    } else {
      console.log('⚠️ All notifications failed, but booking was recorded');
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

// Default test route
app.get('/', (req, res) => {
  res.json({
    status: 'Server is running',
    message: 'Welcome to the Consultation API'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
