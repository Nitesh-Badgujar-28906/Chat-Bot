// Dummy Gemini API service
// In a real implementation, you would replace this with actual Gemini API calls

const dummyResponses = [
  "That's a great question! I'm here to help you with whatever you need.",
  "I understand what you're asking. Let me provide you with some helpful information.",
  "That's interesting! I'd be happy to assist you with that topic.",
  "Thanks for reaching out! I can definitely help you with that.",
  "I appreciate your question. Here's what I think about that:",
  "That's a thoughtful question. Let me share some insights with you.",
  "I'm glad you asked! This is something I can help clarify for you.",
  "Great question! I have some useful information that might help you.",
  "I see what you're getting at. Let me provide you with a comprehensive answer.",
  "That's an excellent point! Here's my perspective on that topic:"
]

const technicalResponses = {
  programming: [
    "When it comes to programming, I'd recommend starting with the fundamentals. What specific language are you interested in learning?",
    "That's a great programming question! The best approach would be to break it down into smaller, manageable pieces.",
    "For coding problems like this, I'd suggest looking at the documentation and considering edge cases."
  ],
  web: [
    "Web development is an exciting field! Are you more interested in frontend, backend, or full-stack development?",
    "For web applications, I'd recommend focusing on responsive design and user experience.",
    "Modern web development involves many technologies. What specific area would you like to explore?"
  ],
  ai: [
    "Artificial Intelligence is fascinating! I'm actually powered by AI technology myself.",
    "AI and machine learning are rapidly evolving fields with countless applications.",
    "The future of AI is bright, with new developments happening every day!"
  ]
}

const getRandomResponse = (responses) => {
  return responses[Math.floor(Math.random() * responses.length)]
}

const getContextualResponse = (userMessage) => {
  const message = userMessage.toLowerCase()
  
  if (message.includes('program') || message.includes('code') || message.includes('javascript') || message.includes('python') || message.includes('react')) {
    return getRandomResponse(technicalResponses.programming)
  } else if (message.includes('web') || message.includes('website') || message.includes('html') || message.includes('css')) {
    return getRandomResponse(technicalResponses.web)
  } else if (message.includes('ai') || message.includes('artificial intelligence') || message.includes('machine learning')) {
    return getRandomResponse(technicalResponses.ai)
  } else if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
    return "Hello! It's great to meet you. How can I assist you today?"
  } else if (message.includes('how are you')) {
    return "I'm doing great, thank you for asking! I'm here and ready to help you with any questions you might have."
  } else if (message.includes('thank')) {
    return "You're very welcome! I'm always here to help. Is there anything else you'd like to know?"
  } else if (message.includes('bye') || message.includes('goodbye')) {
    return "Goodbye! It was great chatting with you. Feel free to come back anytime you need assistance!"
  }
  
  return getRandomResponse(dummyResponses)
}

export const generateResponse = async (userMessage) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000))
  
  // In a real implementation, this would be:
  // const response = await fetch('https://api.gemini.ai/v1/generate', {
  //   method: 'POST',
  //   headers: {
  //     'Authorization': `Bearer ${API_KEY}`,
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify({
  //     prompt: userMessage,
  //     max_tokens: 150
  //   })
  // })
  // return await response.json()
  
  return getContextualResponse(userMessage)
}

// Configuration for future real API integration
export const geminiConfig = {
  apiKey: import.meta.env.VITE_GEMINI_API_KEY || 'dummy-api-key',
  baseUrl: 'https://generativelanguage.googleapis.com/v1beta',
  model: 'gemini-pro'
}