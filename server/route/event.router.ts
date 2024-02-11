import express from "express";
import { getAllEvents } from "../controller/events.comtroller";
const router=express.Router();
router.get('/all',getAllEvents)
export default router;