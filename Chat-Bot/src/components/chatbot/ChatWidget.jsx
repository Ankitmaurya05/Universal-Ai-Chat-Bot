import { useState, useEffect, useRef } from "react";
import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";
import { sendChatMessage } from "../../api/chat.api";

export default function ChatWidget({ siteId, onClose }) {
  const [messages, setMessages] = useState([
    { role: "bot", text: "Hey 👋 I’m here to help you. Ask me anything!" },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Smooth scroll to bottom on new message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSend = async (text) => {
    setMessages((prev) => [...prev, { role: "user", text }]);
    setIsTyping(true);

    try {
      const reply = await sendChatMessage(siteId, text);
      setMessages((prev) => [...prev, { role: "bot", text: reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: "Oops 😅 something went wrong." },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex justify-center items-center">
      <div className="bg-white w-full max-w-3xl h-full md:h-[90vh] rounded-none md:rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-slide-in">
        <ChatHeader onClose={onClose} />

        <div className="flex-1 overflow-y-auto px-4 py-3 space-y-2">
          <ChatMessages messages={messages} />
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-white px-4 py-2 rounded-2xl rounded-bl-none shadow text-gray-500 animate-pulse">
                AI is typing...
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <ChatInput onSend={handleSend} />
      </div>
    </div>
  );
}
