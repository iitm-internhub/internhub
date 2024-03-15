import mongoose, { Schema } from "mongoose";

export interface AdminSchemaInterface {
  _id?: unknown;
  username: string;
 email: string;
  password: string;
  phone_number: string;
  isAdmin: boolean;
  isVerified: boolean;
  
}

const adminSchema: Schema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone_number: { type: Number, required: true },
    isAdmin: { type: Boolean, default: true },
    isVerified: { type: Boolean, default: true },
   
  },
  {
    timestamps: true,
  }
);

const Admin = mongoose.model("Admin", adminSchema);
export default Admin;
 