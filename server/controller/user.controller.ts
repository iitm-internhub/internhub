import { Request, Response } from "express";
import { handleError } from "../error/handleError";
import bcrypt from "bcrypt";
import User, { UserSchemaInterface } from "../model/user.model";

const getUserInfo = (req: Request | any, res: Response) => {
  try {
    const user = req.user;

    if (Object.keys(user).length === 0) {
      return res.status(404).json({
        success: false,
        message: "user not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: `welcome ${user.username} to your profile`,
      user: user,
    });
  } catch (err) {
    handleError(err, res);
  }
};

const changePassword = async (req: Request | any, res: Response) => {
  try {
    const { oldPassword, newPassword } = req.body;

    if (!oldPassword || !newPassword) {
      return res.status(400).json({
        success: false,
        message: "password fields cannot be empty",
      });
    }

    const userID = req.user._id;

    const user: UserSchemaInterface | null = await User.findById(userID);

    if (!user || Object.keys(user).length === 0) {
      return res.status(404).json({
        success: false,
        message: "user not found",
      });
    }

    const isAuthenticated = await bcrypt.compare(oldPassword, user.password);

    if (isAuthenticated) {
      const SALT_ROUNDS: number = Number(process.env.SALT_ROUNDS);
      const newEncryptedPassword = await bcrypt.hash(newPassword, SALT_ROUNDS);

      const updatedUser = await User.findByIdAndUpdate(
        { _id: userID },
        { password: newEncryptedPassword },
        { new: true }
      );

      return res.status(200).json({
        success: true,
        message: "password changed successfully",
        user: updatedUser,
      });
    }

    return res.status(401).json({
      success: false,
      message: "unauthorized: wrong password",
    });
  } catch (err) {
    handleError(err, res);
  }
};

export { getUserInfo, changePassword };
