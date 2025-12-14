import { useState } from "react";
import ChatWidget from "./components/chatbot/ChatWidget";

export default function App() {
  const [open, setOpen] = useState(false);

  const SITE_ID = "693d8cb1d389a058afe2f411";

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-semibold">Universal AI Chatbot</h1>
          <button
            onClick={() => setOpen(true)}
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-500 transition"
          >
            Open Chat
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Smart Chat Assistance for Any Website
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          This AI chatbot can be embedded into any website to answer user
          questions, provide support, and improve engagement automatically.
        </p>

        <button
          onClick={() => setOpen(true)}
          className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-500 transition"
        >
          Start Chat
        </button>
      </main>

      {/* Floating Chat Button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-indigo-600 hover:bg-indigo-500 transition shadow-lg flex items-center justify-center text-white"
          aria-label="Open chat"
        >
          💬
        </button>
      )}

      {/* Chat Widget */}
      {open && (
        <ChatWidget
          siteId={SITE_ID}
          onClose={() => setOpen(false)}
        />
      )}
    </div>
  );
}
