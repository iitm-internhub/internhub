import express from "express";
import {
  createPodcastDetails,
  getAllPodcasts,
} from "../admin-controller/admin.podcast";
import protect_admin from "../middleware/verifyToken";

const router = express.Router();

router.post("/create", protect_admin, createPodcastDetails);
router.get("/get", protect_admin, getAllPodcasts);

export default router;
