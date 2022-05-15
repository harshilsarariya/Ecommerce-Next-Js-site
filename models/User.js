const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, uninque: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

mongoose.model = {};
export default mongoose.model("User", UserSchema);
