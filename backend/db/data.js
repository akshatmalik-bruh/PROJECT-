const mongoose = require("mongoose");
const userData = mongoose.Schema({

            start : String,
            end : String,
            userid : {
                type: mongoose.Schema.Types.ObjectId,
                   ref: "userSchema"  


            }
}) 
module.exports = userData;