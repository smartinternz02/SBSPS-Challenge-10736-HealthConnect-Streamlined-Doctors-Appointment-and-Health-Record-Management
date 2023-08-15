import mongoose from "mongoose";
const tokenSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  token_type: {
    type: String,
  },
  token_value: {
    type: String,
  },
  expiration: {
    type: Date,
  },
});

const Token = mongoose.model("Token", tokenSchema);
export { Token };
