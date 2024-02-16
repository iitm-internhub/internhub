import { Request, Response } from "express";
import { handleError } from "../error/handleError";

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

export { getUserInfo };
