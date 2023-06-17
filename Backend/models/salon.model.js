let mongoose = require("mongoose");

let salonSchema = mongoose.Schema({
  image: { type: String },
  name: { type: String, required: true, unique: true },
  address: { type: String, required: true },
  contact: { type: Number, required: true },
  city: { type: String, required: true },
  services: {
    Hair: [
      {
        name: { type: String },
        desc: { type: String },
        price: { type: String },
        time: { type: String },
      },
    ],
    Face: [
      {
        name: { type: String },
        desc: { type: String },
        price: { type: String },
        time: { type: String },
      },
    ],
    Body: [
      {
        name: { type: String },
        desc: { type: String },
        price: { type: String },
        time: { type: String },
      },
    ],
  },
});

let SalonModel = mongoose.model("salon", salonSchema);

module.exports = { SalonModel };
