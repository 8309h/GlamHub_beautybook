let mongoose = require("mongoose");

let salonSchema = mongoose.Schema(
    {
    image:{type:String},
    name: { type: String, required: true , unique: true},
    address: { type: String , required:true},
    contact: { type: Number,required:true},
    city: { type: String,required:true},
    services: {
        Hair:[],
        Face:[],
        Body:[]
    }
  }
);

let SalonModel = mongoose.model("salon", salonSchema);

module.exports ={SalonModel};