import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import ChatSession from '../models/ChatSession.js';
import { geminiChat } from '../services/geminiService.js';

const router = express.Router();

// Start new chat session
router.post('/start', async (req, res) => {
  try {
    const sessionId = uuidv4();
    const { userId } = req.body;

    const chatSession = new ChatSession({
      sessionId,
      userId: userId || null,
      messages: []
    });

    await chatSession.save();

    res.json({
      success: true,
      sessionId,
      message: "Hello! I'm here to help you with any questions about our chartered accountant services. How can I assist you today?"
    });
  } catch (error) {
    console.error('Error starting chat session:', error);
    res.status(500).json({ error: 'Failed to start chat session' });
  }
});

// Send message
router.post('/message', async (req, res) => {
  try {
    const { sessionId, message, userId } = req.body;

    if (!sessionId || !message) {
      return res.status(400).json({ error: 'Session ID and message are required' });
    }

    // Find chat session
    let chatSession = await ChatSession.findOne({ sessionId });
    if (!chatSession) {
      return res.status(404).json({ error: 'Chat session not found' });
    }

    // Add user message
    chatSession.messages.push({
      role: 'user',
      content: message
    });

    // Generate AI response
    const chatHistory = chatSession.messages.slice(-10); // Last 10 messages for context
    const aiResponse = await geminiChat.generateResponse(message, chatHistory);

    // Add AI response
    chatSession.messages.push({
      role: 'assistant',
      content: aiResponse
    });

    await chatSession.save();

    // Generate quick replies
    const quickReplies = await geminiChat.generateQuickReplies(message);

    res.json({
      success: true,
      response: aiResponse,
      quickReplies,
      sessionId
    });
  } catch (error) {
    console.error('Error processing chat message:', error);
    res.status(500).json({ 
      error: 'Failed to process message',
      response: "I apologize, but I'm having trouble right now. Please contact us directly at +91 97334-12222 for immediate assistance."
    });
  }
});

// Get chat history
router.get('/history/:sessionId', async (req, res) => {
  try {
    const { sessionId } = req.params;

    const chatSession = await ChatSession.findOne({ sessionId });
    if (!chatSession) {
      return res.status(404).json({ error: 'Chat session not found' });
    }

    res.json({
      success: true,
      messages: chatSession.messages
    });
  } catch (error) {
    console.error('Error fetching chat history:', error);
    res.status(500).json({ error: 'Failed to fetch chat history' });
  }
});

export default router;