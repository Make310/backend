const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, max: 60 },
    email: { type: String, required: true, unique: true, max: 60 },
    password: { type: String, required: true, max: 40 },
    isAdmin: { type: Boolean, required: true, default: false },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("users", UsersSchema);
