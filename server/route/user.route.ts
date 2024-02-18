import express from "express";
import { changePassword, getUserInfo } from "../controller/user.controller";
import { protect_user } from "../middleware/verifyToken";

const router = express.Router();

router.get("/info", protect_user, getUserInfo);
router.patch("/update-password", protect_user, changePassword);

export default router;
