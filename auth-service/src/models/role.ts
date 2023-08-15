import mongoose from "mongoose";

const roleModel = new mongoose.Schema({
  role_name: String,
});

const Role = mongoose.model("Role", roleModel);
export { Role };
