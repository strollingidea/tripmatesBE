const mongoose = require("mongoose");

const tripSchema = new mongoose.Schema(
  {
    destination: {
      type: String,
      required: true,
      trim: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    tripmates: [
      {
        name: { type: String, required: true },
        email: { type: String, required: true },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Trip", tripSchema);
