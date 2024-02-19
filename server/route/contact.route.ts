import express from "express";
import { createEnquiry } from "../controller/contact.controller";

const router = express.Router();

router.post("/enquiry", createEnquiry);

export default router;
