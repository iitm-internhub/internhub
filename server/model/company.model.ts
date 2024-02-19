import mongoose, { Schema } from "mongoose";

export interface companySchemaInterface {
  companyName: string;
  companyDescription: string;
  companyJobTitle:string;
  companyJobDescription:string;
  companyJobType:string;
  companyJobDate: Date;
  companyLocation: string;
  companyLogo: string;
  companyBanner:string;
  companyJobStipend:string;
  companyJobRegistrationLink:string;
}

const companySchema: Schema = new mongoose.Schema(
  {
    companyName: { type: String, min: 4, required: true },
    companyDescription: { type: String, min: 20, required: true },
    companyJobTitle:{type: String, min: 4, required: true},
    companyJobStipend:{type: String, min: 1, required: true},
    companyJobDescription:{type: String, min: 4, required: true},
    companyJobType:{type: String, min: 4, required: true},
    companyJobDate: { type: Date, required: true },
    companyLocation: { type: String, required: true },
    companyJobRegistrationLink: { type: String, required: true },
    companyLogo: { type: String, required: true },
    companyBanner:{type: String, min: 4, required: true},
  },
  {
    timestamps: true,
  }
);

const Company = mongoose.model("company", companySchema);
export default Company;
