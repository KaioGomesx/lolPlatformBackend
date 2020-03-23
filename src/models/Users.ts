import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true },
  password: { type: String, required: true, select: false },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("User", UserSchema);
