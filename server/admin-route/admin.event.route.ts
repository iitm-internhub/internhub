import express from "express";
import {
  createEventDetails,
  getAllEvents,
} from "../admin-controller/admin.event";
import { protect_admin } from "../middleware/verifyToken";

const router = express.Router();

router.post("/create", protect_admin, createEventDetails);
router.get("/get", protect_admin, getAllEvents);

export default router;
