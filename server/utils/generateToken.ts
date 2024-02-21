import jwt from "jsonwebtoken";
import { handleError } from "../error/handleError";
import { Response } from "express";

const generateToken = async (_id: string | unknown, res: Response) => {
  try {
    const JWT_SECRET_KEY: string = process.env.JWT_SECRET_KEY || "";
    const token: string = await jwt.sign({ _id: _id }, JWT_SECRET_KEY, {
      expiresIn: "30D",
    });

    return token;
  } catch (err) {
    console.log("error while generating token");
    handleError(err, res);
  }
};

const generateAdminToken = async (_id: string | unknown, res: Response) => {
  try {
    const JWT_SECRET_KEY: string = process.env.JWT_SECRET_KEY || "";
    const token: string = await jwt.sign({ _id: _id }, JWT_SECRET_KEY, {
      expiresIn: "2H",
    });

    return token;
  } catch (err) {
    console.log("error while generating token");
    handleError(err, res);
  }
};

const generateVerificationToken = async (res: Response) => {
  try {
    const JWT_VERIFICATION_SECRET_KEY: string = String(
      process.env.JWT_VERIFICATION_SECRET_KEY
    );

    const token = await jwt.sign(
      { verified: true },
      JWT_VERIFICATION_SECRET_KEY,
      {
        expiresIn: "1m",
      }
    );

    return token;
  } catch (err) {
    handleError(err, res);
  }
};

export default generateToken;
export { generateAdminToken, generateVerificationToken };
