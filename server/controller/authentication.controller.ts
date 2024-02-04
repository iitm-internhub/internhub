import { Request, Response } from "express";
import { handleError } from "../error/handleError";
import User from "../model/user.model";
import generateToken from "../utils/generateToken";

const Signup = async (req: Request, res: Response) => {
  try {
    const { username, password, email, phone_number } = req.body;

    if (!username || !password || !email || !phone_number) {
      return res.status(400).json({
        success: false,
        message:
          "username, email, phone_number and password field cannot be empty",
      });
    }

    // check if the user already exists or not ?
    const isUserAlreadyExits = await User.find({ email: email });
    if (Object.keys(isUserAlreadyExits).length !== 0) {
      return res.status(400).json({
        success: false,
        message: "user already exits",
      });
    }

    // otherwise create user
    const newUser = new User({
      username: username,
      password: password,
      email: email,
    });

    const user = await newUser.save();
    const userAuthToken: string | unknown = await generateToken(user._id, res);

    if (user) {
      return res.status(201).json({
        success: true,
        message: "user registered successfully",
        user: user,
        authToken: userAuthToken,
      });
    }

    return res.status(400).json({
      success: false,
      message: "user not registered",
    });
  } catch (err) {
    handleError(err, res);
  }
};

const Login = async (req: Request, res: Response) => {};

export { Signup };
