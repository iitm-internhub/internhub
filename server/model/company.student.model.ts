import mongoose, { Schema } from "mongoose";

export interface companyStudentSchemaInterface {
    companyName: string,
    CompanyEventConductDate: Date,
    companyEventConductType: string,
    companyTotalStudentRegistered:number ,
    companyTotalStudentAttended: number,
    companyTotalStudentAccepted: number,
}

const companyStudentSchema: Schema = new mongoose.Schema(
  {
   companyName: {type: String,min:4,required: true},
    CompanyEventConductDate:{type: Date,min:4,required: true},
    companyEventConductType: {type: String,min:4,required: true},
    companyTotalStudentRegistered:{type: Number,min:1,required: true} ,
    companyTotalStudentAttended: {type: Number,min:1,required: true},
    companyTotalStudentAccepted: {type: Number,min:1,required: true},
  },
  {
    timestamps: true,
  }
);

const CompanyStudent = mongoose.model("companyStudentData", companyStudentSchema);
export default CompanyStudent;
