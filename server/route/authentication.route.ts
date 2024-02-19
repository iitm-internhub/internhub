import { Router } from "express";
import { Login, Signup } from "../controller/authentication.controller";
import { user_login_limiter } from "../middleware/rateLimiters";

const router: Router = Router();

router.post("/signup", user_login_limiter, Signup);
router.post("/login", user_login_limiter, Login);

export default router;
