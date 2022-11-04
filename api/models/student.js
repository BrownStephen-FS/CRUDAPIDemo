const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  class: {
    type: String,
    required: true,
  },
  created_at: {
    type: String,
    required: true,
    default: Date.now,
  },
});

module.exports = mongoose.model("Student", studentSchema);