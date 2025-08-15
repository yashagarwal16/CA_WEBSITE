// server/index.js
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// API route to book a consultation
app.post('/api/book-consultation', (req, res) => {
  const { name, email, date, time, message } = req.body;

  if (!name || !email || !date || !time) {
    return res.status(400).json({ error: 'All required fields must be filled.' });
  }

  // Here you would notify the counselor (email, SMS, DB, etc.)
  console.log(`📅 New consultation booked:
    Name: ${name}
    Email: ${email}
    Date: ${date}
    Time: ${time}
    Message: ${message || 'No additional message'}`);

  res.json({ success: true, message: 'Consultation booked successfully!' });
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
