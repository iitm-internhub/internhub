import express from "express";
import {
  createEventDetails,
  deleteEvent,
  getAllEvents,
} from "../admin-controller/admin.event";
import { protect_admin } from "../middleware/verifyToken";

const router = express.Router();

router.post("/create", protect_admin, createEventDetails);
router.get("/get", protect_admin, getAllEvents);
router.delete("/delete/:eventID", protect_admin, deleteEvent);

export default router;
