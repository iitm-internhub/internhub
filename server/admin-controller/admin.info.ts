import { Request, Response } from "express";
import User from "../model/user.model";
import { handleError } from "../error/handleError";

import nodeCache from "node-cache";

const cache = new nodeCache();

const getAllUsers = async (req: Request | any, res: Response) => {
  try {
    const isAdmin = req.user;

    if (cache.has("users")) {
      const users = cache.get("users");
      return res.status(200).json({
        success: true,
        users,
      });
    }

    if (Object.keys(isAdmin).length === 0) {
      return res.status(401).json({
        success: false,
        message: "sorry you don't have admin access",
      });
    }

    const allUsers = await User.find({});

    cache.set("users", allUsers, 60);

    return res.status(200).json({
      success: true,
      users: allUsers,
    });
  } catch (err) {
    handleError(err, res);
  }
};

export { getAllUsers };
