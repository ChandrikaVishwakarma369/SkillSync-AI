const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username : {
        type : String ,
        required : true ,
        unique : [true, "This username is already exists..."]
    },
    email : {
        type : String ,
        required : true ,
        unique : [true, "This mail address is already sync with another account..."]
    },
    password : {
        type : String ,
        required : true
    }
})

const userModel = mongoose.model("users", userSchema) 

module.exports = userModel;