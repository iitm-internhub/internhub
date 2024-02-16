import express from "express";
import { getUserInfo } from "../controller/user.controller";
import { protect_user } from "../middleware/verifyToken";

const router = express.Router();

router.get("/info", protect_user, getUserInfo);

export default router;
