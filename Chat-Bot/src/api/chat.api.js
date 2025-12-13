import axios from "axios";

export const sendChatMessage = async (siteId, message) => {
  const res = await axios.post(
    `http://localhost:5000/api/chat/${siteId}`,
    { message }
  );
  return res.data.reply;
};
