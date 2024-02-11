import { Request, Response } from "express";
import { handleError } from "../error/handleError";
import Company, { companySchemaInterface } from "../model/company.model";

const createCompanyDetails = async (req: Request, res: Response) => {
  try {
    const {
      companyName,
      companyDescription,
      companyJobTitle,
      companyJobDescription,
      companyJobType,
      companyJobDate,
      companyLocation,
      companyJobRegistrationLink,
      companyImageIds,
      companyBannerID
    }: companySchemaInterface = req.body;

    console.log(req.body);

    if (
        !companyName||
        !companyDescription||
        !companyJobTitle||
        !companyJobDescription||
        !companyJobType||
        !companyJobDate||
        !companyLocation||
        !companyJobRegistrationLink||
        !companyImageIds||
        !companyBannerID
    ) {
      console.log(
        companyName,
        companyDescription,
        companyJobTitle,
        companyJobDescription,
        companyJobType,
        companyJobDate,
        companyLocation,
        companyJobRegistrationLink,
        companyImageIds,
        companyBannerID
      );

      return res.status(400).json({
        success: false,
        message: "please provide all the details",
      });
    }

    const newCompany = new Company({
        companyName,
        companyDescription,
        companyJobTitle,
        companyJobDescription,
        companyJobType,
        companyJobDate,
        companyLocation,
        companyJobRegistrationLink,
        companyImageIds,
        companyBannerID
    });

    const companyCreated = await newCompany.save();

    if (Object.keys(companyCreated).length === 0) {
      return res.status(500).json({
        success: false,
        message: "some went wrong",
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

const getAllCompanies = async (req: Request, res: Response) => {
  try {
    const companies = await Company.find({});

    return res.status(200).json({
      sucess: true,
      message: "all companys fetched successfully",
      companies,
    });
  } catch (err) {
    handleError(err, res);
  }
};

export { createCompanyDetails, getAllCompanies };
