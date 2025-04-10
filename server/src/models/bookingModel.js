const mongoose = require("mongoose");

const schema = mongoose.Schema;
const bookingSchema = new schema({
  buissnessId: { type: mongoose.Types.ObjectId, ref: "buissness_tb" },
  userId: { type: mongoose.Types.ObjectId, ref: "user_tb" },
  date: { type: String },
  title: { type: String },
  jobtype: { type: String },
  description: { type: String },
  status: { type: String },
});
const bookingModel = mongoose.model("booking_tb", bookingSchema);
module.exports = bookingModel;
