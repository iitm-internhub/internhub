import mongoose, { Schema } from "mongoose";

const userSchema: Schema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: false },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone_number: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
export default User;