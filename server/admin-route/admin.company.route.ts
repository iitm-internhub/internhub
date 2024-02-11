import express from "express";
import {
  createCompanyDetails,
  getAllCompanies,
} from "../admin-controller/admin.company";
import protect_admin from "../middleware/verifyToken";

const router = express.Router();

router.post("/create", protect_admin, createCompanyDetails);
router.get("/get", protect_admin, getAllCompanies);

export default router;
