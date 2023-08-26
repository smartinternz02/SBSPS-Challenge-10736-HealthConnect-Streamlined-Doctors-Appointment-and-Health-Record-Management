import mongoose, { Schema } from "mongoose";

const AppointmentSchema = new mongoose.Schema(
  {
    patient: {
      type: Schema.ObjectId,
    },
    user: {
      type: Schema.ObjectId,
    },
    dateTime: {
      type: Date,
    },
    status: {
      type: String,
      default: "pending",
    },
    reason: {
      type: String,
    },
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

const AppointmentModal = mongoose.model("Appointment", AppointmentSchema);

export { AppointmentModal };
