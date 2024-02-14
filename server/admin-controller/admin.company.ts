import { Request, Response } from "express";
import { handleError } from "../error/handleError";
import Company, { companySchemaInterface } from "../model/company.model";

import nodeCache from "node-cache";

const cache = new nodeCache();

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
      companyLogo,
      companyBanner,
    }: companySchemaInterface = req.body;

    if (
      !companyName ||
      !companyDescription ||
      !companyJobTitle ||
      !companyJobDescription ||
      !companyJobType ||
      !companyJobDate ||
      !companyLocation ||
      !companyJobRegistrationLink ||
      !companyLogo ||
      !companyBanner
    ) {
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
      companyLogo,
      companyBanner,
    });

    const companyCreated = await newCompany.save();

    if (cache.has("company")) {
      cache.del("company");
    }

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