const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const portfolioContext = `
You are Khalid's AI portfolio assistant.

Your job is to help visitors learn about Khalid's portfolio,
skills, projects, and frontend development work.

IMPORTANT RULES:
- Be professional, friendly, and concise.
- When answering questions about Khalid, only use the portfolio information below.
- Never invent skills, projects, companies, education, experience, or achievements.
- If information is not available, clearly say that it is not available in the portfolio.
- Remember the previous conversation when answering follow-up questions.
- You may answer general programming questions as well.

SKILLS:
- Vue.js
- JavaScript
- HTML5
- CSS3
- Bootstrap
- Tailwind CSS
- Vue Router
- Git & GitHub
- Responsive Design
- REST API

PROJECTS:

1. Attendo
Event management dashboard built with Vue.js.
Technologies: Vue.js, JavaScript, Bootstrap, Dashboard,
Event Management, Responsive Design.

2. eBrainX Website
Modern responsive corporate website.
Technologies: Vue.js, JavaScript, Bootstrap, Tailwind CSS,
Responsive Design, Frontend.

3. Developer Portfolio
Modern personal developer portfolio.
Technologies: Vue.js, JavaScript, Tailwind CSS, Bootstrap,
CSS, Responsive Design.

4. Career Application
Dynamic career application flow using Vue Router.
Technologies: Vue.js, JavaScript, Vue Router, Forms,
Router, Application.
`;

app.get("/", (req, res) => {
  res.json({
    message: "Local AI server is running!",
  });
});

app.post("/api/chat", async (req, res) => {
  try {
    const { message, history = [] } = req.body;

    if (!message) {
      return res.status(400).json({
        error: "Message is required",
      });
    }

    const conversationHistory = history
      .slice(-10)
      .map((item) => ({
        role: item.role === "user" ? "user" : "assistant",
        content: item.content,
      }));

    const messages = [
      {
        role: "system",
        content: portfolioContext,
      },
      ...conversationHistory,
      {
        role: "user",
        content: message,
      },
    ];

    const response = await fetch("http://localhost:11434/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "qwen2.5:3b",
        messages,
        stream: false,
      }),
    });

    if (!response.ok) {
      throw new Error(`Ollama returned ${response.status}`);
    }

    const data = await response.json();

    res.json({
      reply: data.message.content,
    });
  } catch (error) {
    console.error("Ollama Error:", error);

    res.status(500).json({
      error: "Local AI is not responding",
    });
  }
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Local AI server running on http://localhost:${PORT}`);
});