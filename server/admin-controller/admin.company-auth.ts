import { Request, Response } from "express";
import { handleError } from "../error/handleError";
import Admin from "../model/admin.model";
import { generateAdminToken } from "../utils/generateToken";
import CompanyStudent, { companyStudentSchemaInterface } from "../model/company.student.model";
const Login = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const admin = await Admin.findOne({ username: username });

    if (admin === null || Object.keys(admin).length === 0) {
      return res.status(404).json({
        success: false,
        message: "no admin found with provided username",
      });
    }

    const isAuthenticated = admin.password === password;
    if (isAuthenticated) {
      const token = await generateAdminToken(admin._id, res);

      return res.status(200).json({
        success: true,
        message: `logged in as ${admin.username}`,
        authToken: token,
      });
    }

    return res.status(401).json({
      success: false,
      message: "unauthorized: wrong credentials",
    });
  } catch (err) {
    handleError(err, res);
  }
};
const createCompanyStudentDetails = async (req: Request, res: Response) => {
  try {
    const {
      companyName,
      CompanyEventConductDate,
      companyEventConductType,
      companyTotalStudentRegistered ,
      companyTotalStudentAttended,
      companyTotalStudentAccepted,
    }: companyStudentSchemaInterface = req.body;

    if (
      !companyName||
      !CompanyEventConductDate||
      !companyEventConductType||
      !companyTotalStudentRegistered ||
      !companyTotalStudentAttended||
      !companyTotalStudentAccepted
    ) {
      return res.status(400).json({
        success: false,
        message: "please provide all the details",
      });
    }

    const newCompany = new CompanyStudent({
      companyName,
      CompanyEventConductDate,
      companyEventConductType,
      companyTotalStudentRegistered ,
      companyTotalStudentAttended,
      companyTotalStudentAccepted,
    });

    const companyCreated = await newCompany.save();

   

    if (Object.keys(companyCreated).length === 0) {
      return res.status(500).json({
        success: false,
        message: "something went wrong",
      });
    }

    return res.status(201).json({
      success: true,
      message: "company created successfully",
      company: companyCreated,
    });
  } catch (err) {
    console.log("error while uploading companys");
    handleError(err, res);
  }
};
export { Login, createCompanyStudentDetails};
