import { Request, Response } from "express";
import { handleError } from "../error/handleError";
import User from "../model/user.model";
import { sendMail } from "../helper/mailer";

import jwt from "jsonwebtoken";

const verifyUser = async (req: Request, res: Response) => {
  const { id, token } = req.body;
  if (!id || !token) {
    return res.status(400).json({
      success: false,
      message: "id and token required",
    });
  }

  try {
    const isUserExists = await User.findById(id);

    // check for emtpy or not found user
    if (!isUserExists || Object.keys(isUserExists).length === 0) {
      return res.status(404).json({
        success: false,
        message: "user not found",
      });
    }

    const JWT_VERIFICATION_SECRET_KEY: string = String(
      process.env.JWT_VERIFICATION_SECRET_KEY
    );
    const result = await jwt.verify(
      String(isUserExists.verificationToken),
      JWT_VERIFICATION_SECRET_KEY
    );

    const userStoredToken = String(isUserExists.verificationToken);

    if (userStoredToken != token) {
      return res.status(401).json({
        success: false,
        message: "unauthorized: invalid request",
      });
    }

    const all_done = await User.findByIdAndUpdate(isUserExists._id, {
      $unset: { verificationToken: "" },
      $set: { isVerified: true },
    });
    if (all_done !== null) {
      await all_done.save();

      const msg = `<p> Welcome ${isUserExists.username} to InternHub, You are now a verified user :), <a href="http://localhost:3000/">Explore</a> </p>`;

      sendMail(String(isUserExists.email), "Welcome to InternHub", msg, res);

      return res.status(200).json({
        success: true,
        message: "user verified successfully",
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "something went wrong",
      });
    }
  } catch (err: any) {
    if (err.name == "TokenExpiredError") {
      try {
        await User.findByIdAndDelete(id);
        return res
          .status(401)
          .json({ message: "token expired, please signup again" });
      } catch (err) {
        handleError(err, res);
      }
    }
    handleError(err, res);
  }
};

export { verifyUser };
