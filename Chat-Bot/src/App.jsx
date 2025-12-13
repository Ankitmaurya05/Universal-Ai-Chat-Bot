import { useState } from "react";
import ChatWidget from "./components/chatbot/ChatWidget";
import ChatButton from "./components/chatbot/ChatButton";

export default function App() {
  const [open, setOpen] = useState(false);

  const SITE_ID = "693d8cb1d389a058afe2f411";

  return (
    <>
      {open && (
        <ChatWidget
          siteId={SITE_ID}
          onClose={() => setOpen(false)}
        />
      )}
      <ChatButton onClick={() => setOpen(true)} />
    </>
  );
}
