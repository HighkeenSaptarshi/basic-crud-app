const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
});

const User = mongoose.model("USER", userSchema);
module.exports = User;