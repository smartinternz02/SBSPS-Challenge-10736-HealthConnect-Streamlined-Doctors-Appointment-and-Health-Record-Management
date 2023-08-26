import mongoose from "mongoose";

const Userschema = new mongoose.Schema(
  {
    username: String,
    email: String,
    userid: String,
    phone: String,
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

const UserModel = mongoose.model("User", Userschema);

export { UserModel };
