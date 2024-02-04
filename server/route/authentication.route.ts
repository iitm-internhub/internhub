import { Router } from "express";
import { Signup } from "../controller/authentication.controller";

const router: Router = Router();

router.post("/signup", Signup);

export default router;
