import mongoose from "mongoose";

const userRoleModel = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  role_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Role",
  },
});

const UserRole = mongoose.model("UserRole", userRoleModel);
export { UserRole };
