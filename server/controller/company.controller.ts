import { Request, Response } from "express";
import { handleError } from "../error/handleError";
import Company from "../model/company.model";

import nodeCache from "node-cache";

const cache = new nodeCache();

const getAllCompanies = async (req: Request, res: Response) => {
  try {
    if (cache.has("companies")) {
      const companies = cache.get("companies");
      return res.status(200).json({
        success: true,
        message: "companies fetched successfully",
        companies,
      });
    }
    const companies = await Company.find({});

    cache.set("companies", companies, 60);

    if (Object.keys(companies).length === 0) {
      return res.status(404).json({
        success: false,
        message: "no companies found, come back later",
      });
    }

    return res.status(200).json({
      success: true,
      message: "companies fetched successfully",
      companies,
    });
  } catch (err) {
    handleError(err, res);
  }
};

export { getAllCompanies };
