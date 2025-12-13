import dotenv from "dotenv";
dotenv.config();   // MUST be first ✅

import app from "./app.js";
import connectDB from "./config/db.js";

connectDB();

console.log("OPENAI KEY LOADED:", !!process.env.OPENAI_API_KEY);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
