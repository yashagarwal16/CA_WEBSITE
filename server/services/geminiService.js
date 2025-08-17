import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const caKnowledgeBase = `
You are a helpful assistant for Kamlesh Temani & Associates, a chartered accountancy firm based in Dhupguri, West Bengal, India. 

COMPANY INFORMATION:
- Founded in 2018 by CA Kamlesh Temani
- 6+ years of professional excellence
- 500+ satisfied clients
- Services: Accounting & Bookkeeping, Taxation & GST Services, Audit & Assurance, Business & Company Registration, Financial Advisory & Valuation, Financial Planning
- Contact: +91 97334-12222, kamleshtemani@gmail.com
- Address: Ward No. 14, Mahabirsthan, near Hanuman Mandir, Churri Patty Rd, Gobindapally, Dhupguri 735210, West Bengal
- Business Hours: Monday-Saturday 8:00 AM - 6:00 PM, Sunday Closed

SERVICES DETAILS:
1. Accounting & Bookkeeping (₹5,000/month): Daily bookkeeping, financial statements, MIS reports, expense tracking
2. Taxation & GST Services (₹3,000/return): GST registration, returns filing, income tax, tax planning
3. Audit & Assurance (₹25,000/audit): Statutory audits, internal audits, tax audits, compliance checks
4. Business Registration (₹10,000/registration): Company incorporation, LLP registration, NGO/Trust registration
5. Financial Advisory (₹15,000/project): Business valuation, investment advisory, M&A support
6. Financial Planning (₹8,000/plan): Retirement planning, investment portfolio, insurance planning

COMMON QUERIES TO HANDLE:
- Service pricing and details
- GST registration process
- Income tax filing requirements
- Company incorporation steps
- Audit requirements
- Tax saving strategies
- Business compliance needs
- Appointment booking process

Always be professional, helpful, and encourage users to book a consultation for detailed advice. If asked about complex tax matters, recommend speaking with our CA directly.
`;

export class GeminiChatService {
  constructor() {
    this.model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  }

  async generateResponse(userMessage, chatHistory = []) {
    try {
      const context = `${caKnowledgeBase}\n\nChat History:\n${chatHistory.map(msg => `${msg.role}: ${msg.content}`).join('\n')}\n\nUser: ${userMessage}\n\nAssistant:`;
      
      const result = await this.model.generateContent(context);
      const response = await result.response;
      return response.text();
    } catch (error) {
      console.error('Gemini API Error:', error);
      return "I apologize, but I'm having trouble processing your request right now. Please try again or contact us directly at +91 97334-12222 for immediate assistance.";
    }
  }

  async generateQuickReplies(userMessage) {
    const quickReplies = [
      "Tell me about your services",
      "What are your pricing details?",
      "How to book a consultation?",
      "GST registration process",
      "Income tax filing help"
    ];

    // Simple keyword matching for relevant quick replies
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('gst') || lowerMessage.includes('tax')) {
      return ["GST registration process", "Tax filing requirements", "Tax saving tips"];
    } else if (lowerMessage.includes('company') || lowerMessage.includes('business')) {
      return ["Company registration", "Business compliance", "Startup services"];
    } else if (lowerMessage.includes('audit')) {
      return ["Audit requirements", "Statutory audit", "Internal audit"];
    } else if (lowerMessage.includes('price') || lowerMessage.includes('cost')) {
      return ["Service pricing", "Get a quote", "Book consultation"];
    }
    
    return quickReplies.slice(0, 3);
  }
}

export const geminiChat = new GeminiChatService();