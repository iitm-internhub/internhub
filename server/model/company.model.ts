import mongoose, { Schema } from "mongoose";

export interface companySchemaInterface {
  companyName: string;
  companyDescription: string;
  companyJobTitle:string;
  companyJobDescription:string;
  companyJobType:string;
  companyJobDate: Date;
  companyLocation: string;
  companyImageIds: Array<string>;
  companyBannerID:string;
  companyJobRegistrationLink:string;
}

const companySchema: Schema = new mongoose.Schema(
  {
    companyName: { type: String, min: 4, required: true },
    companyDescription: { type: String, min: 20, required: true },
    companyJobTitle:{type: String, min: 4, required: true},
    companyJobDescription:{type: String, min: 4, required: true},
    companyJobType:{type: String, min: 4, required: true},
    companyJobDate: { type: Date, required: true },
    companyLocation: { type: String, required: true },
    companyJobRegistrationLink: { type: String, required: true },
    companyImageIds: { type: Array<String>, required: true },
    companyBannerID:{type: String, min: 4, required: true},
  },
  {
    timestamps: true,
  }
);

const Company = mongoose.model("company", companySchema);
export default Company;
