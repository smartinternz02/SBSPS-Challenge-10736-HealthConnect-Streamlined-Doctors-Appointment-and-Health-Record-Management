import mongoose from "mongoose";

const PatientSchema = new mongoose.Schema(
  {
    username: String,
    bloodGroup: String,
    gender: String,
    reason: String,
    contact: String,
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
      },
    },
  }
);

const Patientmodel = mongoose.model("Patient", PatientSchema);

export { Patientmodel };
