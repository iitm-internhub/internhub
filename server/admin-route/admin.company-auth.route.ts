import express from "express";
import { Login } from "../admin-controller/admin.company-auth";
import { admin_login_limiter } from "../middleware/rateLimiters";

const router = express.Router();

router.post("/login", admin_login_limiter, Login);

export default router;
