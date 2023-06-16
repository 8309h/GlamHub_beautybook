const { SalonModel } = require("../models/salon.model");

// Creating a new salon
const registerNewSalon = async (req, res) => {
    try {
      const { name , address , contact , city , services } = req.body;
      const isSalonPresent = await SalonModel.findOne({ name });
  
    //   all fields presence check
      if (!name || !address || !contact || !city || !services) {
        return res.status(400).send({ msg: "All feilds are required" });
      }
  
      // Salon already present in database.
      if (isSalonPresent) {
        return res
          .status(400)
          .send({ msg: "Salon already parterned with us!" });
      }
  
      const newSalon = new SalonModel({name,address,contact,city,services});
      await newSalon.save();
      res.status(200).send({ msg: "Salon registration successful"});
    } catch (error) {
      console.log(error)
      res.status(500).send({ error: "Salon registration failed", msg: error.message });

    }
  };

//Reading all salons
const getAllSalon = async (req,res)=>{
    let {name}=req.body;
    
    try {
        if(name){
            const salonInfo= await SalonModel.find({name: { $regex: new RegExp(`.*${name}.*`, 'i') } })
            return res.send(salonInfo)
        }else{
            const salonInfo= await SalonModel.find()
            return res.send(salonInfo)
        }
    } catch (error) {
        res.status(400).send({msg:"couldn't retrive data"})
    }
}

//Update a salon's details
const updateSalonDetails = async (req,res)=>{
    let {name}=req.body

    try {
        const salonInfo= await SalonModel.findOneAndUpdate({name},{...req.body})
        res.send("Updated the details successfully!")
    } catch (error) {
        res.status(400).send({msg:"couldn't retrive data"})
    }
}


module.exports={registerNewSalon,getAllSalon,updateSalonDetails};