import mongoose from "mongoose";

const HospitalSchema = new mongoose.Schema(
  {
    name: String,
    address: String,
    contact: String,
    type: String,
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

const HospitalModel = mongoose.model("Hospital", HospitalSchema);

export { HospitalModel };
