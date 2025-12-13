import getOpenAIClient from "../config/openai.js";
import Website from "../models/Website.js";

export const chatWithAI = async (req, res) => {
  try {
    const openai = getOpenAIClient();
    const { siteId } = req.params;
    const { message } = req.body;

    if (!message) return res.status(400).json({ error: "Message is required" });

    const site = await Website.findById(siteId);
    if (!site) return res.status(404).json({ error: "Website not found" });

    const systemPrompt = `
You are a friendly, cheerful AI chatbot that talks like a kind and playful girl. 
Your personality:
- Warm, empathetic, and casual
- Uses emojis naturally 😄✨💖
- Makes small talk, jokes, and friendly comments
- Keeps responses short, fun, and light-hearted
- Encourages the user to engage, but never gives rude or harsh responses
- If the user asks something unrelated, politely redirect the conversation

Website/Persona Details:
Name: ${site.siteName}
Domain: ${site.domain || "N/A"}
Category: ${site.category}
Description: ${site.description}

Rules:
- Always respond in a friendly, cheerful girl style
- Use casual language and emojis
- Keep messages concise and fun
- Never break character
`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: message },
      ],
    });

    res.json({ reply: completion.choices[0].message.content });
  } catch (err) {
    console.error("Chat error:", err.message);
    res.status(500).json({ error: err.message });
  }
};
