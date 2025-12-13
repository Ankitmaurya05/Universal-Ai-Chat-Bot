import mongoose from "mongoose";

const websiteSchema = new mongoose.Schema({
  siteName: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  tone: {
    type: String,
    default: "friendly",
  },
}, { timestamps: true });

export default mongoose.model("Website", websiteSchema);
    