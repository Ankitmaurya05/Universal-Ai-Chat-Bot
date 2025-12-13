import axios from "axios";

export const sendChatMessage = async (siteId, message) => {
  const res = await axios.post(
    `https://universal-ai-chat-bot-server.onrender.com/api/chat/${siteId}`,
    { message }
  );
  return res.data.reply;
};
