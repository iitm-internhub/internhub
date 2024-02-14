import mongoose, { Schema } from "mongoose";

export interface UserSchemaInterface {
  _id?: unknown;
  username: string;
  email: string;
  password: string;
  phone_number: string;
  isAdmin: boolean;
  college: string;
  semester: string;
  course: string;
  batch:string;
}

const userSchema: Schema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: false },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone_number: { type: Number, required: true },
    isAdmin: { type: Boolean, default: false },
    college: { type: String, required: false },
    semester: { type: String, required: false },
    course: { type: String, required: false },
    batch: { type: String, required: false },

  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
export default User;
