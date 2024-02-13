import express from "express";
import { getAllPodcasts } from "../controller/podcasts.controller";

const router = express.Router();

router.get("/all", getAllPodcasts);

export default router;
