import nodemailer from 'nodemailer';
import twilio from 'twilio';
import dotenv from 'dotenv';

dotenv.config();

// Initialize Twilio client
const twilioClient = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

// Create email transporter
const emailTransporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT, 10),
  secure: false, // true for 465, false for others
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Send email notification
export const sendEmailNotification = async (bookingData) => {
  try {
    const { name, email, phone, service, message, preferredDate, preferredTime } = bookingData;
    
    const emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
        <h2 style="color: #2563eb; text-align: center; margin-bottom: 30px;">
          🎉 New Consultation Booking Received!
        </h2>
        
        <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <h3 style="color: #1e40af; margin-top: 0;">Client Information:</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
        </div>
        
        <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <h3 style="color: #1e40af; margin-top: 0;">Service Details:</h3>
          <p><strong>Service Requested:</strong> ${service}</p>
          <p><strong>Preferred Date:</strong> ${preferredDate || 'Not specified'}</p>
          <p><strong>Preferred Time:</strong> ${preferredTime || 'Not specified'}</p>
        </div>
        
        ${message ? `
        <div style="background-color: #fefce8; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <h3 style="color: #a16207; margin-top: 0;">Additional Message:</h3>
          <p style="font-style: italic;">"${message}"</p>
        </div>
        ` : ''}
        
        <div style="background-color: #ecfdf5; padding: 20px; border-radius: 8px; text-align: center;">
          <h3 style="color: #166534; margin-top: 0;">Next Steps:</h3>
          <p>Please contact the client within 24 hours to confirm the appointment.</p>
          <div style="margin-top: 15px;">
            <a href="tel:${phone}" style="background-color: #16a34a; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; margin-right: 10px;">Call Client</a>
            <a href="mailto:${email}" style="background-color: #2563eb; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Email Client</a>
          </div>
        </div>
        
        <p style="text-align: center; color: #6b7280; font-size: 12px; margin-top: 30px;">
          This notification was sent automatically from your website consultation form.
        </p>
      </div>
    `;

    const mailOptions = {
      from: `"Website Booking System" <${process.env.SMTP_USER}>`,
      to: process.env.COUNSELOR_EMAIL,
      subject: `🎯 New Consultation Booking - ${name} (${service})`,
      html: emailContent,
    };

    const result = await emailTransporter.sendMail(mailOptions);
    console.log('✅ Email notification sent successfully:', result.messageId);
    return { success: true, messageId: result.messageId };
  } catch (error) {
    console.error('❌ Error sending email notification:', error);
    return { success: false, error: error.message };
  }
};

// Send WhatsApp notification
export const sendWhatsAppNotification = async (bookingData) => {
  try {
    const { name, email, phone, service, message, preferredDate, preferredTime } = bookingData;
    
    const whatsappMessage = `
🎉 *NEW CONSULTATION BOOKING*

👤 *Client Details:*
• Name: ${name}
• Email: ${email}
• Phone: ${phone}

📋 *Service Details:*
• Service: ${service}
• Preferred Date: ${preferredDate || 'Not specified'}
• Preferred Time: ${preferredTime || 'Not specified'}

${message ? `💬 *Message:* "${message}"` : ''}

⏰ *Action Required:* Please contact the client within 24 hours to confirm the appointment.

---
_Sent automatically from your website_
    `.trim();
    console.log("📞 Sending WhatsApp to:", process.env.COUNSELOR_PHONE);
    const result = await twilioClient.messages.create({
      body: whatsappMessage,
      from: `whatsapp:${process.env.TWILIO_PHONE_NUMBER}`,
      to: `whatsapp:${process.env.COUNSELOR_PHONE}`,
    });

    console.log('✅ WhatsApp notification sent successfully:', result.sid);
    return { success: true, sid: result.sid };
  } catch (error) {
    console.error('❌ Error sending WhatsApp notification:', error);
    return { success: false, error: error.message };
  }
};

// Send both notifications
export const sendBookingNotifications = async (bookingData) => {
  console.log('📤 Sending booking notifications for:', bookingData.name);
  
  const results = {
    email: { success: false },
    whatsapp: { success: false }
  };

  try {
    results.email = await sendEmailNotification(bookingData);
  } catch (error) {
    console.error('Email notification failed:', error);
    results.email = { success: false, error: error.message };
  }

  try {
    results.whatsapp = await sendWhatsAppNotification(bookingData);
  } catch (error) {
    console.error('WhatsApp notification failed:', error);
    results.whatsapp = { success: false, error: error.message };
  }

  return results;
};
