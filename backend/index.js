const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt")
const cors = require("cors");
const user = require("./db/database");
const mongoose = require("mongoose");


app.use(cors());

app.use(express.json());
app.post("/Signup",async(req,res) =>{
    
    const hash = await bcrypt.hash(req.body.password, 10);
    
    
    const user1 = await user.create({
    
        // Store hash in your password DB.
       

            username : req.body.username,
            password:hash,
             Email : req.body.Email  




   
    });
    
    
    console.log(user1);

});
app.get("/",(req,res)=>{

                res.send("yo");


})
app.post("/login",async(req,res) =>{

        const b =await user.findOne({username : req.body.username});
        if(!b){

                return res.send({bozo: false});

        }
        bcrypt.compare(req.body.password,b.password,(err,result) => {
                        if(result) {
                            return res.send({bozo:true});
                        }
                        else{
                            return res.send({bozo:false});
                        }
                                           

        })


})



app.listen(3000,()=>{
            console.log("port is running")


})