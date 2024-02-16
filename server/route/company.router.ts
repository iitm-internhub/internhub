import express from "express";
import { getAllCompanies } from "../admin-controller/admin.company";
const router = express.Router();
router.get("/all", getAllCompanies);
export default router;
