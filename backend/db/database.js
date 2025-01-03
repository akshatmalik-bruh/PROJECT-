const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/userSignupinfo");
 const userSchema = mongoose.Schema({

          username : String,
        Email : String,
        password : String,
        data: [
          {
              dataid: { type: mongoose.Schema.Types.ObjectId, ref: "UserData" },
          },

        
        ]



 })
 const userModel = mongoose.model("userSchema",userSchema);
 
 module.exports = userModel;