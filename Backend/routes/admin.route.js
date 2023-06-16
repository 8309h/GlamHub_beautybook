const salonRouter = require("express").Router();
const { registerNewSalon, getAllSalon, updateSalonDetails } = require("../controllers/admin.controller");

salonRouter.post("/register-salon" , registerNewSalon);

salonRouter.post("/salons" , getAllSalon);

salonRouter.post("/update-details" , updateSalonDetails)


module.exports={salonRouter}