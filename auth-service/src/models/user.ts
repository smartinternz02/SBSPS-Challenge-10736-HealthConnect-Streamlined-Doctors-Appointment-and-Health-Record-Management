import mongoose from "mongoose";
import { Password } from "../services/password-validation";

// Properties that user have:
interface UserAttrs {
  username: string;
  email: string;
  phoneNumber: string;
  password: string;
  address: mongoose.Types.ObjectId;
}

interface UserModel extends mongoose.Model<UserDoc> {
  build(attrs: UserAttrs): UserDoc;
}

interface UserDoc extends mongoose.Document {
  username: string;
  email: string;
  phoneNumber: string;
  password: string;
  address: string;
}
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phoneNumber: {
    type: String,
    required: true,
    unique: true,
    minLength: 5,
    maxLength: 20,
  },
  password: {
    type: String,
    required: true,
  },
  address: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Address",
  },
  role: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Role",
  },
});

userSchema.pre("save", async function (done) {
  console.log("hashing");
  if (this.isModified("password")) {
    const hashed = await Password.toHash(this.get("password"));
    this.set("password", hashed);
  }
  done();
});

const User = mongoose.model<UserDoc, UserModel>("User", userSchema);

// userSchema.statics.build = (attrs: UserAttrs) => {
//   return new User(attrs);
// };

const buildUser = (attrs: UserAttrs) => {
  return new User(attrs);
};
export { User, buildUser };
