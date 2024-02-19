import express from "express";
import { getAllCompanies } from "../controller/company.controller";
const router = express.Router();
router.get("/all", getAllCompanies);
export default router;
