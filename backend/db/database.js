const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/userSignupinfo");
 const userSchema = mongoose.Schema({

          username : String,
        Email : String,
        password : String,




 })
 const userModel = mongoose.model("userSchema",userSchema);
 
 module.exports = userModel;