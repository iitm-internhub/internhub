import express from "express";
import { verifyUser } from "../controller/verification.controller";

const router = express.Router();

router.post("/mail-verification", verifyUser);

export default router;
