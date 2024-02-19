import mongoose from "mongoose";

export interface ContactSchemaInterface {
  _id?: string;
  fullname: string;
  email: string;
  regarding: string;
  representing: string;
  message: string;
}

const contactSchema = new mongoose.Schema(
  {
    fullname: { type: String, required: true },
    email: { type: String, required: true },
    regarding: { type: String, required: true },
    representing: { type: String, required: true },
    message: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Contact = mongoose.model("Contact", contactSchema);
export default Contact;
