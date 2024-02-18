import { Request, Response } from "express";
import Contact, { ContactSchemaInterface } from "../model/contact.model";
import { handleError } from "../error/handleError";

const createEnquiry = async (req: Request, res: Response) => {
  const {
    fullname,
    email,
    regarding,
    representing,
    message,
  }: ContactSchemaInterface = req.body;

  if (!fullname || !email || !regarding || !representing || !message) {
    return res.status(400).json({
      success: false,
      message: "fill in all the fields",
    });
  }

  try {
    const newEnquiry = new Contact({
      fullname,
      email,
      regarding,
      representing,
      message,
    });

    await newEnquiry.save();

    return res.status(201).json({
      success: true,
      message: "enquiry created",
    });
  } catch (err) {
    handleError(err, res);
  }
};

export { createEnquiry };
