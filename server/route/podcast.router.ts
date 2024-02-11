import express from "express";
import { getAllPodcasts } from "../admin-controller/admin.podcast";

const router = express.Router();

router.get("/all", getAllPodcasts);

export default router;
