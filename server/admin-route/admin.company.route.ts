import express from "express";
import {
  createCompanyDetails,
  deleteCompany,
  getAllCompanies,
} from "../admin-controller/admin.company";
import { protect_admin } from "../middleware/verifyToken";

const router = express.Router();

router.post("/create", protect_admin, createCompanyDetails);
router.get("/get", protect_admin, getAllCompanies);
router.delete("/delete/:companyID", protect_admin, deleteCompany);

export default router;
