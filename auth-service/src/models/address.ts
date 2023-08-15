import mongoose from "mongoose";

export interface AddressAttr {
  address: string;
  area: string;
  city: string;
  state: string;
  country: string;
  pincode: number;
}

const addressSchema = new mongoose.Schema({
  address: {
    type: String,
    required: true,
  },
  area: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  pincode: { type: Number, required: true },
});

const Address = mongoose.model("Address", addressSchema);
export { Address };
