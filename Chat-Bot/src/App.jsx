import { useState } from "react";
import ChatWidget from "./components/chatbot/ChatWidget";

export default function App() {
  const [open, setOpen] = useState(false);

  const SITE_ID = "693d8cb1d389a058afe2f411";

  return (
    <div className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center text-center px-4">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 animate-gradient bg-[length:400%_400%]" />

      {/* Floating Circles */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-white/20 rounded-full animate-bounce-slow" />
      <div className="absolute bottom-20 right-20 w-60 h-60 bg-white/10 rounded-full animate-bounce-slow" />

      {/* Headline */}
      <h1 className="relative text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-4">
        Chat with Your AI Friend 💖
      </h1>

      <p className="relative text-lg md:text-2xl text-white/90 mb-10 max-w-xl drop-shadow-md">
        Ask questions, get friendly advice, jokes, or just have a fun conversation with your personal AI assistant!
      </p>

      {/* Cool Chat Button */}
      <button
        onClick={() => setOpen(true)}
        className="relative bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold px-8 py-4 rounded-full shadow-2xl hover:scale-105 transform transition duration-300 hover:shadow-xl animate-bounce-slow text-xl"
      >
        💬 Start Chatting
      </button>

      {/* Chat Widget */}
      {open && (
        <ChatWidget
          siteId={SITE_ID}
          onClose={() => setOpen(false)}
        />
      )}

      {/* Animations (Vite Safe) */}
      <style>
        {`
          @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-gradient {
            animation: gradient 15s ease infinite;
          }

          @keyframes bounce-slow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-15px); }
          }
          .animate-bounce-slow {
            animation: bounce-slow 6s ease-in-out infinite;
          }
        `}
      </style>
    </div>
  );
}
