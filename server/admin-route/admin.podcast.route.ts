import express from "express";
import {
  createPodcastDetails,
  deletePodcast,
  getAllPodcasts,
} from "../admin-controller/admin.podcast";
import { protect_admin } from "../middleware/verifyToken";

const router = express.Router();

router.post("/create", protect_admin, createPodcastDetails);
router.get("/get", protect_admin, getAllPodcasts);
router.delete("/delete/:podcastID", protect_admin, deletePodcast);

export default router;
